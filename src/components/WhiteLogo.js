import React from "react";
import { View, StyleSheet, Image } from "react-native";

const WhiteLogo = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{
          width: 120,
          height: 100,
          marginTop: 60,
          opacity: 0.8,
        }}
        source={require("../assets/taskImgLogin.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default WhiteLogo;
