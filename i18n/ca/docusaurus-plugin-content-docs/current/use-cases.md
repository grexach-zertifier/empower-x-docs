---
title: Desenvolupament de casos d'ús en espais de dades agroalimentaris
sidebar_label: Desenvolupament de casos d'ús
---

# Desenvolupament de casos d’ús en espais de dades agroalimentaris

Els espais de dades permeten construir solucions col·laboratives on diferents actors del sector agroalimentari poden combinar conjunts de dades, algoritmes i serveis dins d’un marc compartit de confiança. Aquesta secció explica com es dissenyen i es despleguen casos d’ús dins de l’ecosistema **RegenAg-X**, seguint una metodologia pràctica i orientada a resultats, alineada amb els principis europeus de sobirania del dada i arquitectures federades interoperables.

Com a referència operativa real, RegenAg-X disposa d’un **espai de dades en producció a les Illes Açores (Portugal)**, on productors locals publiquen dades de sòl i permeten l’execució d’algoritmes en **Data Rooms segures** mitjançant **Compute-to-Data**.  
Les dades **no surten mai de l’entorn protegit**, i l’accés es controla mitjançant polítiques verificables i auditables. A l’apartat de *Casos* es poden consultar exemples reals, que s’aniran ampliant a mesura que s’incorporin noves parcel·les, serveis i datasets.

Els casos d’ús són el mecanisme principal per donar resposta a reptes concrets del sector agroalimentari, aprofitant el valor que emergeix quan les dades es comparteixen entre diversos actors. Per assolir-ho, es basen en:

* una infraestructura tècnica comuna (identitats Web3, catàlegs, connectors, Data Rooms, marketplace),  
* un model de governança compartit,  
* i polítiques transparents que garanteixen la sobirania del dada i la interoperabilitat.

---

## Metodologia per desenvolupar un cas d’ús

El desenvolupament d’un cas d’ús dins d’un espai de dades segueix un procés estructurat en fases. Aquest procés assegura que la solució és viable, escalable i coherent amb els principis tècnics i organitzatius dels espais de dades europeus.

A continuació es descriuen les **vuit fases** utilitzades a RegenAg-X, formulades de manera original però compatibles amb les bones pràctiques de l’Oficina del Dada i de la comunitat europea de dataspaces.

---

### 1. Identificació del repte i de l’oportunitat

Els participants detecten una necessitat o un àmbit de millora que pot resoldre’s mitjançant la combinació o compartició de dades.  
Les motivacions més habituals inclouen:

* crear un nou producte o servei,  
* millorar l’eficiència operativa o automatitzar processos,  
* afrontar reptes sectorials que requereixen col·laboració.

---

### 2. Comprensió i estructuració de les dades disponibles

En aquesta fase s’analitza:

* quines dades existeixen,  
* qui n’és el titular,  
* quin nivell de qualitat presenten,  
* i com cal organitzar-les per donar suport al cas d’ús.

També es defineixen:

* el model de dades,  
* les fonts que s’utilitzaran,  
* i si s’empraran tècniques avançades com IA, predicció o simulació.

---

### 3. Alineament entre participants

Els actors implicats acorden el marc de col·laboració:

* condicions de participació,  
* polítiques d’accés i d’ús,  
* expectatives de valor,  
* i els elements bàsics de governança.

L’objectiu és establir unes bases clares i compartides abans de començar la part tècnica.

---

### 4. Disseny funcional i tècnic

Es redacta un document de disseny que especifica:

* la finalitat i el flux operatiu del cas d’ús,  
* quins components de l’espai de dades s’utilitzaran (Compute-to-Data, Data Rooms, catàlegs, marketplace…),  
* les necessitats d’integració i requisits d’interoperabilitat.

Aquest disseny pot reutilitzar patrons existents o components modulars dels ecosistemes Gaia-X i Ocean Enterprise.

---

### 5. Construcció de la solució

A partir del disseny aprovat, es desenvolupa la solució:

* implementació o adaptació d’algoritmes,  
* creació de pipelines de dades,  
* automatització de processos,  
* definició de mètriques i quadres de comandament.

Sempre que és possible, es reutilitzen components ja existents per accelerar el desenvolupament.

---

### 6. Integració de tecnologies i serveis

En aquesta fase s’integren tots els elements necessaris per habilitar el cicle complet del dada:

* connectors d’interoperabilitat,  
* identitats verificables,  
* catàlegs semàntics i metadades,  
* serveis de governança i auditoria,  
* infraestructura de computació segura (Compute-to-Data, Data Rooms).

L’objectiu és assegurar el funcionament d’extrem a extrem dins de l’espai de dades.

---

### 7. Desplegament i validació

El cas d’ús s’incorpora a l’espai de dades RegenAg-X, on es duen a terme:

* proves funcionals i d’integració,  
* proves d’accés amb polítiques reals,  
* validació del Compute-to-Data,  
* comprovacions de conformitat i traçabilitat,  
* i validació final per part dels participants.

Només després d’aquestes verificacions el cas d’ús passa a operació.

---

### 8. Operació, escalat i millora contínua

Un cop operatiu:

* es mesura el valor generat,  
* s’implementen millores,  
* s’estén el cas d’ús a nous actors o datasets,  
* i s’hi incorporen nous serveis o algoritmes.

Aquest cicle permet que l’espai de dades creixi de manera **federada** preservant sempre la sobirania i la confiança.

---

## Eines per a l’avaluació i el disseny de casos d’ús

Per donar suport al procés, s’utilitzen habitualment dos tipus d’eines metodològiques:

### 1. Avaluació de viabilitat

Permet determinar si un cas d’ús és adequat abans de destinar-hi recursos. Inclou:

* identificació del repte,  
* anàlisi del valor esperat (econòmic, ambiental, social),  
* requeriments de col·laboració,  
* riscos i complexitat,  
* decisió final d’avançar o descartar la idea.

### 2. Disseny detallat

Si la viabilitat és positiva, es defineix el cas d’ús amb detall:

* abast i objectius,  
* funcionalitats necessàries,  
* requisits tècnics, organitzatius i legals,  
* arquitectura d’integració,  
* polítiques d’accés i d’ús.

La combinació d’aquestes dues eines permet passar d’una idea inicial a un cas d’ús escalable i implementable dins del dataspace.
