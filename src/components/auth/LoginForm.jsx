import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import {  googleSignIn, signInEmailPasswordF } from '../../redux/actions/auth/auth'
import { useSelector } from 'react-redux'

export const LoginForm = () => {

    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.ui)

    const  [ values, handleInputChange ]=useForm({
       
        email:'',
        password:'',
    })

    const { email, password }= values

    const handleSubmit =(ev)=>{
        ev.preventDefault()
        dispatch( signInEmailPasswordF( email, password ))    
    }

    const handleLoginGoogle = () => {
        dispatch( googleSignIn() )
    }

    return (
        <div className="container">
            <h3 className="mt-3">App</h3>
            <div className="row">
                <div className="pb-3">

                    <form onSubmit={handleSubmit}>

                        <label className="form-label">Email</label>
                        <input 
                            className="form-control mb-2"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"/>

                        <label className="form-label">Password</label>
                        <input 
                            className="form-control mb-2"
                            value={password}
                            name="password"
                            onChange={handleInputChange}
                            type="password"/>

                        <div className="d-grid gap-2 col-8 mx-auto mt-2">
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                                disabled={ loading }
                            >
                                Ingresar
                            </button>
                        </div>

                    </form>
                    <hr/>
                    <div className="d-grid gap-2 col-8 mx-auto mt-2 mb-2">
                        <button 
                            type="submit" 
                            onClick={ handleLoginGoogle } 
                            className="btn btn-primary"
                        >
                            Inicia con 
                           <img className="google-icon mx-2" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </button>
                    </div>
                    
                    <div className="d-flex align-items-center ">
                        <span className="">¿No tienes cuenta?</span>
                        <Link  to="/auth/register" className="link mx-2"
                            >
                            regístrate
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
