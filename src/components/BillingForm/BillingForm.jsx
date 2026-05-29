import React, { useState } from "react";
import styles from "./BillingForm.module.css";
import InputField from "../common/InputField/InputField";
import SelectField from "../common/SelectField/SelectField";

//BillingForm


const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
  "Uttarakhand", "West Bengal",
];

const CITIES_BY_STATE = {
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
  Karnataka: ["Bengaluru", "Mysuru", "Hubli"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
};

const initialForm = {
  companyName: "abhigyan",
  email: "abhigyan.pandey@gettreelax.com",
  gstNumber: "",
  panNumber: "",
  premiseHouseNo: "",
  street: "",
  state: "",
  city: "",
  country: "India",
  pinCode: "",
};

const BillingForm = ({ onCancel, onSave }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
      // Reset city when state changes
      ...(field === "state" ? { city: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave?.(form);
  };

  const cityOptions =
    form.state && CITIES_BY_STATE[form.state]
      ? CITIES_BY_STATE[form.state]
      : [];

  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Review your details</h2>
      <h3 className={styles.sectionTitle}>Billing Information</h3>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.grid}>
          <InputField
            label="Company Name"
            value={form.companyName}
            onChange={handleChange("companyName")}
            placeholder="Company name"
          />
          <InputField
            label="Email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            placeholder="Email address"
          />
          <InputField
            label="GST Number"
            optional
            value={form.gstNumber}
            onChange={handleChange("gstNumber")}
            placeholder="GST Number"
          />
          <InputField
            label="PAN Number"
            optional
            value={form.panNumber}
            onChange={handleChange("panNumber")}
            placeholder="PAN Number"
          />
          <InputField
            label="Premise/House no."
            value={form.premiseHouseNo}
            onChange={handleChange("premiseHouseNo")}
            placeholder="Premise/House no."
          />
          <InputField
            label="Street"
            value={form.street}
            onChange={handleChange("street")}
            placeholder="Street"
          />
          <SelectField
            label="State"
            value={form.state}
            onChange={handleChange("state")}
            placeholder="Select state"
            options={INDIAN_STATES}
          />
          <SelectField
            label="City"
            value={form.city}
            onChange={handleChange("city")}
            placeholder="Select city"
            options={cityOptions}
            disabled={!form.state}
          />
          <InputField
            label="Country"
            value={form.country}
            onChange={handleChange("country")}
            placeholder="Country"
          />
          <InputField
            label="Pin Code"
            value={form.pinCode}
            onChange={handleChange("pinCode")}
            placeholder="Pincode"
            maxLength={6}
          />
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.btnCancel}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className={styles.btnSave}>
            Save Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
