import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeckList from './views/DeckList'
import NewDeck from './views/NewDeck'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { black } from "./utils/colors";

const Tab = createBottomTabNavigator();

const UdaciCardsStatusBar = () => {
  return (
    <View style={{ backgroundColor: black, height: Constants.statusBarHeight }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={black}
        translucent
      />
    </View>
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DeckList"
        component={DeckList}
        options={{
          tabBarIcon: () => <FontAwesome name="stack-exchange" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="NewDeck"
        component={NewDeck}
        options={{
          tabBarIcon: () => <Entypo name="new-message" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}

export class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <UdaciCardsStatusBar />
        <View style={styles.container}>
          <Tabs />
        </View>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {

  }
})

export default App
