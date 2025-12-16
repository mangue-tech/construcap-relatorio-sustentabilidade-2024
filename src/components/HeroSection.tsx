import { ArrowDown, Building2, Users, MapPin, Award } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const stats = [
  { value: "R$ 1,6bi", label: "Valor Gerado", icon: Building2 },
  { value: "4.345", label: "Colaboradores", icon: Users },
  { value: "80+", label: "Anos de História", icon: Award },
  { value: "Brasil", label: "Atuação Nacional", icon: MapPin },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-accent-foreground">80 Anos de Excelência • Fundada em 1944</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Top 10 Construtoras do Brasil • +2.500 Obras Entregues</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Construindo</span>
                <br />
                <span className="text-foreground">o Futuro</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl">
              O Grupo Construcap é uma das maiores construtoras do Brasil, com 80 anos transformando sonhos em realidade através de obras icônicas que moldaram o país.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {["Templo de Salomão", "Arena Corinthians", "Hospital Einstein"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full border border-primary/30 text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-5 h-5 text-primary mb-2" />
                  <p className="text-xl lg:text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-up delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Construcap - Obras de Construção"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              
              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Obras Icônicas
                  </span>
                  <span className="px-3 py-1 rounded-full bg-card/80 text-foreground text-xs font-medium">
                    27 Estados
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary-foreground">Legado de 80 Anos</h3>
                <p className="text-primary-foreground/80 text-sm">
                  Templo de Salomão • Arena Corinthians • Hospitais Einstein
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#sobre" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
