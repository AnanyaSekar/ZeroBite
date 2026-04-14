# ZeroBite
Zero food waste — every grain feeds someone or fuels something.
<div align="center">

# 🌱 ZeroBite
### *Surplus Food Redistribution Platform*

**Connect surplus food with people who need it — zero waste, maximum impact.**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-zero--bite--nine.vercel.app-22c55e?style=for-the-badge)](https://zero-bite-nine.vercel.app)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Claude AI](https://img.shields.io/badge/Claude_AI-D97706?style=for-the-badge)](https://anthropic.com)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://zero-bite-nine.vercel.app)

</div>

---

## 🎯 Problem Statement

**One-third of all food produced globally is wasted** — while millions go hungry every day. In India alone, 40% of food is wasted before it reaches the consumer. ZeroBite bridges this gap by connecting food donors with people in need, in real time.

---

## ✨ Features

### 🎁 For Donors
- **Smart Donation Form** — GPS auto-detects pickup location (like Swiggy)
- **Flexible Quantity** — Enter pieces/plates/kg/g/mg for any food type
- **AI Weight Estimator** — Take a photo, Claude AI estimates weight & freshness
- **Freshness Tracking** — Auto-updates from Fresh → Moderate → Expiring → Expired

### 🍽️ For Recipients
- **Live Food Map** — See available food near you on an interactive map
- **Real-time Updates** — Food cards update instantly as status changes
- **One-tap Claim** — Claim food with your contact shared directly to donor
- **Search & Filter** — Find food by name, location or freshness level

### ♻️ For Expired Food
- **Auto-threshold System** — When 2kg of expired food accumulates, all 4 centres are notified automatically
- **4 Redirect Options** — Biogas, Composting, Animal Feed, Vermicomposting
- **Live Map** — Shows nearest expired food bins and collection centres

### 🏆 Gamification
- **Impact Badges** — First Donor 🌱, Food Hero 🏆, Eco Warrior 🌍
- **CO₂ Tracking** — Every kg shared = 2.5 kg CO₂ saved
- **Community Feed** — Real-time activity from all users
- **Personal Stats** — Donations, claims, kg shared, CO₂ saved

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS (PWA) |
| Auth | Firebase Authentication (Google + Phone OTP) |
| Database | Firebase Firestore (Real-time) |
| Maps | Leaflet.js + OpenStreetMap |
| AI | Claude AI (claude-sonnet) via secure Vercel proxy |
| Geocoding | OpenStreetMap Nominatim API |
| Deployment | Vercel (Serverless) |
| Security | Firebase Security Rules + Server-side API proxy |

---

## 🔐 Security Architecture

```
Browser (User)
     │
     │  Firebase ID Token (JWT)
     ▼
Vercel Serverless Function (/api/estimate)
     │
     │  CLAUDE_KEY (stored in Vercel env vars — never exposed)
     ▼
Anthropic Claude API
```

- ✅ API keys stored in Vercel Environment Variables (never in client code)
- ✅ Firebase Auth protects all Firestore reads/writes
- ✅ Firestore Security Rules — users can only edit their own donations
- ✅ Phone OTP via Firebase (end-to-end encrypted by Google)

---

## 📱 PWA — Install as App

ZeroBite works as a **Progressive Web App** — no app store needed!

**iPhone Safari:**
1. Open `https://zero-bite-nine.vercel.app`
2. Tap Share → Add to Home Screen

**Android Chrome:**
1. Open the URL
2. Tap ⋮ → Add to Home Screen

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/AnanyaSekar/zerobite.git
cd zerobite

# Install Vercel CLI
npm i -g vercel

# Add your environment variable
# Create .env file:
echo "CLAUDE_KEY=your_anthropic_key_here" > .env

# Run locally
vercel dev
```

---

## 🌍 UN SDG Alignment

| Goal | How ZeroBite Helps |
|------|--------------------|
| 🥗 SDG 2 — Zero Hunger | Connects surplus food to people in need |
| ♻️ SDG 12 — Responsible Consumption | Reduces food waste at source |
| 🌱 SDG 13 — Climate Action | Each kg saved = 2.5 kg CO₂ prevented |
| 🤝 SDG 17 — Partnerships | Connects donors, recipients & waste centres |

---

## 📊 Impact Metrics

- 🍽️ **Every 1 kg donated** = ~3.5 meals served
- 🌿 **Every 1 kg donated** = 2.5 kg CO₂ saved
- ♻️ **Expired food** auto-routed to biogas/compost/animal feed centres
- 🔔 **4 centres notified** automatically when 2kg threshold is reached

---

## 🗂️ Project Structure

```
zerobite/
├── index.html          # Main PWA app (all screens)
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker (offline support)
├── vercel.json         # Vercel deployment config
├── api/
│   └── estimate.js     # Secure Claude AI proxy (serverless)
└── icons/
    ├── icon-192.png    # PWA icon
    └── icon-512.png    # PWA icon
```

---

## 👩‍💻 Built By

**Ananya Sekar**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/ananyasekar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/AnanyaSekar)

---

<div align="center">

**Made with 💚 to fight food waste**

*ZeroBite — Because every bite counts.*

</div>
