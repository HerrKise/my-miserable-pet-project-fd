import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { purple } from "@mui/material/colors";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        }
    };
    const rendeSortArrow = (selectedSort) => {
        if (selectedSort.order === "asc") {
            return <ArrowCircleUpIcon />;
        } else {
            return <ArrowCircleDownIcon />;
        }
    };
    return (
        <>
            <AppBar position="static" sx={{ bgcolor: purple[500] }}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div">
                        Сортировать по
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => handleSort("price")}
                    >
                        {rendeSortArrow(selectedSort)}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

TableHeader.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};

export default TableHeader;
