import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from '../../../firebase/firebase-config'
import { types } from '../../types/types'
import { uiStartLoading, uiFinishLoading } from '../ui/ui'



export const signInEmailPasswordF = ( email, password ) => {

    return ( dispatch ) => {

            dispatch( uiStartLoading() )

            firebase.auth().signInWithEmailAndPassword( email, password )
            .then(({user}) => {
                console.log( user );
                dispatch( login( user.uid, user.displayName ))
                dispatch( uiFinishLoading() )
            })
            .catch( e => {
                    console.log(e);
                    dispatch( uiFinishLoading())
                    Swal.fire('Error', e.message, 'error')
                }
            )
    }
}

export const googleSignIn = () => {
    
    return ( dispatch ) => {
        
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({ user }) => {
                dispatch( login( user.uid, user.displayName ))
            } )
    }
}


export const startRegister = ( email, password, name ) => {
    return ( dispatch )=> {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then(async({ user }) =>{
                
               await user.updateProfile({ displayName: name} )
                    dispatch( login( user.uid, user.displayName ))
                    // console.log( user );
            })
            
            .catch( e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error')
            })

    }
}


export const login = ( uid, displayName ) => {
        return {
            type:types.login,
            payload:{
                uid, displayName
            }
        }
}

export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut()
        dispatch( logout() )

    }
}

const logout = () => ({ type: types.logout })