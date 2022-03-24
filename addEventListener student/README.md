# IF SD JS Hoger - Lager game
# By M van der Linden

## Basics
Het spel bestaat uit een bord met 9 vakken (getallen) waarop een speler kan klikken.
Veel code is al voor je geschreven en het is jouw taak om deze af te maken en uit te breiden.
Open dit project in Visual Studio, en doe de 4 'tasks' in de JavaScript-file main.js.

Task 1: zet een eventListener op de reset-button die de reset-function aanroept.
Task 2: zet het juiste getal op het aangeklikte veld (0 - 9).
Task 3: controleer of het aangeklikte getal hoger of lager dan de vorige is, of het zelfde was.
Task 4: reset het speelbord: zet alle velden weer op '?'.

## ADVANCED OPDRACHT (als je klaar bent met Basics maak je deze!)
# Maak met behulp van je eigen creativiteit een Hoger - Lager spel!
Je gaat het spel compleet maken. De computer genereert een random getal tussen 0 en 9 die de speler vervolgens moet gaan raden.
Verander hiervoor het spelbord zodat bij de start op ieder veld een getal staat, van 1 t/m 9.

Stappen:
-Maak een variabele om een random getal tussen 0 en 10 in op te slaan.
-Maak een function die een random getal tussen 0 en 10 genereert en opslaat in hierboven gemaakte variabele.
-Zet op de velden de getallen 1 t/m 9.
-Als je op een getal klikt, controleer dan of het random getal goed geraden is.
    Is het te laag? Zeg dan 'hoger!'.
    Is het te hoog? Zeg dan 'lager!'.
    Is het goed geranden? Zeg dan 'goed'!.
-Als er op een getal klikt is kan deze niet opnieuw worden gekozen. Verander het getal dan in een 'X'.
-Als er op een 'X' geklikt wordt geef dan geen melding.

Tips:
 -Maak gebruik van alerts voor interactie met de speler.
 -Als een getal geklikt is, zet hier dan een 'X' met textContent of innerHtml.
 -Geef geen alert als er op zo'n 'X' geklikt is.
 -Reset het spel als het juiste getal geraden is (speelbord 'leeg' en een nieuw random getal).

Extra's: 
-Maak het spel extra mooi en persoonlijk door je eigen HTML-elementen en CSS-classes toe te voegen.
-Gebruik HTML-elementen voor interactie met de speler in plaats van alerts.
-Maak een variabele waarmee je kunt wisselen tussen twee spelers die om de beurt mogen raden.
-Voeg extraatjes toe zoals:
  -Een systeem met puntentelling
  -Een scoreboard met spelernamen
  -Geluidseffecten

## EXPERT OPDRACHT (als je in bent voor een extra uitdaging maak je deze)
Bouw het Hoger - Lager spel om naar Tic Tac Toe (ook bekend als drie op een rij of boter, kaas & eieren)

Tips: 
-Wissel na elke click tussen 'X' of '0'.
-Zet alleen een 'X' of '0' neer als het aangeklikte veld leeg is.

## Tevreden met je resultaat?
-Zet je spel op je Portfolio ;-)
