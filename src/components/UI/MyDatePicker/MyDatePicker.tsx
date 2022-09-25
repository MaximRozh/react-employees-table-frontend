import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TextFieldProps } from "@mui/material/TextField";

interface MyDatePickerProps {
  value: Date | string;
  inputFormat: string;
  renderInput: (
    params: TextFieldProps
  ) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  onChange: (eveny: any) => void;
  views?: Array<"day" | "month" | "year">;
  label?: string;
  disableFuture?: boolean;
  minDate?: Date | String;
  maxDate?: Date | String;
}

const MyDatePicker: React.FC<MyDatePickerProps> = ({
  value,
  inputFormat,
  renderInput,
  onChange,
  label,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        inputFormat={inputFormat}
        label={label}
        onChange={onChange}
        value={value}
        renderInput={renderInput}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
