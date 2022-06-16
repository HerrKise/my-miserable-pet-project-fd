import React from "react";
import { useHistory } from "react-router";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const BackHistoryButton = () => {
    const history = useHistory();
    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={() => history.goBack()}
        >
            <ArrowBackIcon />
            Назад
        </Button>
    );
};

export default BackHistoryButton;
