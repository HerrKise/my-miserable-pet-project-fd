import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

const PaginationBar = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    return (
        <>
            <Stack spacing={2}>
                <Pagination
                    count={pagesCount}
                    page={currentPage}
                    onChange={(_, num) => {
                        onPageChange(num);
                    }}
                    color="secondary"
                />
            </Stack>
        </>
    );
};

PaginationBar.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default PaginationBar;
