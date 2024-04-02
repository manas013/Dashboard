import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

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
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
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
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography variant="subtitle1">Start Trading</Typography>
        </Stack>
      </ButtonBase>
    </Box>
  );
};

export default Profile;
