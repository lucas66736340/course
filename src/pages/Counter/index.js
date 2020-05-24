import React,{useState} from 'react'

import {View,Text,StyleSheet,Button} from 'react-native'


function Counter(){
    const vet = useState(0)
    let data = vet[0]
    let setData = vet[1]


    function incrementar(){
        setData(data+1)
    }

    function decrementar(){
        setData(data -1)
    }

    return(
        <View style={estilo.container}>
            <Text>Contador</Text>
                <Text>{data}</Text>
            <Button onPress={()=>{
                  incrementar()  
            }} title="incrementar"/>

            <Button title="decrementar" onPress={()=>{
                decrementar()
            }}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       justifyContent:"space-evenly"
       
    }

})


export default Counter