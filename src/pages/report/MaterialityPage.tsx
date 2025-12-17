import ReportNavbar from "@/components/report/ReportNavbar";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Target, Users, MessageSquare, Building2, Heart, Leaf, Shield, Award, Stethoscope, TreePine, Briefcase, TrendingUp } from "lucide-react";

const materialTopics = [
  { number: 1, title: "Saúde e Segurança do Trabalho", description: "Prevenção de acidentes, cultura de segurança, capacitação e gestão de riscos ocupacionais.", icon: Heart, color: "bg-rose-500" },
  { number: 2, title: "Integridade, Ética e Conformidade", description: "Mecanismos de compliance, combate à corrupção, canal de denúncias e controles internos.", icon: Shield, color: "bg-amber-500" },
  { number: 3, title: "Sustentabilidade e Gestão Ambiental", description: "Gestão de resíduos, uso eficiente de recursos, conformidade ambiental e descarbonização.", icon: Leaf, color: "bg-emerald-500" },
  { number: 4, title: "Emissões de Gases de Efeito Estufa", description: "Relevante para obras, parques, arenas e unidades de saúde, orientando metas e inventários.", icon: Target, color: "bg-blue-500" },
  { number: 5, title: "Relação com Comunidades", description: "Impactos sociais de obras, gestão de áreas públicas, engajamento comunitário e inclusão social.", icon: Users, color: "bg-purple-500" },
  { number: 6, title: "Qualidade, Inovação e Excelência", description: "Padrões técnicos, engenharia aplicada, eficiência operacional e tecnologia.", icon: Award, color: "bg-cyan-500" },
  { number: 7, title: "Conservação e Manejo de Áreas Naturais", description: "Conservação ambiental, manejo de trilhas, educação ambiental e proteção da biodiversidade.", icon: TreePine, color: "bg-green-500" },
  { number: 8, title: "Experiência do Usuário e Acessibilidade", description: "Infraestrutura, atendimento, inclusão e qualidade de serviços em parques, arenas e hospitais.", icon: Briefcase, color: "bg-indigo-500" },
  { number: 9, title: "Cadeia de Suprimentos", description: "Qualificação, due diligence, conformidade, desempenho e requisitos socioambientais.", icon: TrendingUp, color: "bg-orange-500" },
  { number: 10, title: "Riscos Climáticos e Resiliência", description: "Relevante devido ao aumento de eventos extremos e impactos sobre continuidade operacional.", icon: Target, color: "bg-red-500" },
];

const stakeholders = [
  {
    name: "Colaboradores",
    engagement: "Comunicação interna contínua, treinamentos de segurança, capacitação técnica, programas de saúde e qualidade de vida.",
    icon: Users
  },
  {
    name: "Clientes e Contratantes",
    engagement: "Comitês de obra, reuniões técnicas, auditorias, relatórios de conformidade e acompanhamento contratual.",
    icon: Building2
  },
  {
    name: "Órgãos Reguladores",
    engagement: "Atendimento a requisitos técnicos, cumprimento de legislações, auditorias e envio de informações obrigatórias.",
    icon: Shield
  },
  {
    name: "Comunidades do Entorno",
    engagement: "Canais de comunicação, programas socioambientais, eventos comunitários, consultas públicas e ações educativas.",
    icon: Heart
  },
  {
    name: "Visitantes e Usuários",
    engagement: "Feedback sobre experiência, segurança, acessibilidade, qualidade dos serviços e conservação ambiental.",
    icon: TreePine
  },
  {
    name: "Pacientes e Familiares",
    engagement: "Ouvidoria, avaliações de experiência, comissões clínicas e comunicação direta com familiares.",
    icon: Stethoscope
  },
];

const MaterialityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReportNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-indigo-950/20 to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Capítulo 6</span>
              <span>•</span>
              <span>GRI 2-29, 3-1, 3-2, 3-3</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Materialidade e Stakeholders</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              O processo de materialidade orienta a priorização dos temas que mais influenciam 
              nossa capacidade de criar valor e que são relevantes para nossos stakeholders.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Metodologia do Processo de Materialidade</h2>
            <p className="text-muted-foreground mb-8">
              A análise de materialidade adotou abordagem estruturada em quatro etapas, seguindo 
              as diretrizes do GRI 3: Material Topics 2021. (GRI 3-1)
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Identificação", description: "Mapeamento de temas relevantes a partir de diretrizes GRI, requisitos regulatórios e análises de riscos." },
              { step: 2, title: "Análise", description: "Avaliação do impacto dos temas sobre estratégia, riscos, continuidade e reputação." },
              { step: 3, title: "Engajamento", description: "Consideração das expectativas de stakeholders estratégicos na análise." },
              { step: 4, title: "Priorização", description: "Organização em matriz de materialidade e validação pela alta administração." },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 100}>
                <div className="bg-card rounded-2xl border border-border p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center mb-4">
                    <span className="text-lg font-bold text-white">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="w-8 h-8 text-indigo-500" />
              <div>
                <h2 className="text-2xl font-bold">Engajamento com Stakeholders</h2>
                <p className="text-muted-foreground">GRI 2-29</p>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholders.map((stakeholder, index) => (
              <AnimatedSection key={stakeholder.name} delay={index * 100}>
                <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-indigo-500/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <stakeholder.icon className="w-5 h-5 text-indigo-500" />
                    </div>
                    <h3 className="font-semibold">{stakeholder.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{stakeholder.engagement}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Material Topics */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Temas Materiais Prioritários</h2>
            <p className="text-muted-foreground mb-8">
              O processo consolidou um conjunto de temas materiais que refletem a relevância 
              estratégica e operacional da Construcap. (GRI 3-2)
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            {materialTopics.map((topic, index) => (
              <AnimatedSection key={topic.title} delay={index * 50}>
                <div className="bg-card rounded-2xl border border-border p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                  <div className={`w-12 h-12 rounded-xl ${topic.color} flex items-center justify-center flex-shrink-0`}>
                    <topic.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        #{topic.number}
                      </span>
                      <h3 className="font-semibold">{topic.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{topic.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="py-16 bg-indigo-950/10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Utilização dos Resultados de Materialidade</h2>
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-muted-foreground mb-4">
                Os temas materiais orientam: (GRI 3-3)
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Elaboração dos planos ESG",
                  "Definição de políticas corporativas",
                  "Priorização de investimentos",
                  "Gestão de riscos e oportunidades",
                  "Tomada de decisão operacional",
                  "Definição de métricas e indicadores",
                  "Estruturação de metas climáticas",
                  "Transparência e prestação de contas"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm">{item}</span>
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

export default MaterialityPage;