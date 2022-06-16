import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import PropTypes from "prop-types";

const ProductTable = ({ data, onSort, selectedSort }) => {
    return (
        <>
            <TableHeader {...{ onSort, selectedSort }} />
            <TableBody {...{ data }} />
        </>
    );
};

ProductTable.propTypes = {
    data: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};

export default ProductTable;
