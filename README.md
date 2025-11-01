# 🚨 Emergency UI Design System

A professional, accessible design system for emergency and crisis management interfaces. Built by FloodArk AI for disaster response applications.

[![npm version](https://badge.fury.io/js/%40ronfloodark%2Femergency-ui.svg)](https://badge.fury.io/js/%40ronfloodark%2Femergency-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![WCAG AA](https://img.shields.io/badge/WCAG-AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

## 🎯 Purpose

Emergency UI provides a comprehensive design system specifically crafted for:
- **Emergency Management Systems** - Command centers, dispatch systems
- **Crisis Response Applications** - Real-time monitoring, alert systems  
- **Disaster Preparedness Tools** - Risk assessment, evacuation planning
- **Public Safety Interfaces** - Warning systems, emergency communications

## ✨ Features

### 🎨 **Professional Emergency Design**
- **Premium neutral dark theme** optimized for 24/7 operations
- **Emergency severity color system** (critical/warning/good/info)
- **High-contrast accessibility** with WCAG AA compliance
- **Mobile-first responsive design** for field emergency responders

### 🧩 **Complete Component Library**
- **Buttons** - Primary, secondary, critical, warning, success variants
- **Panels** - Collapsible, modal, dashboard layouts with real-time updates
- **Badges** - Status indicators, severity levels, notification counts
- **Forms** - Search, filters, data entry optimized for stress situations

### ⚡ **Emergency-Optimized Features**
- **Touch-friendly targets** (minimum 44px) for mobile emergency response
- **Reduced motion support** for accessibility
- **High-stress readability** with optimized typography and spacing
- **Real-time update animations** for live emergency data

## 🚀 Quick Start

### Installation

```bash
npm install @ronfloodark/emergency-ui
```

### Basic Usage

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@floodark-ron/emergency-ui/dist/emergency-ui.css">
</head>
<body>
  <!-- Emergency Alert Button -->
  <button class="emergency-btn emergency-btn-critical">
    🚨 Emergency Alert
  </button>
  
  <!-- Status Panel -->
  <div class="emergency-panel emergency-panel-warning">
    <div class="emergency-panel-header">
      <h3 class="emergency-panel-title">
        Weather Warning
        <span class="emergency-panel-badge">ACTIVE</span>
      </h3>
    </div>
    <div class="emergency-panel-content">
      <p>Severe thunderstorm warning in effect.</p>
    </div>
  </div>
</body>
</html>
```

### CSS Import

```css
@import '@floodark-ron/emergency-ui/dist/emergency-ui.css';
```

### JavaScript Frameworks

```jsx
// React
import '@floodark=ron/emergency-ui/dist/emergency-ui.css';

function EmergencyAlert() {
  return (
    <button className="emergency-btn emergency-btn-critical">
      Emergency Alert
    </button>
  );
}
```

```vue
<!-- Vue -->
<template>
  <button class="emergency-btn emergency-btn-critical">
    Emergency Alert
  </button>
</template>

<style>
@import '@floodark-ron/emergency-ui/dist/emergency-ui.css';
</style>
```

## 📚 Components

### 🔘 Buttons

Emergency-optimized buttons with proper touch targets and accessibility.

```html
<!-- Primary Actions -->
<button class="emergency-btn emergency-btn-primary">Primary Action</button>
<button class="emergency-btn emergency-btn-secondary">Secondary Action</button>

<!-- Emergency Severity -->
<button class="emergency-btn emergency-btn-critical">🚨 Critical Alert</button>
<button class="emergency-btn emergency-btn-warning">⚠️ Warning</button>
<button class="emergency-btn emergency-btn-success">✅ All Clear</button>

<!-- Sizes -->
<button class="emergency-btn emergency-btn-primary emergency-btn-sm">Small</button>
<button class="emergency-btn emergency-btn-primary emergency-btn-lg">Large</button>

<!-- States -->
<button class="emergency-btn emergency-btn-primary" disabled>Disabled</button>
<button class="emergency-btn emergency-btn-primary emergency-btn-loading">Loading</button>
```

### 📋 Panels

Professional panels for emergency data display and real-time monitoring.

```html
<!-- Basic Panel -->
<div class="emergency-panel">
  <div class="emergency-panel-header">
    <h3 class="emergency-panel-title">
      System Status
      <span class="emergency-panel-badge">LIVE</span>
    </h3>
  </div>
  <div class="emergency-panel-content">
    <p>All systems operational</p>
  </div>
  <div class="emergency-panel-footer">
    <span>Last updated: 2 min ago</span>
    <button class="emergency-btn emergency-btn-primary emergency-btn-sm">Refresh</button>
  </div>
</div>

<!-- Emergency Variants -->
<div class="emergency-panel emergency-panel-critical">
  <div class="emergency-panel-header">
    <h3 class="emergency-panel-title">CRITICAL ALERT</h3>
  </div>
  <div class="emergency-panel-content">
    <p>Immediate action required</p>
  </div>
</div>

<!-- Collapsible Panel -->
<div class="emergency-panel emergency-panel-collapsible">
  <div class="emergency-panel-header">
    <h3 class="emergency-panel-title">Collapsible Panel</h3>
    <span class="emergency-panel-collapse-icon">▼</span>
  </div>
  <div class="emergency-panel-content">
    <p>Content that can be hidden</p>
  </div>
</div>
```

### 🏷️ Badges

Status indicators and severity badges for quick visual recognition.

```html
<!-- Severity Badges -->
<span class="emergency-badge emergency-badge-critical">CRITICAL</span>
<span class="emergency-badge emergency-badge-warning">WARNING</span>
<span class="emergency-badge emergency-badge-good">SAFE</span>
<span class="emergency-badge emergency-badge-info">INFO</span>

<!-- Disaster Type Badges -->
<span class="emergency-badge emergency-badge-fire">🔥 FIRE</span>
<span class="emergency-badge emergency-badge-flood">🌊 FLOOD</span>
<span class="emergency-badge emergency-badge-earthquake">🌍 EARTHQUAKE</span>

<!-- Status Badges -->
<span class="emergency-badge emergency-badge-online">ONLINE</span>
<span class="emergency-badge emergency-badge-loading">LOADING</span>

<!-- Notification Badge -->
<div style="position: relative;">
  <button class="emergency-btn emergency-btn-secondary">Alerts</button>
  <span class="emergency-badge-notification">3</span>
</div>
```

### 📝 Forms

Emergency-optimized form controls for data entry under stress.

```html
<!-- Text Input -->
<div class="emergency-form-group">
  <label class="emergency-label emergency-label-required">Location</label>
  <input type="text" class="emergency-input" placeholder="Enter location">
</div>

<!-- Search Input -->
<div class="emergency-search">
  <input type="search" class="emergency-input emergency-search-input" placeholder="Search...">
  <span class="emergency-search-icon">🔍</span>
</div>

<!-- Select Dropdown -->
<div class="emergency-select">
  <select class="emergency-select-input">
    <option>Select emergency type</option>
    <option>Fire</option>
    <option>Flood</option>
    <option>Earthquake</option>
  </select>
  <span class="emergency-select-icon">▼</span>
</div>

<!-- Checkbox -->
<label class="emergency-checkbox">
  <input type="checkbox" class="emergency-checkbox-input">
  <span class="emergency-checkbox-box">
    <span class="emergency-checkbox-check">✓</span>
  </span>
  <span class="emergency-checkbox-label">Confirm evacuation route</span>
</label>
```

## 🎨 Design Tokens

### Colors

```css
/* Emergency Severity Scale */
--emergency-critical: #ef4444;    /* Immediate danger */
--emergency-warning: #f59e0b;     /* Elevated risk */
--emergency-good: #22c55e;        /* Safe/normal */
--emergency-info: #60a5fa;        /* Information */

/* Neutral Dark Theme */
--emergency-bg-primary: #0b1220;     /* Main background */
--emergency-bg-secondary: #0f172a;   /* Surface background */
--emergency-text-primary: #e2e8f0;   /* Primary text */
--emergency-text-muted: #94a3b8;     /* Secondary text */
```

### Typography

```css
/* Font Families */
--emergency-font-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
--emergency-font-display: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Font Sizes (Responsive) */
--emergency-text-xs: 0.75rem;    /* 12px */
--emergency-text-sm: 0.875rem;   /* 14px */
--emergency-text-base: 1rem;     /* 16px */
--emergency-text-lg: 1.125rem;   /* 18px */
--emergency-text-xl: 1.25rem;    /* 20px */
```

### Spacing

```css
/* Spacing Scale (8px base) */
--emergency-space-1: 0.25rem;    /* 4px */
--emergency-space-2: 0.5rem;     /* 8px */
--emergency-space-3: 0.75rem;    /* 12px */
--emergency-space-4: 1rem;       /* 16px */
--emergency-space-6: 1.5rem;     /* 24px */
--emergency-space-8: 2rem;       /* 32px */

/* Touch Targets */
--emergency-touch-target: 2.75rem; /* 44px minimum */
```

## ♿ Accessibility

Emergency UI is built with accessibility as a core principle:

- **WCAG AA Compliance** - All components meet or exceed WCAG 2.1 AA standards
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Reader Support** - Semantic HTML and proper ARIA labels
- **High Contrast Mode** - Automatic adaptation for high contrast preferences
- **Reduced Motion** - Respects `prefers-reduced-motion` user preferences
- **Touch Targets** - Minimum 44px touch targets for mobile accessibility

## 📱 Mobile Support

Optimized for emergency responders in the field:

- **Mobile-first design** with responsive breakpoints
- **Touch-friendly interfaces** with proper spacing
- **Readable typography** under various lighting conditions
- **Offline-capable** CSS with no external dependencies

## 🛠️ Development

### Building from Source

```bash
git clone https://github.com/floodark/emergency-ui.git
cd emergency-ui
npm install
npm run build
```

### Storybook Development

```bash
npm run storybook
```

### Testing

```bash
npm test
npm run test:a11y
```

## 🤝 Contributing

We welcome contributions from the emergency management and web development communities!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Emergency Management Community** - For feedback and real-world testing
- **Accessibility Experts** - For ensuring inclusive design
- **Open Source Contributors** - For making this project possible

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/floodark-ron/emergency-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/floodark-ron/emergency-ui/discussions)

---

**Built with ❤️ by FloodArk AI for the global emergency management community.**
