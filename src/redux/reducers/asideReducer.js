import { types } from "../types/types";

const initialState ={
    showAside : true
}


export const asideReducer = ( state= initialState, action) => {
    switch (action.type) {
        case types.showAside:
            return{
                showAside: true

            }
        
        case types.hideAside:
            return{
                showAside:false

            }
        default:
        return state
    
    }
}