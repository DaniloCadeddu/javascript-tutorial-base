Creare una cartella per ogni esercizio nominata "ExerciseX" dove X è il numero dell'esercizio.
I primi due esercizi sono per fare pratica con la sintassi, dal terzo in poi si passa all'integrazione con il DOM

Letture online:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

https://www.w3schools.com/js/default.asp 

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

---------------------------------------------------------------------------------------------------------------------------------

1. Dato un array di interi *nums* e un numero intero *target*, ritorna gli INDICI dei due numeri che sommati tra loro equivalgono
a *target*. 

Restrizioni:
+ Puoi assumere che esiste un'unica soluzione
+ Non usare lo stesso elemento due volte.
+ 2 <= nums.length

Esempio: 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Spiegazione: Poiché nums[0] + nums[1] == 9, ritorniamo [0, 1].


---------------------------------------------------------------------------------------------------------------------------------

2. Data una stringa *s* che consiste in delle parole separate da un certo numero di spazi,
ritorna la lunghezza dell'ultima parola nella stringa. Una parola è la massima sottostringa senza spazi.

Restrizioni: 
+ 1 <= s.length <= 10^4
+ *s* consiste in sole lettere inglesi e spazi ' '.
+ C'è almeno un parola in *s*.

Esempio:
Input: s = "   fly me   to   the moon  "
Output: 4
Spiegazione: L'ultima parola è "moon" di lunghezza 4.

---------------------------------------------------------------------------------------------------------------------------------

3. Costruire un file HTML con un bottone, al click del bottone triggerare una funzione Javascript che crea un div
con una scritta a piacere e la inserisce in pagina. Creare un file js separato e linkarlo nel file HTML.

---------------------------------------------------------------------------------------------------------------------------------

4. Creare un input di testo ed un bottone, al click del bottone, se il digitato nell'input contiene la lettera "a" o "A"
mostrare sopra l'input la scritta "Errore" di colore rosso, altrimenti la scritta "Ok" in verde.
Separare i file css, html e js. Non preocupparsi di distruggere o nascondere elementi dopo tentativi consecutivi ma creare i div di ok ed errore lato JS

---------------------------------------------------------------------------------------------------------------------------------

5. Creare un tag img con un immagine a piacere che cambia (con un'altra immagine) al passare del mouse sopra di essa.

---------------------------------------------------------------------------------------------------------------------------------

6) A partire da un array del tipo:
[
    {
        id: 1,
        name: "Gino"
    },
    {
        id: 2,
        name: "Pino"
    },
    {
        id: 3,
        name: "Mario"
    },
    {
        id: 4,
        name: "Rosario"
    }
]
implementare una drop down che ha come opzioni i nomi dell'array sopra. Alla selezione di un opzione mostrare in pagina 
id e nome della selezionata. Cambiando il selezionato il nome e id precedente viene sostituito dal nuovo.
La comparazione tra l'opzione selezionata e l'array originale va fatta per id e non per nome.

---------------------------------------------------------------------------------------------------------------------------------

7. All'atterraggio in pagina chiedere all'utente di attivare la geolocalizzazione, se l'utente l'attiva, stampare
le coordinate in pagina e creare un link a google maps con le coordinate in questione.
se l'utente non accetta la geolocalizzazione fare un REDIRECT ad un sito a piacere.

---------------------------------------------------------------------------------------------------------------------------------

8. A partire da un file html con body vuoto, creare lato Javascript un bottone che triggera la funzione dell'esercizio 7.
Una volta cliccato, il bottone viene nascosto.

---------------------------------------------------------------------------------------------------------------------------------

9. Creare un file HTML con un solo div vuoto. All'atterraggio in pagina, usando la funzione Javascript 
*fetch*, (vedi: https://developer.mozilla.org/en-US/docs/Web/API/fetch) consumare una REST API a piacere 
(preferibilmente creata da te con Spring Boot, altrimenti vedi https://jsonplaceholder.typicode.com/posts) 
che inserisce in pagina una delle informazioni degli oggetti ritornati (per ogni oggetto nella lista).
L'API è importante che ritorni una lista di oggetti e non un singolo oggetto.
In caso la chiamata REST fallisca mostrare in pagina un messaggio di errore.

---------------------------------------------------------------------------------------------------------------------------------

10. A partire dall'esercizio precedente, salvare nel session storage l'oggetto di ritorno dell'API. Fare in modo
che, al refresh della pagina, non venga effettuata una nuova chiamata al server se l'oggetto è già presente nel session storage.
Nel caso sia presente utilizzarlo per popolare le informazioni in pagina. Verificare il risultato con i DevTools del browser.

---------------------------------------------------------------------------------------------------------------------------------