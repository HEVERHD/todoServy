import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import Todo from "./Todo";

const TodoList = ({ todosData }) => {
  const reversedTodos = [...todosData].reverse();
  return (
    <FlatList
      data={reversedTodos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <Todo {...item} />}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.divider} />}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#575767",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default TodoList;
