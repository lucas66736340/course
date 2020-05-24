import React from 'react'

import {View,Button} from 'react-native'


//quando queremos que um componente filho mude o estado do componente pai devemos passar
//defemos passar  funcao de estado dentro  de uma funcao de callback
function CounterColor({color,onIncresse,onDecresse}){
    return(
        <View>
            <Button title={`Incresse ${color}`} onPress={()=>{
                onIncresse()
            }} />  


            <Button  title={`Decresse ${color}`} onPress={()=>{
               onDecresse()
            }} />    
        </View>
    )
}

export default CounterColor


