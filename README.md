# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Senior's Cries of Pain

Library Used :
- react-icons
- tailwind

## Images

Export image assets from `src/assets/images.js`, grouped by section. Components and
data modules use one namespace import instead of separate imports for each image:

```jsx
import * as images from '@/assets/images.js'

<img src={images.heroLogo} alt="SEASA logo" />
```

Add new image exports to that module. Static exports preserve Vite's hashed asset
URLs and tree-shaking without globbing unused pictures into the build.
