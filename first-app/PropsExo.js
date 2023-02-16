import React from "react";
import { View,Text } from "react-native"; 


const Title = (props) =>{
    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color :'blue' }}>{props.title}</Text>
            <Text style={{ fontSize: 16, color: 'gray', color : 'aqua' }}>{props.subtitle}</Text>
        </View>
    )
}

export default Title;