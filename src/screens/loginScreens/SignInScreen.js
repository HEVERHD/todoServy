import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Background from "../../components/Background";
import WhiteLogo from "../../components/WhiteLogo";
import { loginTheme } from "../../theme/loginTheme";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  //Navigation
  const navigation = useNavigation();

  //fuction redirect

  const redirectHome = () => {
    navigation.navigate("Drawer");
  };

  return (
    <>
      <Background />
      <View style={loginTheme.formContainer}>
        <WhiteLogo />
        <Text style={loginTheme.title}>Login</Text>
        <Text style={loginTheme.label}>Email</Text>
        <TextInput
          placeholder="enter your email"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={loginTheme.inputsFiels}
          selectionColor="white"
        />
        <Text style={loginTheme.label}>Password</Text>
        <TextInput
          placeholder="******"
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={loginTheme.inputsFiels}
          selectionColor="white"
        />

        <View style={loginTheme.textRegister}>
          <TouchableOpacity
            onPress={redirectHome}
            style={loginTheme.buttonContainer}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={loginTheme.register}>
          <TouchableOpacity activeOpacity={0.4}>
            <Text
              onPress={() => alert("Register")}
              style={[loginTheme.textRegister]}
            >
              Don't have an account? Register here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
