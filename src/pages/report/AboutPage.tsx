import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Building2,
  MapPin,
  Briefcase,
  Target,
  Award,
  Users,
  Heart,
  Factory,
  TreePine,
  Stethoscope,
  Leaf,
  Settings,
  Truck,
  PackageCheck,
  Wrench,
  Globe,
  TrendingUp,
  ShieldCheck,
  Building,
  CircleDot,
} from "lucide-react";
import aboutHero from "@/assets/report/about-hero.jpg";

const businessUnits = [
  {
    name: "Construção Civil e Infraestrutura",
    icon: Building2,
    description:
      "Realizamos obras combinando rigor técnico, inovação, eficiência operacional e soluções de engenharia aplicadas. Atuamos em projetos de infraestrutura urbana, industrial, hospitalar, energética e corporativa, incluindo a construção de unidades hospitalares completas, como o Hospital Regional de Sorocaba, que integra a operação da Inova Saúde.",
  },
  {
    name: "Gestão Hospitalar - Inova Saúde",
    icon: Stethoscope,
    description:
      "Por meio da Inova Saúde, operamos unidades hospitalares de alta complexidade em São Paulo e Sorocaba, assegurando qualidade assistencial, governança clínica, eficiência operacional e oferta contínua de serviços essenciais à população. A atuação envolve desde gestão de centros cirúrgicos e UTIs até manutenção predial, hotelaria hospitalar e suporte diagnóstico.",
  },
  {
    name: "Arenas Esportivas - Minas Arena",
    icon: Factory,
    description:
      "A Minas Arena é responsável pela operação do Mineirão, um dos estádios mais emblemáticos do país. A gestão abrange segurança, manutenção, gestão energética, realização de grandes eventos esportivos e culturais e integração com a economia e o turismo da região metropolitana de Belo Horizonte.",
  },
  {
    name: "Parques Naturais e Urbanos - Urbia",
    icon: TreePine,
    description:
      "Por meio da Urbia, administramos parques de relevância nacional e urbana, promovendo conservação ambiental, manejo responsável, visitação ordenada e oferta de serviços de lazer e turismo sustentável. Essa atuação fortalece o turismo sustentável, estimula as economias locais, amplia o acesso a áreas de lazer e contribui para a preservação de patrimônios naturais.",
  },
  {
    name: "Soluções de Engenharia Aplicada",
    icon: Wrench,
    description:
      "Prestamos serviços de manutenção industrial, modernização de equipamentos, engenharia consultiva e operação de sistemas complexos, assegurando desempenho, segurança e continuidade operacional em ativos públicos e privados.",
  },
];

const values = [
  {
    icon: Award,
    title: "Excelência Operacional",
    description: "Compromisso com padrões técnicos elevados e eficiência em todas as operações",
  },
  {
    icon: Heart,
    title: "Segurança",
    description: "Proteção à vida como valor fundamental em todas as decisões operacionais",
  },
  {
    icon: Target,
    title: "Integridade",
    description: "Conduta ética e transparente em todas as relações comerciais e institucionais",
  },
  {
    icon: Settings,
    title: "Inovação",
    description: "Busca contínua por soluções tecnológicas e processos mais eficientes",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Compromisso com práticas ambientais, sociais e de governança responsáveis",
  },
  {
    icon: ShieldCheck,
    title: "Rigor Técnico",
    description: "Excelência em engenharia e conformidade com as melhores práticas de mercado",
  },
];

const controlledCompanies = [
  { name: "Ambicap Ltda.", description: "Soluções ambientais e gestão de resíduos" },
  { name: "Inova Saúde São Paulo SPE S/A", description: "Gestão hospitalar em São Paulo" },
  { name: "Inova Saúde Sorocaba SPE S/A", description: "Gestão hospitalar em Sorocaba" },
  { name: "Urbia Águas Claras S/A", description: "Gestão de parques urbanos" },
  { name: "Urbia Cânions Verdes S/A", description: "Gestão de parques naturais" },
  { name: "Urbia Gestão de Parques S.P.E. S/A", description: "Gestão integrada de parques" },
];

const supplyChainItems = [
  {
    icon: PackageCheck,
    title: "Materiais de Construção",
    description: "Fornecedores de concreto, aço e insumos de engenharia",
  },
  { icon: Factory, title: "Equipamentos Industriais", description: "Máquinas e equipamentos para obras e operações" },
  {
    icon: Stethoscope,
    title: "Insumos Hospitalares",
    description: "Materiais médicos e equipamentos para unidades de saúde",
  },
  { icon: Wrench, title: "Serviços Técnicos", description: "Empresas especializadas em engenharia e manutenção" },
  {
    icon: TreePine,
    title: "Zeladoria e Conservação",
    description: "Serviços de conservação ambiental e manutenção de parques",
  },
  { icon: Truck, title: "Transporte e Logística", description: "Operações logísticas e movimentação de materiais" },
  { icon: Settings, title: "Tecnologia", description: "Soluções tecnológicas para operações e gestão de ativos" },
  {
    icon: Globe,
    title: "Soluções Turísticas",
    description: "Serviços que viabilizam operações nos parques urbanos e naturais",
  },
];

const nationalPresence = [
  {
    title: "Geração de Empregos",
    description: "Geração de empregos e qualificação de mão de obra local em todas as regiões de atuação",
  },
  {
    title: "Turismo e Economia Regional",
    description:
      "Fortalecimento do turismo e da economia regional em parques como Ibirapuera, Jericoacoara e Cânions Verdes",
  },
  {
    title: "Acesso à Saúde",
    description: "Ampliação do acesso da população a serviços essenciais de saúde geridos pela Inova Saúde",
  },
  {
    title: "Cultura e Esporte",
    description: "Dinamização do setor cultural, esportivo e de eventos por meio da operação do Mineirão",
  },
  {
    title: "Infraestrutura Urbana",
    description:
      "Melhorias de infraestrutura que impactam diretamente mobilidade, serviços urbanos e desenvolvimento econômico",
  },
  {
    title: "Conservação Ambiental",
    description: "Conservação de áreas naturais protegidas, com manejo estruturado e educação ambiental",
  },
];

const AboutPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={aboutHero}
            alt="Estádio Mineirão"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 2</span>
                <span>•</span>
                <span>GRI 2-1, 2-2, 2-3, 2-6</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O Grupo Construcap é uma das mais tradicionais empresas brasileiras de engenharia, infraestrutura e
                serviços, com mais de oito décadas dedicadas à entrega de projetos estruturantes, à gestão de ativos
                públicos e privados e à operação de serviços essenciais para a sociedade.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Constituída como Construcap CCPS Engenharia e Comércio S.A., sociedade anônima de capital fechado (GRI
                2-1), a companhia tem sede no Eldorado Business Tower, em São Paulo/SP (GRI 2-1), onde se concentram
                suas funções corporativas e estratégicas.
              </p>
              <p>
                Todas as operações são realizadas no território brasileiro, com presença em regiões metropolitanas,
                polos industriais, áreas turísticas, parques naturais protegidos e municípios de diferentes portes (GRI
                2-1).
              </p>
              <p>
                Nossa atuação inclui obras de grande porte, administração de parques naturais e urbanos, gestão
                hospitalar e operação de arenas esportivas, consolidando um portfólio robusto e diversificado que
                contribui para o desenvolvimento econômico e social do país.
              </p>
              <p>
                Ao longo de sua história, a companhia consolidou valores institucionais que orientam sua trajetória:
                excelência operacional, segurança como valor inegociável, integridade, inovação, sustentabilidade e
                rigor técnico. Esses fundamentos sustentam nossa reputação como parceiro confiável na construção e
                operação de ativos essenciais para o país.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                Estrutura Corporativa e Escopo do Relato (GRI 2-2, 2-3)
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Controladora incluída</p>
                  <p className="font-medium">Construcap CCPS Engenharia e Comércio S.A.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Controladas incluídas</p>
                  <div className="space-y-2">
                    {controlledCompanies.map((company) => (
                      <div key={company.name} className="flex items-start gap-2">
                        <CircleDot className="w-3 h-3 text-primary mt-1.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <strong>Período do relatório:</strong> 1º de janeiro a 31 de dezembro de 2024 (GRI 2-3)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <strong>Conformidade:</strong> GRI Standards 2021, modalidade In Accordance (GRI Compliant)
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    As informações financeiras são apresentadas de forma consolidada e auditada, enquanto os dados
                    ambientais, sociais e de governança seguem limites operacionais definidos pelo GHG Protocol e pelas
                    metodologias corporativas de sustentabilidade (GRI 2-2).
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-2 text-center">Nossos Valores</h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Valores institucionais que orientam nossa trajetória e sustentam nossa reputação como parceiro confiável na
            construção e operação de ativos essenciais para o país.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <AnimatedSection key={value.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Business Units */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Modelo de Negócios e Atuação (GRI 2-6)</h2>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap atua em diferentes cadeias de valor estratégicas para o Brasil, integrando construção civil,
            gestão de ativos públicos, soluções de engenharia e operações complexas. Essa diversidade confere
            resiliência, capacidade de inovação e forte presença em setores essenciais.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {businessUnits.map((unit, index) => (
            <AnimatedSection key={unit.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <unit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{unit.name}</h3>
                    <p className="text-sm text-muted-foreground">{unit.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Supply Chain - NEW SECTION */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Cadeia de Suprimentos (GRI 2-6)</h2>
              <p className="text-muted-foreground">Eficiência, governança e conformidade em todas as etapas</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4 max-w-4xl">
            A cadeia de suprimentos é estruturada para garantir eficiência, governança e conformidade em todas as
            etapas. Ela abrange fornecedores de materiais de construção, equipamentos industriais, insumos hospitalares,
            serviços técnicos especializados, empresas de zeladoria e conservação ambiental, transporte, tecnologia e
            soluções turísticas que viabilizam nossas operações nos parques urbanos e naturais, nas unidades
            hospitalares e no Mineirão.
          </p>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A área de Suprimentos conduz processos integrados de planejamento, compras, homologação de fornecedores,
            gestão de contratos, logística, padronização de especificações e mitigação de riscos socioambientais,
            assegurando a qualidade e a continuidade das operações.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplyChainItems.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* National Presence */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Presença Nacional e Contribuições</h2>
              <p className="text-muted-foreground">Impacto positivo nas regiões onde atuamos</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Construcap está presente em diferentes regiões do Brasil por meio de obras, operações hospitalares,
            parques urbanos e naturais, arenas esportivas e serviços de engenharia. Essa atuação gera benefícios diretos
            para as comunidades e contribui para o desenvolvimento econômico e social do país.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nationalPresence.map((item, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-card rounded-xl border border-border p-5 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Commitment Statement */}
        <AnimatedSection delay={600}>
          <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Compromisso com o Desenvolvimento</h3>
                <p className="text-sm text-muted-foreground">
                  A companhia permanece comprometida com a construção e operação de ativos que contribuem para o
                  crescimento do país, para o bem-estar das comunidades e para a preservação do patrimônio natural
                  brasileiro.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default AboutPage;
