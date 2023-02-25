import React from 'react'
import BasicModal from './BasicModal'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useEffect, useState } from 'react'



export const NewUserModal = ({ open, onCLose, addNewUser }) => {

    const defaultValues = {
        userId: '',
        email: '',
        phoneNumber: ''
    }

    // const getContent = () => {
    //     <Box>
    //         {/* <TextField
    //             placeholder='User ID'
    //             name='User ID'
    //             label='User ID'
    //         /> */}
    //         {/* <Input placeholder='E-mail' />
    //         <Input placeholder='Phone number' />
    //         <Input placeholder='User id' /> */}
    //     </Box>
    // }

    const [value, setValue] = useState(defaultValues)

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;


    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required('user ID is required')
            .min(6, 'user need a 6 characters min'),
        email: Yup.string()
            .required('e-mail is required')
            .email('invalid e-mail'),
        phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    })

    // const handleSubmit = (data) => {
    //     console.log(data)
    // }

    const addUser = (data) => {
      //  console.log(data)
     //   setValue(defaultValues)
     addNewUser(data)
    }

    const handleOnChange = (value) => {
        setValue(value)
    }

    // useEffect ( () => {
    //     if(open) {setValue(defaultValues)};
    // }, [open]) 

    useEffect(() => {
       // console.log(value)
        if (open) setValue(defaultValues)
    }, [open])

    const getContent = () => (
        <Box>
            <TextField
                placeholder='user'
                name='user'
                label='add user'
                required
                {...register('userId')}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                value={value.userId}
                onChange= {(e) => handleOnChange({...value, userId: e.target.value})}

            // error
            // helperText='user invalid'

            />
            <TextField
                placeholder='E-mail'
                name='E-mail'
                label='add E-mail'
                required
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                value={value.email}
                onChange= {(e) => handleOnChange({...value, email: e.target.value})}


            // error
            // helperText='user invalid'

            />
            <TextField
                placeholder='phoneNumber'
                name='phoneNumber'
                label='add phoneNumber'
                required
                {...register('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message}
                value={value.phoneNumber}
                onChange= {(e) => handleOnChange({...value, phoneNumber: e.target.value})}


            // error
            // helperText='user invalid'

            />
        </Box>
    )

    return (
        <BasicModal
            open={open}
            onCLose={onCLose}
            title="new user"
            subTitle={"hola subtitulos de creacion de nuevo usuario"}
            validate={handleSubmit(addUser)}
            content={getContent()}
        >

        </BasicModal>

    )
}
