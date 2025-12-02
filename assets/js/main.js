function mostrarConteudo(secao) {
    const itens = document.querySelectorAll(".menu li");

    itens.forEach(li => li.classList.remove("ativo"));

    event.target.classList.add("ativo");


  const textos = {
    sobveu: `<h2>SET 2025 - DEZ 2025</h2>
    <h6>Projeto SobVéu - Site E-commerce para venda de vestidos de noiva</h6>
    <p>fgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
    `,

    calculadora: `<h2>DEZ 2025 - FEV 2026</h2>
    <h6>Projeto Calculadora</h6>
    <p>fgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</p>
    `,
  };

  conteudo.innerHTML = textos[secao];
}
