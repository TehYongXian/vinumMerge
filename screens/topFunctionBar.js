import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native';
import { Button } from '@rneui/themed';
import React, { useState } from 'react';
// import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';

const image = {uri: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

export default function TopFunctionBar({navigation}) {
    const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    
    <View style={styles.container}>
      <View style={styles.topBar}>
      <TouchableOpacity style={styles.button}>
        {/* <Ionicons name="ios-arrow-back" size={24} color="black" /> */}
        <Button
          title={'Filter'}
          onPress={toggleSidebar} 
          containerStyle={{
            height: 50,
            width: 100,
          }}
          iconRight
          titleStyle={{ color: '#000', fontWeight: 'bold', }}
        />
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity style={styles.button}>
        {/* <Ionicons name="ios-settings" size={24} color="black" /> */}
        <Button
          title={'search'}
          // icon={{
          //   name: 'user',
          //   type: 'font-awesome',
          //   size: 15,
          //   color: 'white',
          // }}
          containerStyle={{
            height: 50,
            width: 100,
          }}
          iconRight
          titleStyle={{ color: '#000', fontWeight: 'bold', }}
        />
      </TouchableOpacity>
    </View>

    </View>
  );
}


// ===========================================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
  space: {
    width: 20,
    height: 40,
  },
  
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 50,
  },
});
