
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  
});

const MyComponent = (props) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <View >
      <Text style={{textAlign :'center'}}>Nombre : {count}</Text>
      <Button title="+" onPress={handleIncrement} />
      <Button title="-" onPress={handleDecrement} />
    </View>
  );
};

export default MyComponent;