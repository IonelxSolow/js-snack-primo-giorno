/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


let totale = 0;

for(let i = 0; i <= 10 - 1; i++) {
    let numeri = Number(prompt("inserisci un numero"));
    //console.log(numeri)
    totale += numeri
   //console.log(totale + numeri)
   //console.log(`${totale} + ${numeri}`) 
}
console.log(totale)