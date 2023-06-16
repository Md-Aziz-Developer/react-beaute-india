import { Button, Input } from 'components/forms';
import { Field, FormikProvider, useFormik } from 'formik';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'store/auth/actions';
import { API_ENDPOINTS, request } from 'utilities';
import notification from 'utilities/notification';

const UserLoginForm = () => {
    const [user, setUser] = useState({ email: null, otp: null })
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: (values) => {
            setUser({ ...user, ...values })
            request.post(API_ENDPOINTS.AUTH.REGISTER, values)
                .then(response => {
                    notification('success', response?.message)
                })
        }
    })

    const otp = useFormik({
        initialValues: user,
        onSubmit: (values) => {
            const payload = { email: user?.email, otp: values?.otp }
            dispatch(login(API_ENDPOINTS.AUTH.LOGIN, payload))
                .then(response => {
                    notification('success', response?.message)
                })
        }
    })

    return (
        <Fragment>
            <FormikProvider value={formik}>
                <form className="checkout-form" onSubmit={formik.handleSubmit}>
                    <Field
                        label='Email'
                        type='email'
                        name='email'
                        icon={() => <i className="name-icon" />}
                        variant='2'
                        component={Input}
                    />
                    <Button type='submit' className='btn btn-primary' label='Send OTP' />

                </form>
            </FormikProvider>

            <FormikProvider value={otp}>
                <form className="checkout-form" onSubmit={otp.handleSubmit}>
                    <Field
                        label='Enter OTP'
                        type='text'
                        name='otp'
                        icon={() => <i className="name-icon" />}
                        variant='2'
                        component={Input}
                    />
                    <Button type='submit' className='btn btn-primary' label='Login Now' />

                </form>
            </FormikProvider>
        </Fragment>
    )
}

export default UserLoginForm