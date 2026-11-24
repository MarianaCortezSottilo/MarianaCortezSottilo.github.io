// =====================================================================
//  SEUS CASES: um bloco { ... } por case
//  pagina: id da página do relatório no Power BI (abre o painel direto nela)
//  imagens: prints em img/ (o primeiro é a capa)
// =====================================================================
window.CASOS = [
  {
    id: "desempenho-rede",
    numero: "01",
    pagina: "338d3d0caecb0de69448",
    matriz: true,
    imagens: ["img/01-desempenho.png", "img/04-mapa.png"],
    titulo: { pt: "Desempenho da rede e mapa", en: "Chain performance and map" },
    subtitulo: { pt: "Varejo · franquia · 10 lojas em 9 estados", en: "Retail · franchise · 10 stores in 9 states" },
    resumo: {
      pt: "Quanto a rede cresce de verdade quando se tiram as inaugurações? Faturamento, mesmas lojas, ranking e um mapa coroplético clicável dos estados.",
      en: "How much does the chain really grow once new openings are removed? Revenue, same-store growth, store ranking and a clickable choropleth map of the states.",
    },
    tags: ["Power BI", "DAX", "Deneb / Vega-Lite", { pt: "Inteligência de tempo", en: "Time intelligence" }],
    destaques: [
      { valor: { pt: "R$ 399 mi", en: "R$ 399M" }, rotulo: { pt: "faturamento em 24 meses", en: "revenue in 24 months" } },
      { valor: { pt: "+8,2%", en: "+8.2%" }, rotulo: { pt: "crescimento mesmas lojas", en: "same-store growth" } },
      { valor: "28%", rotulo: { pt: "do faturamento vem de SP", en: "of revenue comes from São Paulo state" } },
    ],
    problema: {
      pt: "O faturamento total subiu 28% no último ano, mas três lojas foram inauguradas no período. A diretoria precisava separar o efeito das inaugurações do crescimento real das lojas que já existiam, e enxergar onde a rede está concentrada.",
      en: "Total revenue grew 28% in the last year, but three stores opened during the period. Management needed to separate the effect of new openings from the real growth of existing stores, and to see where the chain is concentrated.",
    },
    modelagem: {
      pt: "A medida de mesmas lojas considera só as lojas abertas há mais de 12 meses e compara o período escolhido com o mesmo período do ano anterior, a partir do 13º mês de dados. A primeira versão mostrava +108%: com o filtro \"Todos os anos\", ela comparava 24 meses com os 12 que existiam antes. Restringir o período atual ao trecho que tem base de comparação resolveu, e o número caiu para +8,2%.",
      en: "The same-store measure only counts stores open for more than 12 months and compares the selected period with the same period a year earlier, starting from the 13th month of data. The first version showed +108%: with \"All years\" selected it compared 24 months against the 12 that existed before. Restricting the current period to the window that has a comparison base fixed it, and the figure dropped to +8.2%.",
    },
    decisoes: {
      pt: [
        "Mapa coroplético em Deneb (Vega-Lite) com o contorno dos estados simplificado para 35 KB: gradiente de verde pelo faturamento e clique no estado para filtrar a página.",
        "Azul para lojas próprias e laranja para franquias em todos os visuais, para que a cor sempre signifique a mesma coisa.",
        "Cards com a variação sobre o ano anterior em seta e texto, não só em cor.",
        "Frase dinâmica que explica o número principal para quem tem 10 segundos.",
      ],
      en: [
        "Choropleth map in Deneb (Vega-Lite) with state outlines simplified to 35 KB: a green gradient by revenue, and clicking a state filters the page.",
        "Blue for company-owned stores and orange for franchises in every visual, so a color always means the same thing.",
        "Cards show the change versus last year with an arrow and text, not just color.",
        "A dynamic sentence explains the headline number for readers who have 10 seconds.",
      ],
    },
  },
  {
    id: "logistica-cds",
    numero: "02",
    pagina: "6245aeb9b90796266848",
    imagens: ["img/02-logistica.png"],
    titulo: { pt: "Logística e centros de distribuição", en: "Logistics and distribution centers" },
    subtitulo: { pt: "Supply chain · 3 CDs · 2.190 viagens", en: "Supply chain · 3 DCs · 2,190 trips" },
    resumo: {
      pt: "Quanto custa abastecer cada loja a partir dos CDs, e se cada CD se paga: frete por rota, lead time e o caso de Belém, a 2.094 km do CD.",
      en: "What it costs to supply each store from the DCs, and whether each DC pays for itself: freight per route, lead time and the case of Belém, 2,094 km from its DC.",
    },
    tags: ["Power BI", "DAX", "USERELATIONSHIP", { pt: "Logística", en: "Logistics" }],
    destaques: [
      { valor: { pt: "7,8%", en: "7.8%" }, rotulo: { pt: "frete sobre o valor enviado a Belém", en: "freight over goods shipped to Belém" } },
      { valor: { pt: "1,1%", en: "1.1%" }, rotulo: { pt: "na rota de São Paulo", en: "on the São Paulo route" } },
      { valor: { pt: "R$ 160 mi", en: "R$ 160M" }, rotulo: { pt: "transferidos dos CDs às lojas", en: "shipped from DCs to stores" } },
    ],
    problema: {
      pt: "A rede expandiu para o Norte e o Centro-Oeste abastecendo as lojas a partir de CDs distantes. Era preciso medir quanto do valor enviado fica no frete e se a margem que cada CD cobra das lojas cobre o transporte.",
      en: "The chain expanded to the North and Center-West, supplying stores from distant DCs. The question was how much of the shipped value is eaten by freight, and whether the margin each DC charges the stores covers transport.",
    },
    modelagem: {
      pt: "A tabela de transferências tem duas chaves para a mesma dimensão de unidades: a loja que recebe (relação ativa) e o CD que envia (relação inativa). As medidas da visão do CD ativam a segunda relação com USERELATIONSHIP, o que mantém uma única dimensão e evita duplicar a tabela.",
      en: "The transfers table has two keys to the same unit dimension: the receiving store (active relationship) and the shipping DC (inactive). DC-level measures switch to the second relationship with USERELATIONSHIP, which keeps a single dimension instead of duplicating the table.",
    },
    decisoes: {
      pt: [
        "Dispersão distância × frete sobre o valor: a relação fica evidente sem precisar de explicação.",
        "Barras de margem de distribuição × frete por CD: o CD01 gera R$ 7,0 mi de margem e gasta R$ 2,3 mi em frete.",
        "Clicar num CD filtra só as lojas que ele abastece.",
      ],
      en: [
        "Distance × freight-over-value scatter: the relationship is obvious without explanation.",
        "Distribution margin vs. freight bars per DC: DC01 earns R$ 7.0M in margin and spends R$ 2.3M on freight.",
        "Clicking a DC filters the page to the stores it supplies.",
      ],
    },
  },
  {
    id: "resultado-caixa",
    numero: "03",
    pagina: "9b1c4e7a2d5f8a3c6e01",
    imagens: ["img/03-resultado-dre.png", "img/07-estoque-caixa.png"],
    titulo: { pt: "DRE, caixa e estoque", en: "P&L, cash and inventory" },
    subtitulo: { pt: "Controladoria · DRE gerencial · fluxo de caixa", en: "Controlling · management P&L · cash flow" },
    resumo: {
      pt: "Da receita ao lucro líquido em uma cascata, a DRE gerencial clicável, o saldo de caixa projetado para 60 dias e os itens que precisam ser repostos agora.",
      en: "From revenue to net income in a waterfall, a clickable management P&L, the cash balance projected 60 days ahead and the items that need restocking now.",
    },
    tags: ["Power BI", "DAX", { pt: "Finanças", en: "Finance" }, { pt: "DRE", en: "P&L" }],
    destaques: [
      { valor: { pt: "3,1%", en: "3.1%" }, rotulo: { pt: "margem EBITDA", en: "EBITDA margin" } },
      { valor: { pt: "R$ 12,0 mi", en: "R$ 12.0M" }, rotulo: { pt: "faturamento mensal de equilíbrio", en: "monthly break-even revenue" } },
      { valor: { pt: "13,5 dias", en: "13.5 days" }, rotulo: { pt: "de venda cobertos pelo estoque", en: "of sales covered by inventory" } },
    ],
    problema: {
      pt: "A rede mistura empresas diferentes: franqueados, lojas próprias, CDs e a franqueadora. A controladoria precisava de uma DRE comparável por unidade que também fechasse no consolidado, e de uma visão de caixa que mostrasse o aperto antes de ele acontecer.",
      en: "The chain mixes different companies: franchisees, company-owned stores, DCs and the franchisor. Controlling needed a P&L comparable by unit that also closes at consolidated level, plus a cash view that shows a squeeze before it happens.",
    },
    modelagem: {
      pt: "A DRE vem em formato longo (mês × unidade × linha), com a ordem e o nível de cada linha. Royalties e margem dos CDs aparecem como receita da franqueadora e custo das lojas, e se anulam no consolidado. O saldo de caixa é acumulado até a última data do filtro, e a projeção soma os recebimentos de cartão e as contas a pagar já lançadas.",
      en: "The P&L is stored in long format (month × unit × line) with the order and level of each line. Royalties and DC margin show up as franchisor revenue and store cost, and cancel out when consolidated. The cash balance is cumulative up to the last filtered date, and the forecast adds card receivables and payables already booked.",
    },
    decisoes: {
      pt: [
        "Cascata da receita ao lucro: o CMV (63,5% da receita) é a barra que salta aos olhos.",
        "Clicar numa linha da DRE troca o gráfico de baixo para a evolução mensal daquela linha, sem esvaziar os cards.",
        "Contas a pagar por faixa de vencimento: R$ 11,7 mi vencem entre 8 e 30 dias.",
        "Lista de reposição com só o que está sem estoque ou abaixo do mínimo, mais urgente primeiro.",
      ],
      en: [
        "Revenue-to-profit waterfall: cost of goods sold (63.5% of revenue) is the bar that jumps out.",
        "Clicking a P&L line switches the chart below to that line's monthly trend, without blanking the cards.",
        "Payables by due-date bucket: R$ 11.7M fall due in 8 to 30 days.",
        "Restock list showing only items out of stock or below minimum, most urgent first.",
      ],
    },
  },
  {
    id: "clientes-expansao",
    numero: "04",
    pagina: "5e8f3b0d2c9a4f7b6d03",
    imagens: ["img/05-clientes-expansao.png"],
    titulo: { pt: "Clientes e expansão", en: "Customers and expansion" },
    subtitulo: { pt: "Geomarketing · 33 mil clientes · 28 cidades candidatas", en: "Geomarketing · 33k customers · 28 candidate cities" },
    resumo: {
      pt: "De onde vêm os clientes de cada loja e onde abrir as próximas: distância de casa até a loja e cidades com mais habitantes por supermercado.",
      en: "Where each store's customers come from and where to open next: distance from home to store, and cities with the most residents per supermarket.",
    },
    tags: ["Power BI", "Deneb / Vega-Lite", "Geomarketing"],
    destaques: [
      { valor: "45%", rotulo: { pt: "dos clientes moram a 1–3 km", en: "of customers live 1–3 km away" } },
      { valor: { pt: "33,6%", en: "33.6%" }, rotulo: { pt: "das compras identificadas com CPF", en: "of purchases identified by tax ID" } },
      { valor: { pt: "11.000", en: "11,000" }, rotulo: { pt: "habitantes por supermercado em Feira de Santana", en: "residents per supermarket in Feira de Santana" } },
    ],
    problema: {
      pt: "A franqueadora precisava saber se as lojas são de bairro ou atraem clientes de longe, e ter um critério simples para priorizar as cidades da próxima expansão.",
      en: "The franchisor needed to know whether stores serve their neighborhood or draw customers from far away, and to have a simple criterion to rank cities for the next expansion.",
    },
    modelagem: {
      pt: "Clientes geolocalizados com a distância até a loja calculada no Python e a faixa de distância pronta na dimensão. As cidades candidatas compartilham a dimensão de cidades com as lojas, então o mesmo mapa mostra as duas coisas.",
      en: "Geolocated customers with the distance to their store computed in Python and the distance band ready in the dimension. Candidate cities share the city dimension with the stores, so one map shows both.",
    },
    decisoes: {
      pt: [
        "Mapa do Brasil inteiro com os estados em verde claro e as bolhas por cima, em cores que não competem com o fundo.",
        "Tamanho da bolha = clientes; cor = % que mora a até 3 km.",
        "Filtro de estado no próprio mapa de expansão.",
      ],
      en: [
        "Whole-Brazil map with states in light green and bubbles on top, in colors that don't compete with the background.",
        "Bubble size = customers; color = % living within 3 km.",
        "State filter right on the expansion map.",
      ],
    },
  },
  {
    id: "pessoas-operacao",
    numero: "05",
    pagina: "6f9a4c1e3d0b5a8c7e04",
    imagens: ["img/06-pessoas-operacao.png"],
    titulo: { pt: "Pessoas e operação", en: "People and operations" },
    subtitulo: { pt: "RH · perdas · ruptura de gôndola", en: "HR · shrinkage · out-of-stocks" },
    resumo: {
      pt: "Quanto da venda vai para a folha, onde a rede perde mercadoria e quais produtos mais faltaram na gôndola.",
      en: "How much of sales goes to payroll, where the chain loses goods, and which products ran out on the shelf most often.",
    },
    tags: ["Power BI", "DAX", { pt: "RH", en: "HR" }, { pt: "Operação", en: "Operations" }],
    destaques: [
      { valor: { pt: "13,1%", en: "13.1%" }, rotulo: { pt: "do faturamento vai para pessoal", en: "of revenue goes to staff costs" } },
      { valor: { pt: "1,8%", en: "1.8%" }, rotulo: { pt: "de perdas sobre o faturamento", en: "shrinkage over revenue" } },
      { valor: "436", rotulo: { pt: "funcionários em média", en: "employees on average" } },
    ],
    problema: {
      pt: "Pessoal e perdas são os dois maiores custos controláveis de um supermercado depois da mercadoria. A operação precisava ver os dois por loja, por setor e por motivo.",
      en: "Staff and shrinkage are a supermarket's two largest controllable costs after merchandise. Operations needed to see both by store, department and cause.",
    },
    modelagem: {
      pt: "A folha vem mês × unidade × cargo, com salário, encargos, benefícios, 13º/férias e horas extras em colunas separadas para empilhar no gráfico. As perdas têm 218 mil ocorrências com motivo e produto, e a ruptura registra a venda que não aconteceu por falta do item.",
      en: "Payroll is stored month × unit × role, with salary, payroll taxes, benefits, 13th-salary/vacation accruals and overtime in separate columns for stacking. Shrinkage has 218k events with cause and product, and out-of-stocks record the sale lost because the item was missing.",
    },
    decisoes: {
      pt: [
        "Laranja para tudo o que é perda, verde para o resto, nas três visões de perdas.",
        "Vencimento é o principal motivo de perda, e hortifrúti a categoria que mais perde.",
        "Ruptura em reais, não em quantidade: o açougue concentra a maior parte da venda perdida.",
      ],
      en: [
        "Orange for everything that is a loss and green for the rest, across the three shrinkage views.",
        "Expiry is the main cause of loss, and fresh produce is the category that loses most.",
        "Out-of-stocks in reais, not units: the butcher counter accounts for most of the lost sales.",
      ],
    },
  },
  {
    id: "sistema",
    numero: "06",
    pagina: "",
    matriz: true,
    imagens: ["img/arquitetura-{lang}.svg"],
    titulo: { pt: "O sistema por trás dos dados", en: "The system behind the data" },
    subtitulo: { pt: "Python · SQLite · Flask", en: "Python · SQLite · Flask" },
    resumo: {
      pt: "Um gerador em Python que simula 24 meses de uma rede de supermercados e um sistema web (ERP) com mapas, DRE, projeções e consulta SQL.",
      en: "A Python generator that simulates 24 months of a supermarket chain, and a web system (ERP) with maps, P&L, forecasts and a SQL console.",
    },
    tags: ["Python", "pandas", "SQLite", "Flask", "SQL"],
    destaques: [
      { valor: "33", rotulo: { pt: "tabelas no banco", en: "database tables" } },
      { valor: "237", rotulo: { pt: "produtos e 37 fornecedores", en: "products and 37 suppliers" } },
      { valor: { pt: "1,75 mi", en: "1.75M" }, rotulo: { pt: "linhas exportadas para o Power BI", en: "rows exported to Power BI" } },
    ],
    problema: {
      pt: "Dados públicos de varejo raramente têm tudo junto: vendas, estoque, compras, logística, RH e financeiro da mesma empresa. Para treinar análises realistas, construí a empresa inteira.",
      en: "Public retail datasets rarely have everything together: sales, inventory, purchasing, logistics, HR and finance of the same company. To practice realistic analysis, I built the whole company.",
    },
    modelagem: {
      pt: "O gerador cria a rede (franqueadora, 3 CDs, lojas próprias e franqueadas), aplica sazonalidade regional, encarte semanal, compras centralizadas e transferências com frete por km. O sistema Flask lê o banco e um script exporta 20 tabelas em formato estrela para o Power BI.",
      en: "The generator creates the chain (franchisor, 3 DCs, owned and franchised stores) and applies regional seasonality, a weekly circular, centralized purchasing and transfers with per-km freight. The Flask app reads the database, and a script exports 20 tables as a star schema for Power BI.",
    },
    decisoes: {
      pt: [
        "Projeção de vendas por modelo em painel com efeito da loja, tendência, sazonalidade e curva de maturação, com backtest de 6 meses.",
        "Seletor de visão (rede, próprias, franquias, franqueadora, uma unidade) que vale para todas as telas.",
        "Dicionário de dados gerado a partir do modelo e publicado também como descrição das colunas no Power BI.",
      ],
      en: [
        "Sales forecast with a panel model (store effect, trend, seasonality and maturity curve), backtested over 6 months.",
        "A view selector (chain, owned, franchised, franchisor, single unit) that applies to every screen.",
        "Data dictionary generated from the model and also published as column descriptions in Power BI.",
      ],
    },
  },
];
