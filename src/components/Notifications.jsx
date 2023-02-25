import React from 'react'
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from './BasicMenu';
import { useState } from 'react';



const Notifications = ({ iconColor, badgeContent }) => {

    const notifications = [
        {
            id: 0,
            label: "frist notifications"
        },
        {
            id: 1,
            label: "second notifications"
        }
    ]

    const newNotification = `you have ${notifications.length} new notifications`
    const noNotification = `you don't have new notifications`

    const [open, setOpen] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpen = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Tooltip title={notifications.length ? newNotification : noNotification} >
                <IconButton
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    anchorEl={anchorEl}    // ¿Es necesario? Revisar
                >
                    <Badge
                        badgeContent={notifications.length}
                        color={"secondary"}
                    >
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                open={open}
                menuItems={notifications}
            />
        </div>
    )
}

export default Notifications