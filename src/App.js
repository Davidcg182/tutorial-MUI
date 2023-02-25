//import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import { NavBar } from './components/NavBar';
import Auth from './components/Auth';
import Database from './components/Database'
import Functions from './components/Functions'
import Hosting from './components/Hosting'
import MachineLearning from './components/MachineLearning';
import Storage from './components/Storage'
import { Grid } from '@mui/material';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import { Box } from '@mui/system';
import styles from './App.js'


function App() {

  const [title, setTitle] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const actualLocation = location.pathname.replace('/', ' ')
    //console.log(actualLocation)
    setTitle(actualLocation)
  }, [location])

  return (
    <Grid container>
      <NavBar />
      <Box sx={{width: 1000}}>
      <Header title={title} />
      <Routes>
          <Route path='/authentication' element={<Auth />} />
          <Route path='/database' element={<Database />} />
          <Route path='/functions' element={<Functions />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/machine-learning' element={<MachineLearning />} />
          <Route path='/storage' element={<Storage />} />
      </Routes>
      </Box>
    </Grid>
  );
}

export default App;
