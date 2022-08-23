import React from "react"
import { Checkbox, FormControl, FormControlLabel, Tooltip } from "@mui/material"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import { Controller } from "react-hook-form"

function CheckboxElement({
    name,
    label,
    defaultValue = false,
    labelPlacement = "end",
    tooltipPlacement = "right",
    control,
    disabled,
    tooltip,
}) {
    return (
        <FormControl
            fullWidth
            style={{ flexDirection: "row", alignItems: "center" }}
        >
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => (
                    <FormControlLabel
                        {...field}
                        value={name}
                        control={<Checkbox checked={field.value} />}
                        label={label}
                        labelPlacement={labelPlacement}
                        disabled={disabled}
                    />
                )}
            />
            {tooltip && (
                <Tooltip title={tooltip} placement={tooltipPlacement}>
                    <InfoOutlinedIcon fontSize="small" />
                </Tooltip>
            )}
        </FormControl>
    )
}

export default CheckboxElement
