import { useState } from "react";
import styles from '../styles/Home.module.css';
import Button from "@/components/Button";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main>
      <h1 className={styles.title}>I'm the Count(er)</h1>
      <div className={styles.buttonContainer}>
        <Button onClick={increment}>+1</Button>
        <Button onClick={decrement}>-1</Button>
      </div>
      <h2 className={styles.counter}>{count}</h2>
      <div className={styles.buttonContainer}>
        {count !== 0 &&
          <Button onClick={reset} disabled={count === 0}>
            Reset
          </Button>
        }
      </div>
    </main>
  );
}