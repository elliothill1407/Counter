import styles from '../styles/Home.module.css';

export default function Button({ onClick, disabled, children }) {
    return (
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }