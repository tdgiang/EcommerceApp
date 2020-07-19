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
import Carousel from 'react-native-snap-carousel';

const {width,height}=Dimensions.get('window');

export default class WalkThrough extends Component {
    _renderItem({item,index}){
        const {boxItem,imgSty}=styles;
        const txtLeft=index<Data.length-1?{color:'black',fontWeight:'bold'}:{color:'gray'};
        const txtRight=index==Data.length-1?{color:'black',fontWeight:'bold'}:{color:'gray'}
        return(
            <Block flex={1} style={boxItem} >
                <Block flex={1} center   >
                    <Block  row  center >
                        <Text style={txtLeft} title>0{index+1}</Text>
                        <View style={{width:40,height:2,backgroundColor:'gray'}} ></View>
                        <Text title  style={txtRight} >0{Data.length}</Text>
                    </Block>
                </Block>
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
             
               <Block flex={10} center >
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={Data}
                        renderItem={this._renderItem}
                        sliderWidth={width}
                        itemWidth={width-100}
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
        justifyContent:'center',
        
    },
    imgSty:{
        height:height/2+100,
        width:width-100
    }
})

