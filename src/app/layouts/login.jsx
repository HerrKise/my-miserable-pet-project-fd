import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );
    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ mt: 5, direction: "row", boxShadow: 2, p: 4 }}>
                {formType === "register" ? (
                    <>
                        <h3 className="mb-4">Register</h3>
                        <RegisterForm />
                        <p>
                            Already have account?{" "}
                            <a role="button" onClick={toggleFormType}>
                                {" "}
                                Sign In
                            </a>
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className="mb-4">Login</h3>
                        <LoginForm />
                        <p>
                            Dont have account?{" "}
                            <a role="button" onClick={toggleFormType}>
                                {" "}
                                Sign Up
                            </a>
                        </p>
                    </>
                )}
            </Box>
        </Container>
    );
};
export default Login;
