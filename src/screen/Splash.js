import React, { Component } from 'react';
import { View,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Text
} from 'react-native';
const {width,height}=Dimensions.get('window');
const bgSplash=require('../constants/img/app/splash.png');
export default class Splash extends Component {
    render() {
        const {containerLogo,txtLogo}=styles
        return (
          <ImageBackground
            source={bgSplash}
            style={{width,height}}
            resizeMode={'cover'}
          >
          <View
            style={containerLogo}
            >
              <Text  style={txtLogo}>Imba.</Text>
          </View>
        </ImageBackground>
        );
    }
}
const styles=StyleSheet.create({
    containerLogo:{
        position:'absolute',
        width,
        height:100,
        alignItems:'center',
        bottom:0
    },
    txtLogo:{
        fontSize:40,
        fontWeight:'bold'
    }


})