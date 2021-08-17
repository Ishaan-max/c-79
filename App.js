import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen  from './screen/homeScreen';
import ISSlocationScreen from './screen/IssLocationScreen';
import MeteorScreen from './screen/MeteorScreen';

const Stack=createStackNavigator()

export default function App() {
  
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName="home" screenOptions={{
       headerShown:false
     }}> 
     <Stack.Screen name="home"component={HomeScreen}/>
     <Stack.Screen name="ISSLocator"component={ISSlocationScreen}/>
     <Stack.Screen name="Meteor"component={MeteorScreen}/>
     </Stack.Navigator>
  </NavigationContainer>
    
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
