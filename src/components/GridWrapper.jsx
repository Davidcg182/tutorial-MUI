import React from 'react'
import Grid from '@mui/material/Grid';
//import { gridWrapperStyles } from './styles';

const GridWrapper = ({ children }) => {

    return (
        <Grid item>
            {children}
        </Grid>
    )
}

export default GridWrapper