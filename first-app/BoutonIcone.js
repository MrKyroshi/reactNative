
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    borderWidth:2,
    borderColor:'red',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 10,
  },
});

const MyButtonComponent = () => {
  const handlePress = () => {
    console.log('Bouton cliqué !');
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Ionicons name="md-add-circle" size={24} color="blue" style={styles.icon} />
        <Text style={styles.title}>Ajouter un élément</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButtonComponent;
