import React, { Component } from 'react';
import { View,Text,Dimensions } from 'react-native'
import { createDrawerNavigator,DrawerItemList,DrawerItem,DrawerContentScrollView} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Menu from '../screen/Menu';
import Home from '../screen/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width,height}=Dimensions.get('window');

function CustomDrawer(props){
    return(
        <DrawerContentScrollView>
            <TouchableOpacity 
                onPress={()=>props.navigation.closeDrawer()}
            >
                <Text>Close</Text>
            </TouchableOpacity>

        </DrawerContentScrollView>

    )
}

const Drawer = createDrawerNavigator();
export default class drawerNavigation extends Component {
    render() {
        return (
            <NavigationContainer  independent={true}>
                <Drawer.Navigator 
                    drawerType={'slide'}
                    drawerContent={(props)=><CustomDrawer {...props} />} 
                    initialRouteName="Home"
                    drawerStyle={{
                        backgroundColor: '#c6cbef',
                        width
                      }}
                    
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Menu" component={Menu} />
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}