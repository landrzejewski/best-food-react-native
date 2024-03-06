import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import DishesInCategoryScreen from './screens/DishesInCategoryScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SparklesIcon, ShoppingCartIcon} from 'react-native-heroicons/micro';
import CartScreen from './screens/CartScreen';
import {CartContextProvider} from './store/CartContext';
import axios from 'axios';
import Counter from './store/counter/Counter';
import {Provider} from 'react-redux';
import store from './store/counter/store';
import Hooks from "./store/Hooks";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FoodStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'rgb(43, 59, 90)'},
        headerTintColor: 'white',
        contentStyle: {backgroundColor: 'rgb(55, 67, 82)'},
      }}>
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All categories',
        }}
      />
      <Stack.Screen
        name="DishesInCategory"
        component={DishesInCategoryScreen}
        /*options={({route}) => {
          const categoryName = route.params.category.title;
          return {
            title: categoryName + ' dishes',
          };
        }}*/
      />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FoodStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <SparklesIcon color={color} fill={color} size={16} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <ShoppingCartIcon color={color} fill={color} size={16} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const fetch = async () => {
    const url =
      'https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&units=metric&APPID=b933866e6489f58987b2898c89f542b8&q=warsaw';
    try {
      const response = await axios.get(url);
      console.log(response.data);
    } catch (e) {
      console.log('Fetch error: ' + e.status);
    }
  };

  return (
    <Hooks/>

    /*<Provider store={store}>
      <Counter />
    </Provider>*/

    /*<SafeAreaView style={{flex: 1}}>
      <Button title="Fetch" onPress={fetch} />
    </SafeAreaView>*/

   /*<NavigationContainer>
      <CartContextProvider>
        <BottomTabs />
      </CartContextProvider>
    </NavigationContainer>*/
  );
};

export default App;
