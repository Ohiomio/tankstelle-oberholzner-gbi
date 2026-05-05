# Diagramme zum Webseiten-Auftritt der Tankstelle Oberholzner

## Ebene 1: Website-Struktur / Sitemap

Zweck: Dieses Diagramm zeigt den groben Aufbau der Website und welche Seiten über die Navigation erreichbar sind.

```mermaid
flowchart TD
  start["Startseite / Übersicht"]

  start --> kraftstoffe["Kraftstoffe"]
  start --> waschstrasse["Autowäsche"]
  start --> service247["24/7 Tankstelle"]
  start --> shop["Shop"]
  start --> firmenkunden["Firmenkunden"]
  start --> kontakt["Kontakt & Anfahrt"]
  start --> impressum["Impressum"]
  start --> datenschutz["Datenschutz"]

  kraftstoffe --> kraftstoffarten["Diesel, Super E5, Super E10, Super Plus, LKW Diesel, AdBlue, Autogas, B0-Diesel"]
  waschstrasse --> waschprogramme["Waschprogramme mit Preisen und Leistungen"]
  waschstrasse --> saugtarife["Saugtarife"]
  service247 --> automat["Tanken und Grundversorgung nach Ladenschluss"]
  shop --> sortiment["Getränke, Snacks, Tabak, Kaffee, Autozubehör"]
  shop --> marken["Marken im Sortiment"]
  firmenkunden --> abrechnung["Monatsabrechnung und persönliche Beratung"]
  kontakt --> kontaktwege["Telefon, E-Mail, Adresse, Google Maps, Apple Karten"]
```

## Ebene 2: Rollen und Funktionen

Zweck: Diese Darstellung zeigt, welche Nutzergruppen mit welchen Funktionen der Website interagieren.

### Rollen-Funktions-Matrix

| Rolle | Ziel auf der Website | Wichtige Funktionen |
|---|---|---|
| Besucher / Privatkunde | Sich schnell über Tankstelle, Angebote und Standort informieren | Startseite aufrufen, Kraftstoffe ansehen, Waschprogramme vergleichen, Shop-Sortiment ansehen, Kontaktseite öffnen |
| Autofahrer unterwegs | Schnell entscheiden, ob die Tankstelle passt und wie man dorthin kommt | Standort ansehen, Route über Google Maps oder Apple Karten öffnen, Telefonnummer anklicken |
| Waschstraßenkunde | Waschprogramme und Saugtarife vergleichen | Autowäsche-Seite öffnen, Preise prüfen, enthaltene Leistungen vergleichen |
| Shop-Kunde | Sortiment und Marken prüfen | Shop-Seite öffnen, Kategorien und Marken ansehen |
| Firmenkunde | Informationen zu Monatsabrechnungen und regelmäßiger Nutzung erhalten | Firmenkunden-Seite öffnen, Vorteile prüfen, Kontakt per E-Mail oder Telefon aufnehmen |
| Tankstellenbetreiber / Inhaltsverantwortlicher | Informationen bereitstellen und aktuell halten | Inhalte, Preise, Kontaktangaben, Impressum und Datenschutz pflegen |
| Externer Kartendienst | Routenplanung ermöglichen | Google-Maps- oder Apple-Karten-Link öffnen |
| Browser / Endgerät | Darstellung und Interaktion ermöglichen | Seiten anzeigen, mobiles Menü öffnen/schließen, Hell-/Dunkelmodus speichern |

### Use-Case-Übersicht

```mermaid
flowchart LR
  besucher["Besucher / Privatkunde"]
  autofahrer["Autofahrer unterwegs"]
  firmenkunde["Firmenkunde"]
  betreiber["Tankstellenbetreiber"]
  browser["Browser / Endgerät"]
  maps["Google Maps / Apple Karten"]

  subgraph website["Website Tankstelle Oberholzner"]
    uc1(("Website aufrufen"))
    uc2(("Angebote ansehen"))
    uc3(("Kraftstoffe prüfen"))
    uc4(("Waschprogramme vergleichen"))
    uc5(("Shop-Sortiment ansehen"))
    uc6(("24/7-Angebot prüfen"))
    uc7(("Firmenkunden-Angebot prüfen"))
    uc8(("Kontaktinformationen nutzen"))
    uc9(("Route planen"))
    uc10(("Telefonnummer anklicken"))
    uc11(("E-Mail schreiben"))
    uc12(("Mobiles Menü bedienen"))
    uc13(("Hell-/Dunkelmodus wechseln"))
    uc14(("Rechtliche Informationen lesen"))
    uc15(("Website-Inhalte pflegen"))
  end

  besucher --> uc1
  besucher --> uc2
  besucher --> uc3
  besucher --> uc4
  besucher --> uc5
  besucher --> uc6
  besucher --> uc8
  besucher --> uc14

  autofahrer --> uc8
  autofahrer --> uc9
  autofahrer --> uc10

  firmenkunde --> uc7
  firmenkunde --> uc8
  firmenkunde --> uc11

  betreiber --> uc15

  uc9 --> maps
  uc12 --> browser
  uc13 --> browser
```

## Ebene 3: Wichtigste Abläufe / Swimlane-Diagramme

Zweck: Diese Diagramme zeigen, was zeitlich passiert und welche Rolle beziehungsweise welches System beteiligt ist.

### Ablauf 1: Besucher plant eine Route zur Tankstelle

```mermaid
sequenceDiagram
  participant Besucher
  participant Website
  participant Browser
  participant Kartendienst as Google Maps / Apple Karten

  Besucher->>Website: Startseite oder Kontaktseite öffnen
  Website->>Besucher: Adresse und Kartenlinks anzeigen
  Besucher->>Website: Kartenlink anklicken
  Website->>Browser: Externe Karten-URL öffnen
  Browser->>Kartendienst: Zieladresse übergeben
  Kartendienst->>Besucher: Route zur Tankstelle anzeigen
```

### Ablauf 2: Firmenkunde nimmt Kontakt wegen Monatsabrechnung auf

```mermaid
sequenceDiagram
  participant Firmenkunde
  participant Website
  participant Browser
  participant Mailprogramm
  participant Tankstelle as Tankstellenmitarbeiter

  Firmenkunde->>Website: Firmenkunden-Seite öffnen
  Website->>Firmenkunde: Vorteile und Kontaktaufruf anzeigen
  Firmenkunde->>Website: Kontakt & Anfahrt öffnen
  Website->>Firmenkunde: Telefonnummer und E-Mail-Adresse anzeigen
  Firmenkunde->>Browser: E-Mail-Link anklicken
  Browser->>Mailprogramm: Neue E-Mail vorbereiten
  Firmenkunde->>Mailprogramm: Anfrage formulieren und senden
  Mailprogramm->>Tankstelle: Anfrage zustellen
  Tankstelle->>Firmenkunde: Rückmeldung geben
```

### Ablauf 3: Nutzer bedient mobiles Menü und wechselt die Seite

```mermaid
sequenceDiagram
  participant Nutzer
  participant Website
  participant Browser

  Nutzer->>Website: Menübutton antippen
  Website->>Browser: Menü sichtbar schalten
  Browser->>Nutzer: Navigationspunkte anzeigen
  Nutzer->>Website: Zielseite auswählen
  Website->>Browser: Menü schließen und Zielseite laden
  Browser->>Nutzer: Neue Seite anzeigen
```

### Ablauf 4: Nutzer wechselt den Hell-/Dunkelmodus

```mermaid
sequenceDiagram
  participant Nutzer
  participant Website
  participant BrowserSpeicher as Browser / localStorage

  Nutzer->>Website: Theme-Button anklicken
  Website->>Website: Aktuellen Modus prüfen
  Website->>BrowserSpeicher: Neue Theme-Auswahl speichern
  Website->>Nutzer: Darstellung hell oder dunkel anzeigen
```

## Ebene 4: Ereignisse

Zweck: Die Ereignisliste fasst aus Sicht eines Informationssystems zusammen, welche Auslöser welche Folgen haben.

| Ereignis | Auslöser | Folge |
|---|---|---|
| Website aufgerufen | Besucher öffnet die Startseite | Startseite mit Überblick, Kontakt und Angeboten wird angezeigt |
| Navigationspunkt gewählt | Besucher klickt auf eine Seite im Menü | Gewählte Inhaltsseite wird geladen |
| Mobiles Menü geöffnet | Nutzer tippt auf den Menübutton | Navigationsmenü wird eingeblendet |
| Mobiles Menü geschlossen | Nutzer klickt auf Link, außerhalb des Menüs oder drückt Escape | Navigationsmenü wird ausgeblendet |
| Theme gewechselt | Nutzer klickt auf Hell-/Dunkelmodus-Button | Darstellung wechselt und Auswahl wird im Browser gespeichert |
| Kraftstoffangebot angesehen | Besucher öffnet die Kraftstoff-Seite | Kraftstoffarten und Beschreibungen werden angezeigt |
| Waschprogramm angesehen | Besucher öffnet die Autowäsche-Seite | Waschprogramme, Preise, Leistungen und Saugtarife werden angezeigt |
| Shop-Sortiment angesehen | Besucher öffnet die Shop-Seite | Kategorien, Produkte und Marken werden angezeigt |
| Firmenkunden-Angebot geprüft | Firmenkunde öffnet die Firmenkunden-Seite | Vorteile der Monatsabrechnung und Kontaktaufruf werden angezeigt |
| Kontaktseite geöffnet | Nutzer klickt auf Kontakt & Anfahrt | Telefonnummer, E-Mail, Adresse und Kartenlinks werden angezeigt |
| Telefonnummer angeklickt | Nutzer klickt auf die Telefonnummer | Telefon-App oder Telefonfunktion wird geöffnet |
| E-Mail-Adresse angeklickt | Nutzer klickt auf die E-Mail-Adresse | Mailprogramm wird mit Empfängeradresse geöffnet |
| Route geplant | Nutzer klickt auf Google Maps oder Apple Karten | Externer Kartendienst öffnet die Route zur Tankstelle |
| Impressum geöffnet | Nutzer klickt auf Impressum | Rechtliche Anbieterinformationen werden angezeigt |
| Datenschutz geöffnet | Nutzer klickt auf Datenschutz | Informationen zur Datenverarbeitung werden angezeigt |

## Kurzlogik des Webseiten-Auftritts

```mermaid
flowchart TD
  A["Nutzer hat Informationsbedarf"] --> B["Website öffnen"]
  B --> C{"Welches Ziel?"}
  C --> D["Angebot prüfen<br/>Kraftstoffe, Wäsche, Shop, 24/7"]
  C --> E["Kontakt aufnehmen<br/>Telefon oder E-Mail"]
  C --> F["Route planen<br/>Google Maps oder Apple Karten"]
  C --> G["Firmenkunden-Informationen prüfen"]
  C --> H["Rechtliche Informationen lesen"]
  D --> I["Entscheidung: Tankstelle besuchen"]
  E --> J["Kommunikation mit Tankstelle"]
  F --> K["Anfahrt zur Tankstelle"]
  G --> J
  H --> L["Transparenz und rechtliche Absicherung"]
```

