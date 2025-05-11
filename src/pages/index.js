import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }

  function decrementCounter() {
    setCount(count - 1);
  }

  function resetCounter() {
    setCount(0)
  }

  function IncreaseButton() {
    return (
      <button className={styles.button} onClick={incrementCounter}>
        +1
      </button>
    );
  }

  function DecreaseButton() {
    return (
      <button className={styles.button} onClick={decrementCounter}>
        -1
      </button>
    );
  }

  function ResetButton({ count }) {
    return (count != 0 &&
      <button className={styles.button} onClick={resetCounter}>
        Reset
      </button>
    )
  }

  return (
    <>
      <h1 className={styles.title}>I'm the Count(er)</h1>
      <div className={styles.buttonContainer}>
        <IncreaseButton />
        <DecreaseButton />
      </div>
      <h2 className={styles.counter}>{count}</h2>
      <div className={styles.buttonContainer}>
        <ResetButton count={count} />
      </div>
    </>
  );
}