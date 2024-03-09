import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BottomNavigationProps {
  navigationItems: { name: string; icon: string; onPress: () => void }[];
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  navigationItems,
}) => {
  return (
    <View style={styles.container}>
      {navigationItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={item.onPress}
          style={styles.item}
        >
          <Ionicons name={item.icon} size={24} color="black" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
});

export default BottomNavigation;
