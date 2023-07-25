import * as Yup from 'yup'

export const SchemaForm = Yup.object({
    name:Yup.string().min(3).max(20).required('Name Is Must'),
    email:Yup.string().email().required('Email Valid'),
    age:Yup.number().min(10).max(50).required('Age Is Must'),
    pass:Yup.string().required('Password Is Must'),
})