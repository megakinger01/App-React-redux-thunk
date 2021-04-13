import React from 'react'
import { Link } from 'react-router-dom'
import { AsidebarData } from './AsidebarData'
import { useDispatch } from 'react-redux'
import { hideAsideAction } from '../../redux/actions/app/asideApp'

export const SidebarApp = () => {

    const dispatch = useDispatch()
   
   
    const hideAside = () => {
        dispatch( hideAsideAction() )

    }
    return (
        <>           
            <nav className="aside-menu">
                <ul className="nav-text">
                    <li className="">
                        <Link to="#" className="link_aside">
                               <i className="bi bi-arrow-left-circle" onClick={ hideAside } ></i> 
                        </Link>
                    </li>
                    <ul>
                        { AsidebarData.map( ( item, index)=> {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link className="link_aside" to={item.path}>
                                        {item.icon}
                                        <span className="span_title">{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </ul>
            </nav>
        </>
    )
    }