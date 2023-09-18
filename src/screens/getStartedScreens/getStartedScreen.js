import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

const StartedScreen = () => {
  //Navigation
  const navigation = useNavigation();

  //fuction redirect

  const redirectHome = () => {
    navigation.navigate("Login");
  };

  return (
    <>
      <View style={styles.containerMain}>
        <View
          style={{
            height: 193,
            flexShrink: 0,
            marginTop: 130,
            marginBottom: 65,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/welcome.png")}
            style={styles.imageEmpty}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "#DADADA",
              textAlign: "center",
            }}
          >
            Welcome to the app!
          </Text>
          <Text
            style={{
              fontSize: 12,
              marginHorizontal: 40,
              justifyContent: "center",

              color: "#DADADA",
              textAlign: "center",
              marginBottom: 80,
            }}
          >
            Please login or register in order to continue using our services.
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={redirectHome}
            style={styles.button}
          >
            <Text style={{ color: "#DADADA" }}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StartedScreen;

const styles = StyleSheet.create({
  containerMain: { backgroundColor: "#141419", flex: 1, paddingTop: 80 },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    height: 46,
    marginHorizontal: 30,
    borderRadius: 8,
  },
});
