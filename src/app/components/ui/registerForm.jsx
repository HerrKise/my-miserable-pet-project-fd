import React, { useEffect, useState } from "react";
import { validator } from "../utils/validator";
import RadioField from "../form/radioField";
import CheckBoxField from "../form/checkBoxField";
// import { useDispatch } from "react-redux";
// import { signUp } from "../../store/users";
import TextFieldForm from "../form/textField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const RegisterForm = () => {
    // const dispatch = useDispatch();
    const [data, setData] = useState({
        email: "",
        password: "",
        sex: "male",
        name: "",
        licence: false
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
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должено состоять минимум из 3 символов",
                value: 3
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        },
        licence: {
            isRequired: {
                message:
                    "Вы не можете использовать наш сервис без подтверждения лицензионного соглашения"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        // const isValid = validate();
        // if (!isValid) return;
        // dispatch(signUp(data));
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextFieldForm
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextFieldForm
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
            />
            <TextFieldForm
                label="Password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <RadioField
                options={[
                    { name: "Male", value: "male" },
                    { name: "Female", value: "female" },
                    { name: "Other", value: "other" }
                ]}
                value={data.sex}
                name="sex"
                onChange={handleChange}
                label="Выберите ваш пол"
            />
            <CheckBoxField
                onChange={handleChange}
                name="licence"
                value={data.licence}
                error={errors.licence}
            >
                Подтвердить лицензионное соглашение
            </CheckBoxField>
            <Button
                type="submit"
                variant="contained"
                disabled={!isValid}
                fullWidth
            >
                Submit
            </Button>
        </Box>
    );
};

export default RegisterForm;
