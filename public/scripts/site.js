async function carregarDadosSite() {
    const res = await fetch("/api/home");
    const dados = await res.json();

    const h1 = document.querySelector("#titulo");
    h1.textContent = dados.titulo;
}

window.onload = carregarDadosSite;