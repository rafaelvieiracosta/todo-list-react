import styles from "./TaskListHeader.module.css";

import { TaskInterface } from "../../../interfaces";

export interface TaskListHeaderProps {
  tasks: TaskInterface[];
}

export function TaskListHeader({ tasks }: TaskListHeaderProps) {
  const tasksCreated = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div className={styles["task-list-header"]}>
      <p
        className={`
        ${styles["task-list-header__item"]}
        ${styles["item--tasks-created"]}
      `}
      >
        Tarefas criadas
        <span className={styles["task-list-header__item__number"]}>
          {tasksCreated}
        </span>
      </p>

      <p
        className={`
        ${styles["task-list-header__item"]}
        ${styles["item--completed"]}
      `}
      >
        Concluídas
        <span className={styles["task-list-header__item__number"]}>
          {completedTasks ? `${completedTasks} de ${tasksCreated}` : "0"}
        </span>
      </p>
    </div>
  );
}
