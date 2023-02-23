import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material';
import { Controller } from 'react-hook-form';

export const STCheckbox = ({ name, errors, control }) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} required />}
            label="I Agree to MyApp Terms and Privacy Policy"
          />
        )}
      />
      {errors[name] && <FormHelperText error>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
};
