import { useState } from "react";

import { Header } from "./components/Header/Header.tsx";
import { TaskList } from "./components/TaskList/TaskList.tsx";

import { TaskInterface } from "./interfaces.tsx";

export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);

  function createTask(newTask: TaskInterface) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskID: number) {
    const remainingTasks = tasks.filter((task: TaskInterface) => {
      return task.id !== taskID;
    });

    setTasks(remainingTasks);
  }

  function toggleCompleteTask(taskID: number) {
    const remainingTasks = tasks.map((task: TaskInterface) => {
      return {
        ...task,
        isCompleted: task.id === taskID ? !task.isCompleted : task.isCompleted,
      };
    });

    setTasks(remainingTasks);
  }

  return (
    <>
      <Header onCreateTask={createTask} />

      <main>
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleCompleteTask={toggleCompleteTask}
        />
      </main>
    </>
  );
}
