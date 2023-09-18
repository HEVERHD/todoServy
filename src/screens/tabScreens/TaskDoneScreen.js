import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StatusBar } from "react-native";
import TodoList from "../../components/TodoList";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAllTodoReducer,
  loadTodosAsync,
} from "../../redux/todosSlices.js";
import { DeleteConfirmationDialog } from "../../components/ModalConfirmation";
import { styles } from "../../theme/homeTheme";

export default function TaskDoneScreen() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    dispatch(loadTodosAsync());
  }, [dispatch]);

  const handleCancelDelete = () => {
    setIsDeleteDialogVisible(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteAllTodoReducer());
    setIsDeleteDialogVisible(false);
  };

  const handleDeleteAll = () => {
    setIsDeleteDialogVisible(true);
  };

  const redirectAddTask = () => {
    navigation.navigate("AddTask");
  };

  return (
    <View style={styles.containerMain}>
      <StatusBar barStyle="light-content" />
      {completedTodos.length === 0 ? (
        <View style={styles.emptyComponent}>
          <Image
            source={require("../../assets/wow.png")}
            width={10}
            height={10}
            style={styles.imageEmpty}
          />
          <Text style={styles.emptyComponentTitle}>No completed tasks</Text>
          <TouchableOpacity onPress={redirectAddTask} style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: -10,
            }}
          >
            {completedTodos.length > 0 && (
              <View>
                <Text style={styles.titleDate}>Completed Tasks</Text>
              </View>
            )}
          </View>

          <TodoList todosData={completedTodos} />
          <TouchableOpacity onPress={redirectAddTask} style={styles.button}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>

          {todos.filter((todo) => todo.isCompleted).length > 3 && (
            <TouchableOpacity
              onPress={handleDeleteAll}
              style={styles.buttonDeleteAll}
            >
              <MaterialIcons
                style={{ marginLeft: 10, marginTop: 8 }}
                name="delete-sweep"
                size={26}
                color="#FF97A4"
              />
            </TouchableOpacity>
          )}

          <DeleteConfirmationDialog
            isVisible={isDeleteDialogVisible}
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        </View>
      )}
    </View>
  );
}
