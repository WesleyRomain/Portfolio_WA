# Portfolio Web Advanced

Ik heb gekozen om per hoofdstuk (op basis van de hoorcolleges) een project samen te stellen dat bestaat uit HTML, CSS en JS van de geziene leerstof.

In deze maak ik dus een hybride vorm van de opdracht die wordt verwacht van het portfolio.

Ik splits telkens het project per hoofdstuk op in wat ik met HTML, CSS en JS heb gedaan (indien speciaal) + ik voeg ook de bronnen toe die ik heb gebruikt.

## Inhoudsopgave
1. [Hoofstuk 1: Medailletabel Olympische Spelen](#hoofdstuk-1-medailletabel-olympische-spelen)
2. [Hoofdstuk 2: Rekensommetjes](#hoofdstuk-2-rekensommetjes)
3. [Hoofdstuk 3: Formulier](#hoofdstuk-3-formulier)

## Hoofdstuk 1: Medailletabel olympische Spelen

De bedoeling is om een medailletabel te construeren van de Olympische Spelen Parijs 2024.

### HTML

Een image toegevoegd. Voor de rest is de HTML code vrij normaal.

### CSS

In mijn CSS heb ik twee "moeilijkheden" toegevoegd:
1. Het gebruik van een Google Font.
2. Een achtergrondafbeelding (van het web gehaald, zie ook HTML).

### JS

Element selecteren uit HTML (lijn 13).

functie som + rest operator: zal het totaal aantal medailles optellen voor een x aantal-argumenten (lijn 17).

Destructurering van mijn lijst objecten: per land een nieuw object aanmaken (zodat makkelijker mee kunnen werken, lijn 26).

Template literals: bij het toevoegen van nieuwe cellen in mijn rij (lijn 33).

Manipulatie van elementen (lijn 25-45).

### Bronnen

Cursus Web Essentials (Hoofdstukken: HTML, CSS, JS DOM)

Cursus Web Advance 

Cursus Programming Essentials I

https://www.google.com/search?q=purple+log+paris+2024&sca_esv=00654281386d64e7&sca_upv=1&rlz=1C1VDKB_nlBE1017BE1017&udm=2&biw=1536&bih=643&sxsrf=ADLYWIIpsdESBp_pHQfDPZqxNuvv2getpg%3A1722880995755&ei=4xOxZuzQLeubkdUP9dqfiAo&ved=0ahUKEwiszvftt96HAxXrTaQEHXXtB6EQ4dUDCBE&uact=5&oq=purple+log+paris+2024&gs_lp=Egxnd3Mtd2l6LXNlcnAiFXB1cnBsZSBsb2cgcGFyaXMgMjAyNEjxOlAAWMQ5cAh4AJABAJgBqgGgAb8MqgEEMjYuMbgBA8gBAPgBAZgCE6ACiAjCAgoQABiABBhDGIoFwgIFEAAYgATCAggQABiABBixA8ICDRAAGIAEGLEDGEMYigXCAgQQABgewgIHEAAYgAQYE8ICBhAAGBMYHsICCBAAGBMYCBgemAMAkgcEMTguMaAH-0g&sclient=gws-wiz-serp#vhid=lAUxHw66Fm28zM&vssid=mosaic

https://en.wikipedia.org/wiki/Olympic_symbols#/media/File:Olympic_rings_without_rims.svg

https://www.bing.com/search?q=Medal+table+paris&qs=n&form=QBRE&sp=-1&lq=0&pq=medal+table+pa&sc=10-14&sk=&cvid=AFF87784DF884F5AB22DF009134F2A85&ghsh=0&ghacc=0&ghpl=


## Hoofdstuk 2: Rekensommetjes

Een zeer eenvoudige oefeningen die de uitkomst van een aantal rekensommetjes uitrekent.

Het hoofdstuk was ook vrij kort, dus ik heb een "korte" oefening gemaakt.

### HTML

Gewerkt met span om textcontent in de elementen te brengen.

### CSS

Background toegevoegd, voor de rest niets speciaal.

### JS

Eerste drie arrow functies gedeclareerd zonder body syntax: optellen, aftrekken, vermenigvuldigen (lijn 3-5). Ook default waarden meegegeven indien geen getal wordt opgegeven.

Laatste arrowfunctie gedeclareerd mét bodysyntax (lijn 6-14). Er kan immers een fout optreden indien gedeeld wordt door 0.

### Bronnen

Cursus Web Essentials (Hoofdstukken: HTML, CSS, JS DOM)

Cursus Web Advanced (Hoofdstuk: Arrowfunctions, Default parameters)

Cursus Programming Essentials I

https://www.bing.com/images/search?view=detailV2&ccid=XAJxMze%2f&id=8CE395B34202640CD6B13EA89668ADCE238C0D89&thid=OIP.XAJxMze_Rs9TgzIVCKTt_wHaEK&mediaurl=https%3a%2f%2fslidechef.net%2fwp-content%2fuploads%2f2021%2f10%2fFree-Google-Slides-Maths-Background.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5c02713337bf46cf5383321508a4edff%3frik%3diQ2MI86taJaoPg%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=background+maths&simid=608052110175529787&FORM=IRPRST&ck=CAC28B2150CB85AA5A0F291A44ECDEC5&selectedIndex=79&itb=0&ajaxhist=0&ajaxserp=0

## Hoofdstuk 3: Formulier

Een formulier om je aan te melden voor een fitnessprogramma.

### HTML

Gebruik gemaakt van <form> element en verwanten.

### CSS

Gebruik gemaakt van flexbox om de pagina te ordenen.
Ook gewerkt met box-sizing zodat margin, padding & border geintegreerd worden in grootte element.

### JS

Callback-functie (1: WeergeefBMI lijn 3-5): weergeefBMI (=callbackfunctie) die toegepast wordt in de parameters van bmiBerekenen (lijn 7-10).

Callback-functie toegepast (3: hulpNodig lijn 24): hulpNodig (=callbackfunctie) die toegepast wordt in de parameters van setTimeout. Na 10 seconde verschijnt er een link bovenaan het scherm.

Promise + consumer methods (in functie: Checkmotivatie lijn 26-51): Persoon zal "Heel veel motivatie" of iets anders ingeven om te bewijzen dat hij/zij/x er zin in heeft.
Bij elke situatie een andere zin onderaan de pagina (.then consumer methods).

Await/Async (lijn 53-65): functie zal controleren of de gebruiker een echt mens is via een eenvoudige verficatie oefening.

Self-executing function (functie: zelfUitvoerend lijn 67-73):vrij eenvoudig gehouden, naar analogie met de cursus. De functie voert zichzelf uit na 10 seconden. Geeft popup met de melding dat er een link aanwezig is voor hulp.


Event aan element koppelen (lijn HTML: 51,69,72-73 ): bij onclick() voert er een welbepaalde functie zichzelf uit.

### Bronnen

Cursus Web Essentials (Hoofdstukken: HTML, CSS, flexbox, boxes en boxmodel en JS DOM)

Cursus Web Advanced (Hoofdsstukken: Callbacks, Promises, Async, Await, Fetch)

Cursus Programming Essentials I

https://www.w3schools.com/js/js_callback.asp

https://www.w3schools.com/js/js_asynchronous.asp

https://www.w3schools.com/js/js_promise.asp

https://www.w3schools.com/js/js_async.asp

https://www.w3schools.com/css/css3_flexbox.asp

https://copilot.microsoft.com/sl/jajlsm0EPgy

Ik heb voor de styling gebruik gemaakt van hulp Copilot (algemene concepten terug verduidelijken).

