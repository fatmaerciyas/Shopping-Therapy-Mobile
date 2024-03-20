import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import Search from "../screens/public/Home";
import Basket from "../screens/public/Home";
import Menu from "../screens/public/Home";
import Home from "../screens/public/Home";
import Register from "../screens/public/Register";
import Login from "../screens/public/Login";
import ProductDetail from "../screens/public/ProductDetail";
import { createStackNavigator } from "@react-navigation/stack";
import CartPage from "../screens/public/Cart";
import Checkout from "../screens/public/Checkout";
import AuthProvider from "../auth/auth.context";
import BottomNavigator from "./bottomNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{ headerShown: false }}
            initialParams={{
              id: undefined as
                | number
                | undefined /* default id value or undefined */,
            }}
          />
          <Stack.Screen name="Cart" component={CartPage} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="BottomNavigator"
            component={BottomNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
