import React, {useState} from 'react'
//import DataTable from './DataTable'
import GridWrapper from './GridWrapper'
import { UserTable } from './UserTable'
import { BasicCard } from './BasicCard'
import BasicSnackbar from './BasicSnackbar';


function Hosting() {

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <GridWrapper>
      <BasicCard
      content={<UserTable onError={() => setOpen(true)} />}
      />
      <BasicSnackbar
        open={open}
        severity="error"
        message={'Data couldnt be fetched'}
        onClose={handleClose}
      />
    </GridWrapper>
  )
}

export default Hosting