import React from 'react'

import {View,Text,StyleSheet,Image} from 'react-native'

function ImageFunk({name,imageUrl}){
    return(
        <View style={estilo.container} >
            <Image style={estilo.img} source={imageUrl}/> 
            <Text style={estilo.name}>{name}</Text>
        </View>
    )

}

const estilo = StyleSheet.create({
    container:{
       width:250,
       height:150,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:5,
        justifyContent:"center",
        alignItems:'center',
        marginVertical:10,
        justifyContent:"space-around"
       

    },
    img:{
       width: 50,
       height:50,
    },
    
    name:{
        fontSize:17,
        color:'grey',
        fontWeight:'bold'
    }

    
})

export default ImageFunk



