// MultipleChoiceField.tsx
import React, { ChangeEvent, FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  FormGroup,
  Checkbox,
  TextField,
} from "@mui/material";

interface Option {
  value: string;
  label: string;
}

interface MultipleChoiceFieldProps {
  id: string;
  label: string;
  options: Option[];
  defaultValue?: string;
  fullWidth?: boolean;
  isMultipleOption?: boolean;
  isOtherOption?: boolean;
}

const MultipleChoiceField: FC<MultipleChoiceFieldProps> = ({
  id,
  label,
  options,
  defaultValue,
  fullWidth = true,
  isMultipleOption = false,
  isOtherOption = false,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(
    defaultValue ? [defaultValue] : []
  );
  const [selectedRadio, setSelectedRadio] = useState<string>(
    defaultValue || ""
  );

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  return (
    <Box
      sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2 }}
      display="flex"
      width="100%"
      marginY={2}
    >
      {isMultipleOption ? (
        <FormControl component="fieldset" fullWidth={fullWidth}>
          <Box display="flex" flexDirection="column">
            <FormLabel
              component="label"
              style={{ alignSelf: "flex-start", marginRight: 16 }}
            >
              {label}
            </FormLabel>
            <FormGroup>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  control={
                    <Checkbox
                      checked={selectedOptions.includes(option.value)}
                      onChange={handleChange}
                      value={option.value}
                    />
                  }
                  label={option.label}
                />
              ))}
            </FormGroup>
          </Box>
        </FormControl>
      ) : (
        <FormControl component="fieldset" fullWidth={fullWidth}>
          <Box display="flex" flexDirection="column">
            <FormLabel
              component="label"
              style={{ alignSelf: "flex-start", marginRight: 16 }}
            >
              {label}
            </FormLabel>
            <RadioGroup
              aria-label={label}
              defaultValue={defaultValue}
              name={id}
            >
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio onChange={handleRadioChange} />}
                  label={option.label}
                />
              ))}
              {isOtherOption && (
                <FormControlLabel
                  value="other"
                  control={<Radio onChange={handleRadioChange} />}
                  label="기타"
                />
              )}
            </RadioGroup>
            {selectedRadio === "other" && (
              <TextField
                label="기타 내용"
                // value={otherText}
                fullWidth
                margin="normal"
              />
            )}
          </Box>
        </FormControl>
      )}
    </Box>
  );
};

export default MultipleChoiceField;
