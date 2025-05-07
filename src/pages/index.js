import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function CountButton() {
    return (
      <button className={styles.button} onClick={handleClick}>
        Push Me
      </button>
    );
  }

  return (
    <>
      <h1 className={styles.title}>I'm the Count(er)</h1>
      <CountButton />
      <h2 className={styles.counter}>{count}</h2>
    </>
  );
}