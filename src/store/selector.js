import { selector } from 'recoil';
import _ from 'lodash';
import { registrationFormState } from './atom';

export const registrationFormAPIData = selector({
  key: 'SELECTOR_RegistrationFormAPIData',
  get: ({ get }) => {
    const data = get(registrationFormState);
    const updatedData = _.omit(data, 'privacy');
    return updatedData;
  }
});
