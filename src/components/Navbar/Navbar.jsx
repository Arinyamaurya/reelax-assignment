import React from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "../common/icons/SearchIcon";
import HamburgerIcon from "../common/icons/HamburgerIcon";
import UserIcon from "../common/icons/UserIcon";
import StarIcon from "../common/icons/StarIcon";
import PlusIcon from "../common/icons/PlusIcon";

// Navbar

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      {/* Search */}
      <div className={styles.searchBar}>
        <SearchIcon className={styles.searchIcon} />
        <span className={styles.searchPlaceholder}>
          Find influencers to collaborate with
        </span>
      </div>

      {/* Right-side actions */}
      <nav className={styles.actions} aria-label="Top navigation actions">
        <button className={styles.btnUpgrade} aria-label="Upgrade plan">
          <StarIcon />
          Upgrade
        </button>

        <button className={styles.btnCampaign} aria-label="Create new campaign">
          <PlusIcon />
          Create Campaign
        </button>

        <div className={styles.avatar} aria-label="User profile">
          <UserIcon />
        </div>

        <button className={styles.menuBtn} aria-label="Open menu">
          <HamburgerIcon />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
