import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/public/Home";
import Register from "../screens/public/Register";
import { Menu, Search } from "react-native-feather";
import CartPage from "../screens/public/Cart";
import Checkout from "../screens/public/Checkout";
import Login from "../screens/public/Login";
import ProductDetail from "../screens/public/ProductDetail";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

const BottomNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
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
          <CustomTabBarIcon focused={focused} icon={iconName} color={color} />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: "#00CCBB", // Set active tab icon color
      inactiveTintColor: "#00CCBB", // Set inactive tab icon color
      style: {
        backgroundColor: "#fff", // Set background color of the tab bar
      },
    }}
  >
    {/* Define your bottom tab screens */}
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
      component={CartPage}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Tab.Screen
      name="Checkout"
      component={Checkout}
      options={{ headerShown: false, presentation: "modal" }}
    />
    <Tab.Screen
      name="Profile"
      component={Login}
      options={{ headerShown: false }}
    />
    <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
    {/* ProductDetail screen without an icon */}
    <Tab.Screen
      name="ProductDetail"
      component={ProductDetail}
      options={{ headerShown: false }}
      initialParams={{
        id: undefined as number | undefined /* default id value or undefined */,
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigator;
