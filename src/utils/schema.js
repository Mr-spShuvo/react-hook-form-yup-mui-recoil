import * as yup from 'yup';
import { passwordRegExp, phoneRegExp } from './helper';

export const defaultValues = {
  fullName: '',
  email: '',
  country: '',
  mobile: '',
  password: '',
  confirmPassword: '',
  privacy: false
};

export const registrationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Email must be a valid email').required('Email is required'),
  mobile: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Mobile Phone is required'),
  country: yup.string().required('Country is required'),
  password: yup
    .string()
    .matches(
      passwordRegExp,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    )
    .required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Password must match'),
  privacy: yup.bool().oneOf([true], 'Field must be checked')
});
