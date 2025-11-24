---
title: "Desenvolupament de casos d’ús en espais de dades energètics"
sidebar_label: "Casos d'Ús"
---

# Desenvolupament de casos d’ús en espais de dades energètics

Els espais de dades permeten construir solucions col·laboratives on diferents actors de l’ecosistema energètic, urbà i de mobilitat poden combinar dades, algoritmes i serveis dins d’un marc compartit de confiança. Aquest apartat descriu com es dissenyen i es despleguen casos d’ús dins de l’ecosistema Empower-X, seguint una metodologia pràctica i orientada a resultats, coherent amb els principis europeus d’interoperabilitat, sobirania del dada i federació entre territoris.

Empower-X opera com a demostrador del **Data Space for Positive Energy Districts (DS4PED)**, vinculat al projecte europeu DS4SSCC-DEP.  
En el pilot de Rubí, els sistemes municipals, les plantes solars públiques, els punts de recàrrega, les comunitats energètiques, la mobilitat elèctrica i la plataforma ZertiPower comparteixen dades mitjançant un espai de dades federat que garanteix traçabilitat, sobirania i computació segura.

Els casos d’ús són el mecanisme principal per resoldre reptes energètics i urbans mitjançant l’intercanvi federat de dades. Es basen en:

* **una infraestructura tècnica comuna** (identitats Web3, catàlegs semàntics, connectors EDC/IDS, Data Rooms, Compute-to-Data, marketplace),  
* **un model de governança compartit**,  
* **polítiques d’ús verificables** que garanteixen sobirania del dada, privadesa i interoperabilitat.

## Metodologia per desenvolupar un cas d’ús a Empower-X

El desenvolupament d’un cas d’ús en un espai de dades energètic segueix un cicle estructurat en vuit fases. Aquest cicle garanteix una solució factible, segura, interoperable i escalable dins d’un ecosistema federat i multiactor.

### 1\. Identificació del repte i de l’oportunitat

Els participants detecten una necessitat compartida relacionada amb:

* integració de renovables distribuïdes,  
* traçabilitat energètica en temps real,  
* gestió de flexibilitat,  
* mobilitat elèctrica i planificació d’infraestructures,  
* eficiència energètica urbana,  
* optimització de xarxes de recàrrega,  
* coordinació entre actors (municipis, DSOs, comunitats energètiques, operadors de mobilitat).

Exemples del pilot de Rubí:  
– garantir recàrrega 100% renovable amb ZEAC i traçabilitat en temps real;  
– tokenitzar excedents fotovoltaics municipals per equilibrar el consum nocturn.

### 2\. Comprensió i estructuració de les dades disponibles

S’analitza:

* quines dades existeixen i qui en té la titularitat,  
* la seva qualitat, granularitat i freqüència,  
* els models semàntics aplicables (SAREF, Smart Data Models, NGSI-LD, CEEDS Blueprint),  
* quines dades requereixen execució Compute-to-Data (p. ex. consums elèctrics individuals o mobilitat personal).

Es defineix el model de dades i si cal aplicar:

* predicció energètica o de mobilitat,  
* simulació urbana,  
* agregació de flexibilitat,  
* algoritmes d’optimització.

### 3\. Alineament entre participants

Els actors del cas d’ús estableixen un marc compartit:

* condicions de participació,  
* polítiques d’accés i permisos,  
* valor esperat,  
* rols i responsabilitats,  
* mecanismes de governança i control.

Aquest pas estableix una base comuna de confiança abans d’iniciar la integració tècnica.

### 4\. Disseny funcional i tècnic

El document de disseny defineix:

* la lògica funcional del cas d’ús,  
* les fonts de dades i els fluxos d’intercanvi,  
* els components a utilitzar (Compute-to-Data, Data Rooms, marketplace, catàlegs federats, connectivitat EDC/IDS),  
* els requisits legals (GDPR, DGA, Data Act),  
* els requisits semàntics i d’integració.

Aquest disseny es basa en patrons del **CEEDS Blueprint** i en els requisits dels pilots DS4PED.

### 5\. Desenvolupament de la solució

Es construeix la solució:

* desenvolupament o adaptació d’algoritmes (flexibilitat, forecasting, certificació),  
* creació de pipelines de dades en temps real,  
* integració amb sistemes municipals, CPOs o comunitats energètiques,  
* definició de mètriques (energia renovable, eficiència, KPIs de mobilitat).

Exemples:

* algoritme de generació de ZEAC a partir de producció solar municipal;  
* predicció combinada de demanda de recàrrega i disponibilitat solar.

### 6\. Integració de tecnologies i serveis

S’integren:

* connectors EDC/IDS,  
* identitats verificables i wallets Web3,  
* catàlegs federats amb metadades FAIR,  
* serveis de governança i auditoria,  
* Data Rooms i Compute-to-Data,  
* infraestructura DLT per a ZEAC, EKW i certificació energètica.

L’objectiu és garantir el cicle complet del dada dins del data space sense perdre sobirania.

### 7\. Desplegament i validació

Cada cas d’ús es valida dins d’Empower-X mitjançant:

* proves funcionals i d’integració,  
* proves d’accés amb polítiques reals,  
* validació Compute-to-Data,  
* comprovacions de conformitat i traçabilitat,  
* validació final per part de tots els participants.

Exemples validats a Rubí:

* traçabilitat 100% renovable en recàrrega EV amb ZEAC;  
* simulació operativa del PED integrant energia, mobilitat i clima.

### 8\. Operació, escalat i millora contínua

Quan el cas entra en operació:

* se’n mesura el valor energètic, econòmic i ambiental,  
* s’incorporen noves fonts de dades i nous actors,  
* s’integra amb altres data spaces (CEEDS, Mobilitat, Edificació),  
* es replica en nous territoris.

Aquest cicle permet fer créixer l’espai de dades mantenint sempre sobirania, traçabilitat i federació.

## Eines metodològiques per a l’avaluació i disseny de casos d’ús

### 1\. Avaluació de viabilitat

Analitza:

* el repte i la hipòtesi de valor,  
* el potencial energètic i urbà,  
* els beneficis econòmics o socials,  
* els requisits de col·laboració,  
* riscos i complexitat,  
* decisió d’avançar (go/no-go).

### 2\. Disseny detallat

Si és viable, es defineix:

* l’abast precís,  
* els rols energètics (DSO, CPO, municipi, prosumidors),  
* requisits tècnics, legals i organitzatius,  
* arquitectura d’integració,  
* polítiques d’accés i d’ús,  
* roadmap i recursos necessaris.

Aquest procés transforma una idea inicial en un cas d’ús implementable i escalable dins d’Empower-X i replicable en altres territoris.
