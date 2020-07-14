import React, { Component } from 'react';
import { View ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {colors,sizes}  from '../constants/theme';
import {Block,Button,Text} from '../component/index';
export default class SignIn extends Component {
    render() {
        const {container,row,box,btn,txtBtn,btnFooter}=styles;
        return (
           <View  style={container} >
               <View  style={box}>
                   <View
                        style={{flex:1,justifyContent:'center'}}
                   >
                        <View  style={row} >
                            <Icon
                                    name={'user-o'}
                                    size={20}
                                    color={'gray'}
                            />
                                <TextInput
                                    style={{padding:15,fontSize:18,flex:1}}
                                    placeholder={"Username"}
                            />
                        </View>
                        <View  style={row} >
                            <Icon
                                    name={'unlock'}
                                    size={20}
                                    color={'gray'}
                            />
                                <TextInput
                                    style={{padding:15,fontSize:18,flex:1}}
                                    placeholder={"Password"}
                            />
                        </View>
                    </View>
                    <View
                        style={{flex:1}}
                   >
                        <Button color={colors.black} >
                            <Text  align={'center'} h3 white >SIGN IN</Text>
                        </Button>
                        <Button color={colors.fb} >
                            <Text align={'center'} h3 white >SIGN IN with Facebook</Text>
                        </Button>
                        <TouchableOpacity>
                            <Text style={{fontSize:sizes.h3}} >Forgot Password</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={btnFooter}
                    >
                        <Text style={{fontSize:sizes.h3}}>Sign In with Guest</Text>
                    </TouchableOpacity>
                </View>
           </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    box:{
        marginRight:30,
        flex:1
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        borderBottomColor:colors.gray2,
        borderBottomWidth:1,
        marginVertical:10
    },
    btn:{
        height:50,
        backgroundColor:'black',
        marginBottom:20,
        borderRadius:sizes.radius,
        justifyContent:'center',
        alignItems:'center'
    },
    txtBtn:{
        fontSize:sizes.h3,
        color:'white'
    },
    btnFooter:{
        height:50,
        justifyContent:'center',
        alignItems:'center'
    }
    
})