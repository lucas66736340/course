import React from 'react'
import {FlatList,Text} from 'react-native' 


const FriendList = ()=>{

    const friends = [
        {name:'Lucas',age:30},
        {name:'jacinto',age:15},
        {name:'teobaldo',age:18},
        {name:'tibronquio',age:22},
        {name:'jose',age:48},
        {name:'larissa',age:47},
      
    ]
    return(
        <FlatList 
         data={friends} 
        renderItem={({item})=>{
            return <Text style={{marginVertical:30}}> {item.name} -Age {item.age}</Text>
        }} 
        keyExtractor={(item)=>item.name}
        />
    )

}

export default FriendList