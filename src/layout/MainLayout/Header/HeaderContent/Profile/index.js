import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import Web3 from 'web3';

// material-ui
import {
  Box,
  ButtonBase,
  Stack,
  Typography
} from '@mui/material';

// tab panel wrapper
function TabPanel({ children, value, index, ...other }) {
  return (
    <div role="tabpanel" hidden={value !== index} id={`profile-tabpanel-${index}`} aria-labelledby={`profile-tab-${index}`} {...other}>
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};


// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {



  const anchorRef = useRef(null);
  // const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  console.log(message)
  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const address = accounts[0];
        setMessage(`Wallet connected. Address: ${address}`);
      } catch (error) {
        setMessage('Error connecting to wallet.');
        console.error('Error connecting to wallet:', error);
      }
    } else {
      setMessage('MetaMask not detected. Please install MetaMask extension.');
    }
  };

  const iconBackColorOpen = 'grey.300';

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.70,
          bgcolor: open ? iconBackColorOpen : 'transparent',
          backgroundColor:'#3eb83e',
          color:'#fff',
          borderRadius: 1,
          '&:hover': { bgcolor: '#3eb83e' }
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? 'profile-grow' : undefined}
        aria-haspopup="true"
        onClick={connectWallet}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography variant="subtitle1">MetaMask Wallet </Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default Profile;
