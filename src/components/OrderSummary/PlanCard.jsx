import React from "react";
import styles from "./PlanCard.module.css";

//PlanCard
 
const PlanCard = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Order Summary</h2>

      {/* Plan details row */}
      <div className={styles.planBox}>
        <div className={styles.priceGroup}>
          <span className={styles.price}>₹4,999</span>
          <span className={styles.period}>/month</span>
          <p className={styles.credits}>Includes 5,000 credits/mo.</p>
        </div>
        <div className={styles.planMeta}>
          <span className={styles.planBadge}>SELECTED PLAN</span>
          <span className={styles.planName}>Startup</span>
        </div>
      </div>

      {/* Upgrade nudge */}
      <button className={styles.btnUpgrade}>
        <UpgradeIcon />
        Upgrade to Growth Plan
      </button>
    </div>
  );
};

const UpgradeIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="16 12 12 8 8 12" />
    <line x1="12" y1="16" x2="12" y2="8" />
  </svg>
);

export default PlanCard;
