import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Building2, Leaf, Heart, Shield, TrendingUp, FileText } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const sections = [
  { icon: Building2, label: "Quem Somos", path: "/relatorio/quem-somos", color: "bg-blue-500" },
  { icon: Shield, label: "Governança", path: "/relatorio/estrategia-governanca", color: "bg-purple-500" },
  { icon: TrendingUp, label: "Econômico", path: "/relatorio/desempenho-economico", color: "bg-green-500" },
  { icon: Leaf, label: "Ambiental", path: "/relatorio/desempenho-ambiental", color: "bg-emerald-500" },
  { icon: Heart, label: "Social", path: "/relatorio/desempenho-social", color: "bg-rose-500" },
  { icon: FileText, label: "Índice GRI", path: "/relatorio/gri-index", color: "bg-orange-500" },
];

const ReportCover = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Construcap" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
        </div>
        
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <span className="text-sm font-medium text-primary-foreground">GRI Standards 2021</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Relatório de<br />
              <span className="text-primary">Sustentabilidade</span><br />
              2024
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8">
              Grupo Construcap
            </p>
            
            <p className="text-primary-foreground/70 mb-8 max-w-lg">
              80 anos construindo o Brasil com responsabilidade, transparência e compromisso 
              com o desenvolvimento sustentável.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/relatorio/carta-ceo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Carta do CEO
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#sections"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                Explorar Relatório
              </a>
            </div>
          </div>
        </div>
        
        <a href="#sections" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </a>
      </section>

      {/* Sections Grid */}
      <section id="sections" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Navegue pelo Relatório</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore os diferentes capítulos do nosso Relatório de Sustentabilidade 2024
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.label}
                to={section.path}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-4`}>
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {section.label}
                </h3>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "R$ 1,6 bi", label: "Valor Econômico Gerado" },
              { value: "4.345", label: "Colaboradores" },
              { value: "33.550", label: "tCO₂e Emissões" },
              { value: "80+", label: "Anos de História" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-card rounded-2xl border border-border">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportCover;
