# 🧾 Changelog

All notable changes to **alfuix** will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

---

## [1.0.0] — 2025-10-28

### 🎉 Initial Release

- Introduced **alfuix**, a futuristic, modular **SCSS + JS UI framework** that extends **Bootstrap and Tailwind**.  
- Core features:
  - **Framework-agnostic architecture** — designed to work seamlessly with **Bootstrap 5.3+** and **Tailwind CSS**.
  - **Advanced SCSS utilities** — including sizing, clip, transform, filters, and typography helpers.
  - **Futuristic animations** — motion, scroll, reveal, and transform effects.
  - **Standalone builds** — `alfuix-clip`, `alfuix-animation`, and `alfuix-utilities` modules.
  - **JavaScript extensions** — for interactive motion and visual layering.
  - **Plugin-ready design** — supports third-party integrations like `particles.js`, `fslightbox`, and `slick-carousel`.
- Production-ready structure:
  - `/scss` — source files (core, components, utilities, effects)
  - `/js` — animation and motion scripts
  - `/dist` — compiled, minified builds
- Licensed under **MIT** — by [The Alif Lab & alfuix Authors](https://github.com/yourusername/alfuix).

---

## [Unreleased]

### ✨ Added
- Planned new futuristic utilities: `_3d.scss`, `_neon.scss`, `_parallax.scss`.
- `data-motion` attribute support for declarative animations.

### 🔧 Changed
- Enhanced variable system for **advanced theming** and **dark mode**.
- Optimized motion easing curves and reduced compiled CSS footprint.

### 🐞 Fixed
- Corrected SCSS variable reference inconsistencies.
- Fixed z-index layering issue on modals and tooltips.
- Adjusted clip-path utility naming for better readability.

### 🗑️ Removed
- Deprecated experimental `_legacy.scss` utilities and old mixin references.

---

## 📦 Versioning Guidelines

| Type | Description | Example |
|------|--------------|----------|
| **MAJOR** | Breaking changes (structure, variables, or architecture) | 1.x.x → 2.0.0 |
| **MINOR** | Backward-compatible feature or utility additions | 1.0.0 → 1.1.0 |
| **PATCH** | Fixes or small enhancements | 1.0.0 → 1.0.1 |

---

## 🧠 Contributing

When submitting pull requests:
1. Update the relevant section in this changelog under **[Unreleased]**.  
2. Follow the **Conventional Commit** format:  
