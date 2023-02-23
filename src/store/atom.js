import { atom } from 'recoil';

export const registrationFormState = atom({
  key: 'ATOM_RegistrationFormState',
  default: {
    fullName: '',
    email: '',
    country: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    privacy: false
  }
});
