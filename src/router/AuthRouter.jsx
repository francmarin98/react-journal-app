import {Redirect, Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/auth/LoginPage";
import {RegisterPage} from "../pages/auth/RegisterPage";

export const AuthRouter = () => {
    return (
        <Switch>
            <Route path="/auth/login" exact component={LoginPage}/>
            <Route path="/auth/register" exact component={RegisterPage}/>
            <Redirect to="/auth/login"/>
        </Switch>
    );
};
