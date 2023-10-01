const currentDate = new Date();
const dia = currentDate.getDate();
const mes = currentDate.getMonth()+1;
const anio = currentDate.getFullYear();
console.log("La fecha actual es: " + dia + "/" + mes + "/" + anio);