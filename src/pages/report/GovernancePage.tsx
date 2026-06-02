import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Shield,
  Users,
  Target,
  BookOpen,
  Scale,
  Eye,
  TrendingUp,
  CheckCircle,
  GraduationCap,
  FileCheck,
  Briefcase,
  Building2,
  UserCheck,
  BarChart3,
  MessageSquare,
  Lock,
  Layers,
  Award,
} from "lucide-react";
import governanceHero from "@/assets/report/governance-hero.jpg";

const governanceStructure = [
  {
    title: "Conselho de Administração",
    gri: "GRI 2-9",
    description:
      "O Conselho de Administração é o órgão máximo de deliberação estratégica. Com composição experiente e multidisciplinar, o Conselho define as diretrizes de longo prazo, supervisiona a Diretoria Executiva, acompanha resultados e avalia riscos estruturais do negócio, incluindo riscos operacionais, regulatórios, climáticos, socioambientais e reputacionais.",
    principles: "A atuação do Conselho se baseia em princípios de independência, prudência e visão sistêmica.",
    responsibilities: [
      "Orientar o posicionamento estratégico das unidades de negócio",
      "Supervisionar indicadores de saúde financeira e performance operacional",
      "Acompanhar riscos relevantes, impactos de longo prazo e tendências setoriais",
      "Monitorar o desempenho da alta liderança",
      "Deliberar sobre investimentos e expansão de operações",
    ],
  },
  {
    title: "Diretoria Executiva",
    gri: "GRI 2-10",
    description:
      "A Diretoria Executiva, liderada pelo Presidente Roberto Ribeiro Capobianco, é responsável pela gestão do dia a dia da companhia. Sua atuação envolve a execução das estratégias aprovadas pelo Conselho, a gestão operacional das unidades de negócio, a liderança sobre processos críticos e a promoção de práticas robustas de segurança operacional, qualidade, integridade e sustentabilidade.",
    principles:
      "A Diretoria opera em sinergia com gestores de todas as áreas e negócios.",
    responsibilities: [
      "Execução das estratégias aprovadas pelo Conselho",
      "Gestão operacional das unidades de negócio",
      "Liderança sobre processos críticos",
      "Promoção de práticas de segurança operacional e qualidade",
      "Implementação de políticas de integridade e sustentabilidade",
      "Assegurar coerência entre planejamento, execução e resultados",
    ],
  },
];

const policies = [
  { name: "Código de Conduta", icon: Shield },
  { name: "Política do Programa de Integridade", icon: Lock },
  { name: "Política de Prevenção e Combate a Fraudes e Corrupção", icon: Users },
  { name: "Política de Privacidade e Proteção de Dados", icon: FileCheck },
  { name: "Prevenção e Combate à Lavagem de Dinheiro", icon: BarChart3 },
];

const strategicAxes = [
  {
    number: 1,
    icon: Shield,
    title: "Segurança do Trabalho como valor inegociável",
    description:
      "Priorização absoluta da proteção à vida, padrões rigorosos de prevenção, controles operacionais e fortalecimento contínuo da cultura de segurança em todas as unidades.",
  },
  {
    number: 2,
    icon: Scale,
    title: "Integridade e conformidade como princípio fundamental",
    description:
      "Adoção sistemática de práticas éticas, políticas de prevenção a riscos e processos robustos de governança em toda a cadeia de valor.",
  },
  {
    number: 3,
    icon: Target,
    title: "Excelência operacional",
    description:
      "Implementação de padrões técnicos elevados, inovação aplicada, engenharia de alta performance, gestão de qualidade e eficiência operacional.",
  },
  {
    number: 4,
    icon: TrendingUp,
    title: "Sustentabilidade e responsabilidade socioambiental",
    description:
      "Integração de práticas ambientais, sociais e climáticas ao planejamento de obras, à operação de ativos e à gestão dos impactos sobre comunidades e territórios.",
  },
  {
    number: 5,
    icon: Users,
    title: "Desenvolvimento de pessoas e fortalecimento da cultura corporativa",
    description:
      "Promoção de capacidades técnicas, liderança qualificada, programas de treinamento contínuo e ambiente de trabalho pautado por segurança psicológica, ética e respeito.",
  },
  {
    number: 6,
    icon: Eye,
    title: "Diversificação e resiliência dos negócios",
    description:
      "Atuação integrada em construção civil, parques naturais e urbanos, unidades hospitalares, arenas esportivas, serviços de engenharia e zeladoria, assegurando estabilidade e crescimento sustentável.",
  },
];

const supervisionProcesses = [
  "Comitês internos e instâncias técnicas de deliberação",
  "Análises periódicas de desempenho e riscos",
  "Auditorias internas e externas",
  "Ciclos de planejamento e revisão estratégica",
  "Mecanismos formais de reporte e transparência (GRI 2-12)",
];

const councilCompetencies = [
  "Arcabouço regulatório e melhores práticas de governança",
  "Tendências de infraestrutura e concessões",
  "Gestão de riscos, compliance e integridade",
  "Inovação, transformação digital e engenharia aplicada",
  "Sustentabilidade, descarbonização e mudanças climáticas",
];

const integrityTopics = [
  "Relacionamento com agentes públicos",
  "Combate à corrupção e fraude",
  "Prevenção a conflitos de interesse",
  "Confidencialidade e proteção de dados",
  "Direitos humanos e condições dignas de trabalho",
  "Respeito à diversidade e à não discriminação",
];

const integrityCulture = [
  "Treinamentos frequentes para funcionários e terceiros",
  "Comunicação ativa e campanhas de sensibilização",
  "Revisão periódica do Código de Conduta",
  "Integração à gestão contratual e à cadeia de suprimentos (GRI 2-15)",
];

const GovernancePage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={governanceHero}
            alt="Reunião de governança corporativa"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 3</span>
                <span>•</span>
                <span>GRI 2-9, 2-10, 2-11, 2-12, 2-13, 2-17, 2-18</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Estratégia e Governança</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A estratégia corporativa do Grupo Construcap reflete a combinação de tradição, visão de longo prazo e
                capacidade de adaptação a um ambiente econômico, regulatório e tecnológico em constante transformação.
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
              Sustentado por mais de oito décadas de atuação, o grupo consolida-se como uma plataforma integrada de
              engenharia, infraestrutura e serviços essenciais, com um modelo de governança que privilegia{" "}
              <strong className="text-foreground">transparência</strong>,
              <strong className="text-foreground"> diligência</strong>,{" "}
              <strong className="text-foreground">integridade</strong>, gestão robusta de riscos e execução técnica de
              alta performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              O compromisso com a <strong className="text-foreground">criação de valor compartilhado</strong> orienta
              todas as decisões corporativas, reforçando a responsabilidade da empresa com colaboradores, clientes,
              parceiros, governos, comunidades e com o desenvolvimento do país.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Governance Structure */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Modelo de Governança Corporativa</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            O sistema de governança da Construcap é estruturado para assegurar clareza de papéis, eficiência no processo
            decisório e supervisão contínua das operações. O modelo é composto por: (GRI 2-9, 2-10, 2-11)
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {governanceStructure.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 150}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className="bg-primary p-4 flex items-center justify-between">
                  <h3 className="font-semibold text-primary-foreground text-lg">{item.title}</h3>
                  <span className="text-xs bg-primary-foreground/20 text-primary-foreground px-2 py-1 rounded">
                    {item.gri}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <p className="text-sm text-muted-foreground italic mb-4">{item.principles}</p>
                  <h4 className="font-medium text-sm mb-3">Responsabilidades:</h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Segregation */}
        <AnimatedSection delay={300}>
          <div className="mt-8 bg-card rounded-2xl border border-border p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Segregação e Independência de Funções (GRI 2-11)</h3>
                <p className="text-muted-foreground">
                  O desenho institucional assegura autonomia e distinção entre as funções do Conselho e da Diretoria,
                  fortalecendo mecanismos de controle, mitigando potenciais conflitos de interesse e garantindo decisões
                  tecnicamente fundamentadas.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Policies */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Diretrizes, Políticas e Estruturas de Supervisão</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap possui um conjunto abrangente de políticas corporativas que orientam sua atuação em temas
            estratégicos e que são revisadas periodicamente para refletir transformações regulatórias, melhores práticas
            de mercado e compromissos públicos da organização. (GRI 2-12, 2-13)
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p className="text-sm font-medium text-muted-foreground mb-4">Entre as políticas centrais estão:</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {policies.map((policy, index) => (
            <AnimatedSection key={policy.name} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 hover:border-primary/50 transition-colors h-full">
                <policy.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{policy.name}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400}>
          <p className="text-sm text-muted-foreground mt-6 p-4 bg-muted/50 rounded-xl">
            Estas diretrizes sustentam o modelo de governança e garantem que todas as operações — obras, hospitais,
            arenas e parques — atuem sob padrões consistentes de integridade, responsabilidade e conformidade.
          </p>
        </AnimatedSection>
      </section>

      {/* Supervision Processes */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6">Processos de Supervisão Estratégica</h2>
          <p className="text-muted-foreground mb-6">
            O Conselho e a Diretoria monitoram continuamente a execução das políticas corporativas por meio de:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {supervisionProcesses.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-primary" />
              Diligência e Avaliação de Impactos (GRI 2-13)
            </h3>
            <p className="text-muted-foreground">
              A companhia adota metodologia estruturada de diligência e avaliação de impactos para identificar, mitigar
              e monitorar riscos operacionais, socioambientais, econômicos e reputacionais em todos os estágios dos
              projetos. Esses processos abrangem desde análise preliminar de viabilidade até a operação contínua dos
              ativos.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Integrity and Conduct */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Integridade e Conduta como Pilar de Governança</h2>
              <p className="text-muted-foreground">GRI 2-15, 2-16, 2-23</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A integridade é base do posicionamento institucional da Construcap. O Código de Conduta e as políticas do
            Programa de Integridade estabelecem padrões obrigatórios de comportamento para todos os públicos internos e externos,
            cobrindo temas como:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {integrityTopics.map((topic, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm">{topic}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={300}>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Canal de Denúncias (GRI 2-16)
            </h3>
            <p className="text-muted-foreground">
              A companhia mantém um Canal de Denúncias independente, com garantia de anonimato, confidencialidade e
              tratativa técnica, reforçando o compromisso com ética e transparência. Casos reportados são analisados de
              forma criteriosa, com investigações conduzidas segundo protocolos formais.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <div className="bg-muted/50 rounded-2xl p-6">
            <h3 className="font-semibold mb-4">Cultura de Integridade</h3>
            <p className="text-muted-foreground mb-4">A cultura de integridade é sustentada por:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {integrityCulture.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Council Competencies */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Competências do Conselho e Desenvolvimento da Alta Liderança</h2>
              <p className="text-muted-foreground">GRI 2-17, 2-18</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-primary" />
                Composição do Conselho (GRI 2-17)
              </h3>
              <p className="text-muted-foreground mb-4">
                A composição do Conselho de Administração reflete a busca por competências técnicas complementares,
                experiência setorial, capacidade analítica e visão estratégica. O processo de nomeação considera
                conhecimento em:
              </p>
              <ul className="space-y-2">
                {[
                  "Engenharia e infraestrutura",
                  "Finanças e tecnologia",
                  "Sustentabilidade",
                  "Gestão pública e regulação",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Programas de Capacitação
              </h3>
              <p className="text-muted-foreground mb-4">
                A Construcap oferece programas estruturados de capacitação e atualização para executivos, abrangendo:
              </p>
              <ul className="space-y-2">
                {councilCompetencies.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={300}>
          <div className="mt-8 bg-card rounded-2xl border border-border p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Avaliação da Alta Gestão (GRI 2-18)
            </h3>
            <p className="text-muted-foreground">
              A avaliação da alta gestão considera desempenho operacional, disciplina financeira, aderência às políticas
              corporativas, qualidade dos resultados entregues e conformidade com a cultura ética da organização. Esse
              processo contínuo reforça a capacidade da liderança para tomar decisões com embasamento técnico e
              alinhadas ao futuro da companhia.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Strategic Axes */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Eixos Estratégicos Corporativos</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A estratégia da Construcap está estruturada em eixos que norteiam as decisões de crescimento, investimentos
            e gestão das operações:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {strategicAxes.map((axis, index) => (
            <AnimatedSection key={axis.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:-translate-y-1 transition-transform group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-bold">{axis.number}</span>
                  </div>
                  <axis.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{axis.title}</h3>
                <p className="text-sm text-muted-foreground">{axis.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </ReportLayout>
  );
};

export default GovernancePage;
