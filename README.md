# naksir-js-api

🚀 Naksir Soccer Predictions API  
Telegram Mini App backend – JavaScript + Vercel serverless funkcije

## 📦 Funkcionalnosti

- 🎯 API za preuzimanje dnevne predikcije (/api/get)
- ✅ Validacija pristupa putem tokena (/api/validate-token)
- 🔐 Generisanje tokena posle kupovine (/api/generate-token)
- ✏️ Admin forma za unos predikcija (/api/admin)

## 🧠 Tehnologije

- [x] JavaScript (ES6)
- [x] Vercel serverless funkcije
- [x] Telegram Mini App kompatibilnost
- [x] In-memory data (bez baze)

## 📁 Struktura

lib/ ├── tokens.js // validacija tokena ├── predictions.js // podatak + update api/ ├── get.js // GET predikcija
