# Portfolio Web Advanced

Ik heb gekozen om drie projecten te maken.
De eerste twee projecten gaan respectievelijk over hoofdstuk 1 en 2 van de hoorcolleges.
Het laatste project is een integratie van hoofstuk 3-6 van de hoorcolleges en is daarmee ook het zwaarste project uit dit portfolio.

Mijn portfolio is op die manier een hybride vorm van de opdracht die ons werd toebedeeld.

## Inhoudsopgave
1. [Project 1: Medailletabel Olympische Spelen](#project-1-medailletabel-olympische-spelen)
2. [Project 2: Rekensommetjes](#project-2-rekensommetjes)
3. [Project 3: Formulier](#project-3-formulier)

## Project 1: Medailletabel Olympische Spelen

De bedoeling is om een medailletabel te construeren van de Olympische Spelen Parijs 2024.

### HTML

Een image toegevoegd. Beneden ook een invoerveld waar ik localStorage op zal toepassen.

### CSS

In mijn CSS heb ik drie "moeilijkheden" toegevoegd:
1. Het gebruik van een Google Font.
2. Een achtergrondafbeelding (van het web gehaald, zie ook HTML).
3. Gebruik van een SVG.

### JS

Constante definiëren (lijn 4-10, lijn 45-46): topMedailleWinnaars, een lijst van objecten (met properties en values). Ook input-element en p-element ophalen.

Element selecteren uit HTML en toewijzen aan nieuwe variabele (lijn 13).

Functie som + rest operator (lijn 16-22): zal het totaal aantal medailles optellen voor een x-aantal argumenten.

Destructurering van mijn lijst objecten (lijn 26): per land een nieuw object aanmaken (zodat makkelijker mee kunnen werken).

Spread operator (lijn 28).

Template literals(lijn 33-38): bij het toevoegen van nieuwe cellen in mijn rij .

Manipulatie van elementen (lijn 41, lijn 48): voor elk land wordt een rij toegevoegd aan de tabel (HTML-code wordt bewerkt).

Gebruik localStorage (lijn 48, 52-53): als webpagina gerefresht wordt, zal laatst ingegeven waarde zichtbaar zijn (dit is niet zo als er geen gebruik gemaakt wordt van LS).

EventListner toegevoegd (lijn 49): elke keer een toets losgelaten wordt, zal functie Weergave() uitgevoerd worden.

Functie toegevoegd (lijn 51-54): wordt aangeroepen als een toets wordt losgelaten in het invoerveld.

### Bronnen

ChatGPT gebruikt om de syntax van een Readme te begrijpen en toe te passen.
Op het einde een kleine oefening gebaseerd op het youtubefilmpje in de bronnen.

Cursus Web Essentials (Hoofdstukken: HTML, CSS, JS DOM)

Cursus Web Advance 

Cursus Programming Essentials I

https://images.app.goo.gl/QrQjNt5J7RDN9FPA6

https://en.wikipedia.org/wiki/Olympic_symbols#/media/File:Olympic_rings_without_rims.svg

https://olympics.com/en/paris-2024/medals?displayAsWebView=true%2Ctrue

https://chatgpt.com/share/5a75de91-91bd-49d5-86fa-1dafcc18663a

https://www.youtube.com/watch?v=fYTTUBa-lPc&t=570s


## Project 2: Rekensommetjes

Een zeer eenvoudige project die de uitkomst van een aantal rekensommetjes uitrekent.

### HTML

Gewerkt met span om textcontent in de elementen te brengen.

### CSS

Background toegevoegd.

### JS

Definiëren arrowfuncties (zonder body, lijn 4-6 ).

Definiëren arrowfunctie (met body, lijn 6-14). Er kan immers een fout optreden indien gedeeld wordt door 0.

### Bronnen

Cursus Web Essentials (Hoofdstukken: HTML, CSS, JS DOM)

Cursus Web Advanced (Hoofdstuk: Arrowfunctions, Default parameters)

Cursus Programming Essentials I

https://slidechef.net/wp-content/uploads/2021/10/Free-Google-Slides-Maths-Background.jpg

## Project 3: Formulier

Een formulier om je aan te melden voor een fitnessprogramma.

### HTML

Gebruik gemaakt van form-element en verwanten.
Het formulier bevat geen actie (de gegevens worden niet verwerkt).
Bij invoervelden die moeten worden ingevuld is required-attribuut toegevoegd in HTML (formuliervalidatie).

### CSS

Gebruik gemaakt van flexbox om de pagina te ordenen.
Ook gewerkt met box-sizing zodat margin, padding & border geintegreerd worden in grootte element.
Tot slot zijn er een aantal animaties toegevoegd: vergroten van de buttons als er over gehooverd wordt met scale, transitie van de achtegrongkleur, een zelfgemaakte animatie,...

### JS

Callback-functie (1: WeergeefBMI lijn 3-5): weergeefBMI (=callbackfunctie) die toegepast wordt in de parameters van bmiBerekenen (lijn 7-10).

Callback-functie toegepast (2: hulpNodig lijn 19-22): hulpNodig (=callbackfunctie) die toegepast wordt in de parameters van setTimeout (lijn 24). Na 10 seconde verschijnt er een link bovenaan het scherm.

Promise + consumer methods (in functie: Checkmotivatie lijn 26-51): Persoon zal "Heel veel motivatie" of iets anders ingeven om te bewijzen dat hij/zij/x er zin in heeft.
Bij elke situatie een andere zin onderaan de pagina (.then consumer methods).

Await/Async (lijn 53-65): functie zal controleren of de gebruiker een echt mens is via een eenvoudige verficatie oefening.

Self-executing function (functie: zelfUitvoerend lijn 67-73):vrij eenvoudig gehouden, naar analogie met de cursus. De functie voert zichzelf uit na 10 seconden. Geeft popup met de melding dat er een link aanwezig is voor hulp.

Event aan element koppelen (lijn HTML: 51,68,73,76 & 77 ): bij onclick voert er een welbepaalde functie zichzelf uit.

Fetch + JSON manipulatie (lijn 79-109): Data wordt opgehaald van een externe bron met allemaal fitnessoefeningen. Nadien wordt data gemanipuleerd en gebruikt in de webpagina.

### Bronnen

Ik heb voor de styling en JS gebruik gemaakt van Copilot, Gemini en ChatGPT om mij te helpen (algemene concepten terug verduidelijken, eventueel mij zeggen waar mijn fout ligt, code is verschillend van de definitieve code). Uiteindelijk heeft de cursus Web Essentials/Advanced mij het meest geholpen. Het Youtubefilmpje is een basis geweest om de fetchoefening uit te werken.

Cursus Web Essentials (Hoofdstukken: HTML, CSS, flexbox, boxes en boxmodel en JS DOM)

Cursus Web Advanced (Hoofdstukken: Callbacks, Promises, Async, Await, Fetch, CSS animaties)

Cursus Programming Essentials I

https://www.w3schools.com/js/js_callback.asp

https://www.w3schools.com/js/js_asynchronous.asp

https://www.w3schools.com/js/js_promise.asp

https://www.w3schools.com/js/js_async.asp

https://www.w3schools.com/css/css3_flexbox.asp

https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

https://copilot.microsoft.com/sl/jajlsm0EPgy

https://g.co/gemini/share/6da0075add94

https://chatgpt.com/share/e6d54d0e-a1d8-41e2-be4e-0bec7897c1d0

https://www.youtube.com/watch?v=37vxWr0WgQk 

https://g.co/gemini/share/efc1bda17429



