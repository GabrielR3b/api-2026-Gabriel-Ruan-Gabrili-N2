async function carregarProdutos() {
  const response = await fetch("/api/products");
  const dados = await response.json();

  const container = document.getElementById("container-produtos");
  console.log(dados);
  container.innerHTML = dados["productsList"]
    .map(
      (p) => `
      <div class="card">
        <h3>${p.nome}</h3>
        <p>${p.disponivel ? "Disponível" : "Esgotado"}</p>
        <a href="/products/${p.id}">Ver detalhes</a>
      </div>
    `,
    )
    .join("");
}

window.onload = carregarProdutos;
