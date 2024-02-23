import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { UserContext } from "context/user";

export const App = ()=>{
    const {userId} = useContext(UserContext);
    const [path, setPath] = useState('');
    console.log(userId);
    useEffect(()=>{
        setPath(userId ? "/admin/user" : "/admin/dashboard")
    },[userId])
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={(props)=> <AdminLayout {...props} />}/>
                <Redirect from="/" to={path} />
            </Switch>
        </BrowserRouter>
    )
}