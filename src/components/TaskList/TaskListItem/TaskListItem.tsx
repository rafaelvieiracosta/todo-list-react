import styles from "./TaskListItem.module.css";

import { TaskInterface } from "../../../interfaces";

import { IconTrash } from "../../Icons/IconTrash";
import { IconCheckmark } from "../../Icons/IconCheckmark";

export interface TaskListItemProps {
  task: TaskInterface;
  onDeleteTask: (taskID: number) => void;
  onToggleCompleteTask: (taskID: number) => void;
}

export function TaskListItem({
  task,
  onDeleteTask,
  onToggleCompleteTask,
}: TaskListItemProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleCompleteTask() {
    onToggleCompleteTask(task.id);
  }

  return (
    <div
      className={`
        ${styles["task-list-item"]} 
        ${task.isCompleted && styles.completed}
      `}
      onClick={handleToggleCompleteTask}
    >
      <div className={styles["task-list-item__checkbox-wrapper"]}>
        <div className={styles["task-list-item__checkbox"]}>
          <IconCheckmark />
        </div>
      </div>

      <p className={styles["task-list-item__text"]}>{task.text}</p>

      <button
        className={styles["task-list-item__button"]}
        onClick={handleDeleteTask}
      >
        <IconTrash />
      </button>
    </div>
  );
}
