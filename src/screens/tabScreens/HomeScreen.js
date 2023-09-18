import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import TodoList from "../../components/TodoList";
import { useNavigation } from "@react-navigation/native";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  deleteCompletedTodoReducer,
  loadTodosAsync,
  setNewTaskCreated,
} from "../../redux/todosSlices.js";

//alert
import {
  ALERT_TYPE,
  AlertNotificationRoot,
  Toast,
} from "react-native-alert-notification";

//date current
import moment from "moment";

//Icons
import { MaterialIcons } from "@expo/vector-icons";

//modal
import { DeleteConfirmationDialog } from "../../components/ModalConfirmation";

// Import the styles
import { styles } from "../../theme/homeTheme";

export default function HomeScreen() {
  const todos = useSelector((state) => state.todos.todos);
  const isToday = useSelector((state) => state.todos.todos.isToday);
  const dispatch = useDispatch();
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  const [isDeleteDialogVisible, setIsDeleteDialogVisible] = useState(false);
  const isNewTaskCreated = useSelector((state) => state.todos.isNewTaskCreated);

  //date current
  const currentDate = moment().format("DD/MM/YYYY");

  //Navigation
  const navigation = useNavigation();
  useEffect(() => {
    dispatch(loadTodosAsync());
  }, [dispatch]);

  const redirectAddTask = () => {
    navigation.navigate("AddTask");
  };
  //Alert
  useEffect(() => {
    if (isNewTaskCreated) {
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: "Success",
        backgroundColor: "#404EA0",
        textBody: "Congrats! your task was created correctly",
        titleColor: "#DADADA",
        textColor: "#333",
        time: 2000,
      });

      dispatch(setNewTaskCreated(false));
    }
  }, [isNewTaskCreated]);

  //modal
  const handleCancelDelete = () => {
    setIsDeleteDialogVisible(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteCompletedTodoReducer());
    setIsDeleteDialogVisible(false);
  };

  // funtion delete all todo

  const handleDeleteCompleted = () => {
    setIsDeleteDialogVisible(true);
    dispatch(deleteCompletedTodoReducer());
  };

  return (
    <AlertNotificationRoot style={styles.alertNotificationRoot}>
      <View style={styles.containerMain}>
        {incompleteTodos.length === 0 &&
        !todos.some((todo) => todo.isCompleted) ? (
          <View style={styles.emptyComponent}>
            <Image
              source={require("../../assets/wow.png")}
              width={10}
              height={10}
              style={styles.imageEmpty}
            />

            <Text style={styles.emptyComponentTitle}>No tasks available</Text>
            <Text style={styles.emptyComponentSubtitle}>
              To create a task press
            </Text>
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
              {incompleteTodos.length === 0 ? null : (
                <View>
                  <Text style={styles.titleDate}>{currentDate}</Text>
                  <Text style={[styles.titleNotaskIncompleted]}>
                    {incompleteTodos.length} incomplete,{" "}
                    {todos.length - incompleteTodos.length} completed
                  </Text>
                </View>
              )}
            </View>

            {incompleteTodos.length === 0 && (
              <View style={styles.containerImag}>
                <Text style={styles.noTasksMessage}>
                  You have no tasks to do.
                </Text>
                <Image
                  source={require("../../assets/homeEmpy.png")}
                  style={styles.imageEmptyHome}
                />
              </View>
            )}

            <TodoList todosData={incompleteTodos} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: -10,
              }}
            ></View>

            {todos.some((todo) => todo.isCompleted) && (
              <>
                <Text style={styles.titleNotaskIncompleted}>
                  Task completed
                </Text>
                <TodoList
                  todosData={todos.filter((todo) => todo.isCompleted)}
                />
              </>
            )}

            <TouchableOpacity onPress={redirectAddTask} style={styles.button}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>

            {todos.some((todo) => todo.isCompleted) ? (
              <TouchableOpacity
                onPress={handleDeleteCompleted}
                style={styles.buttonDeleteAll}
              >
                <MaterialIcons
                  style={{ marginLeft: 10, marginTop: 8 }}
                  name="delete-sweep"
                  size={26}
                  color="#FF97A4"
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <DeleteConfirmationDialog
              isVisible={isDeleteDialogVisible}
              onCancel={handleCancelDelete}
              onConfirm={handleConfirmDelete}
            />
          </View>
        )}
      </View>
    </AlertNotificationRoot>
  );
}
