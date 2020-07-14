import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SignIn from '../screen/SignIn';
import SignUp from '../screen/SignUp';

const Tab=createMaterialTopTabNavigator();

export default class authenNavigation extends Component {
    render() {
        return (
            <NavigationContainer  independent={true}>
                <Tab.Navigator initialRouteName={'SignUp'} >
                    <Tab.Screen  
                        name="SignIn" 
                        component={SignIn}
                        options={{
                            title:"SIGN IN"
                        }}
                    />
                    <Tab.Screen  
                        name="SignUp"  
                        component={SignUp} 
                        options={{
                            title:"SIGN UP",
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}