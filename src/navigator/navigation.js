import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa tus pantallas aquí
import SignInScreen from "../screens/loginScreens/SignInScreen";
import HomeScreen from "../screens/tabScreens/HomeScreen";
import AddTodoScreen from "../screens/tabScreens/AddTodoScreen";
import StartedScreen from "../screens/getStartedScreens/getStartedScreen";
import TaskDoneScreen from "../screens/tabScreens/TaskDoneScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();
export function DrawerNavigator() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#141419",
        },
        drawerActiveTintColor: "#DADADA",
        drawerInactiveTintColor: "#888888",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: null,
          headerStyle: {
            backgroundColor: "#141419",
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#DADADA",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons name="menu" size={24} color="#DADADA" />
            </TouchableOpacity>
          ),
        }}
      />

      <Drawer.Screen
        name="TaskDoneScreen"
        component={TaskDoneScreen}
        options={{
          headerTitle: null,
          headerStyle: {
            backgroundColor: "#141419",
            elevation: 0,
          },
          headerTitleStyle: {
            color: "#DADADA",
            fontWeight: "bold",
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 15 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <Ionicons name="menu" size={24} color="#DADADA" />
            </TouchableOpacity>
          ),
        }}
        componentProps={{
          statusBarStyle: "light-content",
        }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer initialRouteName="Started">
      <Stack.Navigator>
        <Stack.Screen
          name="Started"
          component={StartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTodoScreen}
          options={{
            headerTitleAlign: "center",
            headerShown: true,
            headerStyle: {
              backgroundColor: "#141419",
            },
            headerTintColor: "#DADADA",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
