//

//Eventos
/*
Añadimos que el eveneto con la funcion de cambiar color 
para el presupuesto se ejecute al hacer click en el 
boton agregar
*/
/*Cambiar color del presupuesto es una función que se usa 
para cambiar el color de los mensajes que nos proporcionan 
el presupuesto y el dinero restante dependiendo de el dinero 
que queda
*/
let cGasto = 0;

function cambiarColorPresupuesto() {

    let restante = document.querySelector("#restantedivid");
    /*presupuestoUsuario es el presupuesto que metemos a prompt*/
    cGasto = Number(cGasto) + Number(document.querySelector('#cantidad').value);
    console.log(cGasto);
    //

    let presupuestoRestanteUsuariof = presupuestoUsuario - cGasto;
    //document.getElementById("idrestante");
    console.log("Dentro de la funcion");
    /* Definición de los porcentajes*/
    console.log(presupuestoRestanteUsuariof);
    let pr50 = presupuestoUsuario / 2;
    console.log(pr50);
    //amarillo
    let pr25 = presupuestoUsuario / 4;
    console.log(pr25);
    //rojo
    let pr10 = presupuestoUsuario / 10;
    console.log(pr10);
    //rojo sangre
    let pr0 = 0;
    //negro

    //Gastos ofenden
    let sobrepasados = document.querySelector(".gastosExcedenPresupuesto");

    //presupuestoRestanteUsuario es el presupuesto que queda
    if (presupuestoRestanteUsuariof >= pr50) {
        restante.className = "verde";
        console.log("verde");
    } else if (presupuestoRestanteUsuariof < pr50 && presupuestoRestanteUsuariof >= pr25) {
        restante.className = "amarillo";
        console.log("amarillo");
    } else if (presupuestoRestanteUsuariof < pr25 && presupuestoRestanteUsuariof >= pr10) {
        restante.className = "rojo";
        console.log("rojo");
    } else if (presupuestoRestanteUsuariof < pr10 && presupuestoRestanteUsuariof >= pr0) {
        restante.className = "rojoscuro";
        console.log("rojo oscuro");
    } else if (presupuestoRestanteUsuariof < 0) {
        restante.className = "negro";
        console.log("negro");
        /*
                Variables que diran "Sus gastos exceden el 
                presupuesto"
                */
        /*let precioBajo = document.createElement("p");
        let newContent = document.createTextNode("Tus gastos exceden el presupuesto");*/

        sobrepasados.className = "gastosExcedenPresupuestoConfirmado";
    }

}