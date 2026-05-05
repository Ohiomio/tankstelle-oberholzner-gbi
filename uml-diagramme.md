# UML-Diagramme zum Webseiten-Auftritt

## 1. Use-Case-Diagramm: Organisationssicht und Funktionen

```mermaid
flowchart LR
  Besucher["Besucher / Privatkunde"]
  Firmenkunde["Firmenkunde"]
  Betreiber["Tankstellenbetreiber / Inhaltsverantwortlicher"]
  Maps["Externe Kartendienste<br/>Google Maps / Apple Karten"]
  Browser["Browser<br/>localStorage"]

  subgraph Website["Website Tankstelle Oberholzner"]
    UC1(("Website aufrufen"))
    UC2(("Seiten navigieren"))
    UC3(("Kraftstoffe ansehen"))
    UC4(("Autowäsche und Saugtarife ansehen"))
    UC5(("24/7-Angebot ansehen"))
    UC6(("Shop-Sortiment ansehen"))
    UC7(("Kontaktinformationen nutzen"))
    UC8(("Route planen"))
    UC9(("Telefonnummer wählen"))
    UC10(("E-Mail schreiben"))
    UC11(("Firmenkunden-Angebot prüfen"))
    UC12(("Theme umschalten"))
    UC13(("Mobiles Menü öffnen/schließen"))
    UC14(("Rechtliche Informationen lesen"))
    UC15(("Website-Inhalte bereitstellen"))
  end

  Besucher --> UC1
  Besucher --> UC2
  Besucher --> UC3
  Besucher --> UC4
  Besucher --> UC5
  Besucher --> UC6
  Besucher --> UC7
  Besucher --> UC8
  Besucher --> UC9
  Besucher --> UC10
  Besucher --> UC12
  Besucher --> UC13
  Besucher --> UC14

  Firmenkunde --> UC11
  Firmenkunde --> UC7
  Firmenkunde --> UC10

  Betreiber --> UC15

  UC8 --> Maps
  UC12 --> Browser
```

## 2. Aktivitätsdiagramm: Typischer Besuch der Website

```mermaid
flowchart TD
  Start([Start])
  PageLoad["Seite wird geladen"]
  Init["JavaScript initialisiert<br/>Theme, Menü, Scroll-Animationen"]
  Home["Startseite anzeigen"]
  Decision{"Was möchte der Nutzer tun?"}
  Fuel["Kraftstoffe vergleichen"]
  Wash["Waschprogramme / Saugtarife prüfen"]
  Shop["Shop-Angebot ansehen"]
  Service["24/7-Angebot ansehen"]
  Corporate["Firmenkunden-Angebot ansehen"]
  Contact["Kontakt und Anfahrt öffnen"]
  Legal["Impressum / Datenschutz lesen"]
  Theme["Hell-/Dunkelmodus wechseln"]
  Menu["Mobiles Menü öffnen/schließen"]
  Maps["Route in Karten-App öffnen"]
  Call["Telefonnummer anklicken"]
  Mail["E-Mail-Adresse anklicken"]
  End([Ende / Nutzer verlässt Website])

  Start --> PageLoad --> Init --> Home --> Decision
  Decision --> Fuel --> Decision
  Decision --> Wash --> Decision
  Decision --> Shop --> Decision
  Decision --> Service --> Decision
  Decision --> Corporate --> Decision
  Decision --> Contact
  Decision --> Legal --> Decision
  Decision --> Theme --> Decision
  Decision --> Menu --> Decision
  Contact --> Maps --> End
  Contact --> Call --> End
  Contact --> Mail --> End
```

## 3. Klassendiagramm: Datenelemente des Auftritts

```mermaid
classDiagram
  class Website {
    +name: String
    +domain: String
    +themePreference: String
  }

  class Seite {
    +titel: String
    +dateiname: String
    +beschreibung: String
  }

  class Navigationseintrag {
    +label: String
    +zielUrl: String
    +aktiv: Boolean
  }

  class Kontaktinformation {
    +telefon: String
    +email: String
  }

  class Standort {
    +name: String
    +strasse: String
    +plz: String
    +ort: String
    +kartenLink: String
  }

  class Kraftstoff {
    +name: String
    +beschreibung: String
  }

  class Waschprogramm {
    +nummer: Integer
    +preis: Decimal
    +leistungen: String[]
  }

  class Saugtarif {
    +nummer: Integer
    +preis: String
    +dauer: String
  }

  class ShopKategorie {
    +name: String
    +beschreibung: String
  }

  class Marke {
    +name: String
    +kategorie: String
  }

  class Service247 {
    +name: String
    +beschreibung: String
  }

  class FirmenkundenAngebot {
    +zielgruppe: String
    +vorteile: String[]
    +kontaktAufruf: String
  }

  class RechtlicheInformation {
    +typ: String
    +inhalt: String
  }

  Website "1" o-- "*" Seite
  Website "1" o-- "*" Navigationseintrag
  Website "1" o-- "1" Kontaktinformation
  Website "1" o-- "1" Standort
  Seite "1" o-- "*" Kraftstoff
  Seite "1" o-- "*" Waschprogramm
  Seite "1" o-- "*" Saugtarif
  Seite "1" o-- "*" ShopKategorie
  ShopKategorie "1" o-- "*" Marke
  Seite "1" o-- "*" Service247
  Seite "1" o-- "*" FirmenkundenAngebot
  Seite "1" o-- "*" RechtlicheInformation
```

## 4. Zustandsdiagramm: Mobiles Menü

```mermaid
stateDiagram-v2
  [*] --> Geschlossen
  Geschlossen --> Geoeffnet: Klick auf Menübutton
  Geoeffnet --> Geschlossen: Klick auf Menübutton
  Geoeffnet --> Geschlossen: Klick auf Navigationslink
  Geoeffnet --> Geschlossen: Klick außerhalb
  Geoeffnet --> Geschlossen: Escape-Taste
```

## 5. Zustandsdiagramm: Hell-/Dunkelmodus

```mermaid
stateDiagram-v2
  [*] --> SystemPraeferenz
  SystemPraeferenz --> Hell: System ist hell
  SystemPraeferenz --> Dunkel: System ist dunkel
  Hell --> Dunkel: Theme-Button klicken
  Dunkel --> Hell: Theme-Button klicken
  Hell --> Hell: Auswahl in localStorage speichern
  Dunkel --> Dunkel: Auswahl in localStorage speichern
```

