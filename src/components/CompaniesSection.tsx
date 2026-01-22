import { Building2, Heart, Trophy, MapPin, Phone, Globe, Users, Briefcase } from "lucide-react";

const companies = [
  {
    name: "Inova Saúde",
    description:
      "Empresa constituída em 2014 para a construção, fornecimento de equipamentos, manutenção e gestão dos serviços não assistenciais em complexos hospitalares no Estado de São Paulo.",
    founded: "2014",
    employees: "1.500+",
    location: "São Paulo, SP",
    sector: "Saúde, Construção Hospitalar",
    highlights: [
      "3 complexos hospitalares",
      "626 leitos totais",
      "17 anos de gestão contratada",
      "Tecnologia hospitalar de ponta",
    ],
    metrics: {
      co2: "28%",
      energy: "42%",
      diversity: "38%",
      safety: "97%",
    },
    score: 86,
    icon: Heart,
    color: "primary",
  },
  {
    name: "Minas Arena",
    description:
      "Pioneira na consolidação da parceria público-privada no Brasil, responsável pela elaboração do projeto, investimento, construção e operação do Estádio do Mineirão.",
    founded: "2010",
    employees: "500+",
    location: "Belo Horizonte, MG",
    sector: "Esportivo, Eventos, PPP",
    highlights: ["Gestão do Mineirão", "Parceria Público-Privada", "Copa do Mundo 2014", "Eventos sustentáveis"],
    metrics: {
      co2: "30%",
      energy: "45%",
      diversity: "45%",
      safety: "98%",
    },
    score: 87,
    icon: Trophy,
    color: "blue",
  },
  {
    name: "Ambicap",
    description:
      "Empresa criada para executar atividades de zeladoria, limpeza e manejo de áreas verdes em operações de parques.",
    founded: "2015",
    employees: "800+",
    location: "São Paulo, SP",
    sector: "Construção Civil, PPP, Infraestrutura",
    highlights: ["Projetos estruturados", "Parcerias público-privadas", "Infraestrutura nacional", "Gestão integrada"],
    metrics: {
      co2: "24%",
      energy: "38%",
      diversity: "33%",
      safety: "94%",
    },
    score: 84,
    icon: Building2,
    color: "green",
  },
];

const CompaniesSection = () => {
  return (
    <section id="empresas" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Empresas do Grupo</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
            Conheça o <span className="text-gradient">Grupo Construcap</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Projetos estruturados que transformam infraestrutura em desenvolvimento sustentável e social. Atuação
            diversificada em saúde, esportes e construção civil.
          </p>
        </div>

        {/* Company cards */}
        <div className="space-y-8">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Info */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                          company.color === "primary"
                            ? "bg-accent"
                            : company.color === "blue"
                              ? "bg-blue-100"
                              : "bg-green-100"
                        }`}
                      >
                        <company.icon
                          className={`w-7 h-7 ${
                            company.color === "primary"
                              ? "text-primary"
                              : company.color === "blue"
                                ? "text-blue-500"
                                : "text-green-500"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{company.name}</h3>
                        <p className="text-muted-foreground">{company.sector}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground">{company.description}</p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">Fundada em {company.founded}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{company.employees} colaboradores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm">{company.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold mb-3">Destaques</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {company.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2 text-sm">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                company.color === "primary"
                                  ? "bg-primary"
                                  : company.color === "blue"
                                    ? "bg-blue-500"
                                    : "bg-green-500"
                              }`}
                            />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side - Metrics */}
                  <div className="lg:w-80 space-y-4">
                    <div className="p-6 rounded-xl bg-secondary/50">
                      <h4 className="font-semibold mb-4">Indicadores ESG</h4>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Redução CO₂</span>
                            <span className="font-medium text-green-500">{company.metrics.co2}</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: company.metrics.co2 }} />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Energia Renovável</span>
                            <span className="font-medium text-blue-500">{company.metrics.energy}</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: company.metrics.energy }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Diversidade</span>
                            <span className="font-medium text-purple-500">{company.metrics.diversity}</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full">
                            <div
                              className="h-full bg-purple-500 rounded-full"
                              style={{ width: company.metrics.diversity }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Segurança</span>
                            <span className="font-medium text-primary">{company.metrics.safety}</span>
                          </div>
                          <div className="h-2 bg-secondary rounded-full">
                            <div className="h-full bg-primary rounded-full" style={{ width: company.metrics.safety }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl text-center ${
                        company.color === "primary"
                          ? "bg-accent"
                          : company.color === "blue"
                            ? "bg-blue-100"
                            : "bg-green-100"
                      }`}
                    >
                      <p className="text-sm text-muted-foreground">Score ESG</p>
                      <p
                        className={`text-3xl font-bold ${
                          company.color === "primary"
                            ? "text-primary"
                            : company.color === "blue"
                              ? "text-blue-500"
                              : "text-green-500"
                        }`}
                      >
                        {company.score}/100
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
