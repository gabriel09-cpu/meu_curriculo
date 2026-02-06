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

  finace: `<h2>DEZ 2025 -FEV 2026</h2>
  <h5>Projeto - Finace Tracker</h5>
  <br>
  <p>Uma aplicação de terminal(CLI) 
  para controle simples de finanças pessoais, 
  permitindo registrar gastos e ganhos, 
  listar transações e gerar relatórios financeiros, 
  usando SQLAlchemy e SQLite.</p>
  <br>
  <h4> > Funcionalidades:</h4>
  <br>
  <p> - <span class ="sp">Cadastrar novas transações</span> com descrição, categoria, tipo(ganho, gasto) e valor.</p>
  <br>
  <p> - Filtrar transações por <span class ="sp">mês</span> ou <span class ="sp">categoria</span>.</p>
  <br>
  <p> - Gerar <span class ="sp">resumo finaceiro total</span>(ganhos, gastos e saldo).</p>
  <br>
  <p> - Gerar <span class ="sp">resumo finaceiro mensal</span>, de acordo com o <span class ="sp">mês informado</span>.</p>
  <br>
  <p> - Deletar transação pelo id.</p>
  <br>
  <h4>Tecnologias Usadas: </h4>
  <br>
  <p> - Python 3.13</p>
  <p> - SQLite com Banco de Dados local</p>
  <p> - SQLAlchemy(ORM) para o mapeamento de Objeto Relacional</p>
  <p> - Pytz para controler de fuso horário na gravação das datas das transações</p>

   <p>(...) Mais em Breve!</p>` 
  
  };

  conteudo.innerHTML = textos[secao];
}

function mandarEmail() {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=g.pedro0972@gmail.com&su=Contato%20pelo%20site&body=Olá%20Gabriel!"
  );
}
