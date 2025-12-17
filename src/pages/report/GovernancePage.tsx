import ReportNavbar from "@/components/report/ReportNavbar";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Shield, Users, Target, BookOpen, Scale, Eye, TrendingUp, CheckCircle } from "lucide-react";

const governanceStructure = [
  {
    title: "Conselho de Administração",
    description: "Órgão máximo de deliberação estratégica. Define diretrizes de longo prazo, supervisiona a Diretoria Executiva, aprova políticas corporativas, acompanha resultados e avalia riscos estruturais do negócio.",
    responsibilities: [
      "Orientar o posicionamento estratégico das unidades de negócio",
      "Supervisionar indicadores de saúde financeira e performance operacional",
      "Revisar e aprovar políticas de integridade, ética e conformidade",
      "Acompanhar riscos relevantes e impactos de longo prazo",
      "Monitorar o desempenho da alta liderança",
      "Deliberar sobre investimentos e expansão de operações"
    ]
  },
  {
    title: "Diretoria Executiva",
    description: "Liderada pelo CEO Roberto Capobianco, é responsável pela gestão do dia a dia da companhia. Atua na execução das estratégias aprovadas pelo Conselho e na liderança sobre processos críticos.",
    responsibilities: [
      "Execução das estratégias aprovadas pelo Conselho",
      "Gestão operacional das unidades de negócio",
      "Promoção de práticas de segurança operacional e qualidade",
      "Liderança sobre integridade e sustentabilidade"
    ]
  }
];

const policies = [
  "Política de Integridade e Compliance",
  "Política de Prevenção à Corrupção",
  "Política de Segurança, Saúde e Meio Ambiente",
  "Política de Contratos, Compras e Suprimentos",
  "Política de Riscos e Controles Internos",
  "Política de Relacionamento com Stakeholders",
  "Política de Privacidade e Proteção de Dados",
  "Normas técnicas de qualidade e engenharia"
];

const strategicAxes = [
  { icon: Shield, title: "Segurança como valor inegociável", description: "Priorização absoluta da proteção à vida, padrões rigorosos de prevenção e fortalecimento contínuo da cultura de segurança." },
  { icon: Scale, title: "Integridade e conformidade", description: "Adoção sistemática de práticas éticas, políticas de prevenção a riscos e processos robustos de governança." },
  { icon: Target, title: "Excelência operacional", description: "Implementação de padrões técnicos elevados, inovação aplicada e gestão de qualidade." },
  { icon: TrendingUp, title: "Sustentabilidade", description: "Integração de práticas ambientais, sociais e climáticas ao planejamento e à gestão dos impactos." },
  { icon: Users, title: "Desenvolvimento de pessoas", description: "Promoção de capacidades técnicas, liderança qualificada e ambiente de trabalho ético." },
  { icon: Eye, title: "Diversificação e resiliência", description: "Atuação integrada em múltiplos setores, assegurando estabilidade e crescimento sustentável." },
];

const GovernancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReportNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-purple-950/20 to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Capítulo 3</span>
              <span>•</span>
              <span>GRI 2-9, 2-10, 2-11, 2-12, 2-13, 2-17, 2-18</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Estratégia e Governança</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A estratégia corporativa do Grupo Construcap reflete a combinação de tradição, 
              visão de longo prazo e capacidade de adaptação a um ambiente em constante transformação.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-8">
              <p className="text-muted-foreground leading-relaxed">
                Sustentado por mais de oito décadas de atuação, o grupo consolida-se como uma 
                plataforma integrada de engenharia, infraestrutura e serviços essenciais, com 
                um modelo de governança que privilegia <strong className="text-foreground">transparência</strong>, 
                <strong className="text-foreground"> diligência</strong>, <strong className="text-foreground">integridade</strong>, 
                gestão robusta de riscos e execução técnica de alta performance.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                O compromisso com a criação de valor compartilhado orienta todas as decisões 
                corporativas, reforçando a responsabilidade da empresa com colaboradores, 
                clientes, parceiros, governos, comunidades e com o desenvolvimento do país.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Modelo de Governança Corporativa</h2>
            <p className="text-muted-foreground mb-8">
              O sistema de governança da Construcap é estruturado para assegurar clareza de papéis, 
              eficiência no processo decisório e supervisão contínua das operações. (GRI 2-9, 2-10, 2-11)
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {governanceStructure.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 150}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                  <div className="bg-purple-500 p-4">
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <h4 className="font-medium text-sm mb-3">Responsabilidades:</h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Diretrizes e Políticas Corporativas</h2>
            <p className="text-muted-foreground mb-8">
              A Construcap possui um conjunto abrangente de políticas corporativas que orientam 
              sua atuação em temas estratégicos. (GRI 2-12, 2-13)
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {policies.map((policy, index) => (
              <AnimatedSection key={policy} delay={index * 50}>
                <div className="bg-card rounded-xl border border-border p-4 flex items-center gap-3 hover:border-purple-500/50 transition-colors">
                  <BookOpen className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="text-sm">{policy}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Axes */}
      <section className="py-16 bg-purple-950/10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Eixos Estratégicos Corporativos</h2>
            <p className="text-muted-foreground mb-8">
              A estratégia da Construcap está estruturada em eixos que norteiam as decisões 
              de crescimento, investimentos e gestão das operações.
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {strategicAxes.map((axis, index) => (
              <AnimatedSection key={axis.title} delay={index * 100}>
                <div className="bg-card rounded-2xl border border-border p-6 h-full hover:-translate-y-1 transition-transform">
                  <axis.icon className="w-10 h-10 text-purple-500 mb-4" />
                  <h3 className="font-semibold mb-2">{axis.title}</h3>
                  <p className="text-sm text-muted-foreground">{axis.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Supervision */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Processos de Supervisão Estratégica</h2>
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-muted-foreground mb-4">
                O Conselho e a Diretoria monitoram continuamente a execução das políticas corporativas por meio de:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Comitês internos e instâncias técnicas de deliberação",
                  "Análises periódicas de desempenho e riscos",
                  "Auditorias internas e externas",
                  "Ciclos de planejamento e revisão estratégica",
                  "Mecanismos formais de reporte e transparência",
                  "Avaliação de impactos socioambientais e reputacionais"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default GovernancePage;