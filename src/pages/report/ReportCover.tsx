import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Building2, Leaf, Heart, Shield, TrendingUp, FileText, Award, Users, Zap, Droplets, Factory, Sun, Quote } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import heroImage from "@/assets/hero-construction.jpg";
import mangueTechBadge2 from "@/assets/mangue-tech-badge-2.png";
import construcapLogo from "@/assets/construcap-logo.png";
import urbiaLogo from "@/assets/companies/urbia.png";
import minasArenaLogo from "@/assets/companies/minas-arena.png";
import inovaSaudeLogo from "@/assets/companies/inova-saude.png";
import ambicapLogo from "@/assets/companies/ambicap.png";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { AnimatedCounter } from "@/hooks/useCountUp";
import ReportNavbar from "@/components/report/ReportNavbar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/report/ScrollToTop";
import MangueBadge from "@/components/report/MangueBadge";
const sections = [{
  icon: Building2,
  label: "Quem Somos",
  path: "/quem-somos",
  color: "bg-blue-500"
}, {
  icon: Shield,
  label: "Governança",
  path: "/governanca",
  color: "bg-purple-500"
}, {
  icon: TrendingUp,
  label: "Econômico",
  path: "/desempenho-economico",
  color: "bg-green-500"
}, {
  icon: Leaf,
  label: "Ambiental",
  path: "/desempenho-ambiental",
  color: "bg-emerald-500"
}, {
  icon: Heart,
  label: "Social",
  path: "/desempenho-social",
  color: "bg-rose-500"
}, {
  icon: FileText,
  label: "Índice GRI",
  path: "/gri-index",
  color: "bg-orange-500"
}];
const highlights2024 = [{
  value: 16,
  label: "Valor Econômico Gerado",
  icon: TrendingUp,
  color: "text-primary",
  prefix: "R$ ",
  suffix: " bi",
  decimals: 1
}, {
  value: 4345,
  label: "Colaboradores",
  icon: Users,
  color: "text-blue-500",
  prefix: "",
  suffix: "",
  decimals: 0
}, {
  value: 80,
  label: "Anos de História",
  icon: Award,
  color: "text-amber-500",
  prefix: "",
  suffix: "+",
  decimals: 0
}, {
  value: 27,
  label: "Estados Atendidos",
  icon: Building2,
  color: "text-purple-500",
  prefix: "",
  suffix: "",
  decimals: 0
}];
const esgHighlights = [{
  category: "Ambiental",
  color: "bg-emerald-500",
  icon: Leaf,
  items: [{
    label: "Emissões GEE",
    value: "33.550 tCO₂e",
    detail: "Inventário completo Escopo 1, 2 e 3"
  }, {
    label: "Energia Solar",
    value: "1.317.600 kWh",
    detail: "Geração no Mineirão"
  }, {
    label: "Água Reutilizada",
    value: "51%",
    detail: "Captação de água pluvial"
  }]
}, {
  category: "Social",
  color: "bg-rose-500",
  icon: Heart,
  items: [{
    label: "Segurança",
    value: "Zero óbitos",
    detail: "Compromisso com vida"
  }, {
    label: "Treinamentos",
    value: "7.920h",
    detail: "Horas de capacitação"
  }, {
    label: "Inclusão",
    value: "7,5%",
    detail: "Mulheres na força de trabalho"
  }]
}, {
  category: "Governança",
  color: "bg-purple-500",
  icon: Shield,
  items: [{
    label: "Canal de Denúncias",
    value: "100%",
    detail: "Casos investigados"
  }, {
    label: "Código de Conduta",
    value: "4.345",
    detail: "Colaboradores capacitados"
  }, {
    label: "Compliance",
    value: "ISO 37001",
    detail: "Sistema antissuborno"
  }]
}];
const companies = [{
  name: "Construcap",
  logo: construcapLogo,
  path: "/quem-somos",
  description: "Há mais de 80 anos construindo o Brasil com obras de grande porte. Atuação em infraestrutura, edificações, energia e mineração, com compromisso em excelência e sustentabilidade.",
  highlights: ["Infraestrutura", "Edificações", "Energia e Mineração"],
  featured: true
}, {
  name: "Urbia",
  logo: urbiaLogo,
  path: "/operacao-urbia",
  description: "Gestão de parques urbanos e áreas verdes. Responsável pela administração do Parque Ibirapuera e outros importantes espaços de lazer e preservação ambiental.",
  highlights: ["Parque Ibirapuera", "Horto Florestal", "13 parques"]
}, {
  name: "Minas Arena",
  logo: minasArenaLogo,
  path: "/operacao-minas-arena",
  description: "Operação e manutenção do Estádio Mineirão através de PPP pioneira no Brasil. Referência em gestão sustentável de grandes arenas.",
  highlights: ["Estádio Mineirão", "Copa 2014", "LEED Platinum"]
}, {
  name: "Inova Saúde",
  logo: inovaSaudeLogo,
  path: "/operacao-inova-saude",
  description: "Gestão de equipamentos de saúde pública através de parcerias público-privadas em hospitais e unidades de saúde.",
  highlights: ["Hospitais públicos", "PPPs em saúde", "Gestão integrada"]
}, {
  name: "Ambicap",
  logo: ambicapLogo,
  path: "/operacao-ambicap",
  description: "Soluções ambientais e gestão de resíduos. Especializada em tratamento e destinação adequada de resíduos da construção civil.",
  highlights: ["Gestão de resíduos", "Reciclagem", "Economia circular"]
}];
const certifications = [{
  name: "ISO 9001",
  description: "Sistema de Gestão da Qualidade - Padrão internacional que especifica requisitos para um sistema de gestão da qualidade, garantindo produtos e serviços consistentes."
}, {
  name: "ISO 14001",
  description: "Sistema de Gestão Ambiental - Framework para organizações melhorarem seu desempenho ambiental através de uso eficiente de recursos e redução de resíduos."
}, {
  name: "ISO 45001",
  description: "Sistema de Gestão de Saúde e Segurança Ocupacional - Padrão global para prevenir lesões e doenças ocupacionais, proporcionando ambientes de trabalho seguros."
}, {
  name: "ISO 37001",
  description: "Sistema de Gestão Antissuborno - Especifica requisitos para estabelecer, implementar e manter um sistema de gestão antissuborno."
}, {
  name: "LEED",
  description: "Leadership in Energy and Environmental Design - Certificação de edificações sustentáveis que avalia eficiência energética, uso de água, materiais e qualidade ambiental."
}, {
  name: "GHG Protocol",
  description: "Protocolo de Gases de Efeito Estufa - Metodologia internacional para quantificação e gestão de emissões de gases de efeito estufa."
}];

// Emissions data by scope
const emissionsData = [{
  name: "Escopo 1",
  value: 15116.357,
  color: "#10b981"
}, {
  name: "Escopo 2",
  value: 1617.679,
  color: "#3b82f6"
}, {
  name: "Escopo 3",
  value: 16816.781,
  color: "#f59e0b"
}];
const ReportCover = () => {
  return <div className="min-h-screen bg-background">
      <ReportNavbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16">
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
              
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-primary-foreground">Top 10 Construtoras do Brasil</span>
              </div>
            </div>
            
            <p className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-2 animate-fade-in" style={{
            animationDelay: "150ms"
          }}>
              Grupo Construcap
            </p>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-foreground/90 mb-4 animate-fade-in" style={{
            animationDelay: "100ms"
          }}>
              Relatório de<br />
              <span className="text-primary">Sustentabilidade</span> 2024
            </h1>
            
            <p className="text-primary-foreground/70 mb-8 max-w-lg animate-fade-in" style={{
            animationDelay: "300ms"
          }}>
              80 anos construindo o Brasil com responsabilidade, transparência e compromisso 
              com o desenvolvimento sustentável.
            </p>

            
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{
            animationDelay: "500ms"
          }}>
              <Link to="/carta-ceo" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:scale-105">
                Carta do CEO
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#highlights" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-xl font-semibold hover:bg-primary-foreground/20 transition-all border border-primary-foreground/20 hover:scale-105">
                Destaques 2024
              </a>
            </div>
          </div>
        </div>
        
        <a href="#highlights" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </a>
      </section>

      {/* CEO Quote Section */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />
              <blockquote className="text-lg md:text-xl text-foreground/80 italic mb-6 leading-relaxed">
                "Nosso compromisso é construir um legado de responsabilidade, transparência e excelência. 
                Em 2024, reafirmamos nossa missão de gerar valor para todos os nossos stakeholders, 
                com foco na sustentabilidade e na integridade que nos guiam há mais de 80 anos."
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div className="text-left">
                  <p className="font-semibold text-foreground">Carlos Zanvettor</p>
                  <p className="text-sm text-muted-foreground">CEO - Grupo Construcap</p>
                </div>
              </div>
              <Link to="/carta-ceo" className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 font-medium transition-colors">
                Ler carta completa <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Key Numbers - Highlights */}
      <section id="highlights" className="py-12 bg-gradient-to-b from-secondary/50 to-background scroll-mt-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Destaques 2024</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principais indicadores e conquistas do Grupo Construcap no ano de 2024
            </p>
          </AnimatedSection>

          {/* Main Stats Grid with Animated Counters */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {highlights2024.map((stat, index) => <AnimatedSection key={stat.label} delay={index * 100}>
                <div className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                  </div>
                  <p className={`text-3xl font-bold ${stat.color} mb-1`}>
                    <AnimatedCounter value={stat.value * (stat.decimals > 0 ? Math.pow(10, stat.decimals) : 1)} prefix={stat.prefix} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>)}
          </div>

          {/* ESG Highlights Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {esgHighlights.map((pillar, index) => <AnimatedSection key={pillar.category} delay={index * 150}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className={`${pillar.color} p-4 flex items-center gap-3`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                    <h3 className="font-semibold text-white text-lg">{pillar.category}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    {pillar.items.map(item => <div key={item.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-sm text-muted-foreground">{item.label}</span>
                          <span className="font-bold text-foreground">{item.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>)}
                  </div>
                </div>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Environmental Highlights with Charts */}
      <section id="environmental" className="py-12 bg-emerald-950/10 scroll-mt-20">
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
            {[{
            icon: Factory,
            value: "33.550",
            unit: "tCO₂e",
            label: "Emissões Totais",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
          }, {
            icon: Zap,
            value: "32,7",
            unit: "GWh",
            label: "Consumo de Energia",
            color: "text-amber-500",
            bg: "bg-amber-500/10"
          }, {
            icon: Droplets,
            value: "15.337",
            unit: "ML",
            label: "Água Pluvial Captada",
            color: "text-blue-500",
            bg: "bg-blue-500/10"
          }, {
            icon: Sun,
            value: "1,3",
            unit: "GWh",
            label: "Energia Solar Gerada",
            color: "text-orange-500",
            bg: "bg-orange-500/10"
          }].map((item, index) => <AnimatedSection key={item.label} delay={index * 100}>
                <div className="p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-all hover:-translate-y-1">
                  
                  <div className="flex items-baseline gap-1 mb-1">
                    <p className="text-2xl font-bold text-foreground">{item.value}</p>
                    <span className="text-sm text-muted-foreground">{item.unit}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              </AnimatedSection>)}
          </div>

          {/* Charts Section */}
          <div className="grid gap-8">
            {/* Pie Chart - Emissions by Scope - Full Width */}
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-lg mb-2">Emissões por Escopo</h3>
                <p className="text-sm text-muted-foreground mb-6">Distribuição de emissões GEE (tCO₂e)</p>
                <div className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={emissionsData} cx="50%" cy="50%" innerRadius={50} outerRadius={85} paddingAngle={5} dataKey="value" animationBegin={0} animationDuration={1500}>
                        {emissionsData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                      <RechartsTooltip formatter={(value: number) => [`${value.toLocaleString('pt-BR')} tCO₂e`, '']} contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} />
                      <Legend verticalAlign="bottom" height={36} formatter={value => <span className="text-sm text-foreground">{value}</span>} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {emissionsData.map(item => <div key={item.name} className="text-center">
                      <div className="w-3 h-3 rounded-full mx-auto mb-1" style={{
                    backgroundColor: item.color
                  }} />
                      <p className="text-xs text-muted-foreground">{item.name}</p>
                      <p className="font-semibold text-sm">{item.value.toLocaleString('pt-BR')}</p>
                    </div>)}
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-12 scroll-mt-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Empresas do Grupo Construcap</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Conheça as empresas que compõem nosso grupo e suas contribuições para o desenvolvimento sustentável
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {companies.map((company, index) => <AnimatedSection key={company.name} delay={index * 100}>
                <Link to={company.path} className={`bg-card rounded-2xl border p-5 hover:shadow-lg transition-all hover:-translate-y-1 h-full flex flex-col group ${company.featured ? 'border-primary/50 ring-1 ring-primary/20' : 'border-border hover:border-primary/50'}`}>
                  <div className="h-10 mb-3">
                    <img src={company.logo} alt={`${company.name} logo`} className="h-full w-auto object-contain" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">{company.name}</h3>
                  <p className="text-xs text-muted-foreground mb-3 flex-grow line-clamp-3">{company.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {company.highlights.slice(0, 2).map(highlight => <span key={highlight} className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground">
                        {highlight}
                      </span>)}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-primary font-medium">
                    Saiba mais <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section id="certifications" className="py-12 bg-secondary/30 scroll-mt-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Certificações e Reconhecimentos</h2>
            <p className="text-muted-foreground">Clique para ver detalhes de cada certificação</p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => <Tooltip key={cert.name}>
                  <TooltipTrigger asChild>
                    <div className="px-6 py-3 bg-card rounded-xl border border-border flex items-center gap-2 hover:border-primary/50 hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer" style={{
                  animationDelay: `${index * 50}ms`
                }}>
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">{cert.name}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs p-4">
                    <p className="font-semibold mb-1">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </TooltipContent>
                </Tooltip>)}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sections Grid */}
      <section id="sections" className="py-12 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Explore os diferentes capítulos do nosso Relatório de Sustentabilidade 2024
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => <AnimatedSection key={section.label} delay={index * 100}>
                <Link to={section.path} className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all block hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {section.label}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              </AnimatedSection>)}
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-background py-8 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright © 2025 - Grupo Construcap, todos os direitos reservados.
          </p>
          <a href="https://mangue.tech" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
            <img src={mangueTechBadge2} alt="Desenvolvido por Mangue Tech" className="h-10" />
          </a>
        </div>
      </footer>

      {/* Floating Elements */}
      <ScrollToTop />
      <MangueBadge />
    </div>;
};
export default ReportCover;