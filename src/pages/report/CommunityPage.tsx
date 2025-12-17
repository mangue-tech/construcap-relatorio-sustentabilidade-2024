import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Users, MessageSquare, Phone, Building2, TreePine, Stethoscope, HardHat, 
  AlertTriangle, CheckCircle, Heart, Megaphone, FileText, MapPin, Shield,
  UserCheck, Handshake, Target, TrendingUp, Calendar, Award
} from "lucide-react";
import communityHero from "@/assets/report/community-hero.jpg";

const engagementChannels = [
  { 
    icon: Phone, 
    title: "Alô Construcap", 
    description: "Canal independente para denúncias, preocupações, impactos ou desvios percebidos. Confidencial e rastreável.",
    details: "Operado por empresa externa independente, garantindo sigilo e imparcialidade no tratamento das manifestações."
  },
  { 
    icon: MessageSquare, 
    title: "Procedimento CC", 
    description: "Procedimento de Consulta e Comunicação do SIG com formas de recebimento, protocolo e prazos de resposta.",
    details: "Define fluxos formais para registro, análise, encaminhamento e retorno de todas as manifestações recebidas."
  },
  { 
    icon: Users, 
    title: "Reuniões Comunitárias", 
    description: "Reuniões com lideranças comunitárias e representantes locais durante a execução de obras.",
    details: "Encontros periódicos para alinhamento de expectativas, esclarecimento de dúvidas e coleta de feedbacks."
  },
  { 
    icon: Building2, 
    title: "Painéis Informativos", 
    description: "Instalação de painéis informativos nas obras com informações de contato e cronograma.",
    details: "Comunicação visual permanente com dados atualizados sobre o empreendimento e canais de atendimento."
  },
  { 
    icon: Megaphone, 
    title: "Comunicação Prévia", 
    description: "Notificação antecipada sobre início de obras e intervenções de maior impacto.",
    details: "Avisos por carta, panfleto ou reunião antes de atividades que possam afetar a rotina dos moradores."
  },
  { 
    icon: FileText, 
    title: "Documentação Formal", 
    description: "Registro sistemático de todas as interações e compromissos assumidos com a comunidade.",
    details: "Rastreabilidade completa das ações e respostas, permitindo auditoria e melhoria contínua."
  },
];

const communicationPhases = [
  {
    phase: "Pré-Mobilização",
    items: [
      "Mapeamento de partes interessadas e lideranças locais",
      "Identificação de potenciais impactos e vulnerabilidades",
      "Planejamento do cronograma de comunicação",
      "Preparação de materiais informativos"
    ]
  },
  {
    phase: "Mobilização",
    items: [
      "Reuniões de apresentação com a comunidade",
      "Instalação de painéis informativos no canteiro",
      "Distribuição de material institucional",
      "Ativação dos canais de atendimento"
    ]
  },
  {
    phase: "Execução",
    items: [
      "Monitoramento contínuo de impactos",
      "Atendimento às demandas e reclamações",
      "Reuniões periódicas de acompanhamento",
      "Notificação prévia de intervenções críticas"
    ]
  },
  {
    phase: "Desmobilização",
    items: [
      "Comunicação sobre encerramento das atividades",
      "Verificação de pendências e compromissos",
      "Pesquisa de satisfação com a comunidade",
      "Relatório final de relacionamento"
    ]
  }
];

const impactMitigation = [
  { 
    impact: "Ruído e Vibração", 
    icon: "🔊",
    mitigation: "Horários de trabalho controlados (geralmente 7h-17h), monitoramento de níveis sonoros, uso de equipamentos com menor emissão de ruído, barreiras acústicas quando necessário.",
    monitoring: "Medições periódicas com laudo técnico"
  },
  { 
    impact: "Poeira e Material Particulado", 
    icon: "💨",
    mitigation: "Umidificação de vias internas, lavagem de rodas de veículos, cobertura com lonas em caminhões, barreiras físicas (tapumes) em canteiros, varrição mecanizada.",
    monitoring: "Inspeções diárias e registro fotográfico"
  },
  { 
    impact: "Alterações no Trânsito", 
    icon: "🚗",
    mitigation: "Sinalização adequada conforme normas, comunicação prévia sobre interdições, planejamento logístico para minimizar impacto em horários de pico, rotas alternativas.",
    monitoring: "Coordenação com órgãos de trânsito"
  },
  { 
    impact: "Impactos Visuais", 
    icon: "👁️",
    mitigation: "Tapumes com comunicação institucional e visual adequado, limpeza permanente do entorno, paisagismo de recuperação, iluminação apropriada.",
    monitoring: "Verificação semanal de conservação"
  },
  { 
    impact: "Interferência em Serviços", 
    icon: "⚡",
    mitigation: "Coordenação prévia com concessionárias (água, energia, gás), comunicação antecipada sobre interrupções programadas, minimização do tempo de indisponibilidade.",
    monitoring: "Registro de ocorrências e tempos"
  },
  { 
    impact: "Movimentação de Carga", 
    icon: "🚚",
    mitigation: "Planejamento de horários fora do pico, sinalização de entrada/saída de caminhões, orientação a motoristas sobre velocidade e cuidados.",
    monitoring: "Controle de acessos e incidentes"
  },
];

const unitActions = [
  {
    name: "Urbia Parques",
    icon: TreePine,
    color: "bg-emerald-500",
    highlight: "1,8 milhão de visitantes/ano",
    actions: [
      "Programas de educação ambiental para escolas e comunidades do entorno",
      "Voluntariado em conservação e manejo de áreas verdes",
      "Eventos culturais e recreativos abertos ao público",
      "Geração de empregos locais e capacitação de guias e monitores",
      "Trilhas interpretativas e atividades de sensibilização ambiental",
      "Parcerias com universidades para pesquisa e conservação"
    ]
  },
  {
    name: "Inova Saúde",
    icon: Stethoscope,
    color: "bg-blue-500",
    highlight: "100% SUS",
    actions: [
      "Atendimento integral à população via Sistema Único de Saúde",
      "Programas de promoção da saúde e prevenção de doenças",
      "Campanhas de vacinação e rastreamento de doenças",
      "Integração com a rede de atenção primária e especializada",
      "Capacitação de profissionais de saúde da região",
      "Acolhimento humanizado e assistência social aos pacientes"
    ]
  },
  {
    name: "Minas Arena",
    icon: Building2,
    color: "bg-purple-500",
    highlight: "Certificação LEED Platinum",
    actions: [
      "Eventos culturais, esportivos e de entretenimento para a comunidade",
      "Programas de inclusão social e acessibilidade",
      "Geração de empregos diretos e indiretos em dias de evento",
      "Apoio a projetos sociais e esportivos na região metropolitana",
      "Visitas guiadas ao estádio para escolas públicas",
      "Parcerias com entidades do terceiro setor"
    ]
  },
  {
    name: "Obras Construcap",
    icon: HardHat,
    color: "bg-amber-500",
    highlight: "+900 obras entregues",
    actions: [
      "Priorização de contratação de mão de obra local",
      "Programas de capacitação técnica para trabalhadores da região",
      "Implementação rigorosa de medidas de mitigação de impactos",
      "Comunicação permanente e transparente com vizinhança",
      "Manutenção de vias e acessos durante e após as obras",
      "Atendimento e resolução de demandas comunitárias"
    ]
  },
];

const socialInvestments = [
  { category: "Educação e Capacitação", value: "R$ 892 mil", description: "Programas de formação profissional e bolsas de estudo" },
  { category: "Saúde e Bem-estar", value: "R$ 1,2 milhão", description: "Campanhas de saúde, vacinação e prevenção" },
  { category: "Cultura e Esporte", value: "R$ 650 mil", description: "Patrocínio a eventos e projetos culturais" },
  { category: "Meio Ambiente", value: "R$ 480 mil", description: "Educação ambiental e recuperação de áreas" },
];

const communityMetrics = [
  { label: "Manifestações Recebidas", value: "127", description: "em 2024" },
  { label: "Taxa de Resolução", value: "94%", description: "no prazo estabelecido" },
  { label: "Reuniões Comunitárias", value: "48", description: "realizadas no ano" },
  { label: "Municípios Atendidos", value: "15", description: "com presença ativa" },
];

const CommunityPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={communityHero} 
            alt="Relacionamento com comunidades" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 10</span>
                <span>•</span>
                <span>GRI 413-1, 413-2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Relacionamento com Comunidades</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A relação da Construcap com as comunidades é estruturada sobre os princípios de 
                diálogo transparente, prevenção de impactos e fortalecimento do desenvolvimento local.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {communityMetrics.map((metric, index) => (
            <AnimatedSection key={metric.label} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-6 text-center">
                <p className="text-3xl font-bold text-teal-500">{metric.value}</p>
                <p className="font-medium mt-1">{metric.label}</p>
                <p className="text-xs text-muted-foreground">{metric.description}</p>
              </div>
            </AnimatedSection>
          ))}
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
                <p className="text-muted-foreground leading-relaxed">
                  Em obras de grande porte, operações contínuas e unidades administradas pelo Grupo, 
                  o relacionamento comunitário é conduzido de maneira sistemática, com processos formais 
                  para registro, comunicação, monitoramento e atendimento de demandas dos públicos de entorno.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  A companhia reconhece que suas atividades têm potencial para gerar impactos temporários 
                  nas dinâmicas urbanas, ambientais e sociais dos territórios, e implementa procedimentos 
                  orientados pela governança corporativa e pelo Sistema Integrado de Gestão (SIG).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  O relacionamento com comunidades é considerado fator crítico de sucesso para a execução 
                  de projetos, contribuindo para a licença social de operação e para a reputação institucional 
                  do Grupo junto a clientes, investidores e sociedade.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Engagement Structure - GRI 413-1 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">Estrutura de Relacionamento</h2>
              <p className="text-muted-foreground">GRI 413-1</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            As diretrizes corporativas determinam que todo relacionamento com partes interessadas 
            externas siga fluxos formais definidos pelo Procedimento de Consulta e Comunicação, 
            garantindo rastreabilidade, transparência e efetividade nas respostas.
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

      {/* Communication Phases */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">Comunicação Social em Obras</h2>
              <p className="text-muted-foreground">Ciclo completo de engajamento comunitário</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communicationPhases.map((phase, index) => (
            <AnimatedSection key={phase.phase} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className="bg-teal-500 p-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-white">{phase.phase}</h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
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

      {/* Impact Mitigation - GRI 413-2 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-teal-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">Gestão de Impactos e Medidas Mitigadoras</h2>
              <p className="text-muted-foreground">GRI 413-2 - Operações com impactos negativos significativos reais e potenciais</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactMitigation.map((item, index) => (
            <AnimatedSection key={item.impact} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className="bg-gradient-to-r from-teal-600 to-teal-500 p-4 flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold text-white">{item.impact}</h3>
                </div>
                <div className="p-5 space-y-3">
                  <div>
                    <p className="text-xs font-medium text-teal-500 mb-1">Medidas de Mitigação</p>
                    <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs font-medium text-muted-foreground/70">
                      <AlertTriangle className="w-3 h-3 inline mr-1" />
                      {item.monitoring}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Unit Actions */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-8 h-8 text-teal-500" />
            <h2 className="text-2xl font-bold">Ações Sociais das Unidades do Grupo</h2>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6">
          {unitActions.map((unit, index) => (
            <AnimatedSection key={unit.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className={`${unit.color} p-5 flex items-center justify-between`}>
                  <div className="flex items-center gap-3">
                    <unit.icon className="w-7 h-7 text-white" />
                    <h3 className="font-bold text-white text-lg">{unit.name}</h3>
                  </div>
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">{unit.highlight}</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {unit.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Social Investments */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-teal-500" />
            <h2 className="text-2xl font-bold">Investimentos Sociais</h2>
          </div>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialInvestments.map((item, index) => (
            <AnimatedSection key={item.category} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-teal-500/30 transition-colors">
                <p className="text-2xl font-bold text-teal-500 mb-2">{item.value}</p>
                <p className="font-semibold mb-2">{item.category}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        
        <AnimatedSection delay={400}>
          <div className="mt-8 bg-card rounded-2xl border border-border p-6">
            <div className="flex items-start gap-4">
              <Award className="w-10 h-10 text-teal-500 shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Impacto Total em 2024</h3>
                <p className="text-3xl font-bold text-teal-500 mb-2">R$ 3,2 milhões</p>
                <p className="text-sm text-muted-foreground">
                  Investimento total em ações sociais e comunitárias, incluindo projetos próprios, 
                  patrocínios via leis de incentivo e doações diretas para instituições do terceiro setor.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Governance Framework */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="w-8 h-8 text-teal-500" />
              <h2 className="text-2xl font-bold">Governança do Relacionamento Comunitário</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Responsabilidades</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Diretoria de Engenharia: supervisão geral e aprovação de planos de comunicação</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Gerência de Obra: execução e monitoramento das ações no canteiro</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">SSMA: integração com procedimentos de segurança e meio ambiente</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Comunicação Corporativa: apoio em materiais e relacionamento institucional</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Indicadores de Desempenho</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Número de manifestações recebidas e resolvidas por obra</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Tempo médio de resposta às demandas comunitárias</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Satisfação das comunidades em pesquisas de encerramento</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5" />
                    <span className="text-muted-foreground">Ocorrências e não conformidades ambientais reportadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Conclusion */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-gradient-to-r from-teal-500/10 to-emerald-500/10">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 text-center">
            <Heart className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Compromisso com o Desenvolvimento Local</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              O relacionamento com comunidades é pilar estratégico da atuação do Grupo Construcap. 
              Ao integrar diálogo transparente, prevenção de impactos e investimento social, a empresa 
              contribui para o desenvolvimento sustentável dos territórios onde atua, fortalecendo sua 
              licença social de operação e gerando valor compartilhado para todas as partes interessadas.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-teal-500/10 text-teal-500 rounded-full text-sm font-medium">GRI 413-1</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-500 rounded-full text-sm font-medium">GRI 413-2</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-500 rounded-full text-sm font-medium">ODS 11</span>
              <span className="px-4 py-2 bg-teal-500/10 text-teal-500 rounded-full text-sm font-medium">ODS 17</span>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default CommunityPage;