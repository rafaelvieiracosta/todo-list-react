import { useState } from "react";

import { Header } from "./components/Header/Header.tsx";

import { Task } from "./interfaces.tsx";

export function App() {
  const [tasks, setTasks] = useState<Task[]>;

  function createTask(newTask: Task) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskID: number) {
    const remainingTasks = tasks.filter((task: Task) => {
      return task.id !== taskID;
    });

    setTasks(remainingTasks);
  }

  return (
    <>
      <Header onCreateTask={createTask} />
      <h1>todo list</h1>
    </>
  );
}
