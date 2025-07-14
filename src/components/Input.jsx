import styles from "./Input.module.css";

const Input = ({ handleChange, hint, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor="input">{hint}</label>
      <input value={input} type="text" id="input" onChange={handleChange} />
    </div>
  );
};

export default Input;
