# Legobitar

## Uppgift

I denna uppgift ska du komplettera med kod så att objekt, som representerar en enkel legobit, skapas enligt tre olika designmönster, _"Factory Pattern"_, _"Constructor Pattern"_, _"Constructor/Prototype Pattern"_ och _"class syntax"_.

Övningsuppgiften är uppdelad i flera filer och du ska skriva kod i som skapar objekt enligt nämnda designmönster. Genomför uppgiften genom att arbeta med filerna, och designmönster, i tur och ordning.

1. `lego-1-factory-pattern.js` - _"Factory Pattern"_
2. `lego-2-constructor-pattern.js` - _"Constructor Pattern"_
3. `lego-3-constructor-prototype-pattern.js` - _"Constructor/Prototype Pattern"_
4. `lego-4-class.js` - _"Class"_

Modulerna samverkar enligt beroendediagrammet nedan. Du ser även ett antal filer i `test` (som du inte ska redigera), vilka innehåller de enhetstester som körs med `npm test`.

![Beroendediagram](/.readme/dependency-graph.svg)

Genom att använda tidigare nämnda designmönster ska objekt skapas som har egenskaper och metoder enligt nedan.

### Egenskaper

- `x`, antal knoppar i horisontell led, standardvärdet 2.
- `y`, antal knoppar i vertikal led, standardvärdet 4.
- `color`, färg som sträng, standardvärdet 'red'.

### Metoder

- `toString`, returnerar en sträng representerande objektet, `® ® ® ®\n® ® ® ®` ska returneras för ett objekt där `x` är 4 och `y` är 2.
- `render`, skriver ut strängen metoden `toString` returnerar i terminalen.

## Tips

Genom att köra enhetstesterna som kommer med övningsuppgiften kan du undersöka om koden du skrivit löst uppgiften (i alla fall enligt enhetstesterna...).
