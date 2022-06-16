import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
// import { getIsLoggedIn } from "../../store/users";
const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isAdmin = true; // заменить потом на isAdmin = useSelector(getIsAdmin());
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isAdmin) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login"
                                /* state: {
                                    from: props.location
                                } */
                            }}
                        />
                    );
                }
                return Component ? <Component {...props} /> : children;
            }}
        />
    );
};
ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ProtectedRoute;
