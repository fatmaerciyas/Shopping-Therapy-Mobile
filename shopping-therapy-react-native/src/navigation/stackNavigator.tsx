import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import Search from "../screens/Home";
import Basket from "../screens/Home";
import Menu from "../screens/Home";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import ProductDetail from "../screens/ProductDetail";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CustomTabBarIcon = ({ focused, icon, color }) => (
  <View style={{ alignItems: "center" }}>
    <Ionicons name={icon} size={30} color={color} />
    {focused && (
      <View
        style={{
          backgroundColor: "#00CCBB",
          height: 1,
          width: 40,
          borderRadius: 2,
        }}
      />
    )}
  </View>
);

export default function StackNavigator() {
  return (
    <>
      <View style={{ flex: 1, paddingTop: 0, marginTop: 0, paddingBottom: 0 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Search") {
                  iconName = focused ? "search" : "search-outline";
                } else if (route.name === "Basket") {
                  iconName = focused ? "cart" : "cart-outline";
                } else if (route.name === "Profile") {
                  iconName = focused ? "person" : "person-outline";
                } else if (route.name === "Menu") {
                  iconName = focused
                    ? "ellipsis-horizontal-circle"
                    : "ellipsis-horizontal-circle-outline";
                } else {
                  // No icon for "ProductDetail" page
                  return null;
                }

                // Return the custom tab bar icon component
                return (
                  <CustomTabBarIcon
                    focused={focused}
                    icon={iconName}
                    color={color}
                  />
                );
              },
              tabBarLabel: () => null, // Hide tabBar labels
              tabBarStyle: {
                backgroundColor: "#fff", // Set background color
                borderTopWidth: 0, // Remove top border
              },
            })}
          >
            <Tab.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Basket"
              component={Basket}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Profile"
              component={Login}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            {/* ProductDetail screen without an icon */}
            <Tab.Screen
              name="ProductDetail"
              component={ProductDetail}
              options={{ headerShown: false }}
              initialParams={{
                id: undefined as
                  | number
                  | undefined /* default id value or undefined */,
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}
