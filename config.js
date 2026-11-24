// =====================================================================
//  SEUS DADOS: edite este arquivo (é só texto entre aspas)
//  Cada texto tem a versão em português (pt) e em inglês (en).
// =====================================================================
window.PERFIL = {
  nome: "Mariana Cortez Sottilo",
  cargo: { pt: "Analista de Dados · Power BI · SQL · Python", en: "Data Analyst · Power BI · SQL · Python" },
  frase: {
    pt: "Transformo dados operacionais em decisões: modelagem, DAX e painéis que respondem uma pergunta de negócio por página.",
    en: "I turn operational data into decisions: data modeling, DAX and dashboards that answer one business question per page.",
  },
  localizacao: { pt: "Brasil", en: "Brazil" },

  // Contatos: deixe "" para esconder o botão
  linkedin: "https://www.linkedin.com/in/mariana-cortez-sottilo/",
  github: "https://github.com/MarianaCortezSottilo",
  email: "",                                     // opcional; fica público no site
  curriculo: "",                                 // link para o PDF do currículo (opcional)

  // Link do "Publicar na Web" do Power BI (https://app.powerbi.com/view?r=...)
  // Enquanto estiver vazio, o site mostra os prints dos painéis.
  relatorio: "https://app.powerbi.com/view?r=eyJrIjoiN2RlODJjZDEtODhkMS00ODBkLWI1NjEtNjA2YzFhZGEzNmQ5IiwidCI6IjkxZGY2MzNlLTliNmEtNGRmOS1iZjg4LTc0YTNhNjVjODk5NSJ9",

  repositorio: "https://github.com/MarianaCortezSottilo/rede-vale-verde",

  sobre: {
    pt: [
      "Sou analista de dados e trabalho com Power BI, DAX, SQL e Python. Gosto de pegar dados espalhados em vários sistemas, organizar em um modelo que faça sentido e transformar isso em painéis que respondem às perguntas que o negócio realmente faz: quanto cresceu, onde está o custo, o que precisa de atenção agora.",
      "Meu foco é a parte que fica antes do gráfico: entender o processo, definir o grão de cada tabela e escrever medidas que deem o mesmo número para todo mundo. Tenho interesse especial por varejo e finanças: DRE, fluxo de caixa, estoque e indicadores de operação.",
      "Todos os dados deste portfólio são fictícios. Criei uma rede de supermercados completa (vendas, estoque, logística, RH e financeiro) para reproduzir a estrutura de um projeto real sem expor nenhuma empresa.",
    ],
    en: [
      "I'm a data analyst working with Power BI, DAX, SQL and Python. I like taking data scattered across several systems, organizing it into a model that makes sense and turning it into dashboards that answer the questions the business actually asks: how much did we grow, where is the cost, what needs attention right now.",
      "My focus is the part that comes before the chart: understanding the process, defining the grain of each table and writing measures that give everyone the same number. I'm especially interested in retail and finance: P&L, cash flow, inventory and operational KPIs.",
      "All data in this portfolio is fictional. I built a complete supermarket chain (sales, inventory, logistics, HR and finance) to reproduce the structure of a real project without exposing any company.",
    ],
  },

  ferramentas: ["Power BI", "DAX", "Power Query", "Deneb / Vega-Lite", "SQL", "Python", "pandas", "Flask", "Git/GitHub"],

  processo: [
    { titulo: { pt: "Gerar e extrair", en: "Generate & extract" },
      texto: { pt: "Scripts Python que criam, consultam e exportam os dados, prontos para análise.",
               en: "Python scripts that create, query and export the data, ready for analysis." } },
    { titulo: { pt: "Modelar", en: "Model" },
      texto: { pt: "Modelo estrela com 14 fatos, dimensões compartilhadas e o grão de cada tabela documentado.",
               en: "Star schema with 14 fact tables, shared dimensions and the grain of each table documented." } },
    { titulo: { pt: "Calcular", en: "Calculate" },
      texto: { pt: "Medidas DAX de inteligência de tempo, mesmas lojas, DRE, caixa acumulado e ponto de equilíbrio.",
               en: "DAX measures for time intelligence, same-store sales, P&L, running cash balance and break-even." } },
    { titulo: { pt: "Comunicar", en: "Communicate" },
      texto: { pt: "Uma pergunta por página, cores com significado fixo e texto que explica o número.",
               en: "One question per page, colors with a fixed meaning and text that explains the number." } },
  ],
};
