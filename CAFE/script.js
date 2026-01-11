// ==============================
// CARRITO Y NOTIFICACIÓN
// ==============================
let contador = 0;
const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".btn-agregar");
const notificacion = document.getElementById("notificacion");

botonesAgregar.forEach(boton => {
    boton.addEventListener("click", () => {
        contador++;
        contadorCarrito.textContent = contador;
        mostrarNotificacion();
    });
});

function mostrarNotificacion() {
    notificacion.classList.add("show");
    setTimeout(() => notificacion.classList.remove("show"), 2000);
}

// ==============================
// BUSCADOR
// ==============================
document.getElementById("buscar").addEventListener("input", function() {
    const valor = this.value.toLowerCase();
    const productos = document.querySelectorAll(".producto");
    productos.forEach(prod => {
        const nombre = prod.querySelector("h3").textContent.toLowerCase();
        prod.style.display = nombre.includes(valor) ? "block" : "none";
    });
});

// ==============================
// GRÁFICAS (Chart.js)
// ==============================
const graficos = [
    { id: "grafico1", type: "line", labels: ["2019", "2020", "2021", "2022", "2023", "2024"], data: [13.5, 12.7, 13.8, 12.4, 13.1, 14.0], label: "Millones de sacos" },
    { id: "grafico2", type: "pie", labels: ["EE.UU", "Europa", "Asia", "Otros"], data: [45, 30, 15, 10], label: "Destinos" },
    { id: "grafico3", type: "bar", labels: ["Café Especial", "Orgánico", "Tradicional"], data: [40, 25, 35], label: "Tipos" }
];

graficos.forEach(g => {
    const ctx = document.getElementById(g.id);
    new Chart(ctx, {
        type: g.type,
        data: {
            labels: g.labels,
            datasets: [{
                label: g.label,
                data: g.data,
                borderColor: "#8d6e63",
                backgroundColor: ["#8d6e63", "#c8a15c", "#d7ccc8", "#bcaaa4"],
                fill: true
            }]
        },
        options: { responsive: true }
    });
});