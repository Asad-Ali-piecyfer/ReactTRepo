import * as React from "react";
import TextField from "@mui/material/TextField";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { Controller } from "react-hook-form";

export default function DatePickerElement({
  setDateRange,
  dateRange,
  label,
  disablePast = false,
  required,
  rules,
  control,
  defaultValue = "",
  name,
  errors,
}) {
  const [value, setValue] = React.useState(null);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{
        ...rules,
        required: required,
      }}
      render={({ field }) => (
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Start Date", end: "End Date" }}
        >
          <DatePicker
            {...field}
            disablePast={disablePast}
            label={label}
            // value={value}
            // onChange={(newValue) => {
            //   setValue(newValue);
            // }}
            renderInput={(params) => (
              <TextField
                {...params}
                helperText={errors[name] ? errors[name]?.message : null}
                label={label}
                error={errors[name]}
              />
            )}
          />
        </LocalizationProvider>
      )}
    />
  );
}
