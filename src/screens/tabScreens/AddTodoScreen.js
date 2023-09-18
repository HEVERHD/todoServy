import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { addTodoAsync } from "../../redux/todosSlices";
import { useNavigation } from "@react-navigation/native";
import TimePicker from "../../components/DataPicker.js";

import { setNewTaskCreated } from "../../redux/todosSlices.js";

//icons
import { Ionicons } from "@expo/vector-icons";

//alert
import { ALERT_TYPE, Toast } from "react-native-alert-notification";

// Import the styles
import { styles } from "../../theme/addTodoTheme";

export default function AddTodoScreen() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptions, setdescriptions] = useState("");
  const [descriptionsError, setDescriptionsError] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const [isToday, setIsToday] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isNewTaskCreated = useSelector((state) => state.todos.isNewTaskCreated);

  const clearInputs = () => {
    setTitle("");
    setdescriptions("");
    setSelectedHour("");
    setIsToday(true);
  };

  //Navigation
  const navigation = useNavigation();

  //redux
  const listTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  //validation
  const validateInputsTitle = () => {
    let isValid = true;
    if (title.trim() === "") {
      setTitleError("Title is required");
      isValid = false;
    } else if (title.includes(".")) {
      setTitleError("Title cannot contain points");
      isValid = false;
    } else {
      setTitleError("");
    }

    return isValid;
  };

  const validateInputsDescriptions = () => {
    let isValid = true;
    if (descriptions.trim() === "") {
      setDescriptionsError("Description is required");
      isValid = false;
    } else if (descriptions.includes(".")) {
      setDescriptionsError("Description cannot contain points");
      isValid = false;
    } else {
      setDescriptionsError("");
    }

    return isValid;
  };

  //funtions
  const handleAddTodo = async () => {
    setIsLoading(true);
    const isTitleValid = validateInputsTitle();
    const isDescriptionsValid = validateInputsDescriptions();

    if (!isTitleValid || !isDescriptionsValid) {
      setIsLoading(false);
      return;
    }
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      descriptions: descriptions,
      hour: selectedHour,
      isToday: true,
      isCompleted: false,
    };
    try {
      dispatch(addTodoAsync(newTodo));

      setTimeout(() => {
        clearInputs();
        setIsLoading(false);
        navigation.navigate("Home");
      }, 1000);
    } catch (e) {
      console.error("Error add task err", e);
    }
  };

  return (
    <View style={styles.containerMain}>
      <View style={styles.imageBack}>
        <Image
          source={require("../../assets/task.png")}
          width={10}
          height={10}
          style={styles.imageEmpty}
        />
      </View>

      <ScrollView
        style={styles.containerSw}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleMain}>
          <Text style={styles.titleAdd}>Welcome to Onboard!</Text>
          <Text style={styles.titleAddSub}>
            Let’s help to meet up your tasks.{" "}
          </Text>
        </View>
        <View>
          <Text style={styles.inputTitle}>Title </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Task"
            placeholderTextColor="#575767"
            onChangeText={(title) => {
              setTitle(title);
              setTitleError("");
            }}
          />
          {titleError ? (
            <Text style={styles.errorText}>{titleError}</Text>
          ) : null}
        </View>
        <View>
          <Text style={styles.inputTitle}>Descriptions </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Descriptions"
            placeholderTextColor="#575767"
            onChangeText={(descriptions) => {
              setdescriptions(descriptions);
              setDescriptionsError("");
            }}
          />
        </View>
        {descriptionsError ? (
          <Text style={styles.errorTextDescriptions}>{descriptionsError}</Text>
        ) : null}
        <View>
          <Text style={styles.inputTitle}>Hour </Text>
          <TimePicker
            selectedHour={selectedHour}
            onHourChange={(hour) => {
              setSelectedHour(hour);
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={handleAddTodo}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={{ color: "#DADADA" }}>Done</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
