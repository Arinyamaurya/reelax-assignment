import React from "react";
import styles from "./SelectField.module.css";

//SelectField
 
const SelectField = ({
  label,
  value,
  onChange,
  placeholder,
  options = [],
  disabled = false,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      <div className={styles.selectWrap}>
        <select
          className={styles.select}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-label={label}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronIcon />
      </div>
    </div>
  );
};

const ChevronIcon = () => (
  <svg
    className="chevron"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9ca3af"
    strokeWidth="2"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default SelectField;
