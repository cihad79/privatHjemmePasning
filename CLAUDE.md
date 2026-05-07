# Glæde og Vækst Pasning – Projektbeskrivelse

## Hvad er projektet?
En enkeltsidet hjemmeside (single-page) til en privat dagplejer ved navn Elham.
Siden skal præsentere hendes tilbud, skabe tillid hos forældre og gøre det nemt at kontakte hende.

## Ejer / kunde
- **Navn:** Elham
- **Virksomhed:** Glæde og Vækst Pasning
- **Telefon:** +45 42 36 34 74
- **Email:** Elhama20111@hotmail.com
- **Adresse:** Bispebjerg Parkallé, tæt på Emdrup Torv og Emdrup Station

## Tech stack
- Single-file HTML/CSS/JS (ingen frameworks, ingen build-tools)
- Vanilla CSS med CSS custom properties
- Ingen eksterne afhængigheder undtagen Google Fonts og evt. én ikonpakke (fx Lucide eller Heroicons via CDN)

## Logo
- Fil: `logo.png` i projekt-roden
- Sort baggrund i filen – brug på mørk baggrund ELLER CSS `mix-blend-mode: multiply` / `background: transparent` trick
- Alternativt: bed Elham om en version med transparent baggrund

## Design-retning
Farvepaletten er taget direkte fra logoet:
- **Blå:** `#6A9BB5` (drengesiluet + tekst "Glæde og Vækst")
- **Coral/rosa:** `#D4806A` (pigesiluet + hjerte)
- **Sage grøn:** `#8FA882` (blade + hjertebue)
- **Varm beige/brun:** `#B8956A` (træstamme + husets linjer)
- **Lys coral:** `#E8A898` (klodser)
- **Baggrund/neutral:** `#FDFAF6` (cremet hvid – ikke ren hvid)

Typografi: venlig men professionel – serif eller blød rounded sans til overskrifter, clean sans-serif til brødtekst. Match logoets bløde karakter.

Tone: varm, tryg og hjemlig – ikke corporate/kold.
Målgruppe: forældre med børn 0–3 år i København (Bispebjerg-området).

## Sektioner på siden
1. **Hero** – navn, tagline, ledige pladser (2 stk – maj + juni)
2. **Om Elham** – 17 års erfaring, tvillinger, godkendt børnepasser
3. **Hverdagen** – aktiviteter, have, legeplads, hjemmelavet mad
4. **Praktisk info** – åbningstider, adresse, transport
5. **Anbefalinger** – citater fra forældre (uden navne)
6. **Kontakt** – telefon + email, evt. simpel kontaktsektion

## Billeder
- 18 billeder af aktiviteter og leg (ingen børneansigter)
- Placeret i `img/` mappe relativt til `index.html`
- Navngivning: `img/aktivitet-01.jpg`, `img/aktivitet-02.jpg` osv. (eller hvad filerne hedder)
- Bruges primært i hverdags-sektionen og evt. som baggrundsbilleder/galleri
- Alt-tekster på dansk, beskrivende men generelle (fx "Børn leger med farverige klodser")

## Konventioner
- Mobil-first responsive
- Tilgængelighed: semantisk HTML, alt-tekster på billeder
- Ingen billeder af børns ansigter (Elham deler selv billeder – placer pladsholderaftekst hvor det er relevant)
- Koden skal være læsbar og kommenteret
- Alt tekst på dansk
