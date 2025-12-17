import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Building2, MapPin, Briefcase, Target, Award, Users, Heart, Factory, TreePine, Stethoscope } from "lucide-react";
import aboutHero from "@/assets/report/about-hero.jpg";

const businessUnits = [
  {
    name: "Construção Civil e Infraestrutura",
    icon: Building2,
    description: "Realizamos obras combinando rigor técnico, inovação, eficiência operacional e soluções de engenharia aplicadas. Atuamos em projetos de infraestrutura urbana, industrial, hospitalar, energética e corporativa."
  },
  {
    name: "Gestão Hospitalar - Inova Saúde",
    icon: Stethoscope,
    description: "Operamos unidades hospitalares de alta complexidade em São Paulo e Sorocaba, assegurando qualidade assistencial, governança clínica, eficiência operacional e oferta contínua de serviços essenciais à população."
  },
  {
    name: "Arenas Esportivas - Minas Arena",
    icon: Factory,
    description: "Responsável pela operação do Mineirão, um dos estádios mais emblemáticos do país. A gestão abrange segurança, manutenção, gestão energética, realização de grandes eventos esportivos e culturais."
  },
  {
    name: "Parques Naturais e Urbanos - Urbia",
    icon: TreePine,
    description: "Administramos parques de relevância nacional e urbana, promovendo conservação ambiental, manejo responsável, visitação ordenada e oferta de serviços de lazer e turismo sustentável."
  },
];

const parks = [
  { name: "Parque do Ibirapuera", location: "São Paulo/SP", description: "Operação integrada que inclui zeladoria, revitalização, segurança, acessibilidade e serviços culturais" },
  { name: "Parques SP", location: "São Paulo/SP", description: "Carmo, Independência, Jardim da Luz e Trianon, com foco em conservação urbana e melhoria da experiência dos usuários" },
  { name: "Cânions Verdes", location: "SC/RS", description: "Parques Nacionais de Aparados da Serra e Serra Geral, com manejo ambiental e fortalecimento do ecoturismo" },
  { name: "Parque Nacional de Jericoacoara", location: "CE", description: "Gestão sustentável de atrativos naturais, controle de visitação e educação ambiental" },
];

const values = [
  { icon: Award, title: "Excelência Operacional", description: "Compromisso com padrões técnicos elevados e eficiência em todas as operações" },
  { icon: Heart, title: "Segurança Inegociável", description: "Proteção à vida como valor fundamental em todas as decisões" },
  { icon: Target, title: "Integridade", description: "Conduta ética e transparente em todas as relações comerciais e institucionais" },
  { icon: Users, title: "Inovação", description: "Busca contínua por soluções tecnológicas e processos mais eficientes" },
];

const AboutPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={aboutHero} 
            alt="Estádio Mineirão" 
            className="w-full h-full object-cover"
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
                O Grupo Construcap é uma das mais tradicionais empresas brasileiras de engenharia, 
                infraestrutura e serviços, com mais de oito décadas dedicadas à entrega de projetos 
                estruturantes para o Brasil.
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
                Constituída como Construcap CCPS Engenharia e Comércio S.A., sociedade anônima 
                de capital fechado (GRI 2-1), a companhia tem sede no Eldorado Business Tower, 
                em São Paulo/SP, onde se concentram suas funções corporativas e estratégicas.
              </p>
              <p>
                Todas as operações são realizadas no território brasileiro, com presença em 
                regiões metropolitanas, polos industriais, áreas turísticas, parques naturais 
                protegidos e municípios de diferentes portes.
              </p>
              <p>
                Nossa atuação inclui obras de grande porte, administração de parques naturais 
                e urbanos, gestão hospitalar e operação de arenas esportivas, consolidando um 
                portfólio robusto e diversificado que contribui para o desenvolvimento econômico 
                e social do país.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Estrutura Corporativa
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Controladora</p>
                  <p className="font-medium">Construcap CCPS Engenharia e Comércio S.A.</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Controladas incluídas</p>
                  <ul className="space-y-1 mt-2">
                    <li className="text-sm">• Ambicap Ltda.</li>
                    <li className="text-sm">• Inova Saúde São Paulo SPE S/A</li>
                    <li className="text-sm">• Inova Saúde Sorocaba SPE S/A</li>
                    <li className="text-sm">• Urbia Gestão de Parques S.P.E. S/A</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Período do relatório: 1º de janeiro a 31 de dezembro de 2024
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Conformidade: GRI Standards 2021, modalidade In Accordance
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
          <h2 className="text-2xl font-bold mb-8 text-center">Nossos Valores</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-2xl font-bold mb-4">Modelo de Negócios e Atuação</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A Construcap atua em diferentes cadeias de valor estratégicas para o Brasil, 
            integrando construção civil, gestão de ativos públicos, soluções de engenharia 
            e operações complexas. (GRI 2-6)
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

      {/* Parks */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-emerald-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <TreePine className="w-8 h-8 text-emerald-500" />
            <div>
              <h2 className="text-2xl font-bold">Parques sob Gestão Urbia</h2>
              <p className="text-muted-foreground">Conservação ambiental e turismo sustentável</p>
            </div>
          </div>
        </AnimatedSection>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {parks.map((park, index) => (
            <AnimatedSection key={park.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{park.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600">
                    {park.location}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{park.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Presence */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-6">Presença Nacional e Contribuições</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Geração de empregos e qualificação de mão de obra local",
              "Fortalecimento do turismo e da economia regional em parques",
              "Ampliação do acesso da população a serviços essenciais de saúde",
              "Dinamização do setor cultural, esportivo e de eventos",
              "Melhorias de infraestrutura que impactam mobilidade e serviços urbanos",
              "Conservação de áreas naturais protegidas com manejo estruturado"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default AboutPage;
