import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, InputAdornment, Typography } from '@mui/material';
import { STTextField } from '../common/STTextField';
import { STSelectField } from '../common/STSelectField';
import { STCheckbox } from '../common/STCheckbox';
import { registrationSchema } from '../utils/schema';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { registrationFormState } from '../store/atom';
import { registrationFormAPIData } from '../store/selector';

export const RegistrationForm = () => {
  const [registrationData, setRegistrationData] = useRecoilState(registrationFormState);
  const formattedData = useRecoilValue(registrationFormAPIData);
  const [listCountry, setListCountry] = useState([]);
  const countryNames = listCountry.map(item => item.name.common).sort();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setListCountry(data));
  }, []);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    defaultValues: registrationData,
    resolver: yupResolver(registrationSchema)
  });

  const onSubmit = data => {
    if (JSON.stringify(errors) !== '{}') return;
    console.log('🚀', formattedData);
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) => setRegistrationData(value));
    return () => subscription.unsubscribe();
    // eslint-disable-next-line
  }, [watch]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mt: '4rem',
        alignItems: 'center'
      }}
    >
      <Typography component="h1">Sign up</Typography>
      <Box sx={{ width: '100%', mt: '2rem' }}>
        <STTextField name="fullName" label="Full Name" errors={errors} control={control} />
        <STTextField errors={errors} control={control} name="email" label="Email" />
        <STTextField
          errors={errors}
          control={control}
          name="mobile"
          label="Mobile Phone"
          inputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
            type: 'number'
          }}
        />
        <STSelectField
          name="country"
          label="Country"
          list={countryNames}
          control={control}
          errors={errors}
        />
        <STTextField
          name="password"
          label="Password"
          type="password"
          errors={errors}
          control={control}
        />
        <STTextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          errors={errors}
          control={control}
        />
        <STCheckbox errors={errors} control={control} name="privacy" />
        <Button
          onClick={handleSubmit(onSubmit)}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};
