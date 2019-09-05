# Opdracht JSX: List of issues

## Opdrachtomschrijving
- Toon een lijst van alle **Open** issues
- Per open issue wordt het volgende getoond:
  - Id: met daarin het `id` van het issue, zonder de prefix "PI:"
  - Description: met daarin de omschrijving (veld `description` van het issue)
  - Assigned to: met daarin enkel de voornaam (tot aan de eerste spatie) aan wie dit issue is `assigned`. En dit in hoofdletters
  - `----------`
- Laat de lijst voorafgaan door de tekst: "Open issues"

----------------

## Maak een nieuw project aan met behulp van expo cli
- Maak in de root, naast dit readme bestand, een nieuw project aan met behulp van de expo cli
- Configureer ESLint in dit project
- Open dit project in Visual Studio
- Exploreer dit project

## Maak een eerste functional component: List.js
- Maak volgende folderstructuur aan in de root van je project `/src/components`
- Maak in de folder `/components` een nieuw JavaScript bestand aan: `List.js`
- Maak hierin een functional component aan:
  - Import de nodige libraries om het component aan te maken
  - Schrijf een arrow functie `List` die ervoor zorgt dat `Hello world` op het scherm wordt getoond.
  - exporteer het net aangemaakte component
- Pas `App.js` aan zodat het nieuw aangemaakte component `List.js` wordt geïmporteerd en in de plaats komt van het gegenereerde <Text> component. Laat het <View> component met bijhorende `style` property en de `Stylesheet` staan in `App.js`
- Start lokaal je expo cli development server op
- Bekijk dit component op je mobiele device / iOS simulator / Android emulator

> Styling van React Native components komt pas later in deze cursus aan bod. Het wat? hoe? waarom? ... van styling en StyleSheets wordt dan uitgebreid besproken.

## JSX: List of issues

- Kopieer het bestand `issues.js` in de root van je React Native project
- Bekijk het bestand `issues.js` grondig
  - Zoals je kan zien bevat dit bestand een JavaScript Array `issues`, bestaande uit 37 JavaScript objecten
  ```
    {
      type: string;
      id: string;
      description: string;
      date: string;
      priority: string;
      assigned: string;
      status: string;
    }[]
  ```
  - Deze array wordt geëxporteerd zodat die in andere JavaScript bestanden kan worden geïmporteerd en gebruikt.
- Importeer de array `issues` in het nieuwe aangemaakte component `List.js`
```
import { issues } from '../../issues';
```
- Pas de tekst 'Hello world' aan naar 'Open issues'
- Plaats een `<View>` component rond het bestaande `<Text>` component
- Loop over de `issues` array (Gebruik de geziene ES6 features om te loopen over een JavaScript array)
- Return voor ieder item in de array een stukje JSX, bestaande uit 4 `<Text>` components
  - het `id`, voorafgegaan door de tekst "Id: "
  - de `description`, voorafgegaan door de tekst "Omschrijving: "
  - `assigned`, voorafgegaan door de tekst "Gekoppeld aan: "
  - een 10-tal streepjes
- Voeg een functie toe aan het component, genaamd `extractId()` die uit de meegegeven string parameter de eerste 3 karakters laat vallen. Roep deze functie op in het eerste `<Text>` component en geef het `id` veld hieraan mee.
Concreet: `extractId("PI:198756541080")` retourneert `"198756541080"`
- Zorg er voor dat enkel de issues met status "Open" worden getoond.
- Voeg nog een functie toe aan je component, genaamd `toUpper()` die uit de meegegeven string parameter het stuk na de eerste spatie laat vallen en alles terug geeft in hoofdletters.
Concreet: `toUpper("Katerina larson")` retourneer `"KATARINA"`
