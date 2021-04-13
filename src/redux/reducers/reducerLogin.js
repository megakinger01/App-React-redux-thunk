import { types } from "../types/types";

const initialState = {}



export const reducerLogin = ( state = initialState, action ) => {

    switch (action.type) {
        case types.login:
            
            return {
                ...state,
                uid : action.payload.uid,
                name: action.payload.displayName               
            }
        case types.logout:
            return {}
    
        default:
           return state
    }
}