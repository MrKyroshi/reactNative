import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

const Exercice1 = () => {
const [data, setData] = useState([]);

useEffect(() => {
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => setData(json))
.catch(error => console.error(error));
}, []);

const renderItem = ({ item }) => (
<View>
<Text>{item.title}</Text>
</View>
);

return (
<FlatList
data={data}
renderItem={renderItem}
keyExtractor={item => item.id.toString()}
/>
);
};

export default Exercice1;