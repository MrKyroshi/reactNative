
import React from 'react';
import { View, Image, Text, StyleSheet, Button, Alert, TextInput } from 'react-native';
import BoutonIcone from './BoutonIcone';
import PropsExo from './PropsExo';
import Exo1 from './Exo1';
// import ShoppingList from './ShoppingList';
// import ExoGeoTest from './ExoGeoTest';
import ExoGeo from './ExoGeo';

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
   
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    
  },
  button:{
    margin:5,
   borderWidth :1,
  borderColor: 'black',
   display : 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   JustifyContent: 'center',
  },
  buborder:{
  borderWidth :1,
  borderColor: 'black', 

  }

});

const MyComponent = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Pop Culture </Text>
      <Image style={styles.image} source={{uri:("https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/25310/Super-Avengers-Marvel-Comic-Drawn-Art-ipad-air-wallpaper-ilikewallpaper_com_1024.jpg")}} />
      
    <View >
    <View style={styles.button}>
    <Button 
       onPress={()=>Alert.alert('Aie !!!')}
       title=" Claim Your Gift"
       color="#f194ff"
       accessibilityLabel="Learn more about this purple button" />
    </View>
      
    <View style={styles.button}>
    <Button 
       onPress={()=>Alert.alert('Aie !!!')}
       title=" Claim Your Gift"
       color="#f194ff"
       accessibilityLabel="Learn more about this purple button" />
    </View>
  </View>

    <View>
      <BoutonIcone/>
    </View>
    
      <View>
        <Exo1/>
        <PropsExo title = 'Allez les Bleus' subtitle = 'Di thoi em oi !! '/>
        {/* <ShoppingList /> */}
        <ExoGeo/>
        {/* <ExoGeoTest/> */}
      </View>
    </View>
    
  );
};

export default MyComponent;

