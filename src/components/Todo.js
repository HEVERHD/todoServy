import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "./Checkbox";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoReducer } from "../redux/todosSlices";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Todo = ({ id, title, hour, descriptions, isCompleted, isToday }) => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = async () => {
    dispatch(deleteTodoReducer(id));
    try {
      await AsyncStorage.setItem(
        "@Todos",
        JSON.stringify(todos.filter((todo) => todo.id !== id))
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTask}>
        <Checkbox
          id={id}
          title={title}
          isCompleted={isCompleted}
          hour={hour}
          descriptions={descriptions}
          isToday={isToday}
        />
        <View>
          <Text
            style={
              isCompleted
                ? [
                    styles.text,
                    { textDecorationLine: "line-through", color: "#575767" },
                  ]
                : styles.text
            }
          >
            {title}
          </Text>
          <Text
            style={
              isCompleted
                ? [
                    styles.textDes,
                    { textDecorationLine: "line-through", color: "#575767" },
                  ]
                : styles.textDes
            }
          >
            {descriptions}
          </Text>
          <Text
            style={
              isCompleted
                ? [
                    styles.time,
                    { textDecorationLine: "line-through", color: "#2B2D37" },
                  ]
                : styles.time
            }
          >
            {hour}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleDeleteTodo}>
        <MaterialIcons name="delete-outline" size={24} color="#3F4EA0" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  containerTask: {
    flexDirection: "row",
    alignItems: "center",
  },

  text: {
    color: "#DADADA",
    fontWeight: "bold",
    fontSize: 15,
  },
  textDes: {
    color: "#DADADA",
    fontSize: 12,
  },

  time: {
    fontSize: 13,
    color: "#a3a3a3",
    fontWeight: "500",
  },
});

export default Todo;
