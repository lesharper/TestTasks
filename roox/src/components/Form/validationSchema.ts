import * as Yup from "yup";

export const schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    street: Yup.string()
        .required('Street is required'),
    city: Yup.string()
        .required('City is required'),
    zipcode: Yup.string()
        .required('Zipcode is required'),
    phone: Yup.string()
        .required('Phone is required'),
    website: Yup.string()
        .required('Website is required'),
    comment: Yup.string()
})