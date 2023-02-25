import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './const/NavBarItems';

import { useNavigate } from 'react-router-dom';



export const NavBar = () => {

    const drawerWidth = 240
    const navigate = useNavigate()

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#101f33',
                    color: 'white'
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Divider />
            <List>
                {mainNavbarItems.map((e) => (
                    <ListItem key={e.id} disablePadding onClick={() => navigate(e.route) }>
                        <ListItemButton>
                            <ListItemIcon sx={{ color: 'white' }}>
                                {e.icon}
                            </ListItemIcon>
                            <ListItemText primary={e.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}
