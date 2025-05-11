import { useState } from "react";
import styles from '../styles/Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);

  function CounterButton({ onClick, children }) {
    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    );
  }

  function ResetButton({ count }) {
    function resetCounter() {
      setCount(0)
    }

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
        <CounterButton onClick={() => setCount(count + 1)}>+1</CounterButton>
        <CounterButton onClick={() => setCount(count - 1)}>-1</CounterButton>
      </div>
      <h2 className={styles.counter}>{count}</h2>
      <div className={styles.buttonContainer}>
        <ResetButton count={count} />
      </div>
    </>
  );
}