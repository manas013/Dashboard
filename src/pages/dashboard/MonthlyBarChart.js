import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const pieChartOptions = {
  chart: {
    type: 'pie',
    height: 365,
  },
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  tooltip: {
    theme: 'light',
  },
};

const MonthlyPieChart = () => {
  const theme = useTheme();
  const { info, secondary } = theme.palette;

  const [series, setSeries] = useState([80, 95, 70, 42, 65, 55, 78]);
  console.log(setSeries)
  const [options, setOptions] = useState(pieChartOptions);

  useEffect(() => {
    setOptions(prevState => ({
      ...prevState,
      colors: [info.light, info.main, info.dark, secondary.light, secondary.main, secondary.dark, secondary.dark],
    }));
  }, [info, secondary]);

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="pie" height={365} />
    </div>
  );
};

export default MonthlyPieChart;
