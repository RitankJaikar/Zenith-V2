# Zenith-V2

A minimal, high-aesthetic productivity dashboard optimized for deep focus and zero distraction. Inspired by clean digital architecture, Zenith-V2 brings tracking instruments into a unified dynamic interface using React and Tailwind CSS v4.

---

## 🚀 Core Features

- **Digital Clock:** A centralized 12-hour modern digital clock layout featuring a striking blue neon glow signature, integrated dynamic AM/PM state toggles, and unified regional local date tracking.
- **Multi-Instance Timer:** Granular focus timers featuring isolated input layout wrappers to prevent structural rendering shifts, microsecond evaluation trackers, and modular controls.
- **Multi-Instance Stopwatch:** Millisecond-precision chronometers with smooth state transformations, tabular numerical formatting to block visual stuttering, and dynamic dynamic contextual button controls.
- **Aesthetic Architecture:** A floating glassmorphic persistent navigation bar engineered with real-time backdrop blur filtering, dark mode canvas layers, and absolute structural symmetry.

---

## 🛠️ Tech Stack

- **Framework:** React (TypeScript)
- **Styling Engine:** Tailwind CSS v4 (PostCSS Injection Model)
- **State Engines:** `react-timer-hook`
- **Typography:** Google Fonts (Inter, JetBrains Mono)

---

## 📦 System Architecture

```text
src/
├── components/
│   ├── Clock.tsx         # Centralized focus engine with neon styling
│   ├── Timer.tsx         # Configuration and active countdown component
│   └── StopWatch.tsx     # Millisecond high-precision tracking module
├── utils/
│   └── timeHelpers.ts    # Tabular alignment and padding format helpers
├── index.css             # Tailwind v4 configuration directives & theme mappings
└── App.tsx               # Layout router dashboard control matrix

```

---

## ⚡ Setup & Configuration

### 1. Global Styles Integration

Ensure your core styling tokens are linked within your global `index.css` layout context to register the v4 theme properties:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  --color-bg-dark: #0a0a0a;
  --color-accent-blue: #3b82f6;
  --text-glow: rgba(59, 130, 246, 0.5);
}

.digital-font {
  font-family: var(--font-mono);
  letter-spacing: -0.05em;
}

.glow-text {
  text-shadow: 0 0 20px var(--text-glow);
}
```

### 2. External Assets

Embed the verified typographical weight links inside the header initialization block of your root directory index layer:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=JetBrains+Mono:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
```
