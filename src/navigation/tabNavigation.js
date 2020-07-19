import React,{Component} from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Home from '../screen/Home';
import Category from '../screen/Category';
import Cart from '../screen/Cart';
import Profile from '../screen/Profile';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }} 
      />
      <Tab.Screen 
        name="Category" 
        component={Category}
        options={{
            tabBarLabel: 'Category',
            tabBarIcon: ({ color, size }) => (
              <Icon name="tshirt" color={color} size={size} />
            ),
          }} 
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({ color, size }) => (
              <Icon name="cart-plus" color={color} size={size} />
            ),
          }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-circle" color={color} size={size} />
            ),
          }} 
      />
    </Tab.Navigator>
  );
}

export default class tabNavigation extends Component {
    render() {
        return (
        <NavigationContainer>
                <MyTabs />
          </NavigationContainer>
            
        );
    }
}



