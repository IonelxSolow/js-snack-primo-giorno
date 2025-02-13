/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const arrayVuoto = [ ];
 for (let i = 0; i < 6; i++) {
    let numeri = Number(prompt("Inserisci un numero")) 
        if (numeri % 2 === 0){
            console.log(numeri)
        } else if (numeri % 2 !== 0){
            arrayVuoto.push(numeri)
        }

 }
 console.log(arrayVuoto)