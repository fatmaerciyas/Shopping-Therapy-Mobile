import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Register from "./Register";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Main");
        }
      } catch (err) {
        console.log("error message", err);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        paddingTop: 40,
      }}
    >
      <View>
        <Text
          style={{
            textAlign: "center",
            color: "#00CCBB",
            fontWeight: "600",
            fontSize: 40,
          }}
        >
          OneStopShop
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 15,
              color: "#041E42",
            }}
          >
            Login In to your Account
          </Text>
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 50,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />

            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 8,
                width: 300,
                fontSize: email ? 14 : 14,
              }}
              placeholder="Enter your email"
            />
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <AntDesign
              name="lock1"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />

            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                color: "gray",
                marginVertical: 8,
                width: 300,
                fontSize: password ? 14 : 14,
              }}
              placeholder="Enter your password"
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text>
        </View>

        <View style={{ marginTop: 60 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 200,
            backgroundColor: "#00CCBB",
            borderRadius: 10,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 12,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
