function mostrarConteudo(secao) {
  const itens = document.querySelectorAll(".menu li");

  itens.forEach((li) => li.classList.remove("ativo"));

  event.target.classList.add("ativo");

  const textos = {
    sobveu: `<h2>SET 2025 - DEZ 2025</h2>
<h5>Projeto SobVéu - Site E-commerce para venda de vestidos de noiva</h5>
<p> > Estruturei rotas de API para o CRUD de produtos.</p>
<br>
<p> > Criei toda a parte de processamento de compras — rotas de Carrinho e Checkout.</p>
<br>
<p> > Desenvolvi as rotas de Frete e o redirecionamento para as telas de Checkout e painel de usuário.</p>
<br>
<p> > Auxiliei os devs Front-End na correção do bug de cobrança exagerada nos pedidos.</p>

    `,

    calculadora: `<h2>DEZ 2025 - FEV 2026</h2>
    <h5>Projeto Calculadora</h5>
    <p> > Calculator: Criei a classe pai Calculator, 
    que é um modelo de uma calculadora real, 
    que efetua calculos com dois termos x e y. </p>
    <br>
    <p> > Controller: Criei o controtroller para ser a ponte,
    entre a calculadora e a Interface gráfica.</p>
    <br>
    <p> > UI: Classe CalculatorUI, que é responsável por criar e
    gerenciar a interface gráfica da calculadora.</p>

    <br>
    <p> > Main: Ponto de partida do programa. 
    Junta todos os arquivos e executa o programa</p>

    <br>
    <p>(...) Mais em Breve!</p>
    `,

  finace: `<h2>DEZ 2025 -FEV 2026</h2>
  <h5>Projeto - Finace Tracker</h5>
  <br>
  <p>Finace Tracker, é um gerenciador financeiro, que tem como
  função principal auxiliar no nosso controle pessoal de gastos
  mensais e anuais.</p>
  <br>
  <p> > Comecei com um prototipo simples. Apenas um app de terminal
   Com funções para: Adicionar Transações, Listar transações,
   Listar por mês, Listar por Tipo etc
   <p>(...) Mais em Breve!</p>` 
  
  };

  conteudo.innerHTML = textos[secao];
}

function mandarEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=g.pedro0972@gmail.com&su=Contato%20pelo%20site&body=Olá%20Gabriel!"
  );
}
