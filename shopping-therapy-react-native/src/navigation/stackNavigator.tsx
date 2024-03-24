import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/public/Home";
import Register from "../screens/public/Register";
import Login from "../screens/public/Login";
import ProductDetail from "../screens/public/ProductDetail";
import { createStackNavigator } from "@react-navigation/stack";
import CartPage from "../screens/public/Cart";
import Checkout from "../screens/public/Checkout";
import AuthProvider from "../auth/auth.context";
import BottomNavigator from "./bottomNavigator";
import WelcomePage from "../screens/dashboard/User/WelcomePage";
import WelcomeAdmin from "../screens/dashboard/Admin/WelcomeAdmin";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
              initialParams={{
                id: undefined as number | undefined,
              }}
            />
            <Stack.Screen
              name="CartPage"
              component={CartPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={WelcomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeAdmin"
              component={WelcomeAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BottomNavigator"
              component={BottomNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </AuthProvider>
        <BottomNavigator />
      </NavigationContainer>
    </>
  );
}
