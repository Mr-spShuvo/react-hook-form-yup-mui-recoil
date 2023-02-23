import { FormControl, FormHelperText, MenuItem, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

export const STSelectField = ({ list = [], label, name, control, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: '1rem' }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            required
            error={!!errors[name]}
            select
            label={label}
            variant="filled"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {list.map(item => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
      {errors[name] && <FormHelperText>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
};
