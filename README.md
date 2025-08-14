# Personal WWW — Railway

## Lokalnie (macOS)
1. Zainstaluj Node 20+ (np. via nvm).
2. `npm i`
3. `npm run dev` – http://localhost:5173

## Build produkcyjny
- `npm run build` – generuje `dist/`.

## Deploy na Railway
1. Wypakuj ten ZIP do katalogu `personal-www/` i wrzuć do repo (GitHub/GitLab).
2. Railway → New Project → Deploy from GitHub.
3. Nie zmieniaj portu – skrypt `start` używa `$PORT` nadawanego przez Railway.
4. Po buildzie aplikacja będzie dostępna pod adresem z Railway.
