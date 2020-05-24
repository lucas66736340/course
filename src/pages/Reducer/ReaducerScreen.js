import React ,{useReducer} from 'react'

import {View} from 'react-native'


import CounterColor from '../../components/CounterColor'


function reducer(state,action){
 
    switch (action.color) {
       
        case 'red':
            
        case 'green':
        case 'blue':

        default:
            
          
    }

}


//um hook adiciona uma funcionarlidade nova a um componente funcional
function ColorsScreen(){

   
   
    const [state,dispath] = useReducer(reducer,{red:0 ,green:0,blue:0})
   
   
    const INCREMENT = 15
    const DECREMENT = -15
    

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <CounterColor color="Red" onIncresse={()=>{}} onDecresse={()=>{  }}  />


            <CounterColor color="Green"onIncresse={()=>{}} onDecresse={()=>{  }}  />


            <CounterColor color="Blue" onIncresse={()=>{}} onDecresse={()=>{  }}  />
            
            <View style={{height:100,width:100,backgroundColor:`rgb(${red},${green},${blue})`}}>

            </View>

        </View>
    )

}

export default ColorsScreen

