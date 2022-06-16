import React from "react";
import ProductCard from "../../productCard";
import PropTypes from "prop-types";

const TableBody = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <ProductCard key={item._id} product={item} />
            ))}
        </>
    );
};

TableBody.propTypes = {
    data: PropTypes.array
};

export default TableBody;
