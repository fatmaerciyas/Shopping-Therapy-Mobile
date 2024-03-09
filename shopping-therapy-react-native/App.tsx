import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import StackNavigator from "./src/navigation/stackNavigator";

const Tab = createBottomTabNavigator();

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

export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}
