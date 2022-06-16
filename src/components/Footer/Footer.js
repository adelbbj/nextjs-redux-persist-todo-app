import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import Utils from "../../utils";

import styles from "./Footer.module.css";

const Footer = ({ remainingCount, completedCount, onClearCompleted }) => {
  const router = useRouter();

  const clearButton =
    completedCount > 0 ? (
      <button className={styles.clearCompleted} onClick={onClearCompleted}>
        Clear completed
      </button>
    ) : null;

  return (
    <footer className={styles.footer}>
      <div className={styles.toolbar}>
        <span className={styles.todoCount}>
          {remainingCount} {Utils.pluralize(remainingCount, "item")} left
        </span>
        <ul className={styles.filters}>
          <li>
            <Link href="/">
              <a
                className={classNames({
                  [styles.selected]: router.pathname === "/",
                })}
              >
                All
              </a>
            </Link>
          </li>{" "}
          <li>
            <Link href="/active">
              <a
                className={classNames({
                  [styles.selected]: router.pathname === "/active",
                })}
              >
                Active
              </a>
            </Link>
          </li>
        </ul>
        {clearButton}
      </div>
    </footer>
  );
};

export default React.memo(Footer);
