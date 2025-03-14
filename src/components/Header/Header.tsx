import styles from "./Header.module.css";

import { IconLogo } from "../Icons/IconLogo";
import { IconPlus } from "../Icons/IconPlus";

export function Header() {
  const isNewTaskEmpty = false;
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <IconLogo />
      </div>

      <div className={styles["header__form-wrapper"]}>
        <form className={styles.header__form}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            className={styles.header__form__input}
          />

          <button
            type="submit"
            disabled={isNewTaskEmpty}
            className={styles.header__form__button}
          >
            Criar <IconPlus />
          </button>
        </form>
      </div>
    </header>
  );
}
