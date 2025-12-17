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
  "Quem Somos": "/relatorio/quem-somos",
  "Metodologia": "/relatorio/gri-index",
  "Desempenho Social": "/relatorio/desempenho-social",
  "Estratégia e Governança": "/relatorio/governanca",
  "Integridade e Compliance": "/relatorio/compliance",
  "Carta do CEO": "/relatorio/carta-ceo",
  "Materialidade e Stakeholders": "/relatorio/materialidade",
  "Desempenho Econômico": "/relatorio/desempenho-economico",
  "Gestão de Riscos": "/relatorio/gestao-riscos",
  "Desempenho Ambiental": "/relatorio/desempenho-ambiental",
  "Relacionamento com Comunidades": "/relatorio/comunidades",
};

const griData: GRIItem[] = [
  // GRI 2: General Disclosures
  { 
    code: "GRI 2-1", 
    indicator: "Detalhes organizacionais", 
    description: "Nome, natureza jurídica, sede e países de operação", 
    section: "Quem Somos",
    response: "Grupo Construcap S.A. Engenharia e Comércio. Sede em São Paulo, SP. Operação no Brasil.",
    link: "/relatorio/quem-somos#detalhes-organizacionais"
  },
  { 
    code: "GRI 2-2", 
    indicator: "Entidades incluídas no relatório", 
    description: "Lista de entidades incluídas no relatório de sustentabilidade", 
    section: "Quem Somos",
    response: "Grupo Construcap e suas subsidiárias: Construcap CCPS Engenharia e Comércio, Construtora Triunfo, Hochtief do Brasil.",
    link: "/relatorio/quem-somos#entidades"
  },
  { 
    code: "GRI 2-3", 
    indicator: "Período do relatório, frequência e contato", 
    description: "Período coberto, frequência de publicação e ponto de contato", 
    section: "Metodologia",
    response: "Janeiro a Dezembro de 2024. Publicação anual. Contato: sustentabilidade@construcap.com.br",
    link: "/relatorio/gri-index"
  },
  { 
    code: "GRI 2-4", 
    indicator: "Reformulações de informações", 
    description: "Alterações em informações publicadas anteriormente", 
    section: "Metodologia",
    response: "Não houve reformulações significativas de informações publicadas em relatórios anteriores.",
    link: "/relatorio/gri-index"
  },
  { 
    code: "GRI 2-5", 
    indicator: "Verificação externa", 
    description: "Política e prática de verificação externa", 
    section: "Metodologia",
    response: "O inventário de emissões foi verificado externamente. Relatório não submetido a verificação externa completa.",
    link: "/relatorio/gri-index"
  },
  { 
    code: "GRI 2-6", 
    indicator: "Atividades, cadeia de valor e outras relações comerciais", 
    description: "Setores de atuação, cadeia de valor e relações comerciais significativas", 
    section: "Quem Somos",
    response: "Atuação em infraestrutura pesada, construção industrial, edificações e energia. Cadeia inclui fornecedores de materiais, subempreiteiros e clientes públicos e privados.",
    link: "/relatorio/quem-somos#atividades"
  },
  { 
    code: "GRI 2-7", 
    indicator: "Empregados", 
    description: "Número total de empregados e desagregação por gênero, região e tipo de contrato", 
    section: "Desempenho Social",
    response: "8.547 empregados diretos. 87% homens, 13% mulheres. 95% em tempo integral. Distribuídos em todas as regiões do Brasil.",
    link: "/relatorio/desempenho-social#empregados"
  },
  { 
    code: "GRI 2-8", 
    indicator: "Trabalhadores que não são empregados", 
    description: "Trabalhadores terceirizados e outras categorias", 
    section: "Desempenho Social",
    response: "Aproximadamente 12.000 trabalhadores terceirizados em obras ativas, principalmente em serviços especializados.",
    link: "/relatorio/desempenho-social#terceirizados"
  },
  { 
    code: "GRI 2-9", 
    indicator: "Estrutura e composição de governança", 
    description: "Órgãos de governança e suas composições", 
    section: "Estratégia e Governança",
    response: "Conselho de Administração com 5 membros, Diretoria Executiva com 7 diretores, Comitês de Auditoria, Riscos e Sustentabilidade.",
    link: "/relatorio/governanca#estrutura"
  },
  { 
    code: "GRI 2-10", 
    indicator: "Nomeação e seleção do mais alto órgão de governança", 
    description: "Processos de nomeação e seleção", 
    section: "Estratégia e Governança",
    response: "Conselheiros eleitos em Assembleia Geral. Critérios incluem experiência setorial, competências complementares e independência.",
    link: "/relatorio/governanca#nomeacao"
  },
  { 
    code: "GRI 2-11", 
    indicator: "Presidente do mais alto órgão de governança", 
    description: "Se o presidente é também um executivo sênior", 
    section: "Estratégia e Governança",
    response: "O Presidente do Conselho não acumula função executiva na organização.",
    link: "/relatorio/governanca#presidente"
  },
  { 
    code: "GRI 2-12", 
    indicator: "Papel do mais alto órgão de governança na supervisão da gestão de impactos", 
    description: "Supervisão de impactos econômicos, ambientais e sociais", 
    section: "Estratégia e Governança",
    response: "Comitê de Sustentabilidade subordinado ao Conselho revisa trimestralmente indicadores ESG e aprova metas.",
    link: "/relatorio/governanca#supervisao"
  },
  { 
    code: "GRI 2-13", 
    indicator: "Delegação de responsabilidade pela gestão de impactos", 
    description: "Delegação de responsabilidades para executivos", 
    section: "Estratégia e Governança",
    response: "Diretor de Sustentabilidade e QSMS reporta diretamente ao CEO com responsabilidade por gestão de impactos ESG.",
    link: "/relatorio/governanca#delegacao"
  },
  { 
    code: "GRI 2-14", 
    indicator: "Papel do mais alto órgão de governança no relatório de sustentabilidade", 
    description: "Aprovação e revisão do relatório", 
    section: "Metodologia",
    response: "Relatório revisado pelo Comitê de Sustentabilidade e aprovado pelo Conselho de Administração.",
    link: "/relatorio/gri-index"
  },
  { 
    code: "GRI 2-15", 
    indicator: "Conflitos de interesse", 
    description: "Processos para prevenir e mitigar conflitos", 
    section: "Integridade e Compliance",
    response: "Política de Conflitos de Interesse vigente. Declaração anual obrigatória para gestores. Abstenção em votações com conflito.",
    link: "/relatorio/compliance#conflitos"
  },
  { 
    code: "GRI 2-16", 
    indicator: "Comunicação de preocupações críticas", 
    description: "Mecanismos de comunicação ao órgão de governança", 
    section: "Integridade e Compliance",
    response: "Canal de Ética independente. Relatos críticos reportados ao Comitê de Auditoria em até 48h.",
    link: "/relatorio/compliance#canal-etica"
  },
  { 
    code: "GRI 2-17", 
    indicator: "Conhecimento coletivo do mais alto órgão de governança", 
    description: "Medidas para desenvolver conhecimento em sustentabilidade", 
    section: "Estratégia e Governança",
    response: "Programa de capacitação ESG para conselheiros. Workshops trimestrais com especialistas externos.",
    link: "/relatorio/governanca#capacitacao"
  },
  { 
    code: "GRI 2-18", 
    indicator: "Avaliação de desempenho do mais alto órgão de governança", 
    description: "Processos de avaliação de desempenho", 
    section: "Estratégia e Governança",
    response: "Avaliação anual do Conselho com consultoria externa. Inclui critérios ESG na avaliação individual.",
    link: "/relatorio/governanca#avaliacao"
  },
  { 
    code: "GRI 2-19", 
    indicator: "Políticas de remuneração", 
    description: "Políticas de remuneração dos membros do órgão de governança", 
    section: "Estratégia e Governança",
    response: "Remuneração fixa para conselheiros. Executivos com componente variável atrelado a metas ESG (20% do bônus).",
    link: "/relatorio/governanca#remuneracao"
  },
  { 
    code: "GRI 2-20", 
    indicator: "Processo para determinação de remuneração", 
    description: "Processos para determinar remuneração", 
    section: "Estratégia e Governança",
    response: "Comitê de Remuneração propõe estrutura. Aprovação em Assembleia Geral. Benchmarking com setor de construção.",
    link: "/relatorio/governanca#remuneracao"
  },
  { 
    code: "GRI 2-21", 
    indicator: "Razão de remuneração anual total", 
    description: "Razão entre maior e menor remuneração", 
    section: "Desempenho Social",
    response: "Razão de 45:1 entre maior remuneração anual e mediana dos empregados.",
    link: "/relatorio/desempenho-social#remuneracao"
  },
  { 
    code: "GRI 2-22", 
    indicator: "Declaração sobre estratégia de desenvolvimento sustentável", 
    description: "Declaração da alta administração", 
    section: "Carta do CEO",
    response: "Mensagem do CEO destacando compromisso com agenda ESG, metas climáticas e investimento em inovação sustentável.",
    link: "/relatorio/carta-ceo"
  },
  { 
    code: "GRI 2-23", 
    indicator: "Compromissos de política", 
    description: "Políticas de conduta empresarial responsável", 
    section: "Integridade e Compliance",
    response: "Código de Conduta, Política Anticorrupção, Política de Direitos Humanos, Política Ambiental vigentes.",
    link: "/relatorio/compliance#politicas"
  },
  { 
    code: "GRI 2-24", 
    indicator: "Incorporação dos compromissos de política", 
    description: "Como os compromissos são incorporados", 
    section: "Integridade e Compliance",
    response: "Treinamentos obrigatórios anuais. Cláusulas contratuais com fornecedores. Auditorias internas periódicas.",
    link: "/relatorio/compliance#incorporacao"
  },
  { 
    code: "GRI 2-25", 
    indicator: "Processos para remediar impactos negativos", 
    description: "Mecanismos de reclamação e remediação", 
    section: "Integridade e Compliance",
    response: "Canal de Ética para denúncias. Processo de investigação com prazos definidos. Planos de remediação monitorados.",
    link: "/relatorio/compliance#remediacao"
  },
  { 
    code: "GRI 2-26", 
    indicator: "Mecanismos para buscar aconselhamento e levantar preocupações", 
    description: "Canal de ética e ouvidoria", 
    section: "Integridade e Compliance",
    response: "Canal de Ética 24/7 (telefone e web). Gestão independente por empresa externa. Garantia de anonimato.",
    link: "/relatorio/compliance#canal-etica"
  },
  { 
    code: "GRI 2-27", 
    indicator: "Conformidade com leis e regulamentos", 
    description: "Casos de não conformidade", 
    section: "Integridade e Compliance",
    response: "Nenhuma multa significativa ou sanção não monetária no período. Compliance com legislação trabalhista e ambiental.",
    link: "/relatorio/compliance#conformidade"
  },
  { 
    code: "GRI 2-28", 
    indicator: "Participação em associações", 
    description: "Associações setoriais e participações", 
    section: "Quem Somos",
    response: "Membros da CBIC, SINDUSCON-SP, ABCIC. Participação em GT de Sustentabilidade do setor.",
    link: "/relatorio/quem-somos#associacoes"
  },
  { 
    code: "GRI 2-29", 
    indicator: "Abordagem ao engajamento de stakeholders", 
    description: "Estratégia de engajamento", 
    section: "Materialidade e Stakeholders",
    response: "Mapeamento de 8 grupos de stakeholders. Engajamento contínuo via canais específicos. Pesquisa de materialidade bienal.",
    link: "/relatorio/materialidade#stakeholders"
  },
  { 
    code: "GRI 2-30", 
    indicator: "Acordos de negociação coletiva", 
    description: "Percentual coberto por acordos coletivos", 
    section: "Desempenho Social",
    response: "100% dos empregados cobertos por acordos coletivos com sindicatos da construção civil.",
    link: "/relatorio/desempenho-social#acordos-coletivos"
  },
  
  // GRI 3: Material Topics
  { 
    code: "GRI 3-1", 
    indicator: "Processo de determinação de temas materiais", 
    description: "Processo para identificar temas materiais", 
    section: "Materialidade e Stakeholders",
    response: "Matriz de materialidade atualizada em 2024. Consulta a 450+ stakeholders. Análise de impacto e relevância.",
    link: "/relatorio/materialidade#processo"
  },
  { 
    code: "GRI 3-2", 
    indicator: "Lista de temas materiais", 
    description: "Temas materiais identificados", 
    section: "Materialidade e Stakeholders",
    response: "12 temas materiais: Saúde e Segurança, Mudanças Climáticas, Gestão de Resíduos, Ética e Integridade, entre outros.",
    link: "/relatorio/materialidade#temas"
  },
  { 
    code: "GRI 3-3", 
    indicator: "Gestão de temas materiais", 
    description: "Abordagem de gestão para cada tema material", 
    section: "Materialidade e Stakeholders",
    response: "Cada tema material possui política, metas, indicadores e responsável definidos. Revisão trimestral de performance.",
    link: "/relatorio/materialidade#gestao"
  },
  
  // GRI 201: Economic Performance
  { 
    code: "GRI 201-1", 
    indicator: "Valor econômico direto gerado e distribuído", 
    description: "Receitas, custos operacionais, remuneração, impostos", 
    section: "Desempenho Econômico",
    response: "Receita líquida: R$ 4,2 bilhões. Custos operacionais: R$ 3,1 bi. Salários: R$ 680 mi. Impostos: R$ 320 mi.",
    link: "/relatorio/desempenho-economico#valor-economico"
  },
  { 
    code: "GRI 201-2", 
    indicator: "Implicações financeiras e outros riscos e oportunidades decorrentes de mudanças climáticas", 
    description: "Riscos e oportunidades climáticos", 
    section: "Gestão de Riscos",
    response: "Riscos físicos mapeados. Oportunidades em construção sustentável. Investimento de R$ 45 mi em eficiência energética.",
    link: "/relatorio/gestao-riscos#clima"
  },
  { 
    code: "GRI 201-3", 
    indicator: "Obrigações de plano de benefício definido e outros planos de aposentadoria", 
    description: "Planos de benefícios a empregados", 
    section: "Desempenho Social",
    response: "Plano de previdência complementar disponível. Contribuição paritária empresa-empregado até 6% do salário.",
    link: "/relatorio/desempenho-social#beneficios"
  },
  { 
    code: "GRI 201-4", 
    indicator: "Assistência financeira recebida do governo", 
    description: "Incentivos e subsídios governamentais", 
    section: "Desempenho Econômico",
    response: "R$ 12 milhões em incentivos fiscais (Lei do Bem e PAT). Sem subsídios diretos ou participação governamental.",
    link: "/relatorio/desempenho-economico#incentivos"
  },
  
  // GRI 302: Energy
  { 
    code: "GRI 302-1", 
    indicator: "Consumo de energia dentro da organização", 
    description: "Consumo total de energia em GJ ou kWh", 
    section: "Desempenho Ambiental",
    response: "Consumo total: 185.420 GJ. Diesel: 142.300 GJ. Eletricidade: 38.500 GJ. Gás natural: 4.620 GJ.",
    link: "/relatorio/desempenho-ambiental#energia"
  },
  { 
    code: "GRI 302-2", 
    indicator: "Consumo de energia fora da organização", 
    description: "Energia consumida fora da organização", 
    section: "Desempenho Ambiental",
    response: "Não mensurado. Escopo 3 de energia em desenvolvimento para próximo ciclo.",
    link: "/relatorio/desempenho-ambiental#energia"
  },
  { 
    code: "GRI 302-3", 
    indicator: "Intensidade energética", 
    description: "Razão de intensidade energética", 
    section: "Desempenho Ambiental",
    response: "44,2 GJ/milhão de receita. Redução de 8% vs 2023.",
    link: "/relatorio/desempenho-ambiental#intensidade"
  },
  { 
    code: "GRI 302-4", 
    indicator: "Redução do consumo de energia", 
    description: "Reduções alcançadas", 
    section: "Desempenho Ambiental",
    response: "Redução de 12.500 GJ (6,3%) através de substituição de equipamentos e otimização de frota.",
    link: "/relatorio/desempenho-ambiental#reducao-energia"
  },
  
  // GRI 303: Water and Effluents
  { 
    code: "GRI 303-1", 
    indicator: "Interação com a água como recurso compartilhado", 
    description: "Como a organização interage com a água", 
    section: "Desempenho Ambiental",
    response: "Captação de concessionárias e poços. Nenhuma operação em área de estresse hídrico crítico.",
    link: "/relatorio/desempenho-ambiental#agua"
  },
  { 
    code: "GRI 303-2", 
    indicator: "Gestão de impactos relacionados ao descarte de água", 
    description: "Abordagem para gestão de efluentes", 
    section: "Desempenho Ambiental",
    response: "100% das obras com tratamento de efluentes. Reúso de água em lavagem de equipamentos.",
    link: "/relatorio/desempenho-ambiental#efluentes"
  },
  { 
    code: "GRI 303-3", 
    indicator: "Captação de água", 
    description: "Total de água captada por fonte", 
    section: "Desempenho Ambiental",
    response: "Captação total: 425.000 m³. Concessionárias: 380.000 m³. Poços: 45.000 m³.",
    link: "/relatorio/desempenho-ambiental#captacao"
  },
  { 
    code: "GRI 303-4", 
    indicator: "Descarte de água", 
    description: "Total de água descartada", 
    section: "Desempenho Ambiental",
    response: "Descarte: 340.000 m³ para rede pública tratada. Parâmetros dentro dos limites legais.",
    link: "/relatorio/desempenho-ambiental#descarte"
  },
  { 
    code: "GRI 303-5", 
    indicator: "Consumo de água", 
    description: "Total de água consumida", 
    section: "Desempenho Ambiental",
    response: "Consumo líquido: 85.000 m³ (incorporado em processos construtivos).",
    link: "/relatorio/desempenho-ambiental#consumo-agua"
  },
  
  // GRI 305: Emissions
  { 
    code: "GRI 305-1", 
    indicator: "Emissões diretas de GEE (Escopo 1)", 
    description: "Emissões diretas de gases de efeito estufa", 
    section: "Desempenho Ambiental",
    response: "Escopo 1: 12.450 tCO2e. Principais fontes: combustão em equipamentos e frota própria.",
    link: "/relatorio/desempenho-ambiental#escopo1"
  },
  { 
    code: "GRI 305-2", 
    indicator: "Emissões indiretas de GEE provenientes da aquisição de energia (Escopo 2)", 
    description: "Emissões de energia adquirida", 
    section: "Desempenho Ambiental",
    response: "Escopo 2: 1.850 tCO2e (abordagem de localização). Eletricidade adquirida da rede.",
    link: "/relatorio/desempenho-ambiental#escopo2"
  },
  { 
    code: "GRI 305-3", 
    indicator: "Outras emissões indiretas de GEE (Escopo 3)", 
    description: "Emissões indiretas da cadeia de valor", 
    section: "Desempenho Ambiental",
    response: "Escopo 3: 45.200 tCO2e. Categorias: deslocamento de funcionários, transporte de materiais, resíduos.",
    link: "/relatorio/desempenho-ambiental#escopo3"
  },
  { 
    code: "GRI 305-4", 
    indicator: "Intensidade de emissões de GEE", 
    description: "Razão de intensidade de emissões", 
    section: "Desempenho Ambiental",
    response: "14,2 tCO2e/milhão de receita (Escopo 1+2). Meta 2025: 12,0 tCO2e/milhão.",
    link: "/relatorio/desempenho-ambiental#intensidade-emissoes"
  },
  { 
    code: "GRI 305-5", 
    indicator: "Redução de emissões de GEE", 
    description: "Reduções de emissões alcançadas", 
    section: "Desempenho Ambiental",
    response: "Redução de 1.200 tCO2e (7,8%) vs 2023. Iniciativas: biodiesel B20, energia renovável.",
    link: "/relatorio/desempenho-ambiental#reducao-emissoes"
  },
  
  // GRI 306: Waste
  { 
    code: "GRI 306-1", 
    indicator: "Geração de resíduos e impactos significativos relacionados a resíduos", 
    description: "Impactos de resíduos na cadeia de valor", 
    section: "Desempenho Ambiental",
    response: "Principal impacto: resíduos de construção civil (classe A e B). Gestão conforme PGRCC.",
    link: "/relatorio/desempenho-ambiental#residuos"
  },
  { 
    code: "GRI 306-2", 
    indicator: "Gestão de impactos significativos relacionados a resíduos", 
    description: "Ações para gerenciar impactos", 
    section: "Desempenho Ambiental",
    response: "Programa de segregação na fonte. Parcerias com cooperativas de reciclagem. Meta de 80% desvio de aterro.",
    link: "/relatorio/desempenho-ambiental#gestao-residuos"
  },
  { 
    code: "GRI 306-3", 
    indicator: "Resíduos gerados", 
    description: "Peso total de resíduos gerados por tipo", 
    section: "Desempenho Ambiental",
    response: "Total: 48.500 toneladas. Classe A (inertes): 42.000 t. Classe B (recicláveis): 5.200 t. Classe D (perigosos): 1.300 t.",
    link: "/relatorio/desempenho-ambiental#residuos-gerados"
  },
  { 
    code: "GRI 306-4", 
    indicator: "Resíduos não destinados à disposição final", 
    description: "Resíduos reciclados ou recuperados", 
    section: "Desempenho Ambiental",
    response: "36.800 toneladas (76%) desviadas de aterro: reciclagem, coprocessamento e reúso em obras.",
    link: "/relatorio/desempenho-ambiental#reciclagem"
  },
  { 
    code: "GRI 306-5", 
    indicator: "Resíduos destinados à disposição final", 
    description: "Resíduos destinados a aterro", 
    section: "Desempenho Ambiental",
    response: "11.700 toneladas (24%) para aterros licenciados. Resíduos perigosos via coprocessamento.",
    link: "/relatorio/desempenho-ambiental#disposicao-final"
  },
  
  // GRI 401: Employment
  { 
    code: "GRI 401-1", 
    indicator: "Novas contratações e rotatividade", 
    description: "Taxa de contratação e rotatividade por idade, gênero e região", 
    section: "Desempenho Social",
    response: "2.450 contratações. Turnover: 18%. Maior rotatividade em obras (natureza do setor).",
    link: "/relatorio/desempenho-social#contratacoes"
  },
  { 
    code: "GRI 401-2", 
    indicator: "Benefícios oferecidos a empregados de tempo integral", 
    description: "Benefícios que não são oferecidos a temporários", 
    section: "Desempenho Social",
    response: "Plano de saúde, seguro de vida, previdência privada, PLR, vale-alimentação, auxílio-creche.",
    link: "/relatorio/desempenho-social#beneficios"
  },
  { 
    code: "GRI 401-3", 
    indicator: "Licença parental", 
    description: "Retorno ao trabalho após licença parental", 
    section: "Desempenho Social",
    response: "100% de retorno após licença-maternidade. Empresa Cidadã: 6 meses para mulheres, 20 dias para homens.",
    link: "/relatorio/desempenho-social#licenca-parental"
  },
  
  // GRI 403: Occupational Health and Safety
  { 
    code: "GRI 403-1", 
    indicator: "Sistema de gestão de saúde e segurança ocupacional", 
    description: "Escopo do sistema de gestão", 
    section: "Desempenho Social",
    response: "Sistema de Gestão ISO 45001 certificado. Cobertura de 100% das operações.",
    link: "/relatorio/desempenho-social#sso-sistema"
  },
  { 
    code: "GRI 403-2", 
    indicator: "Identificação de perigos, avaliação de riscos e investigação de incidentes", 
    description: "Processos de gestão de riscos de SSO", 
    section: "Desempenho Social",
    response: "APR obrigatória para todas atividades. Investigação de incidentes com metodologia Árvore de Causas.",
    link: "/relatorio/desempenho-social#sso-riscos"
  },
  { 
    code: "GRI 403-3", 
    indicator: "Serviços de saúde ocupacional", 
    description: "Funções de saúde ocupacional", 
    section: "Desempenho Social",
    response: "SESMT em todas obras. Exames periódicos. Programa de controle médico ocupacional (PCMSO).",
    link: "/relatorio/desempenho-social#saude-ocupacional"
  },
  { 
    code: "GRI 403-4", 
    indicator: "Participação, consulta e comunicação de trabalhadores sobre saúde e segurança ocupacional", 
    description: "Participação dos trabalhadores", 
    section: "Desempenho Social",
    response: "CIPA ativa em todas obras. DDS diário. Programa de sugestões de segurança com premiação.",
    link: "/relatorio/desempenho-social#participacao-sso"
  },
  { 
    code: "GRI 403-5", 
    indicator: "Treinamento de trabalhadores em saúde e segurança ocupacional", 
    description: "Treinamentos oferecidos", 
    section: "Desempenho Social",
    response: "Média de 32h/ano de treinamento em SSO por trabalhador. NRs obrigatórias e capacitações específicas.",
    link: "/relatorio/desempenho-social#treinamento-sso"
  },
  { 
    code: "GRI 403-6", 
    indicator: "Promoção da saúde do trabalhador", 
    description: "Programas de promoção de saúde", 
    section: "Desempenho Social",
    response: "Programa Viver Bem: campanhas de vacinação, saúde mental, combate ao tabagismo, ergonomia.",
    link: "/relatorio/desempenho-social#promocao-saude"
  },
  { 
    code: "GRI 403-7", 
    indicator: "Prevenção e mitigação de impactos na saúde e segurança ocupacional diretamente ligados a relações de negócios", 
    description: "Gestão de SSO na cadeia de valor", 
    section: "Desempenho Social",
    response: "Terceirizados sob mesmo padrão de SSO. Auditorias em subcontratados. Integração obrigatória.",
    link: "/relatorio/desempenho-social#sso-cadeia"
  },
  { 
    code: "GRI 403-8", 
    indicator: "Trabalhadores cobertos por um sistema de gestão de saúde e segurança ocupacional", 
    description: "Cobertura do sistema de gestão", 
    section: "Desempenho Social",
    response: "100% dos trabalhadores próprios e terceirizados cobertos pelo sistema ISO 45001.",
    link: "/relatorio/desempenho-social#cobertura-sso"
  },
  { 
    code: "GRI 403-9", 
    indicator: "Lesões relacionadas ao trabalho", 
    description: "Taxas de lesões e acidentes", 
    section: "Desempenho Social",
    response: "Taxa de frequência: 2,8. Taxa de gravidade: 45. Zero fatalidades em 2024. Meta de TF<2,5 para 2025.",
    link: "/relatorio/desempenho-social#acidentes"
  },
  { 
    code: "GRI 403-10", 
    indicator: "Doenças relacionadas ao trabalho", 
    description: "Doenças ocupacionais", 
    section: "Desempenho Social",
    response: "3 casos de doença ocupacional registrados (LER/DORT). Programa de prevenção ergonômica implementado.",
    link: "/relatorio/desempenho-social#doencas-ocupacionais"
  },
  
  // GRI 404: Training and Education
  { 
    code: "GRI 404-1", 
    indicator: "Média de horas de treinamento por ano, por empregado", 
    description: "Horas de treinamento por categoria", 
    section: "Desempenho Social",
    response: "Média geral: 48h/ano. Gestores: 56h. Operacionais: 44h. Administrativos: 52h.",
    link: "/relatorio/desempenho-social#treinamento"
  },
  { 
    code: "GRI 404-2", 
    indicator: "Programas para aperfeiçoamento de competências de empregados e assistência de transição de carreira", 
    description: "Programas de desenvolvimento", 
    section: "Desempenho Social",
    response: "Universidade Corporativa Construcap. Programa de trainee. Bolsas de estudo para graduação e pós.",
    link: "/relatorio/desempenho-social#desenvolvimento"
  },
  { 
    code: "GRI 404-3", 
    indicator: "Percentual de empregados que recebem avaliações regulares de desempenho e desenvolvimento de carreira", 
    description: "Avaliações de desempenho", 
    section: "Desempenho Social",
    response: "95% dos elegíveis receberam avaliação de desempenho. Sistema de competências e metas individuais.",
    link: "/relatorio/desempenho-social#avaliacao-desempenho"
  },
  
  // GRI 405: Diversity and Equal Opportunity
  { 
    code: "GRI 405-1", 
    indicator: "Diversidade de órgãos de governança e empregados", 
    description: "Composição por gênero, idade e outros indicadores", 
    section: "Desempenho Social",
    response: "Conselho: 20% mulheres. Diretoria: 14% mulheres. Total empresa: 13% mulheres. Meta 2026: 20% em liderança.",
    link: "/relatorio/desempenho-social#diversidade"
  },
  { 
    code: "GRI 405-2", 
    indicator: "Razão de salário base e remuneração de mulheres em relação a homens", 
    description: "Equidade salarial", 
    section: "Desempenho Social",
    response: "Razão salarial mulheres/homens: 0,92 (mesmo cargo). Programa de equidade em implementação.",
    link: "/relatorio/desempenho-social#equidade-salarial"
  },
  
  // GRI 413: Local Communities
  { 
    code: "GRI 413-1", 
    indicator: "Operações com engajamento da comunidade local, avaliações de impacto e programas de desenvolvimento", 
    description: "Engajamento comunitário", 
    section: "Relacionamento com Comunidades",
    response: "100% das obras com diagnóstico social. 85 projetos de investimento social. R$ 8,5 mi investidos em comunidades.",
    link: "/relatorio/comunidades#engajamento"
  },
  { 
    code: "GRI 413-2", 
    indicator: "Operações com impactos negativos significativos reais e potenciais nas comunidades locais", 
    description: "Impactos nas comunidades", 
    section: "Relacionamento com Comunidades",
    response: "Principais impactos: ruído, tráfego, poeira. Mitigação via diálogo com vizinhança e medidas técnicas.",
    link: "/relatorio/comunidades#impactos"
  },
];

const sections = [...new Set(griData.map(item => item.section))];

const GRITable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSections, setExpandedSections] = useState<string[]>(sections);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const filteredData = griData.filter(item =>
    item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.indicator.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.response.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedData = sections.reduce((acc, section) => {
    acc[section] = filteredData.filter(item => item.section === section);
    return acc;
  }, {} as Record<string, GRIItem[]>);

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
          <p className="text-2xl font-bold text-primary">100%</p>
          <p className="text-sm text-muted-foreground">Cobertura</p>
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
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell w-56">
                            Descrição
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Informação
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
                            <td className="px-4 py-3 hidden md:table-cell">
                              <span className="text-sm text-muted-foreground">{item.description}</span>
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
          Este relatório foi elaborado em conformidade com os GRI Standards 2021. Os indicadores foram 
          selecionados com base no processo de materialidade do Grupo Construcap, considerando os impactos 
          mais significativos da organização e as expectativas de seus stakeholders. Para mais informações 
          sobre a metodologia e verificação, consulte a seção de Metodologia.
        </p>
      </div>
    </div>
  );
};

export default GRITable;
