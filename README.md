# Vite React Calculator

Mini web kalkulator razvijen kao domaći zadatak iz predmeta **Osnove distribuiranog programiranja** (FTN Novi Sad).

## 🔗 Live verzija

> https://vite-react-calculator-zzug.vercel.app

## 📋 Opis projekta

Mini kalkulator koji podržava četiri osnovne aritmetičke operacije:

- **Sabiranje** (+)
- **Oduzimanje** (−)
- **Množenje** (×)
- **Deljenje** (÷) — sa zaštitom od deljenja nulom

Aplikacija sadrži dva input polja za unos brojeva, dugmad za svaku operaciju i prikaz rezultata sa validacijom unosa.

## 🛠️ Tehnologije

- [React 19](https://react.dev/)
- [Vite 6](https://vitejs.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)

## 🚀 Pokretanje lokalno

### Preduslovi

- Node.js v18 ili noviji
- npm v8 ili noviji

### Koraci

```bash
git clone https://github.com/danijela76/vite-react-calculator.git
cd vite-react-calculator

npm install

npm run dev
```

Aplikacija će biti dostupna na [http://localhost:5173](http://localhost:5173).

### Build za produkciju

```bash
npm run build
npm run preview
```

## 📁 Struktura projekta

```
vite-react-calculator/
├── src/
│   ├── components/
│   │   └── Calculator/
│   │       ├── Calculator.tsx
│   │       ├── Calculator.css
│   │       └── math.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

## 🔄 CI/CD

Svaki push na `main` branch automatski pokreće Vercel deployment putem GitHub integracije.

---

*FTN Novi Sad · Osnove distribuiranog programiranja · 2026*
