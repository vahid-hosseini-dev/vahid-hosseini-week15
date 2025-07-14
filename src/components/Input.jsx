import styles from "./Input.module.css";
import { GoSearch } from "react-icons/go";

const Input = ({ handleChange, hint, input, onFocus, onBlur }) => {
  return (
    <>
      <div className={styles.input}>
        <label htmlFor="input">
          <GoSearch size={24} style={{ marginRight: 10, opacity: 1 }} />
          <span style={{ opacity: 0.3 }}>{hint}</span>{" "}
        </label>
        <input
          value={input}
          type="text"
          id="input"
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </>
  );
};

export default Input;
