import React, { useState } from "react";
import styles from "./WalletSection.module.css";

//WalletSection
 
const WalletSection = ({ onApply }) => {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied((prev) => !prev);
    onApply?.(!applied);
  };

  return (
    <div className={styles.row}>
      <div className={styles.left}>
        <div className={styles.iconWrap} aria-hidden="true">
          <WalletIcon />
        </div>
        <div>
          <p className={styles.name}>Wallet Balance</p>
          <p className={styles.balance}>₹500.00 available</p>
        </div>
      </div>
      <button
        className={applied ? styles.btnApplied : styles.btnApply}
        onClick={handleApply}
        aria-pressed={applied}
      >
        {applied ? "Applied ✓" : "Apply"}
      </button>
    </div>
  );
};

const WalletIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563eb"
    strokeWidth="2"
  >
    <rect x="2" y="7" width="20" height="14" rx="2.5" />
    <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
    <circle cx="16" cy="14" r="1.5" fill="#2563eb" stroke="none" />
  </svg>
);

export default WalletSection;
