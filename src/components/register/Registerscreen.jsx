import React from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator'
import Swal from 'sweetalert2'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { uiSetError, uiRemoveError } from '../../redux/actions/ui/ui'
import { startRegister } from '../../redux/actions/auth/auth'


export const Registerscreen = () => {

    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)
   
    const [ values, handleInputChange ]= useForm({
        name:'',
        lastName:'',
        email: '',
        email2: '',
        password:'',
        password2:'',
    })

    const {name,lastName,email, email2,password, password2 } = values

    const handleForm = (ev) =>{
        ev.preventDefault()

        if ( isFormValid() ) {
            dispatch( startRegister(email, password, name ) )
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    const isFormValid = () => {

        if ( name.trim().length === 0 ) {

            dispatch( uiSetError('el nombre es requerido'))
            return false 

        }else if ( lastName.trim().length === 0 ) {

            dispatch( uiSetError('el apellido es requerido'))      
            return false

        }else if ( !validator.isEmail( email )) {

            dispatch(uiSetError( 'email no es correcto'))         
            return false

        }else if ( !validator.isEmail( email2 )) {

            dispatch(uiSetError('email no es correcto'))
            return false

        }else if( email !== email2 ){

            dispatch(uiSetError('email debe ser igual'))
            return false

        }else if( password !== password2 || password.length < 4 ){
           
            dispatch(uiSetError('password incorrecto'))
            return false
        }

        uiRemoveError()
        return true
    }

   
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                
                <div className="col-8  border rounded-3 mt-5 p-3">
                    <h3>Registro</h3>
                    {
                        msgError &&
                            (   
                                <div className="alert alert-danger  alert_span"  >
                                    {msgError}                                   
                                </div>
                            )
                    }
                    
                    <form onSubmit={ handleForm }>

                        <div className="d-flex justify-content-center ">
                            <input 
                                className="form-control m-2" 
                                onChange={ handleInputChange } 
                                value={name} 
                                name="name"  
                                placeholder="Nombre" 
                                type="text"
                            />

                            <input 
                                className="form-control m-2" 
                                onChange={ handleInputChange } 
                                value={lastName}  
                                name="lastName" 
                                placeholder="Apellido" 
                                type="text"
                            />
                        </div>

                        <div className="d-flex justify-content-center x">
                            <input 
                                className="form-control m-2" 
                                onChange={ handleInputChange } 
                                value={email}  
                                name="email" 
                                placeholder="email" 
                                type="text"
                            />

                            <input 
                                className="form-control m-2" 
                                onChange={ handleInputChange } 
                                value={email2} 
                                name="email2"   
                                placeholder="confirma email" 
                                type="text"
                            />

                         </div> 

                           <div className="d-flex justify-content-center ">                             
                            <input  
                                className="form-control m-2"
                                onChange={ handleInputChange } 
                                value={password}  
                                name="password" 
                                placeholder="contraseña" 
                                type="password"
                            />

                            <input 
                                className="form-control m-2"
                                onChange={ handleInputChange }
                                value={password2}
                                name="password2" placeholder="confirma contraseña" type="password"/>
                            </div>

                            <div className="d-grid gap-2 col-4 mx-auto mt-3">
                                <button 
                                    className="btn btn-primary btn-sm"
                                >
                                    Registrate
                                </button>
                            </div>
                    </form>

                    <hr/>

                    <div className="d-flex align-items-center justify-content-center">
                        <span>Ya tengo cuenta</span>
                        <Link  to="/auth/login" className="link mx-2">
                            Inicia sesión  
                        </Link>
                    </div>
                </div>
            </div>                    
        </div>
    )

}
