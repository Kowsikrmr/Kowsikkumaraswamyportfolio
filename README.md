# Kowsik Naraayanan K — Portfolio

Azure Cloud Operations Engineer portfolio with a cinematic 3D photo gallery hero.

Built with **TanStack Start**, React 19, Tailwind CSS v4, Three.js / React Three Fiber, and shadcn/ui.

## Quick start

```bash
git clone https://github.com/Kowsikrmr/resume-visions-3d.git
cd resume-visions-3d
npm install          # installs three, @react-three/fiber, @react-three/drei etc.
npm run dev
```

Open http://localhost:3000

## Required assets (do this once)

### 1. Professional photo for the 3D gallery

Place your optimized portrait here:

```
public/photos/kowsik-formal.jpg
```

Recommended: square or portrait, ~800px, <200 KB JPEG.

You can also add more photos later and update the `galleryImages` array in `src/routes/index.tsx`.

### 2. Résumé PDF

```
public/resume.pdf
```

Both the sticky top-right button and the hero CTA will download it as `Kowsik_Naraayanan_K_Resume.pdf`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Tech highlights

- Cinematic infinite 3D gallery (cloth shader + depth fade/blur) for the hero
- Lazy-loaded WebGL so first paint stays fast
- Mobile: reduced plane count, lower DPR, graceful fallback
- Sticky header with always-visible Résumé download (top-right)
- Fully responsive, high-contrast dark theme, recruiter-focused content

## Structure

```
src/
  components/ui/3d-gallery-photography.tsx   ← the 3D component
  routes/index.tsx                           ← portfolio page
  styles.css                                 ← design tokens + 3D utilities
public/
  photos/kowsik-formal.jpg                   ← your portrait
  resume.pdf                                 ← your CV
```
