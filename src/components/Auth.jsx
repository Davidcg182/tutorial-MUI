import React from 'react'
import { IconButton, Typography } from '@mui/material'
import { BasicCard } from './BasicCard'
import { SearchBar } from './SearchBar'
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box } from '@mui/system';
import CommonButton from './CommonButton'
//import Header from './Header'
//import BasicModal from './BasicModal';
import { useState } from 'react';
import { NewUserModal } from './NewUserModal';
import GridWrapper from './GridWrapper';


function Auth() {

  // const buttonStyles = {
  //   fontSize: 20,
  //   fontWheight: 700,
  //   backgroundColor: '#ff9800',
  //   '&:hover': {
  //     backgroundColor: 'green'
  //   }
  // }

  // const buttonStyles2 = {
  //   fontSize: 20,
  //   fontWheight: 700,
  //   backgroundColor: 'transparent',
  //   '&:hover': {
  //     backgroundColor: 'transparent'
  //   }
  // }
  const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#009be5',
        padding: '20px',
    }}
    
  const cardHeaderStyles = {
    wrapper: {
      marginLeft: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: '20px',
      paddingRight: '20px',
      height: '65px',
      backgroundColor: '#f5f5f5',
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    addUserButton: {
      fontSize: '1.05rem',
    },
  }

  const [users, setUsers] = useState([]);

  const [searchResults, setSearchResults] = useState(users)

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === '') setUsers(searchResults);
    else {
        const filteredData = searchResults.filter((item) => {
            return Object.keys(item).some((key) => 
            item[key].toString().toLowerCase().includes(lowercasedValue)
            );
        });
        setUsers(filteredData)
    };
};

  const addUser = () => {
    setOpen(true)
    //console.log("click")
  }


  const getHeader = () => {
    const handleOnSearch = (value) => {
     // console.log(value)
     filterData(value)
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>

        <SearchBar
          placeholder={"email. etc"}
          onChange={(e) => handleOnSearch(e.target.value)}
          searchBarWidth='720px'
        />

        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add user
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>

      </Box>
    )

  }


  const [open, setOpen] = useState(false)

  const addNewUser = (data) => {
    //console.log(data)
    users.push({ ...data });
    setOpen(false)
  }

  const getContent = () => (
    <div>
      {
        users.length ?
          users.map((user) => (
            <Box sx={{ marginBottom: '20px' }}>
              <Typography>User ID: {user.userId}</Typography>
              <Typography>Email: {user.email}</Typography>
              <Typography>Phone Number: {user.phoneNumber}</Typography>
            </Box>
          )) :
          <Typography
            align="center"
            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem' }}
          >
            No users for this project yet
          </Typography>
      }
    </div>
  );

  // Se puede colocar una prop style en Grid para dar estilos css por ejemplo backgroundcolor
  return (
    <GridWrapper sx={headerStyles.wrapper} x>
      {/* <CommonButton
        // color={'success'}
        // size={'large'}
        sx={buttonStyles}
        variant={'contained'}
      >
        User
      </CommonButton>
      <CommonButton
        // color={'success'}
        // size={'large'}
        sx={buttonStyles2}
        variant={'outlined'}
      >
        web set-up
      </CommonButton> */}
      {/* <Header
        title={"Autentication"}
      /> */}

      <Typography>Hola auth</Typography>
      <BasicCard
        header={getHeader()}
        content={getContent()}
      />

      {/* <BasicModal
        open={open}
        onCLose={() => setOpen(false)}
        title={"add user"}
        subTitle={'please add a new user'}
      /> */}

      <NewUserModal
        open={open}
        onCLose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  )
}

export default Auth