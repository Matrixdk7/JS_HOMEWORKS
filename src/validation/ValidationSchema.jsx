import * as yup from 'yup';

const userSchema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters'),
    username: yup.string()
        .required('Username is required'),
    email: yup.string()
        .email('Invalid email')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone is required')
        .matches(/^[0-9+\-\s()]+$/, 'Invalid phone number'),
    website: yup.string()
        .url('Invalid URL')
        .required('Website is required'),
    city: yup.string()
        .required('City is required'),
    street: yup.string()
        .required('Street is required'),
    companyName: yup.string()
        .required('Company name is required')
});

export default userSchema;