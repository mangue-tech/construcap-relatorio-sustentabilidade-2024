import { Building, Shield, Award, Users, Target, Briefcase } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Construção Civil e Infraestrutura",
    description: "Realizamos obras combinando rigor técnico, inovação, eficiência operacional e soluções de engenharia aplicadas.",
  },
  {
    icon: Shield,
    title: "Segurança como Valor",
    description: "Priorização absoluta da proteção à vida, padrões rigorosos de prevenção e controles operacionais em todas as unidades.",
  },
  {
    icon: Award,
    title: "Excelência Operacional",
    description: "Implementação de padrões técnicos elevados, inovação aplicada e engenharia de alta performance.",
  },
  {
    icon: Users,
    title: "Capital Humano",
    description: "Mais de 4.345 colaboradores dedicados à excelência em diferentes regiões do Brasil.",
  },
  {
    icon: Target,
    title: "Integridade e Conformidade",
    description: "Adoção sistemática de práticas éticas, políticas de prevenção a riscos e processos robustos de governança.",
  },
  {
    icon: Briefcase,
    title: "Diversificação de Negócios",
    description: "Atuação em construção, saúde, arenas esportivas e serviços essenciais, gerando resiliência e valor sustentável.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Grupo Construcap</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-6">
            Uma História de <span className="text-gradient">80 Anos</span> Construindo o Brasil
          </h2>
          <p className="text-muted-foreground text-lg">
            Desde 1944, o Grupo Construcap se destaca como uma das maiores construtoras do Brasil, 
            responsável por obras icônicas que transformaram a paisagem urbana nacional. Com um portfólio 
            que inclui o Templo de Salomão, Arena Corinthians, hospitais de referência e complexos de grande porte.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "2.500+", label: "Obras Entregues" },
            { value: "R$ 1,6bi", label: "Receita Anual" },
            { value: "27", label: "Estados Atendidos" },
            { value: "ISO 9001", label: "Certificações" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card border border-border">
              <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
