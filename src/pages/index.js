import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1)
  }

  function CountButton() {
    return (
      <button onClick={handleClick}>
        Push Me
      </button>
    );
  }

  return (
    <>
      <h1>
        I'm the Count(er)
      </h1>
      <CountButton />
      <h2>
        {count}
      </h2>
    </>
  );
}
