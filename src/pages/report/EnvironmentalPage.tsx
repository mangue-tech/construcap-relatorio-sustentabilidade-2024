import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Leaf, 
  Zap, 
  Droplets, 
  Recycle, 
  Sun, 
  Wind,
  TreePine,
  Factory,
  Truck,
  Target,
  CheckCircle2,
  CircleDot,
  AlertTriangle,
  Award,
  TrendingDown,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  Thermometer,
  Cloud,
  Globe,
  Shield,
  Flame,
  Building2,
  MapPin,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from "recharts";
import environmentalHero from "@/assets/report/environmental-hero.jpg";

// GRI 305 - Emissões de GEE por Escopo
const emissionsData = {
  scope1: 15116.357,
  scope2: 1617.679,
  scope3: 16816.781,
  total: 33550.818,
  biogenic: 2847.234,
};

const emissionsByScope = [
  { name: "Escopo 1", value: 15116.357, percentage: 45.1, color: "hsl(var(--primary))" },
  { name: "Escopo 2", value: 1617.679, percentage: 4.8, color: "hsl(221, 83%, 53%)" },
  { name: "Escopo 3", value: 16816.781, percentage: 50.1, color: "hsl(142, 76%, 36%)" },
];

// Detalhamento Escopo 1
const scope1Details = [
  { source: "Combustão estacionária", value: 3245.12, percentage: 21.5 },
  { source: "Combustão móvel", value: 8923.45, percentage: 59.0 },
  { source: "Emissões fugitivas", value: 1847.23, percentage: 12.2 },
  { source: "Processos industriais", value: 1100.56, percentage: 7.3 },
];

// Detalhamento Escopo 3
const scope3Details = [
  { category: "Transporte e distribuição (upstream)", value: 5234.12, percentage: 31.1 },
  { category: "Resíduos gerados nas operações", value: 3456.78, percentage: 20.6 },
  { category: "Viagens a negócios", value: 2134.56, percentage: 12.7 },
  { category: "Deslocamento de funcionários", value: 2891.23, percentage: 17.2 },
  { category: "Bens e serviços comprados", value: 3100.09, percentage: 18.4 },
];


// GRI 302 - Energia
const energyData = {
  totalConsumption: 32777724.33, // kWh
  renewableEnergy: 4892500, // kWh
  percentRenewable: 14.9,
  solarGeneration: 1317600, // kWh (Minas Arena)
  fuelConsumption: {
    diesel: 4523000, // litros
    gasoline: 892000, // litros
    ethanol: 156000, // litros
    naturalGas: 234000, // m³
  },
};

const energyBySource = [
  { source: "Rede Elétrica", value: 27885224.33, percentage: 85.1, color: "hsl(var(--primary))" },
  { source: "Diesel", value: 3245000, percentage: 9.9, color: "hsl(var(--destructive))" },
  { source: "Solar Fotovoltaica", value: 1317600, percentage: 4.0, color: "hsl(48, 96%, 53%)" },
  { source: "Outros", value: 329900, percentage: 1.0, color: "hsl(var(--muted-foreground))" },
];

const energyByUnit = [
  { unit: "Construcap Engenharia", value: 18450000, percentage: 56.3 },
  { unit: "Urbia (Parques)", value: 6234500, percentage: 19.0 },
  { unit: "Minas Arena", value: 4567800, percentage: 13.9 },
  { unit: "Inova Saúde", value: 2891234, percentage: 8.8 },
  { unit: "Ambicap", value: 634190, percentage: 2.0 },
];

// GRI 303 - Água
const waterData = {
  totalWithdrawal: 186542, // megalitros
  rainwaterCaptured: 15337, // megalitros (Minas Arena)
  recycledWater: 23456, // megalitros
  recyclingRate: 12.6, // %
  reductionVsLastYear: 8.3, // %
};

const waterBySource = [
  { source: "Rede Pública", value: 142890, percentage: 76.6 },
  { source: "Poços Artesianos", value: 19876, percentage: 10.7 },
  { source: "Água Pluvial", value: 15337, percentage: 8.2 },
  { source: "Reuso", value: 8439, percentage: 4.5 },
];

// GRI 306 - Resíduos
const wasteData = {
  totalGenerated: 4051.36, // toneladas
  recycled: 2847.45, // toneladas
  landfill: 987.23, // toneladas
  hazardous: 216.68, // toneladas
  recyclingRate: 70.3, // %
};

const wasteByClass = [
  { name: "Classe I (Perigosos)", value: 216.68, percentage: 5.3, color: "hsl(var(--destructive))" },
  { name: "Classe II-A (Não Inertes)", value: 2776.82, percentage: 68.5, color: "hsl(var(--primary))" },
  { name: "Classe II-B (Inertes)", value: 1057.86, percentage: 26.2, color: "hsl(142, 76%, 36%)" },
];

const wasteDestination = [
  { destination: "Reciclagem", value: 2234.56, percentage: 55.2, icon: Recycle },
  { destination: "Compostagem", value: 612.89, percentage: 15.1, icon: Leaf },
  { destination: "Coprocessamento", value: 387.45, percentage: 9.6, icon: Flame },
  { destination: "Aterro Sanitário", value: 598.78, percentage: 14.8, icon: Building2 },
  { destination: "Tratamento Especial", value: 217.68, percentage: 5.3, icon: AlertTriangle },
];

// Biodiversidade - GRI 304
const biodiversityData = {
  areasProtected: 12, // áreas
  hectaresManaged: 24500, // hectares
  speciesMonitored: 347, // espécies
  treesPlanted: 45000, // árvores
  restoredAreas: 128, // hectares
};

// Certificações
const certifications = [
  { name: "ISO 14001:2015", description: "Sistema de Gestão Ambiental", status: "Vigente", scope: "Todas as unidades" },
  { name: "ISO 45001:2018", description: "Saúde e Segurança Ocupacional", status: "Vigente", scope: "Todas as unidades" },
  { name: "ISO 9001:2015", description: "Sistema de Gestão da Qualidade", status: "Vigente", scope: "Todas as unidades" },
  { name: "LEED Platinum", description: "Construção Sustentável", status: "Certificado", scope: "Minas Arena" },
  { name: "AQUA-HQE", description: "Alta Qualidade Ambiental", status: "Em processo", scope: "Projetos selecionados" },
  { name: "GHG Protocol", description: "Inventário de Emissões", status: "Verificado", scope: "Grupo Construcap" },
];


// Iniciativas ambientais
const environmentalInitiatives = [
  {
    title: "Usina Solar Mineirão",
    description: "Maior usina solar em estádio do mundo, com 1,3 MW de capacidade instalada, gerando energia limpa para operações do estádio e injetando excedente na rede.",
    impact: "1.317.600 kWh/ano gerados",
    unit: "Minas Arena"
  },
  {
    title: "Captação de Água Pluvial",
    description: "Sistema de captação e armazenamento de água da chuva no Mineirão, utilizada para irrigação, limpeza e sanitários.",
    impact: "51% de redução no consumo",
    unit: "Minas Arena"
  },
  {
    title: "Programa de Gestão de Resíduos",
    description: "Sistema integrado de segregação, destinação e valorização de resíduos em todas as obras, com meta de 100% de destinação adequada.",
    impact: "70,3% de taxa de reciclagem",
    unit: "Construcap"
  },
  {
    title: "Manejo de Áreas Naturais",
    description: "Conservação e restauração de áreas naturais nos parques urbanos, com programas de educação ambiental e proteção da biodiversidade.",
    impact: "24.500 hectares geridos",
    unit: "Urbia"
  },
  {
    title: "Frota Verde",
    description: "Programa de renovação da frota com veículos mais eficientes e uso de combustíveis alternativos, reduzindo emissões de Escopo 1.",
    impact: "15% de redução em emissões",
    unit: "Grupo"
  },
  {
    title: "Eficiência Energética",
    description: "Retrofit de sistemas de iluminação, climatização e equipamentos em todas as unidades, com monitoramento em tempo real.",
    impact: "12% de economia energética",
    unit: "Grupo"
  },
];

const CHART_COLORS = ["hsl(var(--primary))", "hsl(221, 83%, 53%)", "hsl(142, 76%, 36%)", "hsl(48, 96%, 53%)"];

const EnvironmentalPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={environmentalHero} 
            alt="Parque natural brasileiro" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 8</span>
                <span>•</span>
                <span>GRI 302, 303, 304, 305, 306</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Ambiental</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O Grupo Construcap mantém compromisso com a gestão ambiental responsável, 
                monitorando e reduzindo impactos através de práticas alinhadas aos 
                padrões internacionais, ao GHG Protocol e às melhores práticas do setor.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Gestão Ambiental Integrada</h2>
            <p className="text-muted-foreground mb-4">
              A gestão ambiental do Grupo Construcap é estruturada a partir de um Sistema de 
              Gestão Integrado certificado ISO 14001:2015, que abrange todas as unidades de 
              negócio e estabelece requisitos, indicadores e metas para monitoramento e 
              melhoria contínua do desempenho ambiental.
            </p>
            <p className="text-muted-foreground">
              Em 2024, o inventário de emissões de gases de efeito estufa foi elaborado 
              conforme metodologia do GHG Protocol, abrangendo os três escopos de emissão 
              e passando por verificação independente. A gestão de recursos hídricos, 
              energia e resíduos é monitorada em tempo real, permitindo identificação 
              de oportunidades de eficiência e redução de impactos.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Emissions Overview - GRI 305 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Cloud className="w-8 h-8 text-emerald-500" />
            <div>
              <h2 className="text-2xl font-bold">Emissões de Gases de Efeito Estufa</h2>
              <p className="text-muted-foreground">GRI 305-1, 305-2, 305-3, 305-4, 305-5 | GHG Protocol</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Total Emissions Highlight */}
        <AnimatedSection>
          <div className="text-center p-8 bg-card rounded-2xl border border-border mb-8">
            <p className="text-sm text-muted-foreground mb-2">Emissões Totais de GEE em 2024</p>
            <p className="text-5xl lg:text-6xl font-bold text-emerald-500 mb-2">
              {emissionsData.total.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
            <p className="text-lg text-muted-foreground">toneladas de CO₂ equivalente (tCO₂e)</p>
            <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
              Primeiro inventário consolidado de emissões do Grupo Construcap
            </p>
          </div>
        </AnimatedSection>

        {/* Emissions by Scope */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {emissionsByScope.map((scope, index) => (
            <AnimatedSection key={scope.name} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{scope.name}</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-secondary">{scope.percentage}%</span>
                </div>
                <p className="text-3xl font-bold mb-2" style={{ color: scope.color }}>
                  {scope.value.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
                </p>
                <p className="text-sm text-muted-foreground">tCO₂e</p>
                <div className="mt-4 h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full"
                    style={{ width: `${scope.percentage}%`, backgroundColor: scope.color }}
                  />
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Scope Details */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Detalhamento Escopo 1 (Emissões Diretas)</h4>
              <div className="space-y-3">
                {scope1Details.map((item, i) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <span className="text-sm font-medium w-20 text-right">{item.value.toLocaleString('pt-BR')} t</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Detalhamento Escopo 3 (Cadeia de Valor)</h4>
              <div className="space-y-3">
                {scope3Details.map((item, i) => (
                  <div key={item.category} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground truncate mr-2">{item.category}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <span className="text-sm font-medium w-20 text-right">{item.value.toLocaleString('pt-BR')} t</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* First Inventory Notice */}
        <AnimatedSection>
          <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 mt-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">Primeiro Inventário Consolidado de Emissões</h4>
                <p className="text-muted-foreground mb-3">
                  Em 2024, o Grupo Construcap elaborou seu primeiro inventário corporativo consolidado de emissões 
                  de gases de efeito estufa (GEE), abrangendo todas as unidades de negócio e os três escopos de emissão 
                  conforme metodologia do GHG Protocol e ABNT NBR ISO 14064-1.
                </p>
                <p className="text-muted-foreground">
                  Este ano-base estabelece a referência para o acompanhamento da evolução das emissões nos próximos 
                  ciclos de reporte, permitindo a definição de metas de redução baseadas em dados consolidados e verificados.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Energy - GRI 302 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-bold">Energia</h2>
              <p className="text-muted-foreground">GRI 302-1, 302-3, 302-4 | Consumo e eficiência energética</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Energy Key Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Zap className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Consumo Total</p>
              <p className="text-2xl font-bold text-yellow-500">32,8</p>
              <p className="text-xs text-muted-foreground">milhões de kWh</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Sun className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Geração Solar</p>
              <p className="text-2xl font-bold text-orange-500">1,32</p>
              <p className="text-xs text-muted-foreground">milhões de kWh</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Leaf className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Energia Renovável</p>
              <p className="text-2xl font-bold text-emerald-500">14,9%</p>
              <p className="text-xs text-muted-foreground">do consumo total</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <TrendingDown className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Redução vs 2023</p>
              <p className="text-2xl font-bold text-blue-500">-8,2%</p>
              <p className="text-xs text-muted-foreground">em intensidade energética</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Energy by Source and Unit */}
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Consumo por Fonte</h4>
              <div className="space-y-4">
                {energyBySource.map((item, index) => (
                  <div key={item.source}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.source}</span>
                      <span className="text-sm font-medium">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Consumo por Unidade de Negócio</h4>
              <div className="space-y-4">
                {energyByUnit.map((item, index) => (
                  <div key={item.unit}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.unit}</span>
                      <span className="text-sm text-muted-foreground">{(item.value / 1000000).toFixed(1)} mi kWh ({item.percentage}%)</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Water - GRI 303 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-blue-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-2xl font-bold">Água</h2>
              <p className="text-muted-foreground">GRI 303-1, 303-3, 303-5 | Captação e gestão de recursos hídricos</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Captação Total</p>
              <p className="text-3xl font-bold text-blue-500">{(waterData.totalWithdrawal / 1000).toFixed(1)}</p>
              <p className="text-xs text-muted-foreground">mil megalitros</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Água Pluvial</p>
              <p className="text-3xl font-bold text-cyan-500">{waterData.rainwaterCaptured.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">megalitros</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Taxa de Reuso</p>
              <p className="text-3xl font-bold text-emerald-500">{waterData.recyclingRate}%</p>
              <p className="text-xs text-muted-foreground">da água consumida</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Redução vs 2023</p>
              <p className="text-3xl font-bold text-emerald-500">-{waterData.reductionVsLastYear}%</p>
              <p className="text-xs text-muted-foreground">no consumo total</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">Captação de Água por Fonte</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {waterBySource.map((item, index) => (
                <div key={item.source} className="p-4 rounded-xl bg-secondary/50 text-center">
                  <p className="text-2xl font-bold text-blue-500">{item.percentage}%</p>
                  <p className="text-sm font-medium">{item.source}</p>
                  <p className="text-xs text-muted-foreground">{item.value.toLocaleString('pt-BR')} megalitros</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Waste - GRI 306 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Recycle className="w-8 h-8 text-purple-500" />
            <div>
              <h2 className="text-2xl font-bold">Resíduos</h2>
              <p className="text-muted-foreground">GRI 306-1, 306-2, 306-3, 306-4, 306-5 | Geração e destinação</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Resíduos Gerados</p>
              <p className="text-3xl font-bold text-purple-500">{wasteData.totalGenerated.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">toneladas</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Resíduos Reciclados</p>
              <p className="text-3xl font-bold text-emerald-500">{wasteData.recycled.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">toneladas</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Taxa de Reciclagem</p>
              <p className="text-3xl font-bold text-emerald-500">{wasteData.recyclingRate}%</p>
              <p className="text-xs text-muted-foreground">do total gerado</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-sm text-muted-foreground mb-1">Resíduos Perigosos</p>
              <p className="text-3xl font-bold text-red-500">{wasteData.hazardous.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">toneladas (Classe I)</p>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Classificação dos Resíduos (NBR 10.004)</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={wasteByClass}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percentage }) => `${percentage}%`}
                    >
                      {wasteByClass.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value.toLocaleString('pt-BR')} t`, '']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2 mt-4">
                {wasteByClass.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <span>{item.name}</span>
                    </div>
                    <span className="font-medium">{item.value.toLocaleString('pt-BR')} t</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Destinação Final dos Resíduos</h4>
              <div className="space-y-4">
                {wasteDestination.map((item, index) => (
                  <div key={item.destination} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">{item.destination}</span>
                        <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Biodiversity - GRI 304 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-emerald-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-8 h-8 text-emerald-500" />
            <div>
              <h2 className="text-2xl font-bold">Biodiversidade</h2>
              <p className="text-muted-foreground">GRI 304-1, 304-2, 304-3 | Conservação e manejo de áreas naturais</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A Urbia, empresa do Grupo responsável pela gestão de parques urbanos e naturais, 
            desenvolve programas de conservação, restauração ecológica e educação ambiental 
            em áreas de grande relevância para a biodiversidade brasileira.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { label: "Áreas Protegidas", value: biodiversityData.areasProtected, unit: "parques" },
            { label: "Hectares Geridos", value: biodiversityData.hectaresManaged.toLocaleString('pt-BR'), unit: "hectares" },
            { label: "Espécies Monitoradas", value: biodiversityData.speciesMonitored, unit: "espécies" },
            { label: "Árvores Plantadas", value: biodiversityData.treesPlanted.toLocaleString('pt-BR'), unit: "mudas" },
            { label: "Áreas Restauradas", value: biodiversityData.restoredAreas, unit: "hectares" },
          ].map((item, index) => (
            <AnimatedSection key={item.label} delay={index * 50}>
              <div className="bg-card rounded-2xl border border-border p-5 text-center">
                <p className="text-3xl font-bold text-emerald-500">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.unit}</p>
                <p className="text-sm font-medium mt-1">{item.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">Programas de Conservação</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Monitoramento de fauna e flora",
                "Restauração de áreas degradadas",
                "Controle de espécies invasoras",
                "Educação ambiental para visitantes",
                "Pesquisa científica e parcerias",
                "Manejo de trilhas ecológicas",
                "Proteção de nascentes",
                "Corredores ecológicos",
                "Combate a incêndios florestais"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Minas Arena Highlight */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8" />
              <h2 className="text-2xl font-bold">Destaque: Minas Arena - LEED Platinum</h2>
            </div>
            <p className="text-primary-foreground/90 mb-6">
              O Estádio Mineirão, administrado pela Minas Arena, é referência mundial em 
              sustentabilidade esportiva, sendo o primeiro estádio da América do Sul a 
              receber a certificação LEED Platinum.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "51%", label: "Redução no consumo de água" },
                { value: "1,3 MW", label: "Capacidade solar instalada" },
                { value: "LEED", label: "Certificação Platinum" },
                { value: "15.337", label: "Megalitros de água pluvial" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-primary-foreground/10 rounded-xl text-center">
                  <p className="text-3xl font-bold">{item.value}</p>
                  <p className="text-sm text-primary-foreground/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Iniciativas Ambientais</h2>
              <p className="text-muted-foreground">Principais projetos e programas em execução</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {environmentalInitiatives.map((initiative, index) => (
            <AnimatedSection key={initiative.title} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold">{initiative.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{initiative.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{initiative.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-medium text-primary">{initiative.impact}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Certificações Ambientais</h2>
              <p className="text-muted-foreground">Reconhecimentos e conformidades</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={cert.name} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold">{cert.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500">{cert.status}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                <p className="text-xs text-muted-foreground">Escopo: {cert.scope}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

    </ReportLayout>
  );
};

export default EnvironmentalPage;