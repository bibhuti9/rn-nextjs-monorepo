"use client";

import styles from "../styles/index.module.css";
import { getUsers } from "../../../packages/ui/src/apis/index";

export default function Web() {
  const result = getUsers();
  return (
    <div className={styles.container}>
      <h3>{JSON.stringify(result, null, 2)}</h3>
    </div>
  );
}
