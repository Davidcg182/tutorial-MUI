import React from 'react'
import { Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({placeholder, onChange}) => {
  return (
    <div>
        <SearchIcon/>
        <Input
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  )
}
