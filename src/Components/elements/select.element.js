import React from "react"
import { FormControl, TextField } from "@mui/material"
import { Controller } from "react-hook-form"

function SelectElement({
    name,
    label = "",
    control,
    defaultValue = "",
    required,
    rules,
    errors,
    disabled,
    variant = "outlined",
    children,
}) {
    return (
        <FormControl fullWidth variant={variant} style={{ marginTop: "1rem" }}>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                rules={{
                    ...rules,
                    required: required,
                }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id={name}
                        select
                        required={required}
                        helperText={errors[name] ? errors[name]?.message : null}
                        label={label}
                        error={errors[name]}
                        disabled={disabled}
                    >
                        {children}
                    </TextField>
                )}
            />
        </FormControl>
    )
}

export default SelectElement
