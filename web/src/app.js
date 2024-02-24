import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import { UserContext } from "context/user";
import SignUp from "views/signUp";
import { SignIn } from "views/signIn";
export const App = ()=>{
    const {userId} = useContext(UserContext);
    const [path, setPath] = useState('');
    useEffect(()=>{
        setPath(userId ? "/admin/dashboard" : "/signin")
    },[userId])
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/admin" render={(props)=> <AdminLayout {...props} />}/>
                <Route path="/signin" render={(props) => <SignIn />}/>
                <Route path="/signup" render={(props) => <SignUp />}/>
                <Redirect from="/" to={path} />
            </Switch>
        </BrowserRouter>
    )
}