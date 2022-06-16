import { Paper, Button, Box } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(history.location.pathname + `/${product._id}`);
    };
    return (
        <Paper variant="outlined">
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                m={1}
            >
                <Box display="flex" flexDirection="row" alignItems="center">
                    <img src={product.photo} alt="" width="100" />
                    <Box display="flex" flexDirection="column">
                        <div>{product.name}</div>
                        <div>id товара: {product._id}</div>
                        <div>Стоимость: {product.price} р.</div>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center">
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                    >
                        Открыть карточку
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object
};

export default ProductCard;
