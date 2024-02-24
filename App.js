// import { StatusBar } from 'expo-status-bar';
// import { ImageBackground, StyleSheet, Text, View, Dimensions } from 'react-native';
// import { Button } from '@rneui/themed';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/homeScreen';
import BeginnerGuide from './screens/BeginnerGuide'; 
import RecommendationPage from './screens/RecommendationPage'; 
import WineMenu from './screens/WineMenu';
import WineLoverSelection from './screens/wineLoverOldNew';
import BubbleBG from './screens/BubblesBG';
import WhiteWineBG from './screens/WhiteWineBG';
import SweetWineBG from './screens/SweetWineBG';
import RoseBG from './screens/RoseBG';
import RedWineBG from './screens/RedWineBG';
// import { useFonts, AlexBrush_400Regular } from '@expo-google-fonts/alex-brush';

const image = {uri: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: 'Welcome to Vinum Excellence'}}
        />
        <Stack.Screen
          name="BeginnerGuide"
          component={BeginnerGuide}
          options={{title: 'Beginner Guide'}}
        />
        <Stack.Screen
          name="RecommendationPage"
          component={RecommendationPage}
          options={{title: 'Recommendation Page'}}
        />
        <Stack.Screen
          name="WineMenu"
          component={WineMenu}
          options={{title: 'Wine Menu'}}
        />
        <Stack.Screen
          name="WineLoverSelection"
          component={WineLoverSelection}
          options={{title: 'Wine Lover Selection'}}
        />
        <Stack.Screen
          name="WhiteWineBuginnerGuide"
          component={WhiteWineBG}
          options={{title: 'Beginner Guide > White Wine Buginner Guide'}}
        /> 
        <Stack.Screen
          name="RedWineBuginnerGuide"
          component={RedWineBG}
          options={{title: 'Beginner Guide > Red Wine Buginner Guide'}}
        />
        <Stack.Screen
          name="SweetWineBuginnerGuide"
          component={SweetWineBG}
          options={{title: 'Beginner Guide > Sweet Wine Buginner Guide'}}
        />
        <Stack.Screen
          name="RoseBuginnerGuide"
          component={RoseBG}
          options={{title: 'Beginner Guide > Rose Buginner Guide'}}
        />
        <Stack.Screen
          name="BubbleBuginnerGuide"
          component={BubbleBG}
          options={{title: 'Beginner Guide > Bubble Buginner Guide'}}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
  </NavigationContainer>
  );
}