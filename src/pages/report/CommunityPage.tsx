import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Users, MessageSquare, Phone, Building2, TreePine, Stethoscope, HardHat, AlertTriangle, CheckCircle, Heart } from "lucide-react";
import communityHero from "@/assets/report/community-hero.jpg";

const engagementChannels = [
  { icon: Phone, title: "Alô Construcap", description: "Canal independente para denúncias, preocupações, impactos ou desvios percebidos. Confidencial e rastreável." },
  { icon: MessageSquare, title: "Procedimento CC", description: "Procedimento de Consulta e Comunicação do SIG com formas de recebimento, protocolo e prazos de resposta." },
  { icon: Users, title: "Reuniões Comunitárias", description: "Reuniões com lideranças comunitárias e representantes locais durante a execução de obras." },
  { icon: Building2, title: "Painéis Informativos", description: "Instalação de painéis informativos nas obras com informações de contato e cronograma." },
];

const communicationItems = [
  "Informações prévias sobre início e duração das obras",
  "Instalação de painéis informativos",
  "Visitas técnicas guiadas para representantes locais",
  "Reuniões com lideranças comunitárias",
  "Notificação prévia de intervenções de maior impacto",
  "Disponibilização de canais de contato e atendimento"
];

const impactMitigation = [
  { impact: "Ruído e vibração", mitigation: "Horários de trabalho controlados, monitoramento de níveis sonoros, uso de equipamentos com menor emissão de ruído." },
  { impact: "Poeira e material particulado", mitigation: "Umidificação de vias, lavagem de rodas, lonas em caminhões, barreiras físicas em canteiros." },
  { impact: "Alterações no trânsito", mitigation: "Sinalização adequada, comunicação prévia, planejamento logístico para minimizar impacto em horários de pico." },
  { impact: "Impactos visuais e paisagísticos", mitigation: "Tapumes com comunicação institucional, limpeza permanente do entorno, paisagismo de recuperação." },
];

const unitActions = [
  {
    name: "Urbia Parques",
    icon: TreePine,
    color: "bg-emerald-500",
    actions: [
      "Programas de educação ambiental para escolas e comunidades",
      "Voluntariado em conservação e manejo",
      "Eventos culturais e recreativos abertos ao público",
      "Geração de empregos locais e capacitação de guias"
    ]
  },
  {
    name: "Inova Saúde",
    icon: Stethoscope,
    color: "bg-blue-500",
    actions: [
      "Atendimento à população via SUS",
      "Programas de promoção da saúde",
      "Campanhas de vacinação e prevenção",
      "Integração com a rede de saúde local"
    ]
  },
  {
    name: "Minas Arena",
    icon: Building2,
    color: "bg-purple-500",
    actions: [
      "Eventos culturais e esportivos para a comunidade",
      "Programas de inclusão social",
      "Geração de empregos em dias de evento",
      "Apoio a projetos sociais locais"
    ]
  },
  {
    name: "Obras",
    icon: HardHat,
    color: "bg-amber-500",
    actions: [
      "Contratação de mão de obra local",
      "Capacitação técnica de trabalhadores da região",
      "Programas de mitigação de impactos",
      "Comunicação permanente com vizinhança"
    ]
  },
];

const CommunityPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={communityHero} 
            alt="Hospital Inova Saúde" 
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

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
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
          </div>
        </AnimatedSection>
      </section>

      {/* Engagement Channels */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Estrutura de Relacionamento</h2>
          <p className="text-muted-foreground mb-8">
            As diretrizes corporativas determinam que todo relacionamento com partes interessadas 
            externas siga fluxos formais definidos pelo Procedimento de Consulta e Comunicação. (GRI 413-1)
          </p>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {engagementChannels.map((channel, index) => (
            <AnimatedSection key={channel.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-teal-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                    <channel.icon className="w-5 h-5 text-teal-500" />
                  </div>
                  <h3 className="font-semibold">{channel.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{channel.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Communication in Works */}
      <section className="py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <HardHat className="w-8 h-8 text-teal-500" />
              <h2 className="text-2xl font-bold">Comunicação Social em Obras</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Nas obras da Construcap, especialmente em empreendimentos urbanos e de infraestrutura, 
              a comunicação com a comunidade é estruturada antes da mobilização e acompanhada durante 
              todo o ciclo do contrato. (GRI 413-1)
            </p>
            <p className="text-sm text-muted-foreground">
              A comunicação estruturada contribui para reduzir incertezas, fortalecer a confiança 
              dos moradores e minimizar conflitos decorrentes de transformações urbanas temporárias.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4">Ações de comunicação:</h3>
              <ul className="space-y-3">
                {communicationItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Impact Mitigation */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-teal-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-8 h-8 text-teal-500" />
            <div>
              <h2 className="text-2xl font-bold">Gestão de Impactos e Medidas Mitigadoras</h2>
              <p className="text-muted-foreground">GRI 413-2</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6">
          {impactMitigation.map((item, index) => (
            <AnimatedSection key={item.impact} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="bg-teal-500 p-4">
                  <h3 className="font-semibold text-white">{item.impact}</h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Unit Actions */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Ações Sociais das Unidades do Grupo</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-6">
          {unitActions.map((unit, index) => (
            <AnimatedSection key={unit.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden h-full">
                <div className={`${unit.color} p-4 flex items-center gap-3`}>
                  <unit.icon className="w-6 h-6 text-white" />
                  <h3 className="font-semibold text-white">{unit.name}</h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {unit.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Heart className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
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

      {/* Conclusion */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 text-center">
            <Heart className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O desempenho social da Construcap demonstra um equilíbrio entre escala operacional, 
              rigor técnico, governança e respeito às pessoas. O Grupo incorpora responsabilidade 
              social como eixo estratégico de sua atuação.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default CommunityPage;
