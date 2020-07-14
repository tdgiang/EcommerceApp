import React, { Component } from 'react';
import { View,
    TextInput,
    TouchableOpacity,
    Image,
    Keyboard  ,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Block,Button,Text}  from '../component';
import {colors,sizes} from '../constants/theme';
const avatar=require('../constants/img/app/avatar.jpg');
export default class ForgotPassword extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={Keyboard.dismiss}
            >
            <Block padding={[0,20]} flex={1}>
                <View  style={{height:50,justifyContent:'center'}} >
                    <TouchableOpacity>
                        <Icon
                                name={'arrow-left'}
                                size={25}
                                color={colors.black}

                        />
                    </TouchableOpacity>
                </View>
                <Block center >
                    <Image
                            source={avatar}
                            resizeMode={'cover'}
                            style={{width:250,height:250,borderRadius:sizes.radius}}
                    />
                    <Block padding={[20,0,0,0]}>
                        <Block center>
                        <Text title align={'center'}>Forgot your password?</Text>
                        <Text title align={'center'} >Enter your email below recevice your password reset intructions</Text>
                            <View 
                                style={{
                                    flexDirection:'row',
                                    alignItems:'center',
                                    marginVertical:20,
                                    borderBottomWidth:1,
                                    borderBottomColor:colors.gray2
                                    
                                }}
                            >
                                <Icon
                                    name={'envelope-o'}
                                    size={25}
                                    color={colors.gray}
                                />
                                <TextInput
                                    style={{
                                        flex:1,
                                        padding:10,
                                        paddingLeft:20,
                                        fontSize:18
                                    }}
                                    
                                    placeholder={'Email'}
                                />
                            </View>
                            </Block>
                            <Button color={'black'}>
                                <Text h3 align={'center'} white>SEND PASSWORD</Text>
                            </Button>

                    </Block>
                </Block>
                <View style={{height:50,justifyContent:'center'}} >
                    <TouchableOpacity>
                        <Text align={'center'} h3 >SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </Block>
            </TouchableWithoutFeedback> 
        );
    }
}