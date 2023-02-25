import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

const DataTable = ({ rows, columns, loading, sx }) => {

  // const columns = [
  //     { field: 'firstName', headerName: 'First name', width: 130 },
  //     { field: 'lastName', headerName: 'Last name', width: 130 },
  //     {
  //       field: 'fullName',
  //       headerName: 'Full name',
  //       width: 160,
  //     },
  //   ];

  //   const rows = [
  //     { id: 1, lastName: 'Snow', firstName: 'Jon' },
  //     { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
  //     { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
  //     { id: 4, lastName: 'Stark', firstName: 'Arya' },
  //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
  //   ];

  const [pageSize, setPageSize] = useState(2)
  
  return (
    // sx={{ height: 400, width: '100%' }}
    <Box>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        sx={sx}
        checkboxSelection
        pagination
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 5, 10]}
      />
    </Box>

  )
}

export default DataTable