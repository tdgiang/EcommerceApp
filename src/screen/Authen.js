import React, { Component } from 'react';
import { View,StyleSheet ,Text} from 'react-native';
import AuthenNavigation from '../navigation/authenNavigation';


export default class Authen extends Component {
    render() {
        const {container,txtLogo}=styles;
        return (
            <View
                style={container}
            >
                <Text style={txtLogo}>Imba.</Text>
                <AuthenNavigation  />

            </View>
            
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:30,
       paddingTop:20,
       backgroundColor:'white'
    },
    txtLogo:{
        fontSize:40,
        fontWeight:'bold'
    }

})