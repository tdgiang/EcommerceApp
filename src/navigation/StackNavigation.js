import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../screen/Splash';
import ForgotPassword from '../screen/ForgotPassword';
import NewsLetter from '../screen/NewsLetter';
import WalkThrough from '../screen/WalkThrough';
import Authen from '../screen/Authen';

const Stack = createStackNavigator();

const hideHeader={
    height:0,
    opacity:0
}

export default class StackNavigation extends Component {


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="WalkThrough">
                    <Stack.Screen 
                        name="Splash" component={Splash} 
                        options={{
                            headerStyle: hideHeader,
                          }}
                    />
                    <Stack.Screen 
                        name="ForgotPassword" component={ForgotPassword} 
                        options={{
                            headerStyle: hideHeader,
                          }}
                    />
                    <Stack.Screen 
                        name="NewsLetter" component={NewsLetter} 
                        options={{
                            headerStyle: hideHeader,
                          }}
                    />
                    <Stack.Screen 
                        name="Authen" component={Authen} 
                        options={{
                            headerStyle: hideHeader,
                          }}
                    />
                    <Stack.Screen 
                        name="WalkThrough" component={WalkThrough} 
                        options={{
                            headerStyle: hideHeader,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}