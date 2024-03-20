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
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Register from "./Register";
import { baseUrl } from "../../api/url.contants";
import useAuth from "../../hooks/useAuth.hook";
import { ILoginDto } from "../../models/Auth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface LoginScreenProps {}

const Login: React.FC<LoginScreenProps> = () => {
  const { login } = useAuth();
  const navigation = useNavigation();

  const loginSchema = Yup.object().shape({
    userName: Yup.string().required("User Name is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 character"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginDto>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  const onSubmitLoginForm = async (data: ILoginDto) => {
    try {
      // setLoading(true);
      await login(data.userName, data.password);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      const err = error as { data: string; status: number };
      const { status } = err;
      if (status === 401) {
        Alert.alert("Invalid Username or Password");
      } else {
        Alert.alert("An Error occurred. Please contact admins");
      }
    }
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
        ></View>

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

export default Login;

const styles = StyleSheet.create({});
