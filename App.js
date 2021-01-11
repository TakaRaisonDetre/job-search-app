import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import {Provider} from 'react-redux'
import store from './store'

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingScreen from './screens/SettingScreen';
import ReviewScreen from './screens/ReviewScreen'


class App extends React.Component {
  
render(){

  enableScreens();
  const ReviewStack = createNativeStackNavigator();

  const ReviewStackScreen =() =>{
  return(
   <ReviewStack.Navigator>
       <ReviewStack.Screen name="review" component={ReviewScreen} options={ReviewScreen.navigationOptions}/>
       <ReviewStack.Screen name="setting" component={SettingScreen}/>
      
    </ReviewStack.Navigator>
    )
    
  } 


  const MainTab = createBottomTabNavigator();
  const MainTabScreen = ()=>{
    return (
      <MainTab.Navigator>
      <MainTab.Screen name="map" component={MapScreen}/ >
      <MainTab.Screen name="deck" component={DeckScreen}/ >
      <MainTab.Screen name="review" component={ReviewStackScreen} />  
      </MainTab.Navigator>  
    );
  }  
  const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="welcome" component={WelcomeScreen} />
        <Tab.Screen name="auth" component={AuthScreen} /> 
        <Tab.Screen name="main" component={MainTabScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
