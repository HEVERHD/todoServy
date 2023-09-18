import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  todos: [],
  isNewTaskCreated: false,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosReducer: (state, action) => {
      state.todos = action.payload;
    },
    addTodoReducer: (state, action) => {
      state.todos.push(action.payload);
    },
    hideCompletedReducer: (state) => {
      state.todos = state.todos.filter((todo) => !todo.isCompleted);
    },
    updateTodoReducer: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    },
    deleteTodoReducer: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    deleteAllTodoReducer: (state) => {
      state.todos = [];
    },
    setNewTaskCreated: (state, action) => {
      state.isNewTaskCreated = action.payload;
    },
  },
});

export const deleteCompletedTodoReducer = () => (dispatch, getState) => {
  const { todos } = getState().todos;
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  dispatch(setTodosReducer(incompleteTodos));
  dispatch(setNewTaskCreated(false));
};

export const loadTodosAsync = () => {
  return async (dispatch) => {
    try {
      const storedTodos = await AsyncStorage.getItem("@Todos");
      if (storedTodos !== null) {
        const todos = JSON.parse(storedTodos);
        dispatch(setTodosReducer(todos));
      }
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
    }
  };
};

export const addTodoAsync = (newTodo) => {
  return async (dispatch, getState) => {
    try {
      await AsyncStorage.setItem(
        "@Todos",
        JSON.stringify([newTodo, ...getState().todos.todos])
      );
      dispatch(addTodoReducer(newTodo));
      setTimeout(() => {
        dispatch(setNewTaskCreated(true));
      }, 1000);

      console.log("La tarea se guardó correctamente");
    } catch (error) {
      console.error("Error al añadir la nueva tarea:", error);
    }
  };
};

export const {
  setTodosReducer,
  addTodoReducer,
  hideCompletedReducer,
  updateTodoReducer,
  deleteTodoReducer,
  deleteAllTodoReducer,
} = todosSlice.actions;

export const setNewTaskCreated = (isNewTaskCreated) => {
  return {
    type: "todos/setNewTaskCreated",
    payload: isNewTaskCreated,
  };
};
export default todosSlice.reducer;
