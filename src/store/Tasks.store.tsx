import {
  Action,
  createSlice,
  Dispatch,
  MiddlewareAPI,
  PayloadAction,
} from "@reduxjs/toolkit";
import { Task } from "../interfaces";

const defaultTasks: Task[] = [
  {
<<<<<<< HEAD
    title: "Task 1",
    important: false,
    description: "This is the description for this task",
    date: "2023-04-12",
=======
    title: "Fix deployment bug",
    important: false,
    description: "Ask Dudu about the documented bug.",
    date: "2024-04-12",
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
    completed: true,
    id: "t1",
  },
  {
<<<<<<< HEAD
    title: "Task 2",
    important: true,
    description: "This is the description for this task",
    date: "2023-05-15",
=======
    title: "Code review",
    important: true,
    description: "Sit with Ya'akov and Liat about the code.",
    date: "2024-05-15",
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
    completed: true,
    id: "t2",
  },
  {
<<<<<<< HEAD
    title: "Task 3",
    important: false,
    description: "This is the description for this task",
    date: "2023-08-21",
=======
    title: "Upgrade to version 01.13",
    important: false,
    description: "Release new version.",
    date: "2024-08-21",
>>>>>>> 6121bd2978936fe6d9fc8ecdfc054434f4bb2d43
    completed: false,
    id: "t3",
  },
];

const initialState: {
  tasks: Task[];
} = {
  tasks: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")!)
    : defaultTasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addNewTask(state, action: PayloadAction<Task>) {
      state.tasks = [action.payload, ...state.tasks];
    },
    removeTask(state, action) {
      const newTasksList = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = newTasksList;
    },
    markAsImportant(state, action: PayloadAction<string>) {
      const newTaskFavorited = state.tasks.find(
        (task) => task.id === action.payload
      );
      newTaskFavorited!.important = !newTaskFavorited!.important;
    },
    editTask(state, action: PayloadAction<Task>) {
      const taskId = action.payload.id;

      const newTaskEdited: Task = state.tasks.find(
        (task: Task) => task.id === taskId
      )!;
      const indexTask = state.tasks.indexOf(newTaskEdited);
      state.tasks[indexTask] = action.payload;
    },
    toggleTaskCompleted(state, action: PayloadAction<string>) {
      const taskId = action.payload;

      const currTask = state.tasks.find((task) => task.id === taskId)!;

      currTask.completed = !currTask.completed;
    },
    deleteAllData(state) {
      state.tasks = [];
    },
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

export const tasksMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    const nextAction = next(action);

    if (tasksActions.deleteAllData.match(action)) {
      localStorage.removeItem("tasks");
      localStorage.removeItem("darkmode");
    }

    if (tasksActions.removeTask.match(action)) {
      console.log(JSON.parse(localStorage.getItem("tasks")!));
      if (localStorage.getItem("tasks")) {
        const localStorageTasks = JSON.parse(localStorage.getItem("tasks")!);
        if (localStorageTasks.length === 0) {
          localStorage.removeItem("tasks");
        }
      }
    }
    return nextAction;
  };
