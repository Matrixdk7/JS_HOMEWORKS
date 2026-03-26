import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string()
        .min(3, 'Minimum 3 characters')
        .required('Required'),

    description: Yup.string()
        .min(10, 'Minimum 10 characters')
        .required('Required'),

    price: Yup.number()
        .typeError('Must be a number')
        .positive('Must be greater than 0')
        .required('Required'),

    discountPrice: Yup.number()
        .min(0, 'Cannot be less than 0')
        .max(Yup.ref('price'), 'Discount cannot be greater than price')
        .typeError('Must be a number'),

    category: Yup.string().required('Required'),
    brand: Yup.string().required('Required'),
    article: Yup.string().required('Required'),

    count: Yup.number()
        .min(0, 'Cannot be less than 0')
        .typeError('Must be a number'),

    mainImageUrl: Yup.string()
        .url('Invalid URL')
        .required('Required'),
});

export default validationSchema;