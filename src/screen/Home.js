import React, { Component } from 'react';
import { 
    View,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    StyleSheet,
    ImageBackground
 } from 'react-native';
 import {Block,Button,Text} from '../component/index';
 import Icon from 'react-native-vector-icons/FontAwesome';

const {width,height}=Dimensions.get('window');


 export default class Home extends Component {

        renderItem=()=>{
            return(
                <ImageBackground 
                style={{height:height/3}}
                resizeMode={'contain'}
                source={require('../constants/img/app/baner01.png')} 
                >
              </ImageBackground>
            )
        }


     render() {
         const {navBar,btn}=styles;
         return (
             <ScrollView  
                style={{flex:1,backgroundColor:'white'}}
                showsVerticalScrollIndicator={false}
              >
                <Block style={{height:height/3}} >
                    <View style={navBar} >
                        <TouchableOpacity>
                            <Icon
                                    name={'align-left'}
                                    size={25}
                            />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <Icon
                                    name={'search'}
                                    size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    {this.renderItem()}
                </Block> 
                <TouchableOpacity  style={btn}>
                    <Text   white>Free Shipping Woorldwide</Text>
                </TouchableOpacity>
             </ScrollView>
             
         );
     }
 }

const styles=StyleSheet.create({
    navBar:{
        paddingHorizontal:20,
        height:50,
        width:width,
        flexDirection:'row',
        position:'absolute',
        justifyContent:'space-between',
        alignItems:'center',
        zIndex:1
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        margin:15,
        height:35
    }

})