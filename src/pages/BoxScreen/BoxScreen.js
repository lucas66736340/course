import React from 'react'

import {View,StyleSheet}  from 'react-native'


function BoxScreen(){

    return(
        <View style={estilo.container}>
            <View style={estilo.box}></View>
            <View style={estilo.box2}></View>
            <View style={estilo.box}></View>
        </View>
    )

}

const estilo = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
       height:100
    },
    box:{
        width:50,
        height:50,
        backgroundColor:'grey',
    },
    box2:{
        width:50,
        height:50,
        backgroundColor:'grey', 
        alignSelf:"flex-end" 
    }


})


export default BoxScreen

