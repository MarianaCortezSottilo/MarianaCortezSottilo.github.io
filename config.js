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
  linkedin: "",                                  // ex.: "https://www.linkedin.com/in/seu-perfil"
  github: "https://github.com/MarianaCortezSottilo",
  email: "",                                     // opcional; fica público no site
  curriculo: "",                                 // link para o PDF do currículo (opcional)

  // Link do "Publicar na Web" do Power BI (https://app.powerbi.com/view?r=...)
  // Enquanto estiver vazio, o site mostra os prints dos painéis.
  relatorio: "https://app.powerbi.com/view?r=eyJrIjoiN2RlODJjZDEtODhkMS00ODBkLWI1NjEtNjA2YzFhZGEzNmQ5IiwidCI6IjkxZGY2MzNlLTliNmEtNGRmOS1iZjg4LTc0YTNhNjVjODk5NSJ9",

  repositorio: "https://github.com/MarianaCortezSottilo/rede-vale-verde",

  sobre: {
    pt: [
      "Escreva aqui 2 ou 3 frases sobre você: formação, área em que trabalha e o tipo de problema que gosta de resolver.",
      "Todos os dados deste portfólio são fictícios. Criei uma rede de supermercados completa (vendas, estoque, logística, RH e financeiro) para reproduzir a estrutura de um projeto real sem expor nenhuma empresa.",
    ],
    en: [
      "Write 2 or 3 sentences about yourself here: background, the field you work in and the kind of problem you like to solve.",
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
