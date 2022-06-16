import React from "react";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import { Switch, Redirect, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/protectedRoute";
import Login from "./layouts/login";
import LogOut from "./layouts/logOut";

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <ProtectedRoute
                    path="/products/:productId?/:edit?"
                    component={Main}
                />
                <Route path="/login/:type?" component={Login} />
                <Route path="/logout" component={LogOut} />
                <Redirect to="/products" />
            </Switch>
        </>
    );
}

export default App;
