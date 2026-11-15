# 🐔 Die Hühner der Bohnengasse
### Isolde und der streng geheime Eierplan

Ein kleines Browserspiel für Groß und Klein: Henne Isolde ist krank und sitzt mit ihrer karierten Decke in einem Karton. Während Pettersson die Tierärztin holt, tagt zum ersten Mal der **Hühnerrat**. Gemeinsam mit Wurzel, dem fröhlichen Rauhaardackel, sorgen die Hennen für Ruhe auf dem Hof, sammeln Kräuter und bringen drei gute Frühstückseier an die Gartenbank.

**▶ Direkt spielen:** https://trees4sure.github.io/huehner-bohnengasse/

Läuft im Browser auf Handy, Tablet und Computer. Keine Installation, keine Anmeldung.

---

## Als App installieren

Das Spiel ist eine **PWA** (Progressive Web App): Man kann es wie eine App auf den Startbildschirm legen. Danach startet es im Vollbild und funktioniert auch **ohne Internet**.

- **Android (Chrome):** Link öffnen → im Spiel auf **📲 Als App** tippen, oder im Browser-Menü ⋮ „App installieren“.
- **iPhone / iPad (Safari):** Link öffnen → **Teilen** (Quadrat mit Pfeil) → **„Zum Home-Bildschirm“**.
- **Computer (Chrome / Edge):** Installieren-Symbol rechts in der Adressleiste.

## So wird gespielt

1. Unten eine **Figur** auswählen.
2. Im Hof auf einen **Ort oder Gegenstand** tippen. Die Figur läuft hin und setzt ihre Fähigkeit ein.
3. Die **Schiefertafel** zeigt die aktuelle Aufgabe. Brunhildes **📖 Eierlexikon** gibt einen genaueren Tipp und lässt die richtige Stelle aufleuchten.

Auf dem Handy kann man seitlich über den Hof wischen. Die Knöpfe **Stall · Isolde · Garten** springen direkt in einen Bereich, **Hof** zeigt alles auf einmal.
Am Computer geht es auch mit der Tastatur: Tab und Enter, Ziffern 1–6 wählen die Figuren, L öffnet das Eierlexikon.

## Der Hühnerrat

| Figur | Fähigkeit |
| --- | --- |
| **Friederike**, die Dauerlegerin | erkennt an Federn und Stroh die Lieblingsnester und organisiert die Reihenfolge beim Legen |
| **Esther**, die Turbo-Legerin | schlüpft durch Tore, erledigt Botengänge und schleicht in Isoldes Nähe |
| **Ilse**, die Riesen-Eier-Meisterin | bewegt schwere Gegenstände |
| **Franziska**, die Farbenkünstlerin | markiert Kräuter und Wege mit Blüten |
| **Brunhilde**, die Hühner-Professorin | vergleicht Blätter, deutet Spuren und hat das Eierlexikon |
| **Wurzel**, der fröhliche Rauhaardackel | verfolgt Gerüche, zeigt Fundstellen und trägt den Eierkorb |

## Vier Etappen

1. **Ruhe im Karton**: Klappern, Flattern und Zugluft rund um Isolde abstellen.
2. **Das Kräuterkomplott**: Thymian und Schnittlauch finden. Vorsicht vor Doppelgängern im Beet!
3. **Drei gute Frühstückseier**: zwei Nester, drei Hennen, eine gute Reihenfolge.
4. **Der Eiertransport**: den vollen Korb leise zur Gartenbank bringen.

Eine Runde dauert etwa 15 bis 20 Minuten. Es gibt kein Zeitlimit. In jeder neuen Runde wechseln Windrichtung, Lieblingsnest und das Versteck des verschwundenen Kräutertopfs.

## Gut zu wissen

- **Spielstand:** wird nach jeder geschafften Teilaufgabe im eigenen Browser gespeichert. Beim nächsten Öffnen gibt es „Weiterspielen“. Es werden keine Daten an einen Server geschickt.
- **Ton:** Geräusche erscheinen zusätzlich als Schild im Bild. Der Ton lässt sich oben mit 🔊 ausschalten.
- **Offline:** Das ganze Spiel steckt in einer einzigen Datei (`index.html`), mit allen Bildern. Man kann sie auch herunterladen und ohne Internet öffnen: am Computer per Doppelklick, auf Android mit Chrome. Auf dem iPhone braucht eine heruntergeladene Datei eine Zusatz-App. Über den Link oben geht es dort ohne.

## Technik

| Datei | Zweck |
| --- | --- |
| `index.html` | das komplette Spiel inkl. aller Bilder |
| `manifest.webmanifest` | App-Name, Icons, Farben für die Installation |
| `sw.js` | Service Worker: speichert das Spiel für den Offline-Start |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | App-Icons |
| `screenshot-*.jpg` | Vorschaubilder im Installationsdialog |


- Eine einzelne HTML-Datei mit eingebettetem CSS, JavaScript und Bildern (WebP als Data-URL), ohne externe Abhängigkeiten.
- Alle Bilder stehen gesammelt im Block `window.ASSETS` (`<script id="bilder">`) am Anfang der Datei. Ein leerer Eintrag `""` zeigt einen gezeichneten Platzhalter. Zum Austauschen eines Bildes nur den jeweiligen Wert ersetzen.
- Geräusche werden im Browser erzeugt (Web Audio), es gibt keine Audiodateien.
- Offline: Der Service Worker lädt die Spielseite zuerst aus dem Netz (damit Änderungen sofort ankommen) und greift ohne Verbindung auf die gespeicherte Fassung zurück. Nach Änderungen an Icons oder Manifest in `sw.js` die Versionsnummer `CACHE` hochzählen.

## Entstehung

Spielidee und Geschichte: Trees4sure.
Programmierung mit Claude (Anthropic), Bilder mit ChatGPT (OpenAI).
