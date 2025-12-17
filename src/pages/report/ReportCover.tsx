import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Building2, Leaf, Heart, Shield, TrendingUp, FileText, Award, Users, Zap, Droplets, Recycle, Factory, Sun, TreePine } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const sections = [
  { icon: Building2, label: "Quem Somos", path: "/relatorio/quem-somos", color: "bg-blue-500" },
  { icon: Shield, label: "Governança", path: "/relatorio/estrategia-governanca", color: "bg-purple-500" },
  { icon: TrendingUp, label: "Econômico", path: "/relatorio/desempenho-economico", color: "bg-green-500" },
  { icon: Leaf, label: "Ambiental", path: "/relatorio/desempenho-ambiental", color: "bg-emerald-500" },
  { icon: Heart, label: "Social", path: "/relatorio/desempenho-social", color: "bg-rose-500" },
  { icon: FileText, label: "Índice GRI", path: "/relatorio/gri-index", color: "bg-orange-500" },
];

const highlights2024 = [
  { value: "R$ 1,6 bi", label: "Valor Econômico Gerado", icon: TrendingUp, color: "text-primary" },
  { value: "4.345", label: "Colaboradores", icon: Users, color: "text-blue-500" },
  { value: "80+", label: "Anos de História", icon: Award, color: "text-amber-500" },
  { value: "27", label: "Estados Atendidos", icon: Building2, color: "text-purple-500" },
];

const esgHighlights = [
  {
    category: "Ambiental",
    color: "bg-emerald-500",
    icon: Leaf,
    items: [
      { label: "Emissões GEE", value: "33.550 tCO₂e", detail: "Inventário completo Escopo 1, 2 e 3" },
      { label: "Energia Solar", value: "1.317.600 kWh", detail: "Geração no Mineirão" },
      { label: "Água Reutilizada", value: "51%", detail: "Captação de água pluvial" },
    ]
  },
  {
    category: "Social",
    color: "bg-rose-500",
    icon: Heart,
    items: [
      { label: "Segurança", value: "Zero óbitos", detail: "Compromisso com vida" },
      { label: "Treinamentos", value: "7.920h", detail: "Horas de capacitação" },
      { label: "Inclusão", value: "7,5%", detail: "Mulheres na força de trabalho" },
    ]
  },
  {
    category: "Governança",
    color: "bg-purple-500",
    icon: Shield,
    items: [
      { label: "Canal de Denúncias", value: "100%", detail: "Casos investigados" },
      { label: "Código de Conduta", value: "4.345", detail: "Colaboradores capacitados" },
      { label: "Compliance", value: "ISO 37001", detail: "Sistema antissuborno" },
    ]
  },
];

const iconicWorks = [
  { name: "Templo de Salomão", detail: "55.000m² construídos" },
  { name: "Arena Corinthians", detail: "Copa do Mundo 2014" },
  { name: "Hospital Einstein", detail: "Referência em saúde" },
  { name: "Mineirão", detail: "PPP pioneira no Brasil" },
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
          <div className="max-w-3xl">
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary-foreground">80 Anos de Excelência</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20">
                <span className="text-sm font-medium text-primary-foreground">GRI Standards 2021</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-primary-foreground">Top 10 Construtoras do Brasil</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Relatório de<br />
              <span className="text-primary">Sustentabilidade</span><br />
              2024
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-4">
              Grupo Construcap
            </p>
            
            <p className="text-primary-foreground/70 mb-8 max-w-lg">
              80 anos construindo o Brasil com responsabilidade, transparência e compromisso 
              com o desenvolvimento sustentável.
            </p>

            {/* Iconic Works Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {iconicWorks.map((work) => (
                <span key={work.name} className="px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-sm text-primary-foreground/80">
                  {work.name}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link
                to="/relatorio/carta-ceo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors"
              >
                Carta do CEO
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/20 transition-colors border border-primary-foreground/20"
              >
                Destaques 2024
              </a>
            </div>
          </div>
        </div>
        
        <a href="#highlights" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </a>
      </section>

      {/* Key Numbers - Highlights */}
      <section id="highlights" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destaques 2024</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principais indicadores e conquistas do Grupo Construcap no ano de 2024
            </p>
          </div>

          {/* Main Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights2024.map((stat) => (
              <div key={stat.label} className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>
                <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* ESG Highlights Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {esgHighlights.map((pillar) => (
              <div key={pillar.category} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className={`${pillar.color} p-4 flex items-center gap-3`}>
                  <pillar.icon className="w-6 h-6 text-white" />
                  <h3 className="font-semibold text-white text-lg">{pillar.category}</h3>
                </div>
                <div className="p-6 space-y-4">
                  {pillar.items.map((item) => (
                    <div key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-bold text-foreground">{item.value}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Highlights */}
      <section className="py-20 bg-emerald-950/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Performance Ambiental 2024</h2>
              <p className="text-muted-foreground">Indicadores-chave de sustentabilidade</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-card rounded-2xl border border-border">
              <Factory className="w-8 h-8 text-emerald-500 mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">33.550</p>
              <p className="text-sm text-muted-foreground mb-2">tCO₂e Emissões Totais</p>
              <div className="flex gap-2 text-xs">
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600">Escopo 1: 15.116</span>
                <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-600">Escopo 2: 1.617</span>
              </div>
            </div>
            
            <div className="p-6 bg-card rounded-2xl border border-border">
              <Zap className="w-8 h-8 text-amber-500 mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">32,7 GWh</p>
              <p className="text-sm text-muted-foreground mb-2">Consumo de Energia</p>
              <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 text-xs">Eletricidade total</span>
            </div>
            
            <div className="p-6 bg-card rounded-2xl border border-border">
              <Droplets className="w-8 h-8 text-blue-500 mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">15.337 ML</p>
              <p className="text-sm text-muted-foreground mb-2">Água Pluvial Captada</p>
              <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-600 text-xs">Mineirão - 51% redução</span>
            </div>
            
            <div className="p-6 bg-card rounded-2xl border border-border">
              <Sun className="w-8 h-8 text-orange-500 mb-3" />
              <p className="text-2xl font-bold text-foreground mb-1">1,3 GWh</p>
              <p className="text-sm text-muted-foreground mb-2">Energia Solar Gerada</p>
              <span className="px-2 py-1 rounded bg-orange-500/10 text-orange-600 text-xs">Usina fotovoltaica</span>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Certificações e Reconhecimentos</h2>
            <p className="text-muted-foreground">Padrões internacionais que atestam nossa excelência</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "LEED", "GHG Protocol", "GRI Standards"].map((cert) => (
              <div key={cert} className="px-6 py-3 bg-card rounded-xl border border-border flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
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
    </div>
  );
};

export default ReportCover;
