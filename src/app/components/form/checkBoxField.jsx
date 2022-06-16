import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value });
    };
    return (
        <Box mb={2}>
            <FormControl
                required
                error={!!error}
                component="fieldset"
                sx={{ mt: 1 }}
                variant="standard"
            >
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={value}
                                onChange={handleChange}
                                name={children}
                            />
                        }
                        label={children}
                    />
                </FormGroup>
                <FormHelperText>{error}</FormHelperText>
            </FormControl>
        </Box>
    );
};
CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
};

export default CheckBoxField;
