import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  DollarSign,
  Users,
  Landmark,
  TrendingUp,
  Truck,
  Briefcase,
  CloudRain,
  ThermometerSun,
  AlertTriangle,
  Lightbulb,
  Shield,
  Heart,
  Building2,
  MapPin,
  Target,
  Leaf,
  Rocket,
  CheckCircle2,
  XCircle,
  PiggyBank,
  BarChart3,
  Globe,
} from "lucide-react";
import economicHero from "@/assets/report/economic-hero.jpg";

const EconomicPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={economicHero}
            alt="Construção e infraestrutura"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 7</span>
                <span>•</span>
                <span>GRI 201-1, 201-2, 201-3, 201-4</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Econômico</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O desempenho econômico da Construcap evidencia a solidez de seu modelo de negócios e a capacidade de
                enfrentar um ambiente operacional complexo, mantendo eficiência, disciplina financeira e criação de
                valor sustentável.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-4">
              O desempenho econômico da Construcap evidencia a solidez de seu modelo de negócios e a capacidade de
              enfrentar um ambiente operacional complexo, mantendo eficiência, disciplina financeira e criação de valor
              sustentável. A atuação diversificada — engenharia, gestão hospitalar, parques naturais e urbanos, arenas
              esportivas, zeladoria e serviços técnicos — reduz a exposição a ciclos econômicos, amplia a resiliência e
              fortalece a geração de resultados consistentes ao longo dos anos.
            </p>
            <p className="text-muted-foreground">
              A companhia opera integralmente no Brasil e desempenha papel relevante na dinamização da infraestrutura
              nacional, estimulando cadeias produtivas, gerando empregos e impulsionando o desenvolvimento regional por
              meio de obras, concessões, serviços públicos essenciais e operações de grande impacto socioeconômico.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 7.1 EVG&D - GRI 201-1 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">7.1 Valor Econômico Gerado, Distribuído e Retido (EVG&D)</h2>
              <p className="text-muted-foreground">GRI 201-1</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <TrendingUp className="w-10 h-10 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Valor Econômico Gerado</p>
              <p className="text-3xl font-bold text-emerald-500">R$ 1.649.855</p>
              <p className="text-sm text-muted-foreground">mil (2024)</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Users className="w-10 h-10 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Valor Econômico Distribuído</p>
              <p className="text-3xl font-bold text-blue-500">R$ 1.376.002</p>
              <p className="text-sm text-muted-foreground">mil (2024)</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <PiggyBank className="w-10 h-10 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Valor Econômico Retido</p>
              <p className="text-3xl font-bold text-primary">R$ 273.853</p>
              <p className="text-sm text-muted-foreground">mil (2024)</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="font-bold text-lg mb-4">Esses indicadores refletem:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Capacidade de geração de receita em um ambiente marcado por exigências técnicas, contratuais e
                  regulatórias elevadas;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Distribuição expressiva de valor às pessoas, fornecedores, governos e instituições financeiras;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Reinvestimento estratégico que fortalece a posição da companhia para novos ciclos de crescimento e
                  modernização.
                </span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-6 p-4 rounded-xl bg-secondary/50">
              Os recursos distribuídos contemplam salários e benefícios, pagamentos a fornecedores, tributos, encargos
              financeiros e investimentos sociais, demonstrando impacto econômico significativo nas regiões onde a
              empresa atua.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 7.2 Riscos e Oportunidades Climáticas - GRI 201-2 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <CloudRain className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-2xl font-bold">
                7.2 Riscos e Oportunidades Econômicas Relacionados às Mudanças Climáticas
              </h2>
              <p className="text-muted-foreground">GRI 201-2</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-muted-foreground mb-8">
            A Construcap monitora continuamente riscos econômicos associados às mudanças climáticas, particularmente
            relevantes para obras, parques naturais e urbanos, trilhas, áreas urbanas densas e operações hospitalares.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Riscos */}
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-red-500/30 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-bold text-lg">Riscos Identificados</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Aumento da frequência de chuvas intensas, com impactos diretos em cronogramas, logística e erosões;",
                  "Necessidade de readequação de equipes, turnos e horários durante ondas de calor;",
                  "Interrupções temporárias em parques naturais e urbanos devido a eventos extremos;",
                  "Custos adicionais para implementação de medidas emergenciais ou de reforço estrutural;",
                  "Impactos potenciais sobre produtividade, segurança e integridade de ativos.",
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Oportunidades */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-emerald-500/30 p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-emerald-500" />
                <h3 className="font-bold text-lg">Oportunidades Geradas</h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Adoção de técnicas construtivas mais eficientes e resilientes;",
                  "Ampliação de serviços em engenharia climática e infraestrutura adaptativa;",
                  "Fortalecimento da imagem institucional por práticas de gestão de riscos climaticamente responsáveis;",
                  "Ganhos de eficiência operacional por processos inovadores de prevenção e contingência.",
                ].map((opportunity, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="mt-8 p-6 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <p className="text-sm text-muted-foreground">
              A companhia incorpora variáveis climáticas em seus planejamentos operacionais, utiliza monitoramento
              meteorológico em obras e parques, revisa rotinas de manejo, e aplica metodologias de engenharia adequadas
              às novas condições ambientais, reduzindo exposição a impactos financeiros adversos.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 7.3 Benefícios - Previdência Privada - GRI 201-3 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <PiggyBank className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">7.3 Benefícios Econômicos ao Corpo Funcional (Previdência Privada)</h2>
              <p className="text-muted-foreground">GRI 201-3</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              A Construcap disponibiliza aos colaboradores planos de previdência complementar nas modalidades
              <strong className="text-foreground"> PGBL e VGBL</strong>, como benefício voluntário associado à segurança
              financeira de longo prazo.
            </p>

            <h3 className="font-bold mb-4">Características dos planos:</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: BarChart3, text: "Operam sob regime de capitalização individual" },
                { icon: Shield, text: "Não geram passivos atuariais para a empresa" },
                { icon: Landmark, text: "São administrados por instituições financeiras especializadas" },
                { icon: Heart, text: "Reforçam políticas de bem-estar, retenção e valorização profissional" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50">
                  <item.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                A inexistência de planos de benefício definido assegura previsibilidade financeira e evita compromissos
                atuariais futuros em nome da companhia.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 7.4 Apoios Financeiros Governamentais - GRI 201-4 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">7.4 Apoios Financeiros Governamentais</h2>
              <p className="text-muted-foreground">GRI 201-4</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Independência de Apoios Governamentais</h3>
                <p className="text-muted-foreground">
                  Em 2024, a Construcap{" "}
                  <strong className="text-foreground">não recebeu apoio financeiro direto de governos</strong>, seja por
                  meio de subsídios, incentivos específicos, subvenções, benefícios fiscais extraordinários, créditos
                  especiais, aportes públicos ou quaisquer instrumentos similares.
                </p>
              </div>
            </div>

            <h4 className="font-semibold mb-4">Toda a geração de receita da companhia deriva exclusivamente de:</h4>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "Contratos públicos e privados celebrados em condições de mercado",
                "Concessões e parcerias estabelecidas conforme legislação vigente",
                "Operações de engenharia, saúde, parques naturais e urbanos e arenas esportivas",
                "Prestação de serviços técnicos, operacionais e de manutenção",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                O desempenho econômico da companhia reflete, portanto,{" "}
                <strong className="text-foreground">
                  competitividade técnica, governança sólida e eficiência operacional
                </strong>
                , sem dependência de quaisquer mecanismos extraordinários de fomento governamental.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 7.5 Impactos Econômicos Indiretos - GRI 203-1, 203-2 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">7.5 Impactos Econômicos Indiretos</h2>
              <p className="text-muted-foreground">GRI 203-1, 203-2</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-muted-foreground mb-8">
            A Construcap gera impactos indiretos expressivos por meio de suas operações multissetoriais.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Geração de emprego */}
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-blue-500" />
                <h3 className="font-bold">Geração de Emprego, Renda e Qualificação</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Contratação de milhares de trabalhadores diretos e indiretos",
                  "Capacitação técnica e profissional de equipes locais",
                  "Dinamização das economias regionais em obras, parques e hospitais",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Fortalecimento de cadeias */}
          <AnimatedSection delay={50}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="w-6 h-6 text-emerald-500" />
                <h3 className="font-bold">Fortalecimento de Cadeias Produtivas</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                A empresa movimenta, principalmente, setores como engenharia, construção, tecnologia, logística,
                hotelaria, turismo, manutenção industrial e serviços especializados, fortalecendo fornecedores locais e
                nacionais.
              </p>
            </div>
          </AnimatedSection>

          {/* Impulso ao turismo */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="font-bold">Impulso ao Turismo e à Economia Regional</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Operações da Urbia e da Minas Arena ampliam fluxo turístico, eventos, comércio e arrecadação em regiões
                como:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Parque Ibirapuera e demais parques vizinhos (SP)",
                  "Parque Nacional do Iguaçu (PR)",
                  "Parque Estadual da Cantareira e o Parque Estadual Alberto Löfgren (Horto Florestal)  (SP)",
                  "Parques Nacionais Aparados da Serra e Serra Geral – Cânions Verdes (SC/RS)",
                  "Entorno do Mineirão (MG)",
                ].map((local, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {local}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Melhoria da infraestrutura */}
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-purple-500" />
                <h3 className="font-bold">Melhoria da Infraestrutura e dos Serviços Públicos</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Obras e operações elevam a qualidade de hospitais, parques, equipamentos urbanos, espaços culturais e
                estruturas de mobilidade, contribuindo para a melhoria do bem-estar da população.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7.6 Perspectivas Econômico-Financeiras */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Rocket className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">7.6 Perspectivas Econômico-Financeiras e Estratégicas</h2>
              <p className="text-muted-foreground">Vetores de crescimento</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-muted-foreground mb-8">
            O posicionamento atual da Construcap permite vislumbrar um ciclo positivo para os próximos anos, sustentado
            pelos seguintes vetores:
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: Shield,
              title: "Diversificação como Matriz de Resiliência",
              description:
                "A atuação simultânea em obras, saúde, parques e arenas amortiza oscilações de mercado e assegura estabilidade financeira.",
            },
            {
              icon: Target,
              title: "Eficiência Operacional",
              description:
                "A empresa prioriza otimização de processos, controle rigoroso de custos, qualificação de fornecedores e digitalização crescente das operações.",
            },
            {
              icon: TrendingUp,
              title: "Expansão em Concessões",
              description:
                "O know-how acumulado em hospitalar, parques e arenas posiciona o grupo para disputar novos ativos e contratos de longo prazo.",
            },
            {
              icon: Lightbulb,
              title: "Inovação e Engenharia Avançada",
              description:
                "Investimentos em metodologias construtivas modernas, soluções digitais, sistemas de gestão integrada e práticas sustentáveis.",
            },
            {
              icon: Leaf,
              title: "Integração de Critérios ESG",
              description:
                "Indicadores ambientais, climáticos, sociais e de governança são incorporados às decisões operacionais e financeiras.",
            },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Conclusion */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8">
            <p className="text-lg text-primary-foreground/90">
              Com esse conjunto de fatores, a Construcap reforça seu papel como uma das principais empresas de
              infraestrutura do país, combinando{" "}
              <strong>solidez econômica, responsabilidade socioambiental e capacidade técnica</strong> para entregar
              obras e serviços de alta complexidade com impacto direto no desenvolvimento do Brasil.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default EconomicPage;
