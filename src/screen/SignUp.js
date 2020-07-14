import React, { Component } from 'react';
import { View,
    StyleSheet,
    TextInput,
    TouchableOpacity

} from 'react-native';

import {Block,Button,Text} from '../component/index';
import Icon from 'react-native-vector-icons/FontAwesome'
import {colors,sizes} from '../constants/theme';
export default class SignUp extends Component {
    render() {
        const {row}=styles;
        return (
           <Block color={'white'} padding={[0,30,0,0]}>
               <Block flex={5} padding={[10,0]} >
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
                                    placeholder={"Username"}
                            />
                    </View>
                    <View  style={row} >
                            <Icon
                                    name={'envelope-o'}
                                    size={20}
                                    color={'gray'}
                            />
                                <TextInput
                                    style={{padding:15,fontSize:18,flex:1}}
                                    placeholder={"Username"}
                            />
                    </View>
               </Block>
               <Block flex={1} >
                    <Button   color={colors.black}>
                        <Text h3 align={'center'} white>SIGN UP</Text>
                    </Button>
               </Block>
               <Block flex={1} center middle  >
                   <TouchableOpacity>
                        <Text h3 >Sign In</Text>
                    </TouchableOpacity>
               </Block>

           </Block>
        );
    }
}

const styles=StyleSheet.create({
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