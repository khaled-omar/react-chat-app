import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Container,
    TextField,
    Typography
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {forgetPasswordSchema} from "../validations/schema";
import {useMutation} from "@tanstack/react-query";
import UserService from "../services/UserService";
import {toast} from "material-react-toastify";


function ForgetPassword() {
    const {
        register,
        formState: {errors, isSubmitting},
        handleSubmit
    } = useForm({resolver: yupResolver(forgetPasswordSchema)})

    const onSubmit = async (data) => {
        data['g-recaptcha-response'] = 'abcd';
        await UserService.forgetPassword(data)
    }
    return (<Container maxWidth="sm">
        <Box
            sx={{
                mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
            <Avatar sx={{m: 1, backgroundColor: 'primary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Forget your password!
            </Typography>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{mt: 1, width: '100%'}}>
                <TextField
                    {...register('email')}
                    margin="normal"
                    fullWidth
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <Typography variant="overline" sx={{color: 'error.main'}}>{errors.email?.message}</Typography>
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 1, width: '100%'}}
                >
                    {isSubmitting ? 'Submitting ...' : 'Sign In'}
                </Button>
            </Box>
        </Box>
    </Container>)
}

export default ForgetPassword
