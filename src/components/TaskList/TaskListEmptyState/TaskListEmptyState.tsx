import styles from "./TaskListEmptyState.module.css";

import clipboardImage from "../../../assets/images/clipboard.png";

export function TaskListEmptyState() {
  return (
    <div className={styles["task-list-empty-state"]}>
      <img src={clipboardImage} alt="" width="56" height="56" />

      <p className={styles["task-list-empty-state__title"]}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p className={styles["task-list-empty-state__description"]}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
