import React,{useState} from 'react'

import {View,TextInput,Text} from 'react-native'


//existem dua configuraçoes que devemos fazer em todos os textInputs do nosso componente 
//autoCapitalize="none" e  autoCorrect={false}

function TextScreen(){

    const [name,setName] = useState('')

    function hadleTextInput(textValue){
       textValue.length > 5 ? alert('O texto nao pode ser maior que 5 caracteres') : setName(textValue)
    }

    return(
        <View style={{flex:1,alignItems:"center"}} >  
            <Text>Enter name: </Text>
            <TextInput autoCapitalize="none" 
            autoCorrect={false}
            value={name}
            onChangeText={(textValue)=>{hadleTextInput(textValue)}}
             style={{margin:15,borderColor:'black',borderWidth:1,width:100}}/>

                <Text>{name}</Text>
        </View>
    )

}

export default TextScreen
