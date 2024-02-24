import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
// import {Routes, Route, useNavigate} from 'react-router-dom'
import { Button } from '@rneui/themed';
import React from 'react';
// import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';

const whiteWine = {uri: 'https://images.pexels.com/photos/51970/a-glass-of-wine-alcohol-white-wine-51970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
// const whiteWine = {uri: 'pexels-pixabay-51970.jpg'};
const redWine = {uri: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
const roseWine = {uri: 'https://images.pexels.com/photos/7283379/pexels-photo-7283379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
const bubbleWine = {uri: 'https://images.pexels.com/photos/6387836/pexels-photo-6387836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};
const sweetWine = {uri: 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

const BeginnerGuide = ({ navigation }) => {
  // let [fontsLoaded] = useFonts({
  //   AlexBrush_400Regular,
  // });
  
  //   if (!fontsLoaded) {
  //     return null;
  //   } else {
  return (
    
    <View style={styles.container}>

      <ImageBackground source={roseWine} resizeMode="cover" style={styles.image}>
      {/* <View style={styles.overlay} /> */}
      <View style={styles.content}>
      <Button
      onPress={() => navigation.navigate("RoseBuginnerGuide")}
        title="Rose Wine"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      </View>
      </ImageBackground>

      <ImageBackground source={redWine} resizeMode="cover" style={styles.image}>
      <View style={styles.content}>
        <Button
        onPress={() => navigation.navigate("RedWineBuginnerGuide")}
        title="Red Wine"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      </View>
      </ImageBackground>


      <ImageBackground source={bubbleWine} resizeMode="cover" style={styles.image}>
      <View style={styles.content}>
      <Button
        onPress={() => navigation.navigate("BubbleBuginnerGuide")}
        title="Bubbles Wine"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      </View>
      </ImageBackground>

      <ImageBackground source={whiteWine} resizeMode="cover" style={styles.image}>
      <View style={styles.content}>
      <Button
        onPress={() => navigation.navigate("WhiteWineBuginnerGuide")}
        title="White Wine"
        buttonStyle={styles.button}
          type="outline"
          titleStyle={{ color: '#960735', fontWeight: 'bold', }}
          containerStyle={{
            width: 300,
            marginVertical: 10,
          }}
      />
      </View>
      </ImageBackground>

      <ImageBackground source={sweetWine} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
        <Button
          onPress={() => navigation.navigate("SweetWineBuginnerGuide")}
          title="Sweet Wine"
          buttonStyle={styles.button}
            type="outline"
            titleStyle={{ color: '#960735', fontWeight: 'bold', }}
            containerStyle={{
              width: 300,
              marginVertical: 10,
            }}
        />
        </View>
      </ImageBackground>
      

      
      {/* </View> */}
      <StatusBar style="auto" />

    </View>
  );
};

export default BeginnerGuide;


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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
  
});

