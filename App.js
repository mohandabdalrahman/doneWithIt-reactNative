import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import * as ImagePicker from 'expo-image-picker'
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const Tweet = ({ navigation }) => (
  <Screen>
    <Text>Tweet</Text>
    <Button title="To Details" onPress={() => navigation.navigate("TweetsDetails", { id: 1 })} />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details </Text>
  </Screen>
)

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tweets" component={Tweet} />
      <Stack.Screen
        name="TweetsDetails"
        component={TweetDetails}
        options={({ route }) => ({ title: route.params.id })}
      />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{

  }}>
    <Tab.Screen name="feeds" component={Tweet} options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
    <Tab.Screen name="details" component={TweetDetails} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}

