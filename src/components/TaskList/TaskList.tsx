import styles from "./TaskList.module.css";

import { TaskInterface } from "../../interfaces";

import { TaskListHeader } from "./TaskListHeader/TaskListHeader";
import { TaskListEmptyState } from "./TaskListEmptyState/TaskListEmptyState";
import { TaskListItem } from "./TaskListItem/TaskListItem";

export interface TaskListProps {
  tasks: TaskInterface[];
  onDeleteTask: (taskID: number) => void;
  onToggleCompleteTask: (taskID: number) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onToggleCompleteTask,
}: TaskListProps) {
  return (
    <div className={styles["task-list"]}>
      <TaskListHeader tasks={tasks} />

      {!tasks.length && <TaskListEmptyState />}
      {tasks.length > 0 && (
        <ul className={styles["task-list__list"]}>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <TaskListItem
                  task={task}
                  onDeleteTask={onDeleteTask}
                  onToggleCompleteTask={onToggleCompleteTask}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
