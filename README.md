# Your Tribe for Life Squad Page

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
Wij hebben een squadpage ontworpen waarin iedereen in de squads 2E en 2F wordt weergegeven, gesorteerd op maand. Zo kunnen we studenten uit onze squad helpen om er snel achter te komen wie er wanneer jarig is.

- Live link (Netlify): https://steady-figolla-f76185.netlify.app/
- Live link (Vercel): https://your-tribe-for-life-squad-page-gamma.vercel.app/
- Design (Figma): https://www.figma.com/design/tJ1IaULbqkMP2b2JA5n3BG/Team-canvas-sprint-13?node-id=0-1&t=DO1S2PWpNQfFTdVs-1

  
<img height="500" alt="image" src="https://github.com/user-attachments/assets/b7f6cd2a-5de3-4a08-bc2e-be19d4041706" />
<img height="500" alt="image" src="https://github.com/user-attachments/assets/c774cb47-bb6e-4e6a-aed4-272758ca1d83" />



## Gebruik
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framwork of library gebruikt? -->
### Kalender overzicht (HTML)
- Details/Summary

### Animaties (CSS)
- Details animatie
- Laadanimatie
- View transition
- Scroll animatie

### Squadleden gesorteerd (JS)
- Gefilterd op maand, daarna gesorteerd op geboortedatum

### Filters (JS)
- We hebben bind:group gebruikt om de waardes van de filter checkboxes in het array selectedSquads op te slaan.
- De squadleden worden per maand weergegeven, en per squadlid wordt gecheckt of ze in selectedSquads staan.


## Installatie
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->

1. Clone de repo
2. Install dependencies met `npm install`
3. Start een development server met `npm run dev` of start de server en open de applicatie gelijk in een nieuw browser tabje met `npm run dev -- --open`
4. Je kan ook een productie versie van de app maken met `npm run build`
5. Preview de productie versie met `npm run preview`
6. Om de app te deployen is mogelijk een [adapter](https://svelte.dev/docs/kit/adapters) nodig. 

## Bronnen
- Pinterest board: https://nl.pinterest.com/irisvanwilligen/squad-page/
- Svelte group inputs: https://svelte.dev/tutorial/svelte/group-inputs


## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).



