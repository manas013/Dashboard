import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const IncomeAreaChart = ({ slot }) => {
  const theme = useTheme();
  // const { secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState({
    chart: {
      height: 450,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    grid: {
      strokeDashArray: 0,
      borderColor: line
    },
    xaxis: {
      categories: [], // Will be populated with nation names
      labels: {
        style: {
          colors: Array(12).fill('#fff')
        }
      },
      axisBorder: {
        show: true,
        color: line
      },
      tickAmount: slot === 'month' ? 11 : 7
    },
    yaxis: {
      labels: {
        style: {
          colors: ['#fff']
        }
      }
    },
    tooltip: {
      theme: 'light'
    }
  });

  const [series, setSeries] = useState([
    {
      name: 'Population',
      data: [] // Will be populated with population values
    }
  ]);

  useEffect(() => {
    axios
      .get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then(response => {
        const populationData = response.data.data;
        const nations = populationData.map(item => item.Nation);
        const populations = populationData.map(item => item.Population);
        
        setOptions(prevState => ({
          ...prevState,
          xaxis: {
            ...prevState.xaxis,
            categories: nations
          }
        }));

        setSeries([{ name: 'Population', data: populations }]);
      })
      .catch(error => {
        console.error('Error fetching population data:', error);
      });
  }, []);

  return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

IncomeAreaChart.propTypes = {
  slot: PropTypes.string
};

export default IncomeAreaChart;
