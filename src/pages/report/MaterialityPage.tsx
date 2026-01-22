import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Target,
  Users,
  MessageSquare,
  Building2,
  Heart,
  Leaf,
  Shield,
  Award,
  Stethoscope,
  TreePine,
  Briefcase,
  TrendingUp,
  CheckCircle2,
  ClipboardList,
  BarChart3,
  FileSearch,
  Layers,
  Lightbulb,
  CircleDot,
  ArrowRight,
  Globe,
  Factory,
  Truck,
  BookOpen,
  Phone,
  Mail,
  Megaphone,
  Calendar,
  UserCheck,
  Settings,
  Home,
} from "lucide-react";
import materialityHero from "@/assets/report/materiality-hero.jpg";

// 6.3 - 10 Temas Materiais Prioritários
const materialTopics = [
  {
    number: 1,
    title: "Saúde e Segurança do Trabalho",
    description:
      "Prevenção de acidentes, cultura de segurança, capacitação e gestão de riscos ocupacionais em todas as operações do Grupo.",
    context:
      "Relevante para obras, unidades de saúde, parques e arenas. Abrange colaboradores diretos, terceiros e visitantes.",
    icon: Heart,
    color: "bg-rose-500",
  },
  {
    number: 2,
    title: "Integridade, Ética e Conformidade",
    description:
      "Mecanismos de combate à corrupção, canal de denúncias, due dilligence de integridade e controles internos aplicáveis a todas as unidades.",
    context:
      "Requisito de clientes públicos e privados, além de exigência do ambiente regulatório em que a empresa atua.",
    icon: Shield,
    color: "bg-amber-500",
  },
  {
    number: 3,
    title: "Sustentabilidade e Gestão Ambiental",
    description:
      "Gestão de resíduos, uso eficiente de recursos, conformidade ambiental, certificações ambientais e iniciativas de descarbonização.",
    context: "Tema central em obras, hospitais, parques urbanos e administração de arenas esportivas.",
    icon: Leaf,
    color: "bg-emerald-500",
  },
  {
    number: 4,
    title: "Emissões de Gases de Efeito Estufa",
    description:
      "Inventário de emissões (Escopos 1, 2 e 3), metas de redução, estratégias de mitigação e compensação de carbono.",
    context: "Relevante para obras, parques, arenas e unidades de saúde, orientando metas e inventários de carbono.",
    icon: Target,
    color: "bg-blue-500",
  },
  {
    number: 5,
    title: "Relação com Comunidades",
    description:
      "Impactos sociais de obras, gestão de áreas públicas, engajamento comunitário, investimento social privado e inclusão social.",
    context: "Determinante em obras de grande porte e nos parques urbanos sob gestão da Urbia.",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    number: 6,
    title: "Qualidade, Inovação e Excelência",
    description:
      "Padrões técnicos, engenharia aplicada, eficiência operacional, adoção de novas tecnologias e práticas de melhoria contínua.",
    context: "Essencial para manter competitividade e atender exigências de contratantes públicos e privados.",
    icon: Award,
    color: "bg-cyan-500",
  },
  {
    number: 7,
    title: "Conservação e Manejo de Áreas Naturais",
    description:
      "Conservação ambiental, manejo de trilhas, restauração ecológica, educação ambiental e proteção da biodiversidade.",
    context: "Particularmente relevante para a Urbia, que administra parques naturais e urbanos.",
    icon: TreePine,
    color: "bg-green-500",
  },
  {
    number: 8,
    title: "Experiência do Usuário e Acessibilidade",
    description:
      "Infraestrutura acessível, qualidade de atendimento, inclusão de PCD e qualidade de serviços em equipamentos públicos.",
    context:
      "Relevante para parques, arenas e hospitais, onde a experiência do público é central para o sucesso da operação.",
    icon: Briefcase,
    color: "bg-indigo-500",
  },
  {
    number: 9,
    title: "Cadeia de Suprimentos",
    description:
      "Qualificação de fornecedores, due diligence, requisitos socioambientais, monitoramento e desenvolvimento de parceiros.",
    context: "Crítico para obras de grande porte, onde há milhares de fornecedores e subcontratados.",
    icon: Truck,
    color: "bg-orange-500",
  },
  {
    number: 10,
    title: "Riscos Climáticos e Resiliência",
    description:
      "Adaptação a eventos extremos, continuidade operacional, planejamento de contingência e resiliência de infraestrutura.",
    context:
      "Relevante devido ao aumento de eventos extremos e impactos sobre continuidade operacional em todas as unidades.",
    icon: Globe,
    color: "bg-red-500",
  },
];

// 6.2 - Públicos de Interesse e Engajamento
const publicosDeInteresse = [
  {
    name: "Colaboradores",
    description: "Profissionais próprios e terceiros que atuam em obras, hospitais, parques e arenas.",
    engagement: [
      "Comunicação interna contínua (informativos, murais, reuniões)",
      "Diálogos Diários de Segurança (DDS)",
      "Treinamentos técnicos e comportamentais",
      "Pesquisas de clima organizacional",
      "Programas de saúde e qualidade de vida",
    ],
    icon: Users,
  },
  {
    name: "Clientes e Contratantes",
    description:
      "Governos, empresas privadas e instituições que contratam serviços de engenharia, concessão ou gestão.",
    engagement: [
      "Comitês de obra e reuniões periódicas",
      "Auditorias e inspeções contratuais",
      "Relatórios de acompanhamento e indicadores",
      "Canais de atendimento e ouvidoria",
      "Participação em eventos e feiras setoriais",
    ],
    icon: Building2,
  },
  {
    name: "Órgãos Reguladores e Governo",
    description: "Agências reguladoras, órgãos ambientais, prefeituras e entidades de fiscalização.",
    engagement: [
      "Cumprimento de requisitos legais e normativos",
      "Envio de relatórios obrigatórios",
      "Participação em audiências públicas",
      "Atendimento a fiscalizações e auditorias",
      "Diálogo contínuo sobre licenciamentos",
    ],
    icon: Shield,
  },
  {
    name: "Comunidades do Entorno",
    description: "Moradores, lideranças comunitárias e organizações sociais das áreas de influência.",
    engagement: [
      "Canais de comunicação abertos (telefone, e-mail)",
      "Programas socioambientais locais",
      "Consultas públicas em projetos de grande porte",
      "Ações de educação ambiental",
      "Investimento social privado e apoio a projetos",
    ],
    icon: Heart,
  },
  {
    name: "Visitantes e Usuários de Parques",
    description: "Público que frequenta os parques urbanos e naturais sob gestão da Urbia.",
    engagement: [
      "Pesquisas de satisfação periódicas",
      "Canais de feedback e sugestões",
      "Programas de educação ambiental",
      "Eventos culturais e esportivos",
      "Comunicação por redes sociais",
    ],
    icon: TreePine,
  },
  {
    name: "Pacientes e Familiares",
    description: "Usuários dos serviços de saúde da Inova Saúde (hospitais e clínicas).",
    engagement: [
      "Ouvidoria hospitalar",
      "Pesquisas de experiência do paciente",
      "Comunicação direta com familiares",
      "Comissões de ética e qualidade",
      "Grupos de apoio e orientação",
    ],
    icon: Stethoscope,
  },
  {
    name: "Fornecedores e Parceiros",
    description: "Empresas que fornecem materiais, equipamentos e serviços às operações do Grupo.",
    engagement: [
      "Portal de fornecedores",
      "Avaliação de desempenho periódica",
      "Treinamentos e capacitação",
      "Requisitos contratuais ESG",
      "Diálogo sobre não conformidades",
    ],
    icon: Truck,
  },
  {
    name: "Investidores e Acionistas",
    description: "Sócios, investidores e instituições financeiras com interesse na companhia.",
    engagement: [
      "Relatórios de sustentabilidade",
      "Demonstrações financeiras",
      "Reuniões de apresentação de resultados",
      "Comunicados ao mercado",
      "Atendimento a questionários ESG",
    ],
    icon: TrendingUp,
  },
];

// 6.1 - Metodologia em 4 etapas
const methodologySteps = [
  {
    step: 1,
    title: "Identificação",
    description:
      "Mapeamento de temas potencialmente relevantes a partir de diretrizes GRI, requisitos setoriais, análises de risco e benchmarking.",
    details: [
      "Análise de GRI Standards aplicáveis",
      "Revisão de requisitos regulatórios",
      "Benchmarking com peers do setor",
      "Consulta a análises de risco corporativo",
    ],
    icon: FileSearch,
  },
  {
    step: 2,
    title: "Análise de Impacto",
    description:
      "Avaliação do impacto dos temas sobre estratégia, operações, riscos, continuidade e reputação da organização.",
    details: [
      "Impactos econômicos, ambientais e sociais",
      "Riscos e oportunidades associados",
      "Relevância para a estratégia de negócio",
      "Potencial de criação ou destruição de valor",
    ],
    icon: BarChart3,
  },
  {
    step: 3,
    title: "Engajamento",
    description:
      "Consideração das expectativas e interesses de grupos de interesse estratégicos por meio de mecanismos de escuta.",
    details: [
      "Pesquisas com colaboradores e lideranças",
      "Feedback de clientes e contratantes",
      "Diálogo com comunidades",
      "Análise de demandas de investidores",
    ],
    icon: MessageSquare,
  },
  {
    step: 4,
    title: "Priorização",
    description: "Organização dos temas em matriz de materialidade e validação pela alta administração do Grupo.",
    details: [
      "Construção da matriz de materialidade",
      "Validação pela Diretoria Executiva",
      "Aprovação pelo Conselho de Administração",
      "Comunicação aos grupos de interesse",
    ],
    icon: ClipboardList,
  },
];

// 6.4 - Utilização dos Resultados
const materialityUsage = [
  {
    title: "Planos ESG",
    description: "Orientação para elaboração dos planos de ação ESG de cada unidade de negócio.",
    icon: Layers,
  },
  {
    title: "Políticas Corporativas",
    description: "Definição e atualização de políticas alinhadas aos temas materiais.",
    icon: FileSearch,
  },
  {
    title: "Investimentos",
    description: "Priorização de investimentos em projetos de maior impacto ESG.",
    icon: TrendingUp,
  },
  {
    title: "Gestão de Riscos",
    description: "Integração dos temas materiais à matriz de riscos corporativos.",
    icon: Shield,
  },
  { title: "Tomada de Decisão", description: "Subsídio para decisões operacionais e estratégicas.", icon: Settings },
  {
    title: "Métricas e Indicadores",
    description: "Definição de KPIs para monitoramento do desempenho ESG.",
    icon: BarChart3,
  },
  {
    title: "Metas Climáticas",
    description: "Estruturação de metas de redução de emissões e eficiência.",
    icon: Target,
  },
  {
    title: "Transparência",
    description: "Base para prestação de contas e comunicação com grupos de interesse.",
    icon: BookOpen,
  },
];

// 6.5 - Critérios de Priorização
const prioritizationCriteria = [
  {
    criterion: "Magnitude do Impacto",
    description: "Escala e intensidade dos efeitos econômicos, ambientais e sociais do tema.",
  },
  {
    criterion: "Probabilidade de Ocorrência",
    description: "Frequência e previsibilidade dos eventos relacionados ao tema.",
  },
  { criterion: "Reversibilidade", description: "Possibilidade de remediação ou recuperação dos impactos gerados." },
  {
    criterion: "Relevância para Grupos de Interesse",
    description: "Importância atribuída ao tema pelos principais grupos de interesse.",
  },
  {
    criterion: "Alinhamento Estratégico",
    description: "Conexão do tema com a estratégia e os valores do Grupo Construcap.",
  },
  {
    criterion: "Requisitos Regulatórios",
    description: "Existência de obrigações legais ou normativas relacionadas ao tema.",
  },
];

const MaterialityPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={materialityHero}
            alt="Equipe de trabalho"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 6</span>
                <span>•</span>
                <span>GRI 2-29, 3-1, 3-2, 3-3</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Materialidade e Grupos de Interesse</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O processo de materialidade orienta a priorização dos temas que mais influenciam nossa capacidade de
                criar valor, considerando os impactos sobre pessoas, meio ambiente e economia, além das expectativas dos
                grupos de interesse.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Abordagem de Materialidade (GRI 3-1)</h2>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap adota uma abordagem estruturada para definição de seus temas materiais, seguindo as
              diretrizes do GRI 3: Material Topics 2021. O processo considera tanto os impactos reais e potenciais das
              operações quanto as expectativas dos principais grupos de interesse.
            </p>
            <p className="text-muted-foreground">
              A análise de materialidade é revisada periodicamente para garantir que os temas priorizados reflitam a
              evolução do contexto de negócio, as mudanças regulatórias e as novas demandas de grupos de interesse. O
              resultado orienta a estratégia ESG, a definição de indicadores e a elaboração deste relatório.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Methodology Steps - 6.1 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <ClipboardList className="w-8 h-8 text-indigo-500" />
            <div>
              <h2 className="text-2xl font-bold">Metodologia do Processo de Materialidade</h2>
              <p className="text-muted-foreground">GRI 3-1 | Processo estruturado em quatro etapas</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {methodologySteps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.step}</span>
                  </div>
                  <item.icon className="w-6 h-6 text-indigo-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CircleDot className="w-3 h-3 mt-0.5 text-indigo-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Prioritization Criteria - 6.5 */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Critérios de Priorização</h2>
          <p className="text-muted-foreground mb-8">
            A priorização dos temas materiais considera múltiplos critérios que permitem avaliar a relevância de cada
            tema para o Grupo e seus grupos de interesse.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prioritizationCriteria.map((item, index) => (
            <AnimatedSection key={item.criterion} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-5 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                  <h3 className="font-semibold">{item.criterion}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Públicos de Interesse - 6.2 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="w-8 h-8 text-indigo-500" />
            <div>
              <h2 className="text-2xl font-bold">Engajamento com Públicos de Interesse</h2>
              <p className="text-muted-foreground">GRI 2-29 | Partes interessadas e mecanismos de escuta</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            O Grupo Construcap mantém relacionamento ativo com diversos públicos de interesse, utilizando mecanismos
            específicos de engajamento para cada público. Esse diálogo contínuo alimenta o processo de materialidade e
            orienta a gestão de impactos.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {publicosDeInteresse.map((publico, index) => (
            <AnimatedSection key={publico.name} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-indigo-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                    <publico.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <div>
                    <h3 className="font-bold">{publico.name}</h3>
                    <p className="text-xs text-muted-foreground">{publico.description}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs font-medium text-muted-foreground mb-2">Mecanismos de Engajamento:</p>
                  <ul className="space-y-1.5">
                    {publico.engagement.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-3 h-3 mt-1 text-indigo-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Material Topics - 6.3 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-indigo-500" />
            <div>
              <h2 className="text-2xl font-bold">Temas Materiais Prioritários</h2>
              <p className="text-muted-foreground">GRI 3-2 | 10 temas que orientam a estratégia ESG</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            O processo de materialidade consolidou um conjunto de 10 temas materiais que refletem a relevância
            estratégica e operacional do Grupo Construcap, considerando os impactos sobre economia, meio ambiente e
            sociedade.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {materialTopics.map((topic, index) => (
            <AnimatedSection key={topic.title} delay={index * 50}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-indigo-500/30 transition-all hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl ${topic.color} flex items-center justify-center flex-shrink-0`}>
                    <topic.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm px-3 py-1 rounded-full bg-secondary text-muted-foreground font-medium">
                        #{topic.number}
                      </span>
                      <h3 className="font-bold text-lg">{topic.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-2">{topic.description}</p>
                    <p className="text-sm text-muted-foreground/80 italic">{topic.context}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Usage of Materiality Results - 6.4 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-indigo-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-8 h-8 text-indigo-500" />
            <div>
              <h2 className="text-2xl font-bold">Utilização dos Resultados de Materialidade</h2>
              <p className="text-muted-foreground">GRI 3-3 | Integração à gestão e tomada de decisão</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            Os temas materiais não são apenas reportados — eles orientam decisões estratégicas e operacionais em todas
            as unidades do Grupo Construcap.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {materialityUsage.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-5 h-full hover:border-indigo-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-indigo-500" />
                </div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Governance of Materiality */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Governança do Processo de Materialidade</h2>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-indigo-500" />
                  Responsabilidades
                </h3>
                <ul className="space-y-3">
                  {[
                    "Conselho de Administração: aprovação final dos temas materiais",
                    "Diretoria Executiva: validação e integração à estratégia",
                    "Área de Sustentabilidade: coordenação do processo",
                    "Unidades de Negócio: implementação e monitoramento",
                    "Compliance: verificação de aderência a requisitos",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-500" />
                  Ciclo de Revisão
                </h3>
                <ul className="space-y-3">
                  {[
                    "Revisão anual dos temas materiais",
                    "Atualização mediante mudanças significativas de contexto",
                    "Consideração de novos requisitos regulatórios",
                    "Incorporação de feedback de grupos de interesse",
                    "Alinhamento com melhores práticas setoriais",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CircleDot className="w-4 h-4 mt-0.5 text-indigo-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Connection to Report */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Conexão com Este Relatório</h2>
            <p className="text-muted-foreground mb-6">
              Cada tema material identificado é abordado em seções específicas deste relatório, com indicadores, metas e
              iniciativas relacionadas. A estrutura do relatório reflete a priorização definida pela matriz de
              materialidade.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { section: "Desempenho Econômico", topics: "Temas 2, 6, 9" },
                { section: "Desempenho Ambiental", topics: "Temas 3, 4, 7, 10" },
                { section: "Desempenho Social", topics: "Temas 1, 5, 8" },
                { section: "Governança", topics: "Temas 2, 9" },
                { section: "Comunidades", topics: "Temas 5, 7, 8" },
              ].map((item, i) => (
                <div key={i} className="bg-secondary/50 rounded-lg p-4 text-center">
                  <p className="font-semibold text-sm">{item.section}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.topics}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default MaterialityPage;
