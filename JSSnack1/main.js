/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore */

const numeroUno = Number(prompt("Inserisci il primo numero"))
console.log(numeroUno)
const numeroDue = Number(prompt("Inserisci il secondo numero"))
console.log(numeroDue)


 if (numeroUno < numeroDue){
    console.log(numeroDue)
 } else if (numeroUno > numeroDue){
    console.log(numeroUno)

 } else {
    console.log("The numbers is equal")
 }


 

