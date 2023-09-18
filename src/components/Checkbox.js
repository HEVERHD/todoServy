import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { updateTodoReducer } from "../redux/todosSlices.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Checkbox({ id, title, isCompleted, isToday, hour }) {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleCheck = () => {
    try {
      dispatch(updateTodoReducer({ id, isCompleted }));
      AsyncStorage.setItem(
        "@Todos",
        JSON.stringify(
          todos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
          })
        )
      );
    } catch {}
  };

  return isToday ? (
    <TouchableOpacity
      onPress={handleCheck}
      style={isCompleted ? styles.checked : styles.unChecked}
    >
      {isCompleted && <Entypo name="check" size={16} color="#DADADA" />}
    </TouchableOpacity>
  ) : (
    <View style={styles.isToday} />
  );
}

const styles = StyleSheet.create({
  checked: {
    width: 25,
    height: 25,
    marginRight: 13,
    borderRadius: 6,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  unChecked: {
    width: 25,
    height: 25,
    marginRight: 13,
    borderWidth: 2,
    borderColor: "#0E0E11",
    borderRadius: 6,
    backgroundColor: "#2B2D37",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#262626",
    marginRight: 13,
    marginLeft: 15,
  },
});
