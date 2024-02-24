import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from '@rneui/themed';
import React from 'react';
// import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';

const image = {uri: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

export default function HomeScreen({navigation}) {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.TopContent}>
        <Text style={styles.logo}>Vinum Excellence</Text>
      </View>
      
      <View style={styles.content}>
      <Button
        onPress={() => navigation.navigate("WineMenu")}
        title="Wine Menu"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      <View style={styles.space} />
      <Button
        onPress={() => navigation.navigate("RecommendationPage")}
        title="Personalized Wine Recommendations"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      </View>
      <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}


// ===========================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: '#960735',
    borderColor: '#fff',
    fontSize: 30,
    paddingLeft:10,
    paddingRight:10,
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
    textShadowRadius:10,
    textDecorationLine: 'underline',
  },
  space: {
    height: 40,
  },
  content: {
    width: '80%',
    // marginLeft: 50,
    alignItems: "center",
  },
  TopContent: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderColor: '#960735',
    borderWidth: 2,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
