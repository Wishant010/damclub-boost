# GitHub Deployment Instructies

## Stap 1: Repository Setup

1. **Upload naar GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DC PAR website"
   git branch -M main
   git remote add origin https://github.com/Wishant010/damclub-boost.git
   git push -u origin main
   ```

## Stap 2: GitHub Pages Activeren

1. Ga naar je GitHub repository: `https://github.com/Wishant010/damclub-boost`
2. Klik op **Settings** tab
3. Scroll naar beneden naar **Pages** sectie
4. Onder **Source**, selecteer **"GitHub Actions"**
5. De workflow zal automatisch starten bij de volgende push

## Stap 3: Eerste Deployment

Na het uploaden zal GitHub Actions automatisch:
- Dependencies installeren
- Website bouwen 
- Deployen naar GitHub Pages

Je website wordt beschikbaar op:
**https://wishant010.github.io/damclub-boost/**

## Stap 4: Automatische Updates

Elke keer dat je wijzigingen pusht naar de main branch:
```bash
git add .
git commit -m "Update website"
git push
```

Zal de website automatisch opnieuw gebouwd en gedeployed worden.

## Status Checken

- Ga naar **Actions** tab in je repository
- Bekijk de build status en logs
- Groene vinkjes = succesvol
- Rode kruisjes = problemen (bekijk logs)

## Custom Domain (Optioneel)

Voor een eigen domein zoals dcpar.nl:
1. Voeg een CNAME record toe bij je DNS provider
2. Ga naar Settings > Pages
3. Voer je custom domain in
4. Wacht op DNS verificatie

## Troubleshooting

**Build faalt?**
- Controleer Actions logs
- Zorg dat alle dependencies correct zijn
- Test lokaal met `npm run build`

**404 pagina?**
- Controleer of base path correct is ingesteld
- Wacht 5-10 minuten na deployment

**Assets laden niet?**
- Controleer of base URL correct is in vite.config.ts
- Clear browser cache