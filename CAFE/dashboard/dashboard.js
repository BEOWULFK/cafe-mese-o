fetch("datos.json")
    .then(res => res.json())
    .then(data => {
        // ==============================
        // Gráfico A: Exportaciones por tipo de café
        // ==============================
        const ctxA = document.getElementById("graficoA").getContext("2d");
        new Chart(ctxA, {
            type: "bar",
            data: {
                labels: data.por_tipo_cafe.map(d => d.anio),
                datasets: [
                    { label: "Café Verde", data: data.por_tipo_cafe.map(d => d.verde), backgroundColor: "#8d6e63" },
                    { label: "Tostado y Molido", data: data.por_tipo_cafe.map(d => d.tostado), backgroundColor: "#c8a15c" },
                    { label: "Soluble y Liofilizado", data: data.por_tipo_cafe.map(d => d.soluble), backgroundColor: "#a1887f" },
                    { label: "Extracto", data: data.por_tipo_cafe.map(d => d.extracto), backgroundColor: "#d7ccc8" }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: "Exportaciones por tipo de café (en sacos)" }
                },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: "Número de sacos" } }
                }
            }
        });

        // ==============================
        // Gráfico B: Exportaciones por tipo de exportador
        // ==============================
        const ctxB = document.getElementById("graficoB").getContext("2d");
        new Chart(ctxB, {
            type: "line",
            data: {
                labels: data.por_tipo_exportador.map(d => d.anio),
                datasets: [
                    { label: "FNC", data: data.por_tipo_exportador.map(d => d.fnc), borderColor: "#8d6e63", fill: false },
                    { label: "Particulares", data: data.por_tipo_exportador.map(d => d.particulares), borderColor: "#a1887f", fill: false }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: "Exportaciones por tipo de exportador (en sacos)" }
                },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: "Número de sacos" } }
                }
            }
        });

        // ==============================
        // Gráfico C: Destinos principales (2022)
        // ==============================
        const ctxC = document.getElementById("graficoC").getContext("2d");
        new Chart(ctxC, {
            type: "pie",
            data: {
                labels: data.destinos_2022.map(d => d.pais),
                datasets: [{
                    data: data.destinos_2022.map(d => d.valor),
                    backgroundColor: [
                        "#8d6e63", "#a1887f", "#d7ccc8", "#bcaaa4",
                        "#c8a15c", "#9e9d24", "#6d4c41", "#795548", "#bdb76b", "#c0a16b", "#c7b299"
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: { display: true, text: "Principales destinos de exportación (2022)" }
                }
            }
        });
    })
    .catch(err => console.error("Error cargando datos:", err));