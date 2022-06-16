import React, { useState, useEffect } from "react";
import { validator } from "../utils/validator";
import TextFieldForm from "../form/textField";
import CheckBoxField from "../form/checkBoxField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import categories from "../../api/fake.api/categories.api";
import SelectField from "../form/selectField";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        sex: "male",
        stayOn: false,
        category: "1"
    });

    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            }
        }
    };

    const categoriesList = Object.values(categories).map((p) => ({
        label: p.name,
        value: p._id
    }));

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <Box component="form" onSubmit={handleSubmit} mb={1}>
            <TextFieldForm
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextFieldForm
                label="Password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <SelectField
                label="Выберите категорию товара"
                defaultOption="Choose..."
                name="category"
                options={categoriesList}
                onChange={handleChange}
                value={data.category.toString()}
                error={errors.category}
            />
            <CheckBoxField
                onChange={handleChange}
                name="stayOn"
                value={data.stayOn}
            >
                Stay in system
            </CheckBoxField>
            <Button type="submit" variant="contained" fullWidth>
                Submit
            </Button>
        </Box>
    );
};

export default LoginForm;
