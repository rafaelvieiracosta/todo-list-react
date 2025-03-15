import { TaskInterface } from "../../interfaces";

export interface TaskProps {
  task: TaskInterface;
  onDeleteTask: (taskID: number) => void;
  onToggleCompleteTask: (taskID: number) => void;
}

export function Task({ task, onDeleteTask, onToggleCompleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleCompleteTask() {
    onToggleCompleteTask(task.id);
  }

  return (
    <div style={{ color: "white" }}>
      <p>{task.id}</p>
      <p>{task.text}</p>
      <p>{`${task.isCompleted}`}</p>
      <button onClick={handleDeleteTask}>deletar</button>
      <button onClick={handleCompleteTask}>completar</button>
    </div>
  );
}
