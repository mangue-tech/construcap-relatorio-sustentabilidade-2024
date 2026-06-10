import ReportLayout from "@/components/report/ReportLayout";
import odsLogos from "@/assets/ods-logos.png";

const odsData = [
  {
    number: 3,
    name: "Saúde e Bem Estar",
    color: "#4C9F38",
    items: [
      "Operação de três unidades hospitalares públicas pela Inova Saúde, Hospital Centro de Referência da Saúde da Mulher, Hospital Regional de Sorocaba 'Dr. Adib Domingos Jatene' e Hospital Regional de São José dos Campos 'Dr. Rubens Savastano'",
      "Consumo total de água das unidades hospitalares em 2024 de 119.281 m3",
      "Quadro funcional total do Grupo de 4.345 colaboradores, com cobertura por políticas estruturadas de saúde e segurança do trabalho",
    ],
  },
  {
    number: 4,
    name: "Educação de Qualidade",
    color: "#C5192D",
    items: [
      "Programas de capacitação técnica contínua e treinamentos obrigatórios em segurança, engenharia, integridade e sustentabilidade",
      "Ações de educação ambiental nos parques naturais e urbanos sob gestão do Grupo",
    ],
  },
  {
    number: 6,
    name: "Água Potável e Saneamento",
    color: "#26BDE2",
    items: [
      "Consumo total de água da Inova Saúde em 2024 de 119.281 m3",
      "Captação e reutilização de 15.337 m3 de água de chuva no Mineirão",
      "Redução de 51% no consumo de água potável no Mineirão, com consumo de 10.557 m3 da rede pública",
    ],
  },
  {
    number: 7,
    name: "Energia Limpa e Acessível",
    color: "#FCC30B",
    items: [
      "Consumo total de eletricidade do Grupo em 2024 de 32.777.724,33 kWh",
      "Geração de energia fotovoltaica no Mineirão de 1.317.600 kWh",
      "Energia solar representando 23,7% do consumo total do estádio, de 5.564.830 kWh",
    ],
  },
  {
    number: 8,
    name: "Trabalho Decente e Crescimento Econômico",
    color: "#A21942",
    items: [
      "Quadro funcional total de 4.345 colaboradores",
      "Rotatividade anual de 12%",
      "Valor econômico gerado em 2024 de R$ 1.649.855 mil",
      "Valor econômico distribuído de R$ 1.376.002 mil",
      "Valor econômico retido de R$ 273.853 mil",
    ],
  },
  {
    number: 9,
    name: "Indústria, Inovação e Infraestrutura",
    color: "#FD6925",
    items: [
      "Consumo de 24.458,63 m³ de concreto nas operações de construção civil",
      "Consumo de 1.397.956,75 kg de aço",
      "Emissões associadas a bens e serviços adquiridos de 9.231,820 tCO₂e",
    ],
  },
  {
    number: 10,
    name: "Redução das Desigualdades",
    color: "#DD1367",
    items: [
      "Operação de hospitais públicos, parques urbanos, parques naturais e equipamentos de uso coletivo",
      "Ampliação do acesso da população a serviços essenciais de saúde, lazer, cultura e turismo em diferentes territórios",
    ],
  },
  {
    number: 11,
    name: "Cidades e Comunidades Sustentáveis",
    color: "#FD9D24",
    items: [
      "Gestão de parques urbanos e naturais, incluindo o Parque do Ibirapuera e parques do sistema estadual de São Paulo",
      "Gestão dos Parques Nacionais de Jericoacoara, Aparados da Serra e Serra Geral",
      "Operação do Estádio Mineirão como equipamento público de grande relevância urbana e cultural",
    ],
  },
  {
    number: 12,
    name: "Consumo e Produção Responsáveis",
    color: "#BF8B2E",
    items: [
      "Geração total de 4.051,36 toneladas de resíduos em 2024",
      "Destinação de 2.103,946 toneladas de resíduos para aterro sanitário",
      "Destinação de 1.830,268 toneladas de resíduos para incineração",
      "Emissões associadas à gestão de resíduos de 1.716,419 tCO₂e e 1.397,926 tCO₂ biogênicas",
    ],
  },
  {
    number: 13,
    name: "Ação Contra a Mudança do Clima",
    color: "#3F7E44",
    items: [
      "Emissões totais de gases de efeito estufa de 29.442,233 tCO₂e",
      "Emissões de Escopo 1 de 15.116,357 tCO₂e",
      "Emissões de Escopo 2 de 1.617,679 tCO₂e",
      "Emissões de Escopo 3 de 12.708,196 tCO₂e",
      "Emissões biogênicas de 3.864,367 tCO₂",
    ],
  },
  {
    number: 15,
    name: "Vida Terrestre",
    color: "#56C02B",
    items: [
      "Gestão de parques naturais e áreas protegidas, incluindo os Parques Nacionais de Aparados da Serra e Serra Geral",
      "Ações de manejo ambiental, conservação da biodiversidade, educação ambiental e ordenamento da visitação",
    ],
  },
  {
    number: 16,
    name: "Paz, Justiça e Instituições Eficazes",
    color: "#00689D",
    items: [
      "Sistema de governança corporativa estruturado com conselho de administração e diretoria executiva",
      "Políticas formais de integridade, compliance e código de conduta",
      "Canal de denúncias independente com garantia de confidencialidade",
    ],
  },
  {
    number: 17,
    name: "Parcerias e Meios de Implementação",
    color: "#19486A",
    items: [
      "Atuação por meio de parcerias e concessões com o poder público e parceiros operacionais",
      "Escopo do relato contemplando a controladora Construcap CCPS Engenharia e Comércio S.A. e seis empresas controladas",
    ],
  },
  {
    number: 18,
    name: "Igualdade Étnico-Racial",
    color: "#7B2D26",
    description:
      "Em 15 de novembro de 2024, o Brasil lançou oficialmente o ODS 18, que visa eliminar o racismo e a discriminação étnico-racial, em todas suas formas, contra os povos indígenas e afrodescendentes. A Construcap como empresa brasileira, presente na totalidade do território nacional tem o compromisso de respeito aos povos tradicionais, quilombolas e indígenas e o compromisso de combater o racismo em todas as suas formas.",
    items: [
      "Relacionamento estruturado com comunidades dos territórios de atuação, com diálogo transparente, escuta ativa e interface com lideranças locais, aplicável a contextos urbanos, rurais e territórios tradicionais, incluindo comunidades indígenas e quilombolas quando presentes",
      "Procedimentos formais de consulta, comunicação e tratamento de demandas comunitárias, assegurando registro, classificação, resposta documentada e mitigação de impactos socioambientais decorrentes de obras e operações",
      "Avaliação prévia de impactos socioambientais e adoção de medidas mitigadoras voltadas à redução de efeitos sobre modos de vida, uso do território, circulação, segurança e convivência comunitária",
      "Atuação integrada das controladas e coligadas do Grupo Construcap nos territórios, com educação ambiental em parques naturais e urbanos, fortalecimento de serviços públicos de saúde, zeladoria urbana e mobilização cultural, contribuindo para o desenvolvimento local e a convivência respeitosa com comunidades diversas",
    ],
  },
];

const ODSPage = () => {
  return (
    <ReportLayout title="Objetivos de Desenvolvimento Sustentável">
      <div className="space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Alinhamento do Grupo Construcap aos Objetivos de Desenvolvimento Sustentável (ODS – ONU)
          </h1>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            O Grupo Construcap contribui ativamente para a Agenda 2030 das Nações Unidas, alinhando suas operações e
            estratégias aos Objetivos de Desenvolvimento Sustentável.
          </p>
        </section>

        {/* ODS Logos Image */}
        <section className="flex justify-center">
          <img
            src={odsLogos}
            alt="Objetivos de Desenvolvimento Sustentável da ONU"
            className="max-w-4xl w-full rounded-lg shadow-lg"
          />
        </section>

        {/* ODS Cards */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground text-center">Nossa Contribuição para os ODS</h2>

          <div className="grid gap-6">
            {odsData.map((ods) => (
              <div
                key={ods.number}
                className="bg-card rounded-xl overflow-hidden shadow-md border border-border hover:shadow-lg transition-shadow"
              >
                <div className="px-6 py-4 flex items-center gap-4" style={{ backgroundColor: ods.color }}>
                  <span className="text-3xl font-bold text-white">{ods.number}</span>
                  <h3 className="text-xl font-semibold text-white">{ods.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {ods.description && (
                    <p className="text-muted-foreground italic border-l-4 pl-4" style={{ borderColor: ods.color }}>
                      {ods.description}
                    </p>
                  )}
                  <ul className="space-y-3">
                    {ods.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span
                          className="mt-2 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: ods.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Section */}
        <section className="bg-primary/5 rounded-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Compromisso com o Desenvolvimento Sustentável</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            O Grupo Construcap demonstra seu compromisso com o desenvolvimento sustentável através de ações concretas em{" "}
            <strong>14 dos 18 Objetivos de Desenvolvimento Sustentável</strong>, incluindo o ODS 18 lançado pelo Brasil
            em 2024, contribuindo para um futuro mais justo, inclusivo e ambientalmente responsável.
          </p>
        </section>
      </div>
    </ReportLayout>
  );
};

export default ODSPage;
