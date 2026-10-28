# Stramo AS – prøveversjon av nettsiden

Nettsiden følger designfilene brukeren oppga 28. oktober 2026 fra Desktop/stramo-nettside: en sentrert logo, teksten «Leverandør av kjøl og fryserom» og ett kontaktkort. Oppsettet er gjort kompakt etter brukerens ønske om å slippe rulling, med en egen «Logg inn»-knapp øverst til høyre.

- Prøveside: https://frydenlundhenrik-spec.github.io/stramo-nettside-v2/
- GitHub: https://github.com/Frydenlundhenrik-spec/stramo-nettside-v2
- Publisering: main → /docs på GitHub Pages.
- Den originale nettsiden i repoet stramo-nettside skal ikke erstattes uten ny, uttrykkelig beskjed fra brukeren.

## Filer

- docs/index.html: logo, kort presentasjon, kontaktkort og bunntekst.
- docs/css/style.css: utforming og mobiltilpasning.
- docs/js/script.js: årstall og innlasting av innhold med en kort animasjon.
- docs/assets/logo.png: Stramo-logoen fra de oppgitte designfilene.

Kontaktinformasjonen og åpningstidene følger brukerens oppgitte HTML-fil. Telefon- og e-postlenkene åpner telefon/e-postprogrammet. Ingen skjemaer sender informasjon fra nettsiden.

## Appinngang

«Logg inn» åpner Stramos hjemmeside på Streamlit:
https://stramo-as-n7zzenre2auarxeuzha8pk.streamlit.app/

Appvalgene vises først etter godkjent personlig innlogging med e-post, passord og
Google/Microsoft Authenticator. Timeregistrering og kjøleromssystemet kontrollerer
innlogging på serveren, også når noen åpner en direkteadresse. Kontoer aktiveres
med en privat invitasjon inne på Streamlit-siden. Det finnes ingen appmeny eller
innloggingshemmeligheter i den offentlige HTML-filen.

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
