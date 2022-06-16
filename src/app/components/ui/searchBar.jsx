import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PropTypes from "prop-types";

const SearchBar = ({ onChange, value }) => {
    return (
        <Paper
            elevation={3}
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                m: 0.5
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                onChange={onChange}
                value={value}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

SearchBar.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default SearchBar;
