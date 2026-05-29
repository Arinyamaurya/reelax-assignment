import React from "react";
import styles from "./OrderSummary.module.css";
import PlanCard from "./PlanCard";
import WalletSection from "./WalletSection";
import CouponSection from "./CouponSection";
import TotalsSection from "./TotalsSection";

//OrderSummary

const OrderSummary = ({ onPay }) => {
  return (
    <aside className={styles.stack} aria-label="Order summary">
      {/* Plan details + upgrade nudge */}
      <PlanCard />

      {/* Wallet + Coupon in one card */}
      <div className={styles.card}>
        <WalletSection />
        <CouponSection />
      </div>

      {/* Subtotal, tax, total + pay button */}
      <TotalsSection onPay={onPay} />
    </aside>
  );
};

export default OrderSummary;
