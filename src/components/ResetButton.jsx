import Button from './Button';

export default function ResetButton({ count, onReset }) {
  if (count === 0) return null;

  return (
    <Button onClick={onReset}>
      Reset
    </Button>
  );
}