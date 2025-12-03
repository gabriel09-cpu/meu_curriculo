function mostrarConteudo(secao) {
  const itens = document.querySelectorAll(".menu li");

  itens.forEach((li) => li.classList.remove("ativo"));

  event.target.classList.add("ativo");

  const textos = {
    sobveu: `<h2>SET 2025 - DEZ 2025</h2>
<h6>Projeto SobVéu - Site E-commerce para venda de vestidos de noiva</h6>
<p> > Estruturei rotas de API para o CRUD de produtos.</p>
<br>
<p> > Criei toda a parte de processamento de compras — rotas de Carrinho e Checkout.</p>
<br>
<p> > Desenvolvi as rotas de Frete e o redirecionamento para as telas de Checkout e painel de usuário.</p>
<br>
<p> > Auxiliei os devs Front-End na correção do bug de cobrança exagerada nos pedidos.</p>

    `,

    calculadora: `<h2>DEZ 2025 - FEV 2026</h2>
    <h6>Projeto Calculadora</h6>
    <p></p>
    `,
  };

  conteudo.innerHTML = textos[secao];
}

function mandarEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=g.pedro0972@gmail.com&su=Contato%20pelo%20site&body=Olá%20Gabriel!"
  );
}
