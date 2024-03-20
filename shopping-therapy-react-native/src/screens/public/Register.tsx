import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Yup from "yup";
import { ScreenContext } from "react-native-screens";
import useAuth from "../../hooks/useAuth.hook";
import { useForm } from "react-hook-form";
import { IRegisterDto } from "../../models/Auth";
import { yupResolver } from "@hookform/resolvers/yup";

const Register = () => {
  const { register } = useAuth();

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    userName: Yup.string().required("User Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Input text must be a valid email"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 character"),
    address: Yup.string().required("Address Is required"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IRegisterDto>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      address: "",
    },
  });

  const onSubmitRegisterForm = async (data: IRegisterDto) => {
    try {
      await register(
        data.firstName,
        data.lastName,
        data.userName,
        data.email,
        data.password,
        data.address
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const err = error as { data: string; status: number };
      const { status, data } = err;
      if (status === 400 || status === 409) {
        toast.error(data);
      } else {
        toast.error("An Error occurred. Please contact admins");
      }
    }
  };

  return (
    <ScrollView>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          paddingTop: 50,
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
                fontSize: 17,
                marginTop: 2,
                color: "#041E42",
              }}
            >
              Register to your Account
            </Text>
          </View>

          <View style={{ marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 30,
              }}
            >
              <Ionicons
                name="person-outline"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 6,
                  width: 300,
                  fontSize: name ? 14 : 14,
                }}
                placeholder="Firstname"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 10,
              }}
            >
              <Ionicons
                name="person"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />

              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 6,
                  width: 300,
                  fontSize: password ? 14 : 14,
                }}
                placeholder="Lastname"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 30,
              }}
            >
              <Ionicons
                name="person-outline"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 6,
                  width: 300,
                  fontSize: name ? 14 : 14,
                }}
                placeholder="Username"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 10,
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
                  marginVertical: 6,
                  width: 300,
                  fontSize: password ? 14 : 14,
                }}
                placeholder="Email"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 30,
              }}
            >
              <Ionicons
                name="pin"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 6,
                  width: 300,
                  fontSize: name ? 14 : 14,
                }}
                placeholder="Address"
              />
            </View>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 10,
                marginTop: 10,
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
                  marginVertical: 6,
                  width: 300,
                  fontSize: email ? 14 : 14,
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
            {/* <Text style={{ color: "#007FFF", fontWeight: "500" }}>
            Forgot Password
          </Text> */}
          </View>

          <View style={{ marginTop: 60 }} />

          <Pressable
            onPress={handleRegister}
            style={{
              width: 150,
              backgroundColor: "#00CCBB",
              borderRadius: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 8,
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
              Register
            </Text>
          </Pressable>

          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{ textAlign: "center", color: "gray", fontSize: 14 }}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
