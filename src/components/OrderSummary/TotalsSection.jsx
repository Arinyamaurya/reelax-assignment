import React from "react";
import styles from "./TotalsSection.module.css";

//TotalsSection
 
const TotalsSection = ({ onPay }) => {
  const subtotal = 14999;
  const tax = 1079.64;
  const total = 16078.64;
  
  const fmt = (n) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <span className={styles.rowLabel}>Subtotal</span>
        <span className={styles.rowValue}>₹{fmt(subtotal)}</span>
      </div>
      <div className={`${styles.row} ${styles.rowBorder}`}>
        <span className={styles.rowLabel}>Tax (18% GST)</span>
        <span className={styles.rowValue}>₹{fmt(tax)}</span>
      </div>
      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total due today</span>
        <span className={styles.totalAmount}>{fmt(total)}</span>
      </div>
      <button className={styles.btnPay} onClick={onPay}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default TotalsSection;
