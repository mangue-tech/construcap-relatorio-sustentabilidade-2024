import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  AlertTriangle, 
  Shield, 
  Factory, 
  Heart, 
  Leaf, 
  Scale, 
  Cpu, 
  Building2, 
  Stethoscope, 
  TreePine, 
  HardHat, 
  RefreshCw,
  Users,
  Search,
  BarChart3,
  FileCheck,
  Target,
  ClipboardCheck,
  Eye,
  Phone,
  Siren,
  Activity,
  Recycle,
  CheckCircle
} from "lucide-react";
import riskHero from "@/assets/report/risk-management-hero.jpg";

const riskTypes = [
  {
    title: "Riscos Operacionais",
    icon: Factory,
    color: "bg-blue-500",
    items: [
      "Falhas técnicas, incidentes estruturais ou interrupções operacionais",
      "Desvios de qualidade ou não conformidade com normas técnicas",
      "Atrasos de obra devido a fornecedores, clima, restrições logísticas ou imprevistos geotécnicos",
      "Interrupções em parques naturais decorrentes de fenômenos climáticos extremos"
    ]
  },
  {
    title: "Riscos de Saúde e Segurança",
    icon: Heart,
    color: "bg-rose-500",
    items: [
      "Acidentes, incidentes graves",
      "Exposição a agentes perigosos",
      "Falhas em equipamentos críticos",
      "Protocolos específicos em obras, hospitais e parques (especialmente trilhas em Jericoacoara e Cânions Verdes)"
    ]
  },
  {
    title: "Riscos Ambientais e Climáticos",
    icon: Leaf,
    color: "bg-emerald-500",
    items: [
      "Impactos ambientais potencialmente gerados por obras",
      "Eventos extremos (chuvas, rajadas de vento, altas temperaturas)",
      "Riscos de incêndio em áreas naturais",
      "Riscos de erosão ou deslizamentos em trilhas e estruturas de parques",
      "Exigências regulatórias e de licenciamento"
    ]
  },
  {
    title: "Riscos Regulatórios e Contratuais",
    icon: Scale,
    color: "bg-purple-500",
    items: [
      "Alterações regulatórias",
      "Exigências adicionais de órgãos públicos",
      "Revisão de contratos de concessão",
      "Cumprimento de indicadores contratuais obrigatórios",
      "Multas, sanções ou penalidades"
    ]
  },
  {
    title: "Riscos Socioeconômicos e Comunitários",
    icon: Users,
    color: "bg-orange-500",
    items: [
      "Impactos sobre comunidades do entorno (fluxo turístico, mobilidade, uso do território)",
      "Demandas sociais relacionadas à conservação ambiental",
      "Percepções públicas sobre gestão de áreas naturais e culturais",
      "Riscos de incidentes com visitantes"
    ]
  },
  {
    title: "Riscos de Integridade",
    icon: Shield,
    color: "bg-amber-500",
    items: [
      "Desvios em processos",
      "Fraudes",
      "Interação inadequada com agentes públicos",
      "Riscos decorrentes de terceiros",
      "Não conformidades em auditorias"
    ]
  },
  {
    title: "Riscos Tecnológicos e Cibernéticos",
    icon: Cpu,
    color: "bg-cyan-500",
    items: [
      "Ataques cibernéticos",
      "Indisponibilidade de sistemas críticos",
      "Proteção de dados pessoais",
      "Riscos associados à infraestrutura digital da Inova Saúde, parques e arenas",
      "Incidentes que afetem plataformas de bilhetagem, controle de acesso ou sistemas médicos"
    ]
  },
];

const businessUnitRisks = [
  {
    name: "Inova Saúde",
    icon: Stethoscope,
    description: "Protocolos hospitalares robustos, gestão clínica, segurança de pacientes, manutenção predial, qualificação rigorosa de fornecedores e gestão de riscos sanitários."
  },
  {
    name: "Urbia Parques e Urbia Cânions Verdes",
    icon: TreePine,
    description: "Monitoramento ambiental, manejo de trilhas, gestão de visitação, prevenção de incêndios, fiscalização de áreas naturais e protocolos de segurança para visitantes."
  },
  {
    name: "Minas Arena",
    icon: Building2,
    description: "Gestão multidisciplinar que inclui segurança do público, engenharia estrutural, gestão energética, controle de acesso e resposta a emergências em grandes eventos."
  },
  {
    name: "Ambicap e operações industriais",
    icon: Recycle,
    description: "Sistemas de controle técnico, conformidade ambiental, monitoramento de emissões e segurança operacional em ambientes de risco."
  },
  {
    name: "Obras",
    icon: HardHat,
    description: "Planos de Segurança do Trabalho, gestão de riscos geotécnicos, inspeções estruturais, controle de qualidade de materiais, logística e contingência climática."
  },
];

const identificationMethods = [
  "Análises de campo",
  "Relatórios de inspeção",
  "Auditorias internas",
  "Mapeamento de processos críticos",
  "Avaliação de incidentes e quase acidentes",
  "Consultas a stakeholders",
  "Requisitos regulatórios e ambientais"
];

const evaluationCriteria = [
  { name: "Segurança e saúde", icon: Heart },
  { name: "Continuidade dos serviços essenciais", icon: Activity },
  { name: "Impacto ambiental e climático", icon: Leaf },
  { name: "Impacto financeiro", icon: BarChart3 },
  { name: "Impacto reputacional", icon: Eye },
  { name: "Impacto sobre comunidades", icon: Users },
  { name: "Impacto contratual ou regulatório", icon: Scale },
];

const continuityAreas = [
  {
    area: "Gestão hospitalar",
    description: "Onde falhas podem comprometer atendimento à população",
    icon: Stethoscope
  },
  {
    area: "Operação de parques naturais",
    description: "Onde intempéries podem gerar riscos aos visitantes",
    icon: TreePine
  },
  {
    area: "Operação de arenas",
    description: "Especialmente em eventos de grande público",
    icon: Building2
  },
  {
    area: "Obras essenciais",
    description: "Cujos atrasos afetam contratos públicos e privados",
    icon: HardHat
  },
];

const monitoringItems = [
  "Auditorias internas e externas",
  "Inspeções periódicas em obras e operações",
  "Monitoramento de performance ambiental e climática",
  "Revisões de riscos prioritários",
  "Análises críticas de acidentes e incidentes",
  "Atualização de matrizes de risco e uso de dashboards gerenciais"
];

const RiskManagementPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={riskHero} 
            alt="Canteiro de obras Construcap" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 5</span>
                <span>•</span>
                <span>GRI 2-23, 2-25, 3-3</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Gestão de Riscos</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A dinâmica dos setores em que atuamos exige uma abordagem estruturada de gestão 
                de riscos, capaz de antecipar cenários, mitigar impactos, proteger pessoas, 
                preservar a integridade dos ativos e assegurar a continuidade operacional.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground leading-relaxed">
              A Construcap opera em setores altamente regulados e de elevada complexidade técnica — 
              construção civil de grande porte, gestão hospitalar, concessões de parques naturais e 
              urbanos, operação de arenas esportivas e serviços críticos de engenharia.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nosso modelo de gestão de riscos integra processos corporativos, diretrizes técnicas, 
              metodologias próprias e mecanismos de controle distribuídos nas áreas operacionais e 
              administrativas. Ele se sustenta em princípios de <strong className="text-foreground">prevenção</strong>, 
              <strong className="text-foreground"> diligência</strong>, 
              <strong className="text-foreground"> disciplina operacional</strong> e 
              <strong className="text-foreground"> melhoria contínua</strong> (GRI 2-23).
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 5.1 Risk Structure */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">5.1 Estrutura de Gestão de Riscos Corporativos</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            O processo de gestão de riscos segue uma arquitetura corporativa que contempla: (GRI 2-25)
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: "Identificação sistemática", desc: "de riscos em todas as unidades de negócio" },
            { step: "Avaliação", desc: "de probabilidade e impacto (operacionais, financeiros, socioambientais, reputacionais, climáticos e regulatórios)" },
            { step: "Planos de mitigação", desc: "desenhados segundo criticidade e urgência" },
            { step: "Monitoramento contínuo", desc: "por lideranças operacionais, equipes técnicas e áreas corporativas" },
            { step: "Reportes regulares", desc: "às instâncias de governança e alta administração" }
          ].map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-4 h-full">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center mb-3">
                  <span className="text-lg font-bold text-red-500">{index + 1}</span>
                </div>
                <p className="text-sm font-semibold mb-1">{item.step}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5.2 Risk Types */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">5.2 Principais Tipos de Riscos Monitorados</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap mantém matrizes de riscos específicas para cada tipo de operação, 
            além de um mapa consolidado em nível corporativo.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {riskTypes.map((risk, index) => (
            <AnimatedSection key={risk.title} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className={`${risk.color} p-4 flex items-center gap-3`}>
                  <risk.icon className="w-6 h-6 text-white" />
                  <h3 className="font-semibold text-white text-sm">{risk.title}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {risk.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs">
                        <AlertTriangle className="w-3 h-3 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5.3 Identification, Evaluation and Mitigation */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-red-950/10">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">5.3 Processos de Identificação, Avaliação e Mitigação</h2>
          <p className="text-muted-foreground mb-8">
            A gestão de riscos segue processos formais que empregam metodologias qualitativas e quantitativas. (GRI 3-3)
          </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Identificação */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">Identificação</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Realizada por equipes técnicas, gestores e áreas corporativas, utilizando:
              </p>
              <ul className="space-y-2">
                {identificationMethods.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Avaliação */}
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">Avaliação</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Os riscos são avaliados por sua probabilidade e impacto, considerando:
              </p>
              <ul className="space-y-2">
                {evaluationCriteria.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <item.icon className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{item.name}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
                Cada risco é classificado por criticidade e priorizado para tratamento.
              </p>
            </div>
          </AnimatedSection>

          {/* Mitigação */}
          <AnimatedSection delay={300}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">Mitigação e Controle</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                As medidas incluem:
              </p>
              <ul className="space-y-2">
                {[
                  "Planos operacionais preventivos",
                  "Protocolos de prevenção de acidentes",
                  "Monitoramento ambiental e climático em tempo real",
                  "Redundância de equipamentos",
                  "Revisão de especificações técnicas",
                  "Qualificação e monitoramento de fornecedores",
                  "Contingência em eventos extremos",
                  "Procedimentos específicos para riscos hospitalares",
                  "Reforço de controle de acesso em estádios e parques"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5.4 Business Continuity */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Siren className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold">5.4 Continuidade de Negócios</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap mantém mecanismos de continuidade para assegurar funcionamento ininterrupto 
            de suas atividades, especialmente em setores críticos:
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {continuityAreas.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <item.icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-semibold mb-2">{item.area}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <div className="bg-muted/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-5 h-5 text-red-500" />
              Planos de Continuidade incluem:
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Protocolos de contingência",
                "Rotinas de comunicação de emergência",
                "Equipes de prontidão",
                "Planos de evacuação"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 5.5 Monitoring */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold">5.5 Monitoramento de Indicadores e Auditorias</h2>
          </div>
          <p className="text-muted-foreground mb-6">A companhia realiza:</p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {monitoringItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 75}>
              <div className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                <Eye className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Indicadores acompanhados:</strong> Severidade, frequência, 
              desvios e não conformidades são acompanhados pela alta gestão e por comitês responsáveis.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 5.6 Business Unit Risks */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">5.6 Gestão de Riscos nas Unidades do Grupo</h2>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessUnitRisks.map((unit, index) => (
            <AnimatedSection key={unit.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 flex flex-col h-full hover:border-red-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <unit.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">{unit.name}</h3>
                <p className="text-sm text-muted-foreground flex-grow">{unit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 5.7 Continuous Improvement */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-red-950/10">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-4 mb-6">
              <RefreshCw className="w-10 h-10 text-red-500" />
              <div>
                <h2 className="text-2xl font-bold">5.7 Revisão, Aprendizado Contínuo e Melhoria</h2>
                <p className="text-sm text-muted-foreground">GRI 2-25</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              A companhia conduz revisões periódicas de seu sistema de gestão de riscos, incorporando:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Lições aprendidas de incidentes",
                "Melhorias técnicas e tecnológicas",
                "Mudanças regulatórias",
                "Avanços em engenharia e sustentabilidade",
                "Recomendações de auditorias",
                "Contribuições das equipes de obra, operação e manutenção"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Esse processo cíclico fortalece a <strong className="text-foreground">maturidade do sistema</strong> e 
                aprimora a <strong className="text-foreground">resiliência operacional</strong>.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default RiskManagementPage;
