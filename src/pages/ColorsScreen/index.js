import React ,{useState} from 'react'

import {View} from 'react-native'


import CounterColor from '../../components/CounterColor'


function ColorsScreen(){
    const INCREMENT = 15
    const DECREMENT = -15
    

   const [red,setRed] = useState(0)
   const [green,setGreen] = useState(0)
   const [blue,setBlue] = useState(0)
    

   //funcao que valida os dados 
 function setColor(color,valor){
     switch (color) {
         case 'red':
             red + valor > 255 || red + valor < 0 ? null : setRed(red + valor)
             break;
        
         case 'green':
            green + valor > 255 || green + valor < 0 ? null : setGreen(green + valor)
            break;

         case 'blue':
            blue + valor > 255 || blue + valor < 0 ? null : setBlue(blue + valor)
            break;

         default:
             break;
     }

 }

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <CounterColor color="Red" onIncresse={()=>{setColor('red',INCREMENT)}} onDecresse={()=>{
               setColor('red',DECREMENT)
            }}  />
            <CounterColor color="Green"onIncresse={()=>{setColor('green',INCREMENT)}} onDecresse={()=>{
                setColor('green',DECREMENT)
            }}  />
            <CounterColor color="Blue" onIncresse={()=>{setColor('blue',INCREMENT)}} onDecresse={()=>{
               setColor('blue',DECREMENT)
            }}  />
            
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}>

            </View>

        </View>
    )

}

export default ColorsScreen

