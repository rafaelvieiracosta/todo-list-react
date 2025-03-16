import { MouseEvent, KeyboardEvent } from "react";

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
  function handleDeleteTask(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onDeleteTask(task.id);
  }

  function handleToggleCompleteTask() {
    onToggleCompleteTask(task.id);
  }

  function isEnterOrSpaceKey(event: KeyboardEvent) {
    return event.key === "Enter" || event.key === " ";
  }

  function handleKeyDownTaskItem(event: KeyboardEvent<HTMLDivElement>) {
    if (isEnterOrSpaceKey(event)) {
      event.preventDefault();
      onToggleCompleteTask(task.id);
    }
  }

  function handleKeyDownDeleteButton(event: KeyboardEvent<HTMLButtonElement>) {
    if (isEnterOrSpaceKey(event)) {
      event.stopPropagation();
    }
  }

  return (
    <div
      className={`
        ${styles["task-list-item"]} 
        ${task.isCompleted && styles.completed}
      `}
      onClick={handleToggleCompleteTask}
      onKeyDown={handleKeyDownTaskItem}
      tabIndex={0}
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
        onKeyDown={handleKeyDownDeleteButton}
      >
        <IconTrash />
      </button>
    </div>
  );
}
