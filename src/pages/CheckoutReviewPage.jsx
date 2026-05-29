import React from "react";
import Navbar from "../components/Navbar/Navbar";
import BillingForm from "../components/BillingForm/BillingForm";
import OrderSummary from "../components/OrderSummary/OrderSummary";
import styles from "./CheckoutReviewPage.module.css";

/**
 * CheckoutReviewPage
 *
 * Top-level page that composes the Navbar, BillingForm and OrderSummary
 * into the two-column checkout layout.
 */
const CheckoutReviewPage = () => {
  const handleCancel = () => {
    // TODO: navigate back to plans
    console.log("Cancel clicked");
  };

  const handleSave = (formData) => {
    // TODO: submit billing details to API
    console.log("Save Details:", formData);
  };

  const handlePay = () => {
    // TODO: navigate to payment gateway
    console.log("Proceed to Payment clicked");
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.main}>
        <a href="/plans" className={styles.backLink}>
          <BackArrowIcon />
          Back to plans
        </a>

        <h1 className={styles.pageTitle}>Check out - Review</h1>

        <div className={styles.layout}>
          <BillingForm onCancel={handleCancel} onSave={handleSave} />
          <OrderSummary onPay={handlePay} />
        </div>
      </main>
    </div>
  );
};

/* ── Inline icon so the page file stays self-contained ── */
const BackArrowIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export default CheckoutReviewPage;
