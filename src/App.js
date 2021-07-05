import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; //import the package
import Manage from "./pages/Manage";
import Dashboard from "./pages/Dashboard";
import UploadScreen from "./pages/UploadScreen";
import Login from "./pages/Login";

function App(){
    
    return(
        <BrowserRouter>

                <Switch>
                    <Route exact path="/manage" component={Manage} />
                    <Route exact path="/dash" component={Dashboard} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/upload" component={UploadScreen} />
                </Switch>

       </BrowserRouter>

    )
}
export default App