import React from 'react'
import { LoginForm } from './LoginForm'

export const Auth = () => {
    return (
        <div>
            
                <div className="container ">
                    <div className="row  mx-3 row_login">                    
                            <div className=" col-12 col-sm-12 col-md-6 bg_img_login">
                                <h3 className="mt-3 img_title_login"> Inicia sesión  </h3>
                            </div>
                            <div className=" col-12 col-sm-12 col-md-6  form_login_cont">

                                <LoginForm />
                            </div>                        
                    </div>
                </div>
                
                    
                
        </div>
    )
}
