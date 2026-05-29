import React from "react";
import styles from "./InputField.module.css";

//InputField

const InputField = ({
  label,
  optional = false,
  type = "text",
  value,
  onChange,
  placeholder,
  maxLength,
  disabled = false,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {optional && <span className={styles.optional}> (Optional)</span>}
      </label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        aria-label={label}
      />
    </div>
  );
};

export default InputField;
