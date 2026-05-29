import React, { useState } from "react";
import styles from "./CouponSection.module.css";

/**
 * CouponSection
 */

const COUPONS = [
  { code: "WELCOME20", description: "20% off on your first month" },
  { code: "ANNUAL50",  description: "10% off on annual plans."  },
];

const CouponSection = ({ onCouponApply }) => {
  const [open, setOpen]               = useState(true);
  const [inputValue, setInputValue]   = useState("");
  const [selected, setSelected]       = useState("WELCOME20");

  const handleSelect = (code) => {
    setSelected(code);
    onCouponApply?.(code);
  };

  const handleManualApply = () => {
    if (inputValue.trim()) {
      handleSelect(inputValue.trim().toUpperCase());
      setInputValue("");
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Accordion header */}
      <button
        className={styles.header}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="coupon-body"
      >
        <span className={styles.headerLabel}>
          <TagIcon />
          Apply Coupon
        </span>
        <ChevronIcon open={open} />
      </button>

      {/* Accordion body */}
      {open && (
        <div id="coupon-body" className={styles.body}>
          {/* Manual entry row */}
          <div className={styles.inputRow}>
            <input
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter coupon code"
              onKeyDown={(e) => e.key === "Enter" && handleManualApply()}
            />
            <button className={styles.btnApply} onClick={handleManualApply}>
              Apply
            </button>
          </div>

          {/* Preset coupon options */}
          {COUPONS.map((coupon) => (
            <CouponOption
              key={coupon.code}
              code={coupon.code}
              description={coupon.description}
              selected={selected === coupon.code}
              onSelect={() => handleSelect(coupon.code)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

/* ── CouponOption ── */
const CouponOption = ({ code, description, selected, onSelect }) => (
  <div
    className={`${styles.option} ${selected ? styles.optionActive : ""}`}
    onClick={onSelect}
    role="radio"
    aria-checked={selected}
    tabIndex={0}
    onKeyDown={(e) => e.key === "Enter" && onSelect()}
  >
    <div>
      <span className={styles.optionCode}>{code}</span>
      <span className={styles.optionDesc}>{description}</span>
    </div>
    <div className={`${styles.radio} ${selected ? styles.radioSelected : ""}`}>
      {selected && <CheckIcon />}
    </div>
  </div>
);

/* ── Inline SVG icons ── */
const TagIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6b7280"
    strokeWidth="2"
    style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)", transition: "transform 0.2s" }}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const CheckIcon = () => (
  <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" aria-hidden="true">
    <polyline points="2 6 5 9 10 3" />
  </svg>
);

export default CouponSection;
