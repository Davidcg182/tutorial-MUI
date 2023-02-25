import React from 'react'
import { Avatar, IconButton, Tooltip, Typography } from '@mui/material'
import CommonButton from './CommonButton'
import Notifications from './Notifications'
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import Box from '@mui/material/Box';
import GridWrapper from './GridWrapper';

const Header = ({ title, iconColor }) => {
    const headerStyles = {
        wrapper: {
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#009be5',
            padding: '20px',
        },
        topRow: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'end',
            alignItems: 'center',
            marginBottom: '20px',
            '*': {
                marginRight: '5px',
            },
        },
        middleRow: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            marginLeft: '320px',
        },
        link: {
            fontWeight: 500,
            color: 'rgba(255, 255, 255, 0.7)',
            "&:hover": {
                color: '#fff',
                cursor: 'pointer',
            },
        },
        webButton: {
            marginRight: '5px',
        },
    };
    return (
        <Box sx={headerStyles.wrapper} >

            <Box sx={headerStyles.topRow}>
                <Typography
                    sx={headerStyles.link}
                >
                    Go to docs
                </Typography>
                <Notifications
                    iconColor="warning"
                />
                <Avatar
                    src='data:image/jpeg;base64,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'
                />
            </Box>

            <Box
            sx={headerStyles.middleRow}>
                <Typography
                
                >
                    {title}
                </Typography>
            </Box>

            <CommonButton
            sx={headerStyles.webButton}
            variant={"default"}
            >
                Go to docs
            </CommonButton>



            <Box>
                <Tooltip title="Help">
                    <IconButton
                    sx={headerStyles.helpIcon}
                    color='secondary'
                    >
                        <ContactSupportIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    )
}

export default Header

// import React from 'react'
// import CommonButton from './CommonButton'
// import Notifications from './Notifications'
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Tooltip from '@mui/material/Tooltip';
// import HelpIcon from '@mui/icons-material/Help';
// import Box from '@mui/material/Box';

// const Header = ({ title }) => {
//     const headerStyles = {
//         wrapper: {
//             width: '100%',
//             display: 'flex',
//             flexDirection: 'column',
//             backgroundColor: '#009be5',
//             padding: '20px',
//         },
//         topRow: {
//             display: 'flex',
//             flexDirection: 'row',
//             justifyContent: 'end',
//             alignItems: 'center',
//             marginBottom: '20px',
//             '*': {
//                 marginRight: '5px',
//             },
//         },
//         middleRow: {
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             marginBottom: '20px',
//             marginLeft: '320px',
//         },
//         link: {
//             fontWeight: 500,
//             color: 'rgba(255, 255, 255, 0.7)',
//             "&:hover": {
//                 color: '#fff',
//                 cursor: 'pointer',
//             },
//         },
//         webButton: {
//             marginRight: '5px',
//         },
//     };
    
//     return (
//         <Box sx={headerStyles.wrapper}>
//             <Box sx={headerStyles.topRow}>
//                 <Typography
//                     sx={headerStyles.link}
//                 >
//                     Go to docs
//                 </Typography>
//                 <Notifications
//                     iconColor="white"
//                 />
//                 <Avatar src="https://mui.com/static/images/avatar/1.jpg" />
//             </Box>
//             <Box sx={headerStyles.middleRow}>
//                 <Typography
//                     variant="h4"
//                     color="white"
//                 >
//                     {title}
//                 </Typography>
//                 <Box>
//                     <CommonButton
//                         sx={headerStyles.webButton}
//                         variant="outlined"
//                     >
//                         Web setup
//                     </CommonButton>
//                     <Tooltip
//                         title="Help"
//                     >
//                         <IconButton
//                             color="white"
//                             sx={headerStyles.helpIcon}
//                         >
//                             <HelpIcon />
//                         </IconButton>
//                     </Tooltip>
//                 </Box>
//             </Box>
//         </Box>
//     )
// }

// export default Header