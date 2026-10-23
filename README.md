# Stramo AS – nettside v2

En enkel, mobiltilpasset nettside for kjøle- og fryserom, bygg og montasje.
Designet viderefører logoen, fargene og den enkle kontaktpresentasjonen fra den eldre Stramo-nettsiden.

- Prøveside: https://frydenlundhenrik-spec.github.io/stramo-nettside-v2/
- GitHub: https://github.com/Frydenlundhenrik-spec/stramo-nettside-v2
- All publisert kode ligger i `docs/`.
- Ingen byggetrinn, pakkeinstallasjon, API-nøkler eller database.

## Lokal forhåndsvisning

Med Node.js installert: dobbeltklikk `Start-Stramo-Nettside.cmd`, eller kjør:

```powershell
cd "C:\Users\fryde\Documents\ChatGPT\Stramo\stramo-nettside"
npm start
```

Åpne http://127.0.0.1:4321/. Stopp med Ctrl+C.

`docs/index.html` kan også åpnes direkte i nettleseren.

## Videre arbeid

- `docs/index.html`: innhold, tjenester og kontaktinformasjon.
- `docs/styles.css`: farger, utforming og mobilvisning.
- `docs/script.js`: mobilmeny og årstall.
- `docs/assets/`: logo og bilder.

GitHub Pages publiserer `main` → `/docs`. Lagre og push endringer til `main` for å oppdatere prøvesiden.
Den gamle nettsiden og repoet `stramo-nettside` er ikke endret.

## Innhold og kontakt

Kampenveien 4, 1618 Fredrikstad er bekreftet av brukeren.
Telefon 69 87 87 77 og post@stramo.no er hentet fra den eksisterende nettsiden.
Organisasjonsnummer 918 776 303 er kontrollert mot Brønnøysundregistrene.
Tjenesteområdene og teksten om tegninger, materialoversikter, fotodokumentasjon og FDV er laget etter brukerens bestilling.
Dokumentasjonens omfang avtales per oppdrag.

Kontaktknappene åpner telefon eller e-postprogram; nettsiden har ingen skjemaer som lagrer eller sender informasjon selv.
Siden bruker ingen analyseverktøy, informasjonskapsler eller eksterne skrifttjenester.
Prøveversjonen har `noindex, nofollow` og en synlig merking i bunnteksten. Den er tilgjengelig for alle med lenken; noindex er ikke tilgangskontroll.

## Bilder

Stramo-logoen er hentet uendret fra firmaets lokale prosjektfiler.
De to illustrasjonsbildene er hentet fra Balex Metals offentlige PIR FROST-galleri etter brukerens instruks.
De valgte originalene har ingen synlig Balex-logo; ingen retusjering er utført.
Bildene er merket som illustrasjonsfoto og representerer ikke dokumenterte Stramo-referanseprosjekter.
Kildelenker og filnavn står i `ASSETS.md`.
