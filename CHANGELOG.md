# 🧾 Changelog

All notable changes to **ALUIX** will be documented in this file.  
This project follows [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

---

## [1.0.0] — 2025-10-28

### 🎉 Initial Release

- Introduced **ALUIX**, a futuristic, modular SCSS + JS UI framework that **extends Bootstrap**.  
- Core features:
  - **Bootstrap-compatible architecture** — built to work seamlessly with Bootstrap 5.3+.
  - **Advanced SCSS utilities** — including sizing, clip, transform, typography, and filters.
  - **Futuristic animations** — scroll, reveal, and motion utilities.
  - **Standalone builds** — `aluix-clip`, `aluix-animation`, and `aluix-utilities`.
  - **JavaScript extensions** — for motion and interactivity.
  - **Optional plugin support** — for `particles.js`, `fslightbox`, and `slick-carousel`.
- Production-ready structure:
  - `/scss` — full source files (components, utilities, sections)
  - `/js` — animation and helper scripts
  - `/dist` — compiled, minified builds
- MIT licensed under [Alif Design Studio](https://github.com/yourusername/aluix).

---

## [Unreleased]

### ✨ Added
- New futuristic utilities (planned: `_3d.scss`, `_neon.scss`, `_parallax.scss`).

### 🔧 Changed
- Improved variable system for advanced theming support.
- Optimized animation easing and reduced CSS size.

### 🐞 Fixed
- Minor SCSS variable reference inconsistencies.
- Fixed z-index layering issue on modals and tooltips.

### 🗑️ Removed
- Deprecated experimental `_legacy.scss` utilities.

---

## 📦 Versioning Guidelines

- **MAJOR** → breaking changes to structure, variables, or architecture  
  _(e.g., 1.x.x → 2.0.0)_  
- **MINOR** → new features or utilities, backward-compatible  
  _(e.g., 1.0.0 → 1.1.0)_  
- **PATCH** → fixes or minor improvements  
  _(e.g., 1.0.0 → 1.0.1)_  

---

## 🧠 Contributing

When submitting pull requests:
1. Update the relevant section in this changelog.
2. Follow commit message convention:  
