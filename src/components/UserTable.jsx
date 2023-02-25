import React from 'react'
import DataTable from './DataTable'
import { useEffect, useState } from 'react';


  
  const columns = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'User name', width: 150 },
    { field: 'email', headerName: 'e-mail', width: 150 },
    { field: 'website', headerName: 'WeB SiTe', width: 150 },
  ];

  const userTableStyle = {
    height: 400,
    width: '100%'
  }

export const UserTable = ({onError}) => {

    const [users, setUsers] = useState([])
   
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch(() => onError())
        
    }, []);
  return (
    <DataTable
        rows={users}
        columns={columns}
        loading={!users.length}
        sx={userTableStyle}
    />
  )
}
