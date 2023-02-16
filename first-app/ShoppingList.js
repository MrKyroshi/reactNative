import React from "react";
import { View ,Text} from "react-native";


const ShoppingList = (props) => {
    return (
        <View>
            <Text> Liste de courses :</Text>
            {props.items.map((item,index)=>(
                <Text key={index}>{item}</Text>
            ))}
        </View>
    )
}
export default ShoppingList;