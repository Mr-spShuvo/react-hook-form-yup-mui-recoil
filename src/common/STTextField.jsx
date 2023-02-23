import { FormControl, FormHelperText, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const STTextField = ({ label, inputProps, control, name, errors }) => {
  console.log();
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            error={!!errors[name]}
            required
            label={label}
            variant="filled"
            InputProps={inputProps}
          />
        )}
      />
      {errors[name] && <FormHelperText error>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
};
