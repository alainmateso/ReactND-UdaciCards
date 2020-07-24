import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import DeckList from './views/DeckList'
import NewDeck from './views/NewDeck'
import { Entypo, FontAwesome } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { black, white } from "./utils/colors";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import Logger from 'redux-logger'
import DeckInfo from './views/DeckInfo'
import NewQuestion from "./views/NewQuestion";
import Quiz from './views/Quiz'
import { setLocalNotification } from './utils/notificationsHelper'

const store = createStore(reducer, applyMiddleware(thunk, Logger))

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        name="Deck List"
        component={DeckList}
        options={{
          tabBarIcon: () => <FontAwesome name="stack-exchange" size={24} color="black" />
        }}
      />
      <Tab.Screen
        name="Create Deck"
        component={NewDeck}
        options={{
          tabBarIcon: () => <Entypo name="new-message" size={24} color="black" />
        }}
      />
    </Tab.Navigator>
  )
}

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: white,
        headerStyle: {
          backgroundColor: black
        }
      }}
    >
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ title: 'UdaciCards' }}
      />
      <Stack.Screen
        name="DeckInfo"
        component={DeckInfo}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen
        name="Add card"
        component={NewQuestion}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
      />
    </Stack.Navigator>
  )
}

export class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <UdaciCardsStatusBar />
          <View style={styles.container}>
            <StackNavigation />
          </View>
        </NavigationContainer>
      </Provider>
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
