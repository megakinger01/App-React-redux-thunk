import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Switch,Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { AppScreen } from '../components/app/AppScreen';
import { login } from '../redux/actions/auth/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
 
export const AppRouter = () => {

    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [islogged, setIslogged] = useState(false)

    useEffect(() => {

        firebase.auth().onAuthStateChanged( user => {

            if (user?.uid) {
                dispatch( login( user.uid , user.displayName ))
                setIslogged( true )      
            }else{
                setIslogged(false)
            }

            setChecking(false)
        })
    }, [ dispatch,setChecking,setIslogged ])


    if (checking) {
        return(
            <h1>Espere....</h1>
        )
    }

    return (
        <div>
             <Router>
                <div className="">
                    <Switch>
                        <PublicRoute    isAuthenticated={ islogged } 
                                        path="/auth" 
                                        component={ AuthRouter } 
                                        />


                        <PrivateRoute   isAuthenticated={ islogged } 
                                        exact path="/" 
                                        component={ AppScreen } 
                                        />

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
