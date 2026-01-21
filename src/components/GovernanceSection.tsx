import { Scale, FileCheck, Users, AlertTriangle, Lock, Eye } from "lucide-react";

const pillars = [
  {
    icon: Scale,
    title: "Integridade e Ética",
    description:
      "Código de Conduta e políticas do Programa de Integridade estabelecem padrões obrigatórios para todos os públicos.",
    items: ["Combate à corrupção", "Prevenção a conflitos", "Direitos humanos"],
  },
  {
    icon: FileCheck,
    title: "Conformidade",
    description: "Processos estruturados para aderência às normas em engenharia, saúde e concessões.",
    items: ["Auditorias internas", "Revisões periódicas", "Monitoramento contínuo"],
  },
  {
    icon: AlertTriangle,
    title: "Gestão de Riscos",
    description: "Abordagem estruturada para antecipar cenários e mitigar impactos operacionais.",
    items: ["Riscos operacionais", "Riscos climáticos", "Riscos cibernéticos"],
  },
  {
    icon: Lock,
    title: "Canal de Denúncias",
    description: "Canal independente acessível 24h, com garantia de anonimato e confidencialidade.",
    items: ["Proteção ao denunciante", "Empresa externa", "Protocolo formal"],
  },
];

const policies = [
  "Código de Conduta",
  "Política do Programa de Integridade",
  "Política de Prevenção e Combate a Fraudes e Corrupção",
  "Política de Privacidade e Proteção de Dados",
  "Prevenção e Combate à Lavagem de Dinheiro",
];

const GovernanceSection = () => {
  return (
    <section id="governanca" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-4">
            <Scale className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Governança Corporativa</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transparência e <span className="text-gradient">Integridade</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O sistema de governança da Construcap é estruturado para assegurar clareza de papéis, eficiência no processo
            decisório e supervisão contínua das operações, privilegiando transparência, diligência e integridade.
          </p>
        </div>

        {/* Governance structure */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Conselho de Administração</h3>
                <p className="text-sm text-muted-foreground">Órgão máximo de deliberação estratégica</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Define diretrizes de longo prazo",
                "Supervisiona a Diretoria Executiva",
                "Acompanha resultados e avalia riscos",
                "Monitora desempenho da alta liderança",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Diretoria Executiva</h3>
                <p className="text-sm text-muted-foreground">Liderada pelo CEO Roberto Capobianco</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Gestão do dia a dia da companhia",
                "Execução das estratégias aprovadas",
                "Gestão operacional das unidades",
                "Liderança sobre processos críticos",
                "Promoção de práticas de sustentabilidade",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-purple-500/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                <pillar.icon className="w-6 h-6 text-purple-500 group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-bold mb-2">{pillar.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pillar.description}</p>
              <ul className="space-y-1">
                {pillar.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Policies */}
        <div className="p-8 rounded-2xl bg-secondary/50 border border-border">
          <h3 className="text-xl font-bold mb-6">Políticas Corporativas</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {policies.map((policy) => (
              <div key={policy} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border">
                <FileCheck className="w-4 h-4 text-purple-500 shrink-0" />
                <span className="text-sm">{policy}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernanceSection;
