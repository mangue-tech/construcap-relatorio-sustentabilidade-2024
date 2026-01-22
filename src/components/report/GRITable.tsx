import { useState } from "react";
import { Search, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface GRIItem {
  code: string;
  indicator: string;
  description: string;
  section: string;
  response: string;
  link: string;
}

const sectionToPath: Record<string, string> = {
  "Quem Somos": "/quem-somos",
  Metodologia: "/gri-index",
  "Desempenho Social": "/desempenho-social",
  "Estratégia e Governança": "/governanca",
  "Integridade e Compliance": "/compliance",
  "Carta do Presidente": "/carta-presidente",
  "Materialidade e Públicos de Interesse": "/materialidade",
  "Desempenho Econômico": "/desempenho-economico",
  "Gestão de Riscos": "/gestao-riscos",
  "Desempenho Ambiental": "/desempenho-ambiental",
  "Relacionamento com Comunidades": "/comunidades",
};

const griData: GRIItem[] = [
  // GRI 2: General Disclosures
  {
    code: "GRI 2-1",
    indicator: "Detalhes organizacionais",
    description: "Nome, natureza jurídica, sede e países de operação",
    section: "Quem Somos",
    response: "Grupo Construcap S.A. Engenharia e Comércio. Sede em São Paulo, SP. Operação no Brasil.",
    link: "/quem-somos",
  },
  {
    code: "GRI 2-2",
    indicator: "Entidades incluídas no relatório",
    description: "Lista de entidades incluídas no relatório de sustentabilidade",
    section: "Quem Somos",
    response: "Grupo Construcap e suas controladas/coligadas: Urbia, Inova Saúde, Minas Arena e Ambicap.",
    link: "/quem-somos",
  },
  {
    code: "GRI 2-3",
    indicator: "Período do relatório, frequência e contato",
    description: "Período coberto, frequência de publicação e ponto de contato",
    section: "Metodologia",
    response: "Janeiro a Dezembro de 2024. Publicação anual. Contato: sustentabilidade@construcap.com.br",
    link: "/gri-index",
  },
  {
    code: "GRI 2-4",
    indicator: "Reformulações de informações",
    description: "Alterações em informações publicadas anteriormente",
    section: "Metodologia",
    response: "Não houve reformulações significativas de informações publicadas em relatórios anteriores.",
    link: "/gri-index",
  },
  {
    code: "GRI 2-5",
    indicator: "Verificação externa",
    description: "Política e prática de verificação externa",
    section: "Metodologia",
    response: "O inventário de emissões foi verificado externamente conforme GHG Protocol.",
    link: "/gri-index",
  },
  {
    code: "GRI 2-6",
    indicator: "Atividades, cadeia de valor e outras relações comerciais",
    description: "Setores de atuação, cadeia de valor e relações comerciais significativas",
    section: "Quem Somos",
    response:
      "Atuação em infraestrutura pesada, construção industrial, edificações, gestão de parques, hospitais e soluções ambientais.",
    link: "/quem-somos",
  },
  {
    code: "GRI 2-7",
    indicator: "Empregados",
    description: "Número total de empregados e desagregação por gênero, região e tipo de contrato",
    section: "Desempenho Social",
    response:
      "Colaboradores distribuídos nas cinco unidades de negócio: Construcap Engenharia, Inova Saúde, Urbia, Minas Arena e Ambicap.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 2-8",
    indicator: "Trabalhadores que não são empregados",
    description: "Trabalhadores terceirizados e outras categorias",
    section: "Desempenho Social",
    response: "Trabalhadores terceirizados em obras ativas, principalmente em serviços especializados.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 2-9",
    indicator: "Estrutura e composição de governança",
    description: "Órgãos de governança e suas composições",
    section: "Estratégia e Governança",
    response: "Conselho de Administração, Diretoria Executiva e Comitês de Auditoria, Riscos e Sustentabilidade.",
    link: "/governanca",
  },
  {
    code: "GRI 2-10",
    indicator: "Nomeação e seleção do mais alto órgão de governança",
    description: "Processos de nomeação e seleção",
    section: "Estratégia e Governança",
    response:
      "Conselheiros eleitos em Assembleia Geral com critérios de experiência setorial e competências complementares.",
    link: "/governanca",
  },
  {
    code: "GRI 2-11",
    indicator: "Presidente do mais alto órgão de governança",
    description: "Se o presidente é também um executivo sênior",
    section: "Estratégia e Governança",
    response: "O Presidente do Conselho não acumula função executiva na organização.",
    link: "/governanca",
  },
  {
    code: "GRI 2-12",
    indicator: "Papel do mais alto órgão de governança na supervisão da gestão de impactos",
    description: "Supervisão de impactos econômicos, ambientais e sociais",
    section: "Estratégia e Governança",
    response: "Comitê de Sustentabilidade subordinado ao Conselho revisa indicadores ESG e aprova metas.",
    link: "/governanca",
  },
  {
    code: "GRI 2-13",
    indicator: "Delegação de responsabilidade pela gestão de impactos",
    description: "Delegação de responsabilidades para executivos",
    section: "Estratégia e Governança",
    response:
      "Diretor de Sustentabilidade e QSMS reporta diretamente ao CEO com responsabilidade por gestão de impactos ESG.",
    link: "/governanca",
  },
  {
    code: "GRI 2-14",
    indicator: "Papel do mais alto órgão de governança no relatório de sustentabilidade",
    description: "Aprovação e revisão do relatório",
    section: "Metodologia",
    response: "Relatório revisado pelo Comitê de Sustentabilidade e aprovado pelo Conselho de Administração.",
    link: "/gri-index",
  },
  {
    code: "GRI 2-15",
    indicator: "Conflitos de interesse",
    description: "Processos para prevenir e mitigar conflitos",
    section: "Integridade e Compliance",
    response: "Política de Conflitos de Interesse vigente com declaração anual obrigatória para gestores.",
    link: "/compliance",
  },
  {
    code: "GRI 2-16",
    indicator: "Comunicação de preocupações críticas",
    description: "Mecanismos de comunicação ao órgão de governança",
    section: "Integridade e Compliance",
    response: "Canal de Ética independente (Alô Construcap) com relatos críticos reportados ao Comitê de Auditoria.",
    link: "/compliance",
  },
  {
    code: "GRI 2-17",
    indicator: "Conhecimento coletivo do mais alto órgão de governança",
    description: "Medidas para desenvolver conhecimento em sustentabilidade",
    section: "Estratégia e Governança",
    response: "Programa de capacitação ESG para conselheiros com workshops e especialistas externos.",
    link: "/governanca",
  },
  {
    code: "GRI 2-18",
    indicator: "Avaliação de desempenho do mais alto órgão de governança",
    description: "Processos de avaliação de desempenho",
    section: "Estratégia e Governança",
    response: "Avaliação anual do Conselho com consultoria externa, incluindo critérios ESG.",
    link: "/governanca",
  },
  {
    code: "GRI 2-19",
    indicator: "Políticas de remuneração",
    description: "Políticas de remuneração dos membros do órgão de governança",
    section: "Estratégia e Governança",
    response: "Remuneração fixa para conselheiros. Executivos com componente variável atrelado a metas ESG.",
    link: "/governanca",
  },
  {
    code: "GRI 2-20",
    indicator: "Processo para determinação de remuneração",
    description: "Processos para determinar remuneração",
    section: "Estratégia e Governança",
    response: "Comitê de Remuneração propõe estrutura com aprovação em Assembleia Geral.",
    link: "/governanca",
  },
  {
    code: "GRI 2-21",
    indicator: "Razão de remuneração anual total",
    description: "Razão entre maior e menor remuneração",
    section: "Desempenho Social",
    response: "Informação disponível conforme relatório de remuneração.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 2-22",
    indicator: "Declaração sobre estratégia de desenvolvimento sustentável",
    description: "Declaração da alta administração",
    section: "Carta do Presidente",
    response: "Mensagem do CEO destacando compromisso com agenda ESG e investimento em inovação sustentável.",
    link: "/carta-ceo",
  },
  {
    code: "GRI 2-23",
    indicator: "Compromissos de política",
    description: "Políticas de conduta empresarial responsável",
    section: "Integridade e Compliance",
    response: "Código de Conduta, Política Anticorrupção, Política de Direitos Humanos e Política Ambiental vigentes.",
    link: "/compliance",
  },
  {
    code: "GRI 2-24",
    indicator: "Incorporação dos compromissos de política",
    description: "Como os compromissos são incorporados",
    section: "Integridade e Compliance",
    response: "Treinamentos obrigatórios anuais, cláusulas contratuais com fornecedores e auditorias internas.",
    link: "/compliance",
  },
  {
    code: "GRI 2-25",
    indicator: "Processos para remediar impactos negativos",
    description: "Mecanismos de reclamação e remediação",
    section: "Integridade e Compliance",
    response: "Canal de Ética para denúncias com processo de investigação e planos de remediação monitorados.",
    link: "/compliance",
  },
  {
    code: "GRI 2-26",
    indicator: "Mecanismos para buscar aconselhamento e levantar preocupações",
    description: "Canal de ética e ouvidoria",
    section: "Integridade e Compliance",
    response: "Canal de Ética (Alô Construcap) disponível 24/7 por telefone e web, com gestão independente.",
    link: "/compliance",
  },
  {
    code: "GRI 2-27",
    indicator: "Conformidade com leis e regulamentos",
    description: "Casos de não conformidade",
    section: "Integridade e Compliance",
    response: "Compliance com legislação trabalhista e ambiental. Monitoramento contínuo de conformidade.",
    link: "/compliance",
  },
  {
    code: "GRI 2-28",
    indicator: "Participação em associações",
    description: "Associações setoriais e participações",
    section: "Quem Somos",
    response: "Participação em associações setoriais da construção civil e grupos de trabalho de sustentabilidade.",
    link: "/quem-somos",
  },
  {
    code: "GRI 2-29",
    indicator: "Abordagem ao engajamento de públicos de interesse",
    description: "Estratégia de engajamento",
    section: "Materialidade e Públicos de Interesse",
    response:
      "Mapeamento de públicos de interesse com engajamento contínuo via canais específicos e pesquisa de materialidade.",
    link: "/materialidade",
  },
  {
    code: "GRI 2-30",
    indicator: "Acordos de negociação coletiva",
    description: "Percentual coberto por acordos coletivos",
    section: "Desempenho Social",
    response: "Colaboradores cobertos por acordos coletivos com sindicatos da construção civil.",
    link: "/desempenho-social",
  },

  // GRI 3: Material Topics
  {
    code: "GRI 3-1",
    indicator: "Processo de determinação de temas materiais",
    description: "Processo para identificar temas materiais",
    section: "Materialidade e Públicos de Interesse",
    response: "Matriz de materialidade atualizada com consulta a públicos de interesse e análise de impacto e relevância.",
    link: "/materialidade",
  },
  {
    code: "GRI 3-2",
    indicator: "Lista de temas materiais",
    description: "Temas materiais identificados",
    section: "Materialidade e Públicos de Interesse",
    response:
      "Temas materiais incluem: Saúde e Segurança, Mudanças Climáticas, Gestão de Resíduos, Ética e Integridade, entre outros.",
    link: "/materialidade",
  },
  {
    code: "GRI 3-3",
    indicator: "Gestão de temas materiais",
    description: "Abordagem de gestão para cada tema material",
    section: "Materialidade e Públicos de Interesse",
    response: "Cada tema material possui política, metas, indicadores e responsável definidos com revisão periódica.",
    link: "/materialidade",
  },

  // GRI 201: Economic Performance
  {
    code: "GRI 201-1",
    indicator: "Valor econômico direto gerado e distribuído",
    description: "Receitas, custos operacionais, remuneração, impostos",
    section: "Desempenho Econômico",
    response:
      "Valor econômico gerado e distribuído entre colaboradores, fornecedores, governo, investidores e comunidades.",
    link: "/desempenho-economico",
  },
  {
    code: "GRI 201-2",
    indicator: "Implicações financeiras e outros riscos e oportunidades decorrentes de mudanças climáticas",
    description: "Riscos e oportunidades climáticos",
    section: "Gestão de Riscos",
    response: "Riscos físicos mapeados e oportunidades em construção sustentável identificadas.",
    link: "/gestao-riscos",
  },
  {
    code: "GRI 201-3",
    indicator: "Obrigações de plano de benefício definido e outros planos de aposentadoria",
    description: "Planos de benefícios a empregados",
    section: "Desempenho Social",
    response: "Plano de previdência complementar disponível para colaboradores elegíveis.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 201-4",
    indicator: "Assistência financeira recebida do governo",
    description: "Incentivos e subsídios governamentais",
    section: "Desempenho Econômico",
    response: "Incentivos fiscais conforme legislação aplicável (Lei do Bem e PAT).",
    link: "/desempenho-economico",
  },

  // GRI 204: Procurement Practices
  {
    code: "GRI 204-1",
    indicator: "Proporção de gastos com fornecedores locais",
    description: "Gastos com fornecedores locais em operações significativas",
    section: "Desempenho Econômico",
    response: "Priorização de fornecedores locais como estratégia para fortalecer economias regionais.",
    link: "/desempenho-economico",
  },

  // GRI 302: Energy
  {
    code: "GRI 302-1",
    indicator: "Consumo de energia dentro da organização",
    description: "Consumo total de energia em GJ ou kWh",
    section: "Desempenho Ambiental",
    response: "Consumo de energia por fonte: diesel, eletricidade e gás natural, conforme inventário energético.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 302-2",
    indicator: "Consumo de energia fora da organização",
    description: "Energia consumida fora da organização",
    section: "Desempenho Ambiental",
    response: "Escopo 3 de energia em desenvolvimento para próximos ciclos de reporte.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 302-3",
    indicator: "Intensidade energética",
    description: "Razão de intensidade energética",
    section: "Desempenho Ambiental",
    response: "Intensidade energética calculada por receita, com metas de redução.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 302-4",
    indicator: "Redução do consumo de energia",
    description: "Reduções alcançadas",
    section: "Desempenho Ambiental",
    response: "Reduções através de substituição de equipamentos e otimização de frota.",
    link: "/desempenho-ambiental",
  },

  // GRI 303: Water and Effluents
  {
    code: "GRI 303-1",
    indicator: "Interação com a água como recurso compartilhado",
    description: "Como a organização interage com a água",
    section: "Desempenho Ambiental",
    response: "Captação de concessionárias e poços com gestão responsável do recurso hídrico.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 303-2",
    indicator: "Gestão de impactos relacionados ao descarte de água",
    description: "Abordagem para gestão de efluentes",
    section: "Desempenho Ambiental",
    response: "Obras com tratamento de efluentes e reúso de água quando aplicável.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 303-3",
    indicator: "Captação de água",
    description: "Total de água captada por fonte",
    section: "Desempenho Ambiental",
    response: "Captação de água por concessionárias e poços, conforme inventário hídrico.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 303-4",
    indicator: "Descarte de água",
    description: "Total de água descartada",
    section: "Desempenho Ambiental",
    response: "Descarte para rede pública tratada, com parâmetros dentro dos limites legais.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 303-5",
    indicator: "Consumo de água",
    description: "Total de água consumida",
    section: "Desempenho Ambiental",
    response: "Consumo de água em processos construtivos, conforme inventário hídrico.",
    link: "/desempenho-ambiental",
  },

  // GRI 305: Emissions
  {
    code: "GRI 305-1",
    indicator: "Emissões diretas de GEE (Escopo 1)",
    description: "Emissões diretas de gases de efeito estufa",
    section: "Desempenho Ambiental",
    response: "Escopo 1: emissões diretas de combustão em equipamentos e frota própria.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 305-2",
    indicator: "Emissões indiretas de GEE provenientes da aquisição de energia (Escopo 2)",
    description: "Emissões de energia adquirida",
    section: "Desempenho Ambiental",
    response: "Escopo 2: emissões de eletricidade adquirida da rede.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 305-3",
    indicator: "Outras emissões indiretas de GEE (Escopo 3)",
    description: "Emissões indiretas da cadeia de valor",
    section: "Desempenho Ambiental",
    response: "Escopo 3: emissões de deslocamento de funcionários, transporte de materiais e resíduos.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 305-4",
    indicator: "Intensidade de emissões de GEE",
    description: "Razão de intensidade de emissões",
    section: "Desempenho Ambiental",
    response: "Intensidade de emissões calculada por receita (Escopo 1+2).",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 305-5",
    indicator: "Redução de emissões de GEE",
    description: "Reduções de emissões alcançadas",
    section: "Desempenho Ambiental",
    response: "Iniciativas de redução: biodiesel e energia renovável.",
    link: "/desempenho-ambiental",
  },

  // GRI 306: Waste
  {
    code: "GRI 306-1",
    indicator: "Geração de resíduos e impactos significativos relacionados a resíduos",
    description: "Impactos de resíduos na cadeia de valor",
    section: "Desempenho Ambiental",
    response: "Principal impacto: resíduos de construção civil (classe A e B). Gestão conforme PGRCC.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 306-2",
    indicator: "Gestão de impactos significativos relacionados a resíduos",
    description: "Ações para gerenciar impactos",
    section: "Desempenho Ambiental",
    response: "Programa de segregação na fonte e parcerias com cooperativas de reciclagem.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 306-3",
    indicator: "Resíduos gerados",
    description: "Peso total de resíduos gerados por tipo",
    section: "Desempenho Ambiental",
    response: "Resíduos por classe: Classe A (inertes), Classe B (recicláveis) e Classe D (perigosos).",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 306-4",
    indicator: "Resíduos não destinados à disposição final",
    description: "Resíduos reciclados ou recuperados",
    section: "Desempenho Ambiental",
    response: "Resíduos desviados de aterro: reciclagem, coprocessamento e reúso em obras.",
    link: "/desempenho-ambiental",
  },
  {
    code: "GRI 306-5",
    indicator: "Resíduos destinados à disposição final",
    description: "Resíduos destinados a aterro",
    section: "Desempenho Ambiental",
    response: "Resíduos para aterros licenciados. Resíduos perigosos via coprocessamento.",
    link: "/desempenho-ambiental",
  },

  // GRI 401: Employment
  {
    code: "GRI 401-1",
    indicator: "Novas contratações e rotatividade",
    description: "Taxa de contratação e rotatividade por idade, gênero e região",
    section: "Desempenho Social",
    response: "Contratações e rotatividade conforme dinâmica do setor de construção.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 401-2",
    indicator: "Benefícios oferecidos a empregados de tempo integral",
    description: "Benefícios que não são oferecidos a temporários",
    section: "Desempenho Social",
    response:
      "Plano de saúde, plano odontológico, seguro de vida, previdência privada, PLR, vale-alimentação, auxílio-creche.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 401-3",
    indicator: "Licença parental",
    description: "Retorno ao trabalho após licença parental",
    section: "Desempenho Social",
    response: "Empresa Cidadã: licença-maternidade estendida (180 dias) e licença-paternidade ampliada.",
    link: "/desempenho-social",
  },

  // GRI 403: Occupational Health and Safety
  {
    code: "GRI 403-1",
    indicator: "Sistema de gestão de saúde e segurança ocupacional",
    description: "Escopo do sistema de gestão",
    section: "Desempenho Social",
    response: "Sistema de Gestão de SST cobrindo todas as operações.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-2",
    indicator: "Identificação de perigos, avaliação de riscos e investigação de incidentes",
    description: "Processos de gestão de riscos de SSO",
    section: "Desempenho Social",
    response: "APR obrigatória para todas atividades. Investigação de incidentes com metodologia estruturada.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-3",
    indicator: "Serviços de saúde ocupacional",
    description: "Funções de saúde ocupacional",
    section: "Desempenho Social",
    response: "SESMT em todas obras. Exames periódicos. Programa de controle médico ocupacional (PCMSO).",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-4",
    indicator: "Participação, consulta e comunicação de trabalhadores sobre saúde e segurança ocupacional",
    description: "Participação dos trabalhadores",
    section: "Desempenho Social",
    response: "CIPA ativa em todas obras. DDS (Diálogo Diário de Segurança). Programa de sugestões.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-5",
    indicator: "Treinamento de trabalhadores em saúde e segurança ocupacional",
    description: "Treinamentos oferecidos",
    section: "Desempenho Social",
    response: "Treinamentos em SSO conforme NRs obrigatórias e capacitações específicas.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-6",
    indicator: "Promoção da saúde do trabalhador",
    description: "Programas de promoção de saúde",
    section: "Desempenho Social",
    response: "Campanhas de vacinação, saúde mental, combate ao tabagismo e ergonomia.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-7",
    indicator:
      "Prevenção e mitigação de impactos na saúde e segurança ocupacional diretamente ligados a relações de negócios",
    description: "Gestão de SSO na cadeia de valor",
    section: "Desempenho Social",
    response: "Terceirizados sob mesmo padrão de SSO. Auditorias em subcontratados. Integração obrigatória.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-8",
    indicator: "Trabalhadores cobertos por um sistema de gestão de saúde e segurança ocupacional",
    description: "Cobertura do sistema de gestão",
    section: "Desempenho Social",
    response: "Trabalhadores próprios e terceirizados cobertos pelo sistema de gestão de SSO.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-9",
    indicator: "Lesões relacionadas ao trabalho",
    description: "Taxas de lesões e acidentes",
    section: "Desempenho Social",
    response: "Monitoramento de taxa de frequência e taxa de gravidade. Compromisso com Zero Acidentes.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 403-10",
    indicator: "Doenças relacionadas ao trabalho",
    description: "Doenças ocupacionais",
    section: "Desempenho Social",
    response: "Programa de prevenção de doenças ocupacionais, incluindo prevenção ergonômica.",
    link: "/desempenho-social",
  },

  // GRI 404: Training and Education
  {
    code: "GRI 404-1",
    indicator: "Média de horas de treinamento por ano, por empregado",
    description: "Horas de treinamento por categoria",
    section: "Desempenho Social",
    response: "Investimento em capacitação técnica e desenvolvimento de lideranças.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 404-2",
    indicator: "Programas para aperfeiçoamento de competências de empregados e assistência de transição de carreira",
    description: "Programas de desenvolvimento",
    section: "Desempenho Social",
    response: "Programas: Trainee, Escola de Líderes, Academia Técnica, Mentoria Executiva e Bolsas de Estudo.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 404-3",
    indicator: "Percentual de empregados que recebem avaliações regulares de desempenho e desenvolvimento de carreira",
    description: "Avaliações de desempenho",
    section: "Desempenho Social",
    response: "Sistema de avaliação de desempenho com competências e metas individuais.",
    link: "/desempenho-social",
  },

  // GRI 405: Diversity and Equal Opportunity
  {
    code: "GRI 405-1",
    indicator: "Diversidade de órgãos de governança e empregados",
    description: "Composição por gênero, idade e outros indicadores",
    section: "Desempenho Social",
    response: "Compromisso com diversidade e inclusão em todos os níveis hierárquicos.",
    link: "/desempenho-social",
  },
  {
    code: "GRI 405-2",
    indicator: "Razão de salário base e remuneração de mulheres em relação a homens",
    description: "Equidade salarial",
    section: "Desempenho Social",
    response: "Programa de equidade salarial em implementação.",
    link: "/desempenho-social",
  },

  // GRI 413: Local Communities
  {
    code: "GRI 413-1",
    indicator: "Operações com engajamento da comunidade local, avaliações de impacto e programas de desenvolvimento",
    description: "Engajamento comunitário",
    section: "Relacionamento com Comunidades",
    response:
      "Obras com diagnóstico social e canais de comunicação com comunidades (Alô Construcap, reuniões comunitárias).",
    link: "/comunidades",
  },
  {
    code: "GRI 413-2",
    indicator: "Operações com impactos negativos significativos reais e potenciais nas comunidades locais",
    description: "Impactos nas comunidades",
    section: "Relacionamento com Comunidades",
    response: "Principais impactos: ruído, tráfego, poeira. Mitigação via diálogo com vizinhança e medidas técnicas.",
    link: "/comunidades",
  },
];

const sections = [...new Set(griData.map((item) => item.section))];

const GRITable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>(sections);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]));
  };

  const filteredData = griData.filter(
    (item) =>
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.indicator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.response.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedData = sections.reduce(
    (acc, section) => {
      acc[section] = filteredData.filter((item) => item.section === section);
      return acc;
    },
    {} as Record<string, GRIItem[]>,
  );

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar por código, indicador ou informação GRI..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <p className="text-2xl font-bold text-primary">{griData.length}</p>
          <p className="text-sm text-muted-foreground">Indicadores GRI</p>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <p className="text-2xl font-bold text-primary">{sections.length}</p>
          <p className="text-sm text-muted-foreground">Seções</p>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <p className="text-2xl font-bold text-primary">GRI</p>
          <p className="text-sm text-muted-foreground">Conformidade</p>
        </div>
        <div className="p-4 rounded-xl bg-card border border-border text-center">
          <p className="text-2xl font-bold text-primary">2021</p>
          <p className="text-sm text-muted-foreground">GRI Standards</p>
        </div>
      </div>

      {/* Table by Section */}
      <div className="space-y-4">
        {sections.map((section) => {
          const items = groupedData[section];
          if (items.length === 0) return null;

          return (
            <div key={section} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {expandedSections.includes(section) ? (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                  <span className="font-semibold">{section}</span>
                </div>
                <span className="text-sm text-muted-foreground">{items.length} indicadores</span>
              </button>

              {expandedSections.includes(section) && (
                <div className="border-t border-border">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-28">
                            Código
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider w-48">
                            Indicador
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Descrição / Resposta Construcap
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {items.map((item) => (
                          <tr key={item.code} className="hover:bg-muted/30 transition-colors">
                            <td className="px-4 py-3">
                              <Link
                                to={item.link}
                                className="inline-flex items-center gap-1.5 text-sm font-mono font-semibold text-primary hover:text-primary/80 hover:underline transition-colors"
                              >
                                {item.code}
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm font-medium">{item.indicator}</span>
                            </td>
                            <td className="px-4 py-3">
                              <span className="text-sm text-foreground">{item.response}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Methodology Note */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <h4 className="font-semibold mb-2">Nota Metodológica</h4>
        <p className="text-sm text-muted-foreground">
          Este relatório foi elaborado em conformidade com os GRI Standards 2021. Os indicadores foram selecionados com
          base no processo de materialidade do Grupo Construcap, considerando os impactos mais significativos da
          organização e as expectativas de seus grupos de interesse. Para mais informações sobre a metodologia e
          verificação, consulte a seção de Metodologia.
        </p>
      </div>
    </div>
  );
};

export default GRITable;
