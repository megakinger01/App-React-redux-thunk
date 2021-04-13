import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducerLogin } from '../reducers/reducerLogin';
import { uiReducer } from '../reducers/ui';
import { asideReducer } from '../reducers/asideReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducers = combineReducers({
    login: reducerLogin,
    ui: uiReducer,
    aside: asideReducer,
})

export const store = createStore(
    reducers,composeEnhancers(
        applyMiddleware( thunk )
    )
)