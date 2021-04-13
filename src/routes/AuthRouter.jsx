import React from 'react'
import {Switch,Route,Redirect } from "react-router-dom";
import { Auth } from '../components/auth/Auth';
import { Registerscreen } from '../components/register/Registerscreen';
import { Headerlogin } from '../components/auth/fixed/Headerlogin';
import { FooterLogin } from '../components/auth/fixed/FooterLogin'

export const AuthRouter = () => {
    return (
        <div>
            <Headerlogin />
                <Switch>
                    <Route exact  path="/auth/login" component={Auth} />    
                    <Route exact  path="/auth/register" component={Registerscreen} /> 
                    <Redirect to="/auth/login" />   
                </Switch>
            <FooterLogin />
        </div>
    )
}
