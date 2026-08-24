# landing-frauddetector

Sitio estático de portfolio para [FraudDetector](https://github.com/LorenGrz/FraudDetector) — sistema de detección de fraude bancario con consenso de 3 modelos de ML no supervisado.

No tiene servidor ni llamadas a API propias; solo enlaza a la app real y al repositorio.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build   # genera ./out
```

Se despliega automáticamente a GitHub Pages vía GitHub Actions en cada push a `master`.

**URL en vivo:** https://lorengrz.github.io/landing-frauddetector/

## Proyecto relacionado

- App principal: [LorenGrz/FraudDetector](https://github.com/LorenGrz/FraudDetector)
