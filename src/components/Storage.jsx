import React, { useState } from 'react'
//import Grid from '@mui/material/Grid'
import GridWrapper from './GridWrapper'
import BasicSnackbar from './BasicSnackbar'
import CommonButton from './CommonButton';
import { Box } from '@mui/system';


function Storage() {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (

    <GridWrapper >
      Storage
      <Box>
        <CommonButton variant="contained" onClick={handleClick}>
          Open success snackbar
        </CommonButton>
      </Box>
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity={'success'}
        message={'success msg'}
      />

    </GridWrapper>

  )
}

export default Storage