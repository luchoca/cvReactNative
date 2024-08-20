// HomeScreen.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/fotocv.jpeg')} style={styles.photo} />
      <Text style={styles.name}>Luciano Castro Saad</Text>
      <Button 
        title="Ver mi CV completo" 
        onPress={() => navigation.navigate('CvScreen')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  photo: {
    width: Dimensions.get('window').width * 0.5,
    height: Dimensions.get('window').width * 0.5,
    borderRadius: Dimensions.get('window').width * 0.25,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default HomeScreen;
