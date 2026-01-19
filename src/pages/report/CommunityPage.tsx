import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Users,
  MessageSquare,
  Phone,
  Building2,
  TreePine,
  Stethoscope,
  HardHat,
  AlertTriangle,
  CheckCircle,
  Heart,
  Megaphone,
  FileText,
  Shield,
  Handshake,
  Target,
  Calendar,
  Car,
} from "lucide-react";
import communityHero from "@/assets/report/community-hero.jpg";

const engagementChannels = [
  {
    icon: Phone,
    title: "Alô Construcap",
    description:
      "Canal independente para denúncias, preocupações, impactos ou desvios percebidos ao longo de obras e operações.",
    details:
      "Todas as manifestações são tratadas com confidencialidade, rastreabilidade e resposta documentada (GRI 2-25; 2-26).",
  },
  {
    icon: MessageSquare,
    title: "Procedimento CC",
    description:
      "Procedimento de Consulta e Comunicação do SIG estabelece formas de recebimento, protocolo, prazos e mecanismos de retorno.",
    details:
      "Define fluxos formais para registro, classificação, encaminhamento e responsabilidades de cada área envolvida.",
  },
  {
    icon: Users,
    title: "Reuniões com Lideranças",
    description: "Reuniões com lideranças comunitárias e representantes locais durante todo o ciclo do contrato.",
    details: "Encontros para alinhamento de expectativas, esclarecimento de dúvidas e coleta de feedbacks.",
  },
  {
    icon: Building2,
    title: "Painéis Informativos",
    description: "Instalação de painéis informativos nas obras com informações de contato e cronograma.",
    details: "Comunicação visual permanente com dados atualizados sobre o empreendimento e canais de atendimento.",
  },
  {
    icon: Megaphone,
    title: "Comunicação Prévia",
    description: "Notificação antecipada sobre início de obras e intervenções de maior impacto.",
    details:
      "Avisos sobre cronogramas, interdições de vias, horários de operação, movimentação de máquinas, ruídos e medidas de mitigação.",
  },
  {
    icon: FileText,
    title: "Visitas Técnicas Guiadas",
    description: "Visitas técnicas guiadas para representantes locais, quando aplicável.",
    details: "Disponibilização de canais de contato e atendimento permanente.",
  },
];

const demandFlowSteps = [
  {
    step: "1",
    title: "Registro",
    description: "Registro detalhado da demanda com data, origem, tipo e relato.",
  },
  {
    step: "2",
    title: "Classificação",
    description: "Categorização: ruído, resíduos, circulação, segurança, impactos ambientais ou socioeconômicos.",
  },
  {
    step: "3",
    title: "Encaminhamento",
    description: "Direcionamento à área responsável: Engenharia, QSMA, Comunicação Social, Jurídico ou Operações.",
  },
  {
    step: "4",
    title: "Análise",
    description: "Análise técnica e definição de tratamento, com prazos e responsáveis.",
  },
  {
    step: "5",
    title: "Resposta",
    description: "Resposta documentada à comunidade.",
  },
  {
    step: "6",
    title: "Monitoramento",
    description: "Registro de evidências para auditoria e monitoramento até o encerramento.",
  },
];

const impactMitigation = [
  {
    impact: "Poeira e Particulados",
    icon: "💨",
    mitigation: "Controle de poeira e particulados através de umidificação, lavagem de rodas, cobertura de caminhões.",
  },
  {
    impact: "Ruído e Vibração",
    icon: "🔊",
    mitigation: "Monitoramento de ruído e vibração com horários de operação ajustados a zonas sensíveis.",
  },
  {
    impact: "Alterações no Trânsito",
    icon: "🚗",
    mitigation:
      "Rotas alternativas de circulação para veículos e pedestres, sinalização reforçada e barreiras de segurança.",
  },
  {
    impact: "Drenagem e Solos",
    icon: "🌊",
    mitigation: "Sistemas de drenagem provisória e estabilização de solos.",
  },
  {
    impact: "Acesso a Serviços",
    icon: "🏪",
    mitigation: "Organização de acessos para serviços essenciais locais.",
  },
];

const unitActions = [
  {
    name: "Urbia",
    icon: TreePine,
    color: "bg-emerald-500",
    description:
      "Promove educação ambiental, ordenamento de uso público e ações de convivência sustentável em parques urbanos e naturais. O diálogo com os visitantes e comunidades do entorno faz parte da rotina da operação.",
  },
  {
    name: "Minas Arena",
    icon: Building2,
    color: "bg-purple-500",
    description:
      "Posiciona o Mineirão como ativo cultural e esportivo que contribui para a economia local, promovendo atividades que movimentam comércio, serviços e turismo na região.",
  },
  {
    name: "Ambicap",
    icon: Car,
    color: "bg-teal-500",
    description:
      "Realiza serviços de zeladoria, manutenção e apoio operacional, que valorizam espaços públicos e melhoram a qualidade de vida urbana.",
  },
  {
    name: "Inova Saúde",
    icon: Stethoscope,
    color: "bg-blue-500",
    description:
      "Atua em unidades públicas de saúde, atendendo populações locais e regionalizadas, fortalecendo o acesso ao cuidado e contribuindo com indicadores sociais de saúde.",
  },
];

const CommunityPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={communityHero}
            alt="Relacionamento com comunidades"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 10</span>
                <span>•</span>
                <span>GRI 413-1; 413-2; 2-29; 2-25</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Relacionamento com Comunidades</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Diálogo transparente, prevenção de impactos, cumprimento de compromissos socioambientais e
                fortalecimento do desenvolvimento local.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Compromisso com as Comunidades</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A relação da Construcap com as comunidades das regiões onde atua é estruturada sobre os princípios de
                  diálogo transparente, prevenção de impactos, cumprimento de compromissos socioambientais e
                  fortalecimento do desenvolvimento local. Em obras de grande porte, operações contínuas e unidades
                  administradas pelo Grupo, o relacionamento comunitário é conduzido de maneira sistemática, com
                  processos formais para registro, comunicação, monitoramento e atendimento de demandas dos públicos de
                  entorno.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A companhia reconhece que suas atividades têm potencial para gerar impactos temporários nas dinâmicas
                  urbanas, ambientais e sociais dos territórios, e, por essa razão, implementa procedimentos orientados
                  pela governança corporativa e pelo Sistema Integrado de Gestão (SIG), assegurando que a interação com
                  as comunidades seja estruturada, ética e mitigadora.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 10.1 Estrutura Institucional */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.1 Estrutura Institucional do Relacionamento</h2>
              <p className="text-muted-foreground">GRI 413-1</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            As diretrizes corporativas adotadas pela Construcap determinam que todo relacionamento com partes
            interessadas externas siga fluxos formais definidos pelo Procedimento de Consulta e Comunicação (CC) do SIG.
            Esta governança garante que a empresa mantenha um fluxo contínuo de escuta ativa e tratamento responsável de
            demandas comunitárias.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagementChannels.map((channel, index) => (
            <AnimatedSection key={channel.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-teal-500/50 transition-colors group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors">
                    <channel.icon className="w-6 h-6 text-teal-500" />
                  </div>
                  <h3 className="font-semibold">{channel.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{channel.description}</p>
                <p className="text-xs text-muted-foreground/70 border-t border-border pt-3">{channel.details}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 10.2 Comunicação Social em Obras */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.2 Comunicação Social em Obras e Operações</h2>
              <p className="text-muted-foreground">GRI 413-1</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              Nas obras da Construcap, especialmente em empreendimentos urbanos e de infraestrutura, a comunicação com a
              comunidade é estruturada antes da mobilização e acompanhada durante todo o ciclo do contrato.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-teal-500" />
                  Informações prévias sobre:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Cronogramas e fases de obra",
                    "Interdições de vias, desvios de tráfego e acessos",
                    "Horários de operação",
                    "Movimentação de máquinas",
                    "Ruídos e vibrações previstos",
                    "Medidas de mitigação",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <HardHat className="w-5 h-5 text-teal-500" />
                  Durante a execução das obras:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Instalação de painéis informativos",
                    "Visitas técnicas guiadas para representantes locais",
                    "Reuniões com lideranças comunitárias",
                    "Notificação prévia de intervenções de maior impacto",
                    "Disponibilização de canais de contato e atendimento",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
              A comunicação estruturada contribui para reduzir incertezas, fortalecer a confiança dos moradores e
              minimizar conflitos decorrentes de transformações urbanas temporárias.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 10.3 Gestão de Impactos */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-teal-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.3 Gestão de Impactos e Medidas Mitigadoras</h2>
              <p className="text-muted-foreground">GRI 413-2</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            As obras e operações da Construcap são submetidas a avaliação prévia de impactos socioambientais conforme
            exigido por normas técnicas e licenciamento ambiental. As medidas mitigadoras estão documentadas no SIG e
            permeiam a rotina das frentes de trabalho.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMitigation.map((item, index) => (
            <AnimatedSection key={item.impact} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold text-white">{item.impact}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-sm text-muted-foreground mt-8 text-center max-w-2xl mx-auto">
            Essas ações buscam garantir que a execução das obras interfira o mínimo possível nas rotinas das comunidades
            do entorno, mitigando transtornos temporários e mantendo níveis adequados de convivência urbana.
          </p>
        </AnimatedSection>
      </section>

      {/* 10.4 Fluxo de Demandas */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.4 Registro, Tratamento e Resposta a Demandas</h2>
              <p className="text-muted-foreground">GRI 413-1</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Toda manifestação comunitária recebida pela Construcap é formalizada e categorizada no fluxo de atendimento
            previsto pelo Procedimento CC. Este processo fortalece a governança social, assegura rastreabilidade e
            permite que lições aprendidas sejam incorporadas em contratos futuros.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demandFlowSteps.map((item, index) => (
            <AnimatedSection key={item.step} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 10.5 Integração Territorial */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.5 Promoção de Desenvolvimento Local e Integração Territorial</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A atuação integrada das controladas e coligadas expande a presença social do Grupo para além das obras,
            posicionando a Construcap como agente relevante no desenvolvimento de territórios urbanos, ambientais e de
            serviços.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {unitActions.map((unit, index) => (
            <AnimatedSection key={unit.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className={`${unit.color} p-4 flex items-center gap-3`}>
                  <unit.icon className="w-6 h-6 text-white" />
                  <h3 className="font-semibold text-white">{unit.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground">{unit.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 10.6 Engajamento de Stakeholders */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">10.6 Engajamento de Stakeholders e Governança Social</h2>
              <p className="text-muted-foreground">GRI 2-29</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              O engajamento com partes interessadas é contínuo, multidisciplinar e baseado em diretrizes corporativas
              que integram:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Consultas estruturadas a órgãos públicos",
                "Atendimento a moradores, comerciantes e usuários do entorno",
                "Comunicação com sindicatos e conselhos de classe",
                "Relacionamento regulatório e institucional",
                "Participação em fóruns e audiências públicas quando demandado por licenciamento",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              O SIG garante que todos os registros sejam auditáveis, permitindo incorporar feedback das comunidades aos
              processos de planejamento e execução.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Conclusão */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-teal-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Modelo de Relacionamento Maduro</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O relacionamento com comunidades é mais do que um requisito de conformidade: é um componente
                  estratégico que sustenta a legitimidade social da Construcap. Em um setor em que a execução física das
                  obras altera dinâmicas locais, a companhia investe em diálogo, prevenção, transparência e resposta
                  responsável, reduzindo impactos negativos, fortalecendo confiança e contribuindo para o
                  desenvolvimento dos territórios onde atua.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  O conjunto de práticas descritas – comunicação social, mecanismos formais de registro, comitês
                  internos, diretrizes do SIG e atuação das empresas do Grupo – evidencia um modelo de relacionamento
                  maduro, institucionalizado e compatível com padrões avançados de responsabilidade social corporativa.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default CommunityPage;
