import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function CustomDatePicker(props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
        <DatePicker
          label={props.label}
          value={props.value}
          sx={{ mb: 3 }}
          onChange={props.handleDateChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}