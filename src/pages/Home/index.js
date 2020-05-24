import React from 'react'
import { Text ,View,Button} from "react-native"

function Home({navigation}){

    return(
        <View>
            <Text>Bem Vindo a tela inicial</Text>
            <Button
             title="Clique para ir para lista"
            onPress={()=>{
                navigation.navigate('List')
            }}
            />

            <Button 
            title="Clique para ir para o perfil"
            onPress={()=>{
                navigation.navigate('Profile')
            }}
            />

            <Button 
            title="Clique para Ir para tela de Imagens"
            onPress={()=>{
                navigation.navigate('ImageScreen')
            }}
            />

            <Button 
            title="Clique para Ir para o Contador"
            onPress={()=>{
                navigation.navigate('Counter')
            }}
            />
            <Button 
            title="Clique para Ir para o Tela de Cores"
            onPress={()=>{
                navigation.navigate('ColorsScreen')
            }}
            />
            <Button 
            title="Clique para Ir para o Tela de texto"
            onPress={()=>{
                navigation.navigate('TextScreen')
            }}
            />
            <Button 
            title="Clique para Ir para tela de Leyout"
            onPress={()=>{
                navigation.navigate('BoxScreen')
            }}
            />

        </View>


    )

}



export default Home