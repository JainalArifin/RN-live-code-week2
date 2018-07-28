import React from 'react'
import  { createStackNavigator } from 'react-navigation'

// screen
import LoginScreen from './src/screens/Login';
import PageGameScreen from './src/screens/PageGame';

const routes = createStackNavigator({
    Login: {
        screen: LoginScreen
    },
    PageGame: {
        screen: PageGameScreen
    }
},{
    initialRouteName: 'Login'
})

export default routes