# Stramo AS – prøveversjon av nettsiden

Nettsiden følger designfilene brukeren oppga 28. oktober 2026 fra Desktop/stramo-nettside: en sentrert logo, teksten «Leverandør av kjøl og fryserom» og ett kontaktkort. Oppsettet er gjort kompakt etter brukerens ønske om å slippe rulling, med en egen «Logg inn»-knapp øverst til høyre.

- Prøveside: https://frydenlundhenrik-spec.github.io/stramo-nettside-v2/
- GitHub: https://github.com/Frydenlundhenrik-spec/stramo-nettside-v2
- Publisering: main → /docs på GitHub Pages.
- Den originale nettsiden i repoet stramo-nettside skal ikke erstattes uten ny, uttrykkelig beskjed fra brukeren.

## Filer

- docs/index.html: logo, kort presentasjon, kontaktkort og bunntekst.
- docs/css/style.css: utforming og mobiltilpasning.
- docs/js/script.js: årstall, lukking av appmenyen og innlasting av innhold med en kort animasjon.
- docs/assets/logo.png: Stramo-logoen fra de oppgitte designfilene.

Kontaktinformasjonen og åpningstidene følger brukerens oppgitte HTML-fil. Telefon- og e-postlenkene åpner telefon/e-postprogrammet. Ingen skjemaer sender informasjon fra nettsiden.

## Appinngang

«Logg inn» viser to valg som åpnes i nye faner:

- Timeregistrering: https://stramo-flyt-time-avvik.candid-pine-4284.chatgpt.site/login
- Kjøl og frys: https://stramo-as-n7zzenre2auarxeuzha8pk.streamlit.app/

Begge adresser er kontrollert i nettleseren. Stramo Flyt har egen testinnlogging. Kjøleromssystemet åpnes uten innlogging per 28. oktober 2026. Menyen er en inngang til appene og innfører ikke ny tilgangskontroll. Ingen brukernavn eller passord ligger i nettsiden.

Oppsettet bruker Inter fra Google Fonts, som i referansefilene, med systemskrift som reserve. Siden fungerer også uten JavaScript, og animasjonen respekterer redusert bevegelse. Den offentlige prøveversjonen har noindex, nofollow; dette er en beskjed til søkemotorer, ikke tilgangskontroll.

## Lokal forhåndsvisning

Åpne docs/index.html direkte i nettleseren, eller dobbeltklikk Start-Stramo-Nettside.cmd med Node.js installert. Fra PowerShell:

```powershell
cd "C:\Users\fryde\Documents\ChatGPT\Stramo\stramo-nettside"
npm start
```

Åpne http://127.0.0.1:4321/. Stopp serveren med Ctrl+C.

Ingen pakkeinstallasjon eller byggeprosess er nødvendig. Endringer som pushes til main publiseres automatisk på prøveadressen.

## Tidligere utkast

Det tidligere utkastet med tjenesteseksjoner, Balex-bilder og dokumentasjonsreklame finnes i Git-historikken på commit c595c99. Designfilene på skrivebordet er kun lest og er ikke endret.
