import React from "react";
import { View, StyleSheet } from "react-native";

const Background = () => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#15151C",
          width: 1000,
          height: 1100,
          top: -70,
          transform: [{ rotate: "-50deg" }],
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "#575767",
          width: 1000,
          height: 1100,
          top: -450,
          transform: [{ rotate: "-50deg" }],
        }}
      />

      <View
        style={{
          position: "absolute",
          backgroundColor: "#15151C",
          width: 1000,
          height: 1100,
          top: -450,
          transform: [{ rotate: "-70deg" }],
        }}
      />

      <View
        style={{
          position: "absolute",
          backgroundColor: "#0E0E11",
          width: 1000,
          height: 1100,
          top: -600,
          transform: [{ rotate: "-60deg" }],
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default Background;
