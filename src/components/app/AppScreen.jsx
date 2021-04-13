import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../redux/actions/auth/auth'
import { SidebarApp } from './SidebarApp'
import { showAsideAction } from '../../redux/actions/app/asideApp'

export const AppScreen = () => {
    const dispatch = useDispatch()

    const { name } = useSelector(state => state.login)
    const { showAside }= useSelector(state => state.aside)
  
    const handlelogout = () => {
        dispatch( startLogout() )
        
    }

    const showSide = () => {
        dispatch( showAsideAction() )
    }

    return (
        <div>
            <ul className="nav align-items-center justify-content-between nav_style">
                <li className="nav-item d-flex">
                    <h3><i className="bi bi-card-list icon_app mx-4" onClick={ showSide }></i></h3>
                    <h3>Hola, <span className="user_nav">{name}</span></h3>
                </li>
                
                <li className="nav-item">    
                    <button 
                        className="btn btn-outline-primary m-3" 
                        onClick={ handlelogout }
                    >
                        logout
                    </button>
                </li>               
            </ul>

          {

              showAside&& <SidebarApp />
          }
            
        </div>
    )
}
