import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
//import { Input } from '@mui/material';
import CommonButton from './CommonButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function BasicModal({open, onCLose, title, subTitle, content, validate}) {
    return (
        <Modal open={open} onClose={onCLose} >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {subTitle}
                </Typography>
                {content}

                <CommonButton
                    variant={'content'}
                    onClick={validate}
                >
                    submit
                </CommonButton>
                <CommonButton onClick={onCLose}>Cancel</CommonButton>

                
            </Box>
            {/* <Box>
                <Input placeholder='E-mail'/>
                <Input placeholder='Phone number'/>
                <Input placeholder='User id'/>
            </Box> */}

            {/* <Box>
                <CommonButton
                    variant={'content'}
                    onClick={validate}
                >
                    submit
                </CommonButton>
            </Box> */}
        </Modal>
    )
}

export default BasicModal