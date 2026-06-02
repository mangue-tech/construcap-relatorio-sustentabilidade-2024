import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Shield,
  FileText,
  Phone,
  Search,
  Users,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Lock,
  Scale,
  Gavel,
  Building2,
  Stethoscope,
  TreePine,
  Factory,
  ShieldCheck,
  UserCheck,
  RefreshCw,
  ClipboardCheck,
  GraduationCap,
  Mail,
  Globe,
  Clock,
  Eye,
  FileWarning,
  Wrench,
  Briefcase,
} from "lucide-react";
import complianceHero from "@/assets/report/compliance-hero.jpg";

const codeOfConductTopics = [
  "Regras de integridade pessoal e profissional",
  "Prevenção a corrupção, fraude e favorecimento indevido",
  "Conduta em obras, contratos e relacionamento comercial",
  "Interação com agentes públicos",
  "Responsabilidade no uso e tratamento de dados",
  "Respeito aos direitos humanos e diversidade",
  "Proibição de assédio e discriminação",
  "Salvaguardas para conflitos de interesse",
];

const compliancePolicies = [
  { title: "Anticorrupção", icon: Shield, description: "Diretrizes para prevenção e combate à corrupção" },
  {
    title: "Brindes, Presentes e Hospitalidades",
    icon: FileText,
    description: "Regras para recebimento e oferecimento",
  },
  { title: "Interação com o Setor Público", icon: Users, description: "Conduta em relacionamentos governamentais" },
  {
    title: "Conferência e aprovação de contratos",
    icon: CheckCircle,
    description: "Fluxos de aprovação e verificação",
  },
  {
    title: "Regras de integridade em compras e suprimentos e contratação de terceiros",
    icon: Search,
    description: "Diretrizes para aquisições éticas",
  },
  {
    title: "Normas de conduta em obras e ambientes críticos",
    icon: AlertTriangle,
    description: "Padrões específicos para canteiros",
  },
];

const dueDiligenceItems = [
  "Verificação reputacional e análise de integridade",
  "Checagem fiscal, trabalhista e jurídica",
  "Conformidade socioambiental",
  "Histórico de penalidades, sanções ou litígios relevantes",
  "Aderência ao Código de Conduta",
  "Exigência de comprovações documentais",
];

const trainingTopics = [
  { topic: "Princípios do Código de Conduta", icon: BookOpen },
  { topic: "Diretrizes anticorrupção", icon: Shield },
  { topic: "Relacionamento ético com clientes e agentes públicos", icon: Users },
  { topic: "Integridade em contratações e suprimentos", icon: ClipboardCheck },
  { topic: "Condutas proibidas e situações de risco", icon: AlertTriangle },
  { topic: "Privacidade e proteção de dados pessoais", icon: Lock },
  { topic: "Direitos humanos, igualdade e prevenção ao assédio", icon: UserCheck },
];

const channelFeatures = [
  { icon: Lock, text: "Garante anonimato e confidencialidade" },
  { icon: Clock, text: "Funciona 24 horas por dia e 7 dias por semana" },
  { icon: Users, text: "Operado por empresa externa especializada" },
  { icon: Phone, text: "Acesso por ligação gratuita" },
  { icon: Globe, text: "Acesso por site e app" },
  { icon: Mail, text: "Acesso por e-mail" },
  { icon: FileText, text: "Protocolo formal de registro e encaminhamento" },
  { icon: ShieldCheck, text: "Proteção contra retaliação" },
];

const regulatoryCompliance = [
  {
    area: "Segurança e Saúde no Trabalho",
    icon: UserCheck,
    description: "Legislação de SST e normas regulamentadoras",
  },
  { area: "Engenharia e Construção Civil", icon: Building2, description: "Normas técnicas e padrões de engenharia" },
  { area: "Concessões e Gestão de Parques", icon: TreePine, description: "Regulamentações específicas de concessões" },
  { area: "Legislação Sanitária", icon: Stethoscope, description: "Qualidade aplicável a unidades hospitalares" },
  { area: "Operação de Arenas Esportivas", icon: Factory, description: "Exigências específicas de eventos" },
  { area: "Compromissos Ambientais", icon: Scale, description: "Regras de licenciamento ambiental" },
];

const correctiveActions = [
  "Reforço de políticas e procedimentos",
  "Treinamentos específicos para áreas envolvidas",
  "Alteração de fluxos operacionais e de aprovação",
  "Readequação de contratos",
  "Ajustes de controles internos",
  "Responsabilização disciplinar quando aplicável",
];

const trainingAudiences = [
  { audience: "Obras", icon: Building2 },
  { audience: "Áreas Corporativas", icon: Briefcase },
  { audience: "Hospitais", icon: Stethoscope },
  { audience: "Parques", icon: TreePine },
  { audience: "Arenas", icon: Factory },
];

const CompliancePage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={complianceHero}
            alt="Canteiro de obras Construcap"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 4</span>
                <span>•</span>
                <span>GRI 2-14, 2-15, 2-16, 2-23, 2-24</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Integridade e Conformidade</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A integridade é base do posicionamento institucional da Construcap. O Programa de Integridade garante
                que todas as atividades sejam conduzidas com disciplina, legalidade e transparência.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-xl font-bold mb-4">4.1 Sistema de Integridade e Conformidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              A Construcap adota um sistema de integridade estruturado para prevenir, detectar e responder a desvios
              éticos, ilícitos e inconformidades operacionais. O Programa de Integridade combina{" "}
              <strong className="text-foreground">políticas corporativas</strong>,
              <strong className="text-foreground"> controles internos</strong>,
              <strong className="text-foreground"> canal de denúncias independente</strong>, processos de due diligence,
              monitoramento contínuo e treinamentos regulares.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              O objetivo central é assegurar que todas as atividades — em obras, operações, contratos, relacionamentos
              institucionais e processos administrativos — sejam conduzidas com disciplina, legalidade e transparência.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Code of Conduct */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">4.2 Código de Conduta</h2>
                <p className="text-sm text-muted-foreground">GRI 2-23</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              O Código de Conduta da Construcap estabelece diretrizes claras para comportamentos aceitáveis e não
              aceitáveis dentro da organização. Ele é vinculante para todos os níveis hierárquicos e se estende a
              terceiros relacionados: colaboradores, consultores, fornecedores e demais públicos.
            </p>
            <div className="bg-card rounded-xl border border-border p-4 mt-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Abrangência:</strong> O documento é referência obrigatória para
                decisões cotidianas, dilemas éticos e gestão de riscos de conduta.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4">Conteúdo abrangido:</h3>
              <ul className="space-y-3">
                {codeOfConductTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance System */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">4.3 Programa de Integridade e Controles Internos</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A estrutura do Programa de Integridade concentra-se em prevenção, monitoramento e resposta. Ela é composta
            por políticas, procedimentos, instâncias de governança e instrumentos de verificação continuamente
            aprimorados. (GRI 2-15)
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {compliancePolicies.map((policy, index) => (
            <AnimatedSection key={policy.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-amber-500/50 transition-colors h-full">
                <policy.icon className="w-8 h-8 text-amber-500 mb-3" />
                <h3 className="font-medium mb-2">{policy.title}</h3>
                <p className="text-sm text-muted-foreground">{policy.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Due Diligence */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-amber-950/10">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-8 h-8 text-amber-500" />
              <div>
                <h2 className="text-2xl font-bold">Due Diligence de Terceiros</h2>
                <p className="text-sm text-muted-foreground">Avaliação de Integridade</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              A Construcap aplica processos de due diligence antes da contratação e durante o relacionamento com
              fornecedores, prestadores de serviços, consultores, parceiros operacionais e subcontratados.
            </p>
            <p className="text-muted-foreground mb-4">
              A qualificação de terceiros visa mitigar riscos de integridade, reputacionais e contratuais. O processo é
              conduzido pela área de compliance em conjunto com suprimentos e jurídico.
            </p>
            <div className="bg-card rounded-xl border border-border p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Monitoramento:</strong> Contratos considerados sensíveis contam com
                monitoramento adicional. Todos os contratos possuem cláusulas específicas de integridade, assegurando
                que terceiros atuem segundo os mesmos padrões aplicados internamente.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4">A avaliação inclui:</h3>
              <ul className="space-y-3">
                {dueDiligenceItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-amber-600">{index + 1}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Whistleblower Channel */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <div className="bg-amber-500 p-6">
              <div className="flex items-center gap-4">
                <Phone className="w-10 h-10 text-white" />
                <div>
                  <h2 className="text-2xl font-bold text-white">4.4 Canal de Denúncias e Mecanismos de Investigação</h2>
                  <p className="text-amber-100">GRI 2-16</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-muted-foreground mb-6">
                A companhia mantém um Canal de Denúncias independente, acessível a colaboradores, comunidades,
                fornecedores e demais públicos de interesse. O canal:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {channelFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                    <item.icon className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-amber-500" />
                    Análise e Investigação
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Todas as denúncias são analisadas tecnicamente, com foco em materialidade, evidências e risco
                    envolvido. Quando necessário, investigações internas são conduzidas em conjunto por compliance,
                    jurídico e auditoria, seguindo metodologia estruturada. Dependendo da relevância e especificidade
                    terceiros podem ser contratados para suportar as investigações, por exemplo, análises forenses.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <FileWarning className="w-4 h-4 text-amber-500" />
                    Tratamento de Casos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Os casos confirmados resultam em medidas disciplinares, melhorias de controle, revisão de processos
                    e comunicação à alta administração. Relatórios consolidados são apresentados periodicamente às
                    instâncias de governança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Whistleblower Protection */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">4.5 Proteção ao Denunciante e Prevenção à Retaliação</h2>
              <p className="text-sm text-muted-foreground">GRI 2-16</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-3">Políticas de Proteção</h3>
              <p className="text-muted-foreground">
                A Construcap possui políticas formais que proíbem qualquer forma de retaliação contra indivíduos que, de
                boa-fé, reportem situações de risco, suspeitas de irregularidade ou descumprimento de normativos.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-3">Salvaguardas</h3>
              <p className="text-muted-foreground">
                A companhia monitora casos sensíveis e garante salvaguardas para colaboradores envolvidos em denúncias,
                preservando sua integridade física, psicológica e profissional.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Training */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">4.6 Capacitação e Cultura de Integridade</h2>
              <p className="text-sm text-muted-foreground">GRI 2-23</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-6 max-w-4xl">
            A disseminação da cultura de integridade é sustentada por programas permanentes de treinamento e
            capacitação. Os conteúdos são adaptados para diferentes públicos:
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-3 mb-8">
            {trainingAudiences.map((item, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full">
                <item.icon className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">{item.audience}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-sm font-medium text-muted-foreground mb-4">Os treinamentos incluem:</p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trainingTopics.map((item, index) => (
            <AnimatedSection key={item.topic} delay={index * 50 + 250}>
              <div className="bg-card rounded-xl border border-border p-4 h-full flex items-start gap-3">
                <item.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{item.topic}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-6 p-4 bg-muted/50 rounded-xl">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Formatos:</strong> Treinamentos periódicos, trilhas on-line e
              materiais de apoio asseguram atualização contínua dos colaboradores.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-amber-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Gavel className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold">4.7 Conformidade Regulatória e Contratual</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap adota processos estruturados para assegurar aderência às normas aplicáveis aos segmentos em que
            atua:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulatoryCompliance.map((item, index) => (
            <AnimatedSection key={item.area} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <item.icon className="w-8 h-8 text-amber-500 mb-3" />
                <h3 className="font-semibold mb-2">{item.area}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-8 bg-card rounded-xl border border-border p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Verificação:</strong> As práticas de conformidade são avaliadas por
              auditorias internas e externas, revisões técnicas e verificações de campo.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Corrective Actions */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <RefreshCw className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">4.8 Postura Responsiva e Ações Corretivas</h2>
              <p className="text-sm text-muted-foreground">GRI 2-24</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Quando identificados desvios, inconformidades ou fragilidades de controle, a companhia implementa medidas
            corretivas estruturadas:
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {correctiveActions.map((action, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-4 flex items-start gap-3">
                <Wrench className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{action}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-8 bg-amber-500/10 rounded-2xl border border-amber-500/20 p-6">
            <p className="text-muted-foreground">
              Esse ciclo contínuo de <strong className="text-foreground">prevenção, detecção e correção</strong>{" "}
              sustenta um ambiente organizacional íntegro, confiável e orientado pelas melhores práticas de compliance.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default CompliancePage;
