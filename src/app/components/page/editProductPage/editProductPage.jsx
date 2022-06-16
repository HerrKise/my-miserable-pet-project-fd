import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { validator } from "../../utils/validator";
// import TextField from "../../common/form/textField";
import SelectField from "../../form/selectField";
// import RadioField from "../../common/form/radio.Field";
import BackHistoryButton from "../../common/backButton";
import { useSelector, useDispatch } from "react-redux";
/* import {
    getCategories,
    getCategoriesLoadingStatus
} from "../../../store/professions"; */
// import { getCurrentUserData, updateUser } from "../../../store/users";
import TextFieldForm from "../../form/textField";

const getCategories = () => {
    return null;
};

const getCategoriesLoadingStatus = () => {
    return null;
};
const getCurrentUserData = () => {
    return null;
};
const updateUser = () => {
    return null;
};

const EditProductPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const currentUser = useSelector(getCurrentUserData());
    const dispatch = useDispatch();
    const categories = useSelector(getCategories());
    const categoriesLoading = useSelector(getCategoriesLoadingStatus());
    const categoriesList = categories.map((c) => ({
        label: c.name,
        value: c._id
    }));

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(updateUser(data));
    };
    useEffect(() => {
        if (!categoriesLoading && currentUser && !data) {
            setData(currentUser);
        }
    }, [categoriesLoading, currentUser, data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

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
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => validate(), [data]);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    // const isValid = Object.keys(errors).length === 0;
    return (
        <>
            <BackHistoryButton />
            <Container component="main" maxWidth="sm">
                <Box sx={{ mt: 5, direction: "row", boxShadow: 2, p: 4 }}>
                    {!isLoading && Object.keys(categories).length > 0 ? (
                        <Box component="form" onSubmit={handleSubmit} mb={1}>
                            <TextFieldForm
                                label="Наименование товара"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextFieldForm
                                label="Количество товара"
                                name="quantity"
                                value={data.quantity}
                                onChange={handleChange}
                                error={errors.quantity}
                            />
                            <TextFieldForm
                                label="Цена товара"
                                name="price"
                                value={data.price}
                                onChange={handleChange}
                                error={errors.price}
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
                        </Box>
                    ) : (
                        "Loading..."
                    )}
                </Box>
            </Container>
        </>
    );
};

export default EditProductPage;
