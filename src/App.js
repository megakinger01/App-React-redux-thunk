import React from 'react'
import { HomeScreen } from './pages/HomeScreen'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

export const App = () => {
    return (
        <Provider store={store}>
           <HomeScreen />
        </Provider>
    )
}
