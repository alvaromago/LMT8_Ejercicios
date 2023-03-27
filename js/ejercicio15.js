document.write("<h3>Ejercicio 15</h3>");
const fechaActual = new Date();
const diaSemana = fechaActual.toLocaleDateString('es-ES', { weekday: 'long' });
const diaMes = fechaActual.getDate();
const mes = fechaActual.toLocaleDateString('es-ES', { month: 'long' });
const anio = fechaActual.getFullYear();

document.write("Fecha actual: " + fechaActual + "<br>");
document.write("Día de la semana. "+ diaSemana + "<br>");
document.write("Día: " + diaMes + "<br>");
document.write("Mes: " + mes + "<br>");
document.write("Año: " + anio + "<br>");