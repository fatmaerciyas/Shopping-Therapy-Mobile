import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import StackNavigator from "./src/navigation/stackNavigator";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StackNavigator />
    </>
  );
}
