import React, { Component } from 'react';
import { View,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
    Image
} from 'react-native';
import {colors,sizes}  from '../constants/theme';
import {Text,Button,Block}  from '../component/index';
import Data from '../constants/MockData/walkthrough';

const {width,height}=Dimensions.get('window');

export default class WalkThrough extends Component {
    renderItem(item){
        const {boxItem,imgSty}=styles;
        return(
            <Block flex={1} style={boxItem} >
                <Block flex={7} >
                    <Image
                        source={item.img}
                        style={imgSty}
                        resizeMode={'cover'}
                    />
                </Block>
                <Block flex={2}  >
                    <Block  middle  >
                        <Text h1 align={'center'} >{item.title}</Text>
                    </Block>
                    <Block>
                        <Text title align={'center'} >{item.description}</Text>
                    </Block>
                    
                    
                </Block>
            </Block>
        )
    }
        
    
    render() {
        const {btnFooter}=styles;
        


        return (
           <Block  color={'white'}>
               <Block flex={1}>

               </Block>
               <Block flex={10} >
                  
                        <FlatList
                            data={Data}
                            horizontal
                            renderItem={({item,index})=>this.renderItem(item)}
                            snapToAlignment={'center'}
                            scrollEnabled
                            pagingEnabled
                            scrollEventThrottle={16}
                            showsHorizontalScrollIndicator={false}
                        />
                 
               </Block>
                <TouchableOpacity>
                    <View   style={btnFooter} >
                       <Text  h3 white>STARTED</Text>     
                    </View>
                </TouchableOpacity>
              

           </Block>
        );
    }
}

const styles=StyleSheet.create({
    btnFooter:{
        height:50,
        backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center'
    },
    boxItem:{
        width:width-80,
        marginHorizontal:40
    },
    imgSty:{
        height:height/2+100,
        width:width-100
    }
})

