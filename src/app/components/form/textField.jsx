import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

const TextFieldForm = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputId = () => {
        return (
            "outlined-" +
            (error ? "error-helper-text-" + name : "adornment-" + name)
        );
    };
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };
    return (
        <Box mb={2}>
            <TextField
                fullWidth
                error={!!error}
                name={name}
                id={getInputId()}
                type={showPassword ? "text" : type}
                value={value}
                onChange={handleChange}
                label={label}
                helperText={error}
                InputProps={{
                    endAdornment: type === "password" && (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={toggleShowPassword}
                                edge="end"
                            >
                                {showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};
TextFieldForm.defaultProps = {
    type: "text"
};
TextFieldForm.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextFieldForm;
