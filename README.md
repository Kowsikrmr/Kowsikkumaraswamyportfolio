# Kowsik Naraayanan K — Portfolio

Azure Cloud Operations Engineer portfolio with CSS 3D tilt effects.

Built for hiring managers: clear experience with enterprise clients (HP, Albertsons), strong Azure / IAM / CI-CD keywords, sticky resume download, and mobile-first layout.

## Quick start

```sh
git clone https://github.com/Kowsikrmr/resume-visions-3d.git
cd resume-visions-3d
npm install   # or: bun install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Resume PDF

Place your résumé at:

```
public/resume.pdf
```

The sticky header button and hero CTA both download `/resume.pdf` as `Kowsik_Naraayanan_K_Resume.pdf`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Tech stack

- [TanStack Start](https://tanstack.com/start) + React 19
- Tailwind CSS v4 + shadcn/ui
- TypeScript + Vite + Nitro
- CSS 3D perspective / tilt (disabled on touch / narrow screens for performance)
