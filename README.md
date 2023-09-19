Campo Minato
===

## Esercizio

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.    
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.   

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.   Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).  
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba, fare visulaizzare tutte le bombe in gliglia e congelare la griglia.    

#### Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;


## JavaScript

0. Alla funzione generate inserisco il comando che assegna un ID numerico ad ogni quadrato
1. Costruisco una Funzione random con intervallo - 1 - e - valore massimo delle celle - (va quindi inserita dopo la scelta delle dimensioni della griglia e deve partire al click del button dello start)
2. Creo un ciclo do while in cui il computer
    1. sceglierà 16 valori casuali
    2. saranno valori univoci
    3. ogni numero viene pushato dentro un array BOMBS
3. al click sul quadrato controlliamo se il valore dell' ID è incluso nell'array bombs
4. aggiungiamo la classe bomb e si colora di rosso
5. se non è una bomba la prtita continua e si colora di blue 
6. ogni volta che si colora di blue il counter auemnta di uno