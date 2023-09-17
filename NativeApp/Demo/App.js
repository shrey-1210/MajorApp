import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import DashBoard from './Screens/DashBoard';
import Register from './Screens/Register';
import TestScreen from './Screens/TestScreen';
import Categories from './Screens/Categories';

export default function App() {

  const Stack=createNativeStackNavigator()
  // options={
  //   head
  // }
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitleAlign:"center",headerStyle: { backgroundColor: "white" }}} >
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="DashBoard" component={DashBoard} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
        <Stack.Screen name="Category" component={Categories} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <Home /> */}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
