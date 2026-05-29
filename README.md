# Checkout – Review UI  
### Frontend Assignment — Reelax

A pixel-perfect React implementation of the **Checkout Review** screen built from a Figma design. This project demonstrates clean component architecture, reusable UI patterns, and production-ready code structure.

---

## 🔗 Live Demo

[View Live on Vercel](https://reelax-assignment-vert.vercel.app/) <!-- Replace with your actual URL -->

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| CSS Modules | Scoped component styling |
| Inter (Google Fonts) | Typography matching Figma |
| Create React App | Project bootstrapping |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── App.jsx                            # Root component
├── index.js                           # React entry point
│
├── styles/
│   ├── global.css                     # CSS reset & base styles
│   └── tokens.js                      # Design tokens (colours, spacing, radii)
│
├── pages/
│   ├── CheckoutReviewPage.jsx         # Page-level layout & route handlers
│   └── CheckoutReviewPage.module.css
│
└── components/
    ├── Navbar/
    │   ├── Navbar.jsx                 # Top navigation bar
    │   └── Navbar.module.css
    │
    ├── BillingForm/
    │   ├── BillingForm.jsx            # Two-column billing info form
    │   └── BillingForm.module.css
    │
    ├── OrderSummary/
    │   ├── OrderSummary.jsx           # Right-panel composer
    │   ├── PlanCard.jsx               # Selected plan + upgrade CTA
    │   ├── WalletSection.jsx          # Wallet balance with Apply toggle
    │   ├── CouponSection.jsx          # Collapsible coupon picker
    │   ├── TotalsSection.jsx          # Subtotal / tax / total + Pay button
    │   └── *.module.css               # Per-component styles
    │
    └── common/
        ├── InputField/                # Reusable labelled text input
        ├── SelectField/               # Reusable labelled select dropdown
        └── icons/                     # SVG icon components
            ├── SearchIcon.jsx
            ├── HamburgerIcon.jsx
            ├── UserIcon.jsx
            ├── StarIcon.jsx
            └── PlusIcon.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16 or above
- npm v8 or above

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/reelax-assignment.git

# 2. Navigate into the project
cd reelax-assignment

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

The app will open at **http://localhost:3000**

### Production Build

```bash
npm run build
```

---

## ✨ Features

- ✅ Pixel-perfect match to Figma design
- ✅ Component-based architecture (every section is its own component)
- ✅ CSS Modules — fully scoped styles, zero class collisions
- ✅ Reusable `InputField` and `SelectField` common components
- ✅ Interactive coupon selector (WELCOME20 / ANNUAL50) with radio toggle
- ✅ Collapsible coupon accordion
- ✅ Wallet balance Apply toggle
- ✅ City dropdown disabled until State is selected
- ✅ Controlled form with state management
- ✅ Fully responsive — collapses to single column on mobile
- ✅ Sticky Order Summary sidebar on scroll
- ✅ Accessible markup (aria-labels, aria-expanded, roles)

---

## 🎨 Design Decisions

| Decision | Rationale |
|---|---|
| **CSS Modules** | Scoped styles per component — no class-name collisions, no runtime cost |
| **Component decomposition** | Each sub-section of Order Summary is its own file — independently testable and reusable |
| **Design tokens (`tokens.js`)** | Single source of truth for all colours, spacing, and type-scale |
| **Controlled form state** | `BillingForm` owns its own state and surfaces values via `onSave` callback, keeping the page component clean |
| **Inline SVG icons** | Zero external icon dependency — tree-shakeable and directly styleable |
| **Responsive grid** | `BillingForm` collapses to single-column at ≤560px; two-column layout stacks at ≤900px |

---

## 🎨 Colour Palette

| Colour | Hex | Used For |
|---|---|---|
| Primary Blue | `#2563eb` | Buttons, links, total amount, coupon selection |
| Dark Blue (hover) | `#1d4ed8` | Button hover states |
| Light Blue | `#eff6ff` | Wallet icon bg, selected coupon bg |
| Amber | `#f59e0b` | Upgrade button |
| Gray 900 | `#111827` | Headings, primary text |
| Gray 700 | `#374151` | Body text, labels |
| Gray 500 | `#6b7280` | Muted / secondary text |
| Gray 300 | `#d1d5db` | Input borders, dividers |
| White | `#ffffff` | Card backgrounds |
| Page BG | `#f3f4f6` | Page background |

---

## 📐 Figma Reference

[Assignment Figma File — node-id: 0-3](https://www.figma.com/design/MKdNApMQd3YFkR1DgFaTwS/Assignment?node-id=0-3)

---

## 👩‍💻 Author

**Arinya Maurya**  
Frontend Developer  

---

## 📄 License

This project was built as part of a frontend assignment for **Reelax**.
