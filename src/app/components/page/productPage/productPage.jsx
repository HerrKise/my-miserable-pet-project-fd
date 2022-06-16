import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Paper, Box, Button } from "@mui/material";
import api from "../../../api";
import PropTypes from "prop-types";
import SettingsIcon from "@mui/icons-material/Settings";
import BackHistoryButton from "../../common/backButton";

const ProductPage = ({ productId }) => {
    const [product, setProduct] = useState();
    const history = useHistory();

    useEffect(
        () =>
            api.products.default
                .getById(Number(productId))
                .then((data) => setProduct(data)),
        []
    );
    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <>
            {product ? (
                <Paper variant="outlined" sx={{ ml: 0.5 }}>
                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        m={1}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <img src={product.photo} alt="" width="400" />
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignSelf="flex-start"
                                ml={1}
                            >
                                <div>
                                    <h1>{product.name}</h1>
                                </div>
                                <div>
                                    <h3>В наличии: {product.quantity}</h3>
                                </div>
                                <div>
                                    <h3>Стоимость: {product.price} р.</h3>
                                </div>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            align-content="space-between"
                            mr={3}
                            flexDirection="column"
                        >
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClick}
                            >
                                <SettingsIcon />
                            </Button>
                            <Button variant="contained" color="secondary" >
                                В корзину
                            </Button>
                            <BackHistoryButton />
                            <div>id товара: {product._id}</div>
                        </Box>
                    </Box>
                </Paper>
            ) : (
                "Loading"
            )}
        </>
    );
};

ProductPage.propTypes = {
    productId: PropTypes.string.isRequired
};

export default ProductPage;
