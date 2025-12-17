import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Building2, Leaf, Heart, Shield, TrendingUp, FileText, Award, Users, Zap, Droplets, Factory, Sun } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import heroImage from "@/assets/hero-construction.jpg";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

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

// Emissions data by scope
const emissionsData = [
  { name: "Escopo 1", value: 15116.357, color: "#10b981" },
  { name: "Escopo 2", value: 1617.679, color: "#3b82f6" },
  { name: "Escopo 3", value: 16816.781, color: "#f59e0b" },
];

const emissionsBarData = [
  { category: "Combustão Estacionária", escopo1: 2847, escopo2: 0, escopo3: 0 },
  { category: "Combustão Móvel", escopo1: 11892, escopo2: 0, escopo3: 0 },
  { category: "Emissões Fugitivas", escopo1: 377, escopo2: 0, escopo3: 0 },
  { category: "Energia Elétrica", escopo1: 0, escopo2: 1618, escopo3: 0 },
  { category: "Viagens", escopo1: 0, escopo2: 0, escopo3: 1254 },
  { category: "Deslocamento", escopo1: 0, escopo2: 0, escopo3: 15563 },
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
            <div className="flex flex-wrap gap-3 mb-6 animate-fade-in">
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
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Relatório de<br />
              <span className="text-primary">Sustentabilidade</span><br />
              2024
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-4 animate-fade-in" style={{ animationDelay: "200ms" }}>
              Grupo Construcap
            </p>
            
            <p className="text-primary-foreground/70 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "300ms" }}>
              80 anos construindo o Brasil com responsabilidade, transparência e compromisso 
              com o desenvolvimento sustentável.
            </p>

            {/* Iconic Works Tags */}
            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
              {iconicWorks.map((work) => (
                <span key={work.name} className="px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-sm text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors cursor-default">
                  {work.name}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
              <Link
                to="/relatorio/carta-ceo"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                Carta do CEO
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#highlights"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20 hover:scale-105"
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
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destaques 2024</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principais indicadores e conquistas do Grupo Construcap no ano de 2024
            </p>
          </AnimatedSection>

          {/* Main Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights2024.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* ESG Highlights Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {esgHighlights.map((pillar, index) => (
              <AnimatedSection key={pillar.category} delay={index * 150}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Highlights with Charts */}
      <section className="py-20 bg-emerald-950/10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Performance Ambiental 2024</h2>
                <p className="text-muted-foreground">Indicadores-chave de sustentabilidade</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Factory, value: "33.550", unit: "tCO₂e", label: "Emissões Totais", color: "text-emerald-500", bg: "bg-emerald-500/10" },
              { icon: Zap, value: "32,7", unit: "GWh", label: "Consumo de Energia", color: "text-amber-500", bg: "bg-amber-500/10" },
              { icon: Droplets, value: "15.337", unit: "ML", label: "Água Pluvial Captada", color: "text-blue-500", bg: "bg-blue-500/10" },
              { icon: Sun, value: "1,3", unit: "GWh", label: "Energia Solar Gerada", color: "text-orange-500", bg: "bg-orange-500/10" },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 100}>
                <div className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                  <item.icon className={`w-8 h-8 ${item.color} mb-3`} />
                  <div className="flex items-baseline gap-1 mb-1">
                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Pie Chart - Emissions by Scope */}
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-2">Emissões por Escopo</h3>
                <p className="text-sm text-muted-foreground mb-6">Distribuição de emissões GEE (tCO₂e)</p>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={emissionsData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        animationBegin={0}
                        animationDuration={1500}
                      >
                        {emissionsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        formatter={(value: number) => [`${value.toLocaleString('pt-BR')} tCO₂e`, '']}
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend 
                        verticalAlign="bottom" 
                        height={36}
                        formatter={(value) => <span className="text-sm text-foreground">{value}</span>}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {emissionsData.map((item) => (
                    <div key={item.name} className="text-center">
                      <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{ backgroundColor: item.color }} />
                      <p className="text-xs text-muted-foreground">{item.name}</p>
                      <p className="font-semibold text-sm">{item.value.toLocaleString('pt-BR')}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Bar Chart - Emissions by Category */}
            <AnimatedSection delay={300}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-2">Emissões por Categoria</h3>
                <p className="text-sm text-muted-foreground mb-6">Principais fontes de emissão (tCO₂e)</p>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={emissionsBarData} layout="vertical">
                      <XAxis type="number" tickFormatter={(value) => value.toLocaleString('pt-BR')} />
                      <YAxis dataKey="category" type="category" width={100} tick={{ fontSize: 11 }} />
                      <Tooltip 
                        formatter={(value: number) => [`${value.toLocaleString('pt-BR')} tCO₂e`, '']}
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="escopo1" name="Escopo 1" fill="#10b981" radius={[0, 4, 4, 0]} animationDuration={1500} />
                      <Bar dataKey="escopo2" name="Escopo 2" fill="#3b82f6" radius={[0, 4, 4, 0]} animationDuration={1500} />
                      <Bar dataKey="escopo3" name="Escopo 3" fill="#f59e0b" radius={[0, 4, 4, 0]} animationDuration={1500} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Certificações e Reconhecimentos</h2>
            <p className="text-muted-foreground">Padrões internacionais que atestam nossa excelência</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {["ISO 9001", "ISO 14001", "ISO 45001", "ISO 37001", "LEED", "GHG Protocol", "GRI Standards"].map((cert, index) => (
                <div 
                  key={cert} 
                  className="px-6 py-3 bg-card rounded-xl border border-border flex items-center gap-2 hover:border-primary/50 hover:shadow-md transition-all hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Award className="w-5 h-5 text-primary" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sections Grid */}
      <section id="sections" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-4">Navegue pelo Relatório</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Explore os diferentes capítulos do nosso Relatório de Sustentabilidade 2024
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <AnimatedSection key={section.label} delay={index * 100}>
                <Link
                  to={section.path}
                  className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all block hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {section.label}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReportCover;
