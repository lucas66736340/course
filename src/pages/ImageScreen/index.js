import React from 'react'

import {View,StyleSheet} from 'react-native'

import ImageFunk from '../../components/ImageFunk'

function ImageScreen(){
    const data = [
        {name:'mc dede',imgUrl:'../../assets/mcdede.jpg' },
        {name:'donas',imgUrl:'../../assets/donas.jpg'},
        {name:'toguro',imgUrl:'../../assets/toguro.jpg'},
      
    ]

    return(
        
        <View style={estilo.container}>
            <ImageFunk name={data[0].name} imageUrl={require('../../assets/mcdede.jpg')}/>
            <ImageFunk name={data[1].name} imageUrl={require('../../assets/donas.jpg')}/>
            <ImageFunk name={data[2].name} imageUrl={require('../../assets/toguro.jpg')}/>
        </View>
    )

}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        justifyContent:"center",
        alignItems:"center"
    }

})


export default ImageScreen
