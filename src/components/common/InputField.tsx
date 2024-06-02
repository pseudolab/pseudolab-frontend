// ReusableInput.tsx
import React from 'react';
import { TextField, Box } from '@mui/material';

interface InputFieldProps {
  id: string;
  label: string;
  defaultValue?: string;
  rows?: number;
  fullWidth?: boolean;
  placeholder?: string;
  multiline?: boolean;
  onChange: (e: any) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  defaultValue = '',
  rows = 3,
  fullWidth = true,
  placeholder = '',
  multiline = false,
  onChange,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      marginY={2}
    >
      <TextField
        id={id}
        fullWidth={fullWidth}
        label={label}
        rows={rows}
        defaultValue={defaultValue}
        placeholder={placeholder}
        multiline={multiline}
        onChange={onChange}
      />
    </Box>
  );
};

export default InputField;