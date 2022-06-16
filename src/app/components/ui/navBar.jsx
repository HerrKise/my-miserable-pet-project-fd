import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import { purple } from "@mui/material/colors";
import { useHistory } from "react-router-dom";

const NavBar = () => {
    const history = useHistory();
    return (
        <Box sx={{ flexGrow: 1, mb: 0.5 }}>
            <AppBar position="static" sx={{ bgcolor: purple[500] }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => history.push("/products")}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Main
                    </Typography>
                    <Button
                        color="inherit"
                        onClick={() => history.push("/login")}
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
