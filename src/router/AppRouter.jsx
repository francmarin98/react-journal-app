import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {AuthRouter} from "./AuthRouter";
import {JournalPage} from "../pages/journal/JournalPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/auth'} component={AuthRouter}/>
                <Route path={'/'} exact>
                    <JournalPage/>
                </Route>
                <Redirect to="/auth/login"/>
            </Switch>
        </BrowserRouter>
    );
};
