Blockchain Demo
===============

Diese Demo zeigt die grundlegende Funktionsweise einer Blockchain.


Inbetriebnahme
--------------

- Aktuellste Version von [VisualStudio Code](http://code.visualstudio.com) als IDE
- Aktuellste Version von [NodeJS & NPM](http://www.nodejs.org)

Folgende NPM Pakete werden global benötigt (unter MacOS/Linux mit Superuserrechten `sudo`):
- Angular CLI (für alle "ng" Befehle): `npm install -g @angular/cli`
- Typescript für TSLint (nicht fürs Builden, dies wird über die Angular CLI erledigt): `npm install -g typescript`
- TSLint (für das überprüfen der Syntax und wird von der TSLint-Extension in VSCode benötigt): `npm install -g tslint`

Lokale NPM Pakete installieren:
- Die lokalen Pakete werden aus *package.json* gelesen und können mit folgendem Befehl installiert werden: `npm install` (im Projektverzeichnis)


Debuggen
--------

Zum Debuggen muss zuerst ein lokaler Webserver startet werden, dieser kann direkt im Command Prompt oder in VSCode als Task gestartet werden.
Danach kann Chrome über die hinterlegte Startkonfiguration gestartet werden.

Starten des Entwicklungsservers über das Command Prompt: `ng serve` (im Projektverzeichnis)
Starten des Entwicklungsserver innerhalb von VSCode: `task Run Development Server`


Release builden
---------------

Buildtask in VSCode ausführen oder über das Command Prompt: `ng build` (im Projektverzeichnis)


Statische Code Analyse
----------------------

Statische Codeanalysen werden über in VisualStudio Code direkt über Plugin *TSLint* während des schreibens durchgeführt und beim Speichern werden alle
automatisch behebbaren Probleme (wie fehlende oder überschüssige Leerzeichen) korrigiert.
Wenn das gesamte Projekt geprüft werden möchte kann in VisualStudio Code `task Run Static Code Analysis` ausgeführt werden,  oder im Command Prompt `ng lint` (im Projektverzeichnis)
