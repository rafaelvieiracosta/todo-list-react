import styles from "./Header.module.css";

import { IconLogo } from "../Icons/IconLogo";
import { IconPlus } from "../Icons/IconPlus";
import { ChangeEvent, FormEvent, useState } from "react";

import { TaskInterface } from "../../interfaces.tsx";

interface HeaderProps {
  onCreateTask: (task: TaskInterface) => void;
}

export function Header({ onCreateTask }: HeaderProps) {
  const [newTaskText, setNewTaskText] = useState("");

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    onCreateTask({
      id: new Date().getTime() + Math.floor(Math.random() * 1000),
      text: newTaskText,
      isCompleted: false,
    });

    setNewTaskText("");
  }

  const isNewTaskTextEmpty = newTaskText.trim() === "";

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <IconLogo />
      </div>

      <div className={styles["header__form-wrapper"]}>
        <form onSubmit={handleCreateNewTask} className={styles.header__form}>
          <input
            type="text"
            value={newTaskText}
            onChange={handleNewTaskTextChange}
            placeholder="Adicione uma nova tarefa"
            className={styles.header__form__input}
          />

          <button
            type="submit"
            disabled={isNewTaskTextEmpty}
            className={styles.header__form__button}
          >
            Criar <IconPlus />
          </button>
        </form>
      </div>
    </header>
  );
}
