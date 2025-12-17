import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building2, 
  Landmark, 
  Heart, 
  Truck, 
  PieChart, 
  BarChart3, 
  Target, 
  ArrowUpRight, 
  ArrowDownRight,
  CheckCircle2,
  CircleDot,
  Briefcase,
  Factory,
  MapPin,
  Globe,
  Shield,
  Wallet,
  Receipt,
  TrendingDown,
  Scale
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart as RechartsPie, Pie, Legend } from "recharts";
import constructionHero from "@/assets/report/construction-hero.jpg";

// GRI 201-1 - Valor Econômico Gerado e Distribuído
const economicData = {
  valorGerado: 1649855, // R$ mil
  valorDistribuido: 1376002, // R$ mil
  valorRetido: 273853, // R$ mil
};

const distributionBreakdown = [
  { 
    category: "Custos Operacionais", 
    value: 892456, 
    percentage: 64.9,
    description: "Pagamentos a fornecedores, materiais e serviços",
    color: "hsl(var(--primary))",
    icon: Truck
  },
  { 
    category: "Colaboradores", 
    value: 312847, 
    percentage: 22.7,
    description: "Salários, benefícios, encargos sociais e PLR",
    color: "hsl(142, 76%, 36%)",
    icon: Users
  },
  { 
    category: "Tributos e Impostos", 
    value: 134562, 
    percentage: 9.8,
    description: "Impostos federais, estaduais e municipais",
    color: "hsl(221, 83%, 53%)",
    icon: Landmark
  },
  { 
    category: "Investidores", 
    value: 28945, 
    percentage: 2.1,
    description: "Dividendos e remuneração do capital",
    color: "hsl(262, 83%, 58%)",
    icon: Briefcase
  },
  { 
    category: "Comunidades", 
    value: 7192, 
    percentage: 0.5,
    description: "Investimentos sociais voluntários",
    color: "hsl(0, 84%, 60%)",
    icon: Heart
  },
];

// Dados para gráfico de barras comparativo
const yearlyComparison = [
  { year: "2022", gerado: 1423500, distribuido: 1189200 },
  { year: "2023", gerado: 1532780, distribuido: 1278450 },
  { year: "2024", gerado: 1649855, distribuido: 1376002 },
];

// GRI 204-1 - Fornecedores Locais
const supplierData = {
  totalFornecedores: 3847,
  fornecedoresLocais: 2693,
  percentualLocal: 70,
  gastoLocal: 624589, // R$ mil
  percentualGastoLocal: 70,
};

// Dados por unidade de negócio
const businessUnitsEconomic = [
  {
    unit: "Construcap Engenharia",
    revenue: 1245000,
    description: "Obras de infraestrutura, edificações industriais e comerciais",
    employees: 4200,
    projects: 23,
    highlight: "Maior contribuinte para receita do Grupo"
  },
  {
    unit: "Urbia",
    revenue: 189500,
    description: "Concessão e gestão de parques urbanos e naturais",
    employees: 1850,
    projects: 12,
    highlight: "Crescimento de 15% na visitação"
  },
  {
    unit: "Minas Arena",
    revenue: 98400,
    description: "Gestão do Estádio Mineirão e Esplanada",
    employees: 650,
    projects: 3,
    highlight: "Recorde de eventos realizados"
  },
  {
    unit: "Inova Saúde",
    revenue: 87200,
    description: "Gestão hospitalar e serviços de saúde",
    employees: 2100,
    projects: 4,
    highlight: "Expansão da capacidade de atendimento"
  },
  {
    unit: "Ambicap",
    revenue: 29755,
    description: "Gestão ambiental e valorização de resíduos",
    employees: 320,
    projects: 8,
    highlight: "Novos contratos de destinação de resíduos"
  },
];

// Investimentos (CAPEX)
const investments = [
  { category: "Equipamentos e Maquinário", value: 78500, percentage: 42 },
  { category: "Tecnologia e Inovação", value: 32400, percentage: 17 },
  { category: "Infraestrutura Operacional", value: 45200, percentage: 24 },
  { category: "Sustentabilidade e Meio Ambiente", value: 18900, percentage: 10 },
  { category: "Capacitação e Desenvolvimento", value: 12800, percentage: 7 },
];

// Indicadores de eficiência
const efficiencyIndicators = [
  { indicator: "Margem EBITDA", value: "12,8%", trend: "up", change: "+1,2 p.p." },
  { indicator: "Retorno sobre Capital", value: "9,4%", trend: "up", change: "+0,8 p.p." },
  { indicator: "Liquidez Corrente", value: "1,45", trend: "stable", change: "0,0" },
  { indicator: "Índice de Endividamento", value: "42%", trend: "down", change: "-3 p.p." },
];

// Impostos por esfera
const taxBreakdown = [
  { sphere: "Federal", value: 78450, percentage: 58.3 },
  { sphere: "Estadual", value: 41230, percentage: 30.6 },
  { sphere: "Municipal", value: 14882, percentage: 11.1 },
];

// Presença geográfica econômica
const geographicPresence = [
  { region: "Sudeste", states: "SP, RJ, MG, ES", contribution: 62 },
  { region: "Nordeste", states: "BA, PE, CE, MA", contribution: 18 },
  { region: "Centro-Oeste", states: "DF, GO, MT, MS", contribution: 12 },
  { region: "Sul", states: "PR, SC, RS", contribution: 5 },
  { region: "Norte", states: "PA, AM", contribution: 3 },
];

const EconomicPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={constructionHero} 
            alt="Construção e infraestrutura" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 7</span>
                <span>•</span>
                <span>GRI 201-1, 204-1</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Econômico</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O desempenho econômico do Grupo Construcap em 2024 evidencia a solidez do modelo 
                de negócios e a capacidade de criar valor compartilhado com stakeholders.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Geração e Distribuição de Valor (GRI 201-1)</h2>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap gerou R$ 1,65 bilhão em valor econômico em 2024, demonstrando 
              crescimento consistente e capacidade de enfrentar um ambiente operacional desafiador. 
              Desse total, R$ 1,38 bilhão foi distribuído entre os diversos stakeholders, 
              incluindo colaboradores, fornecedores, governo, investidores e comunidades.
            </p>
            <p className="text-muted-foreground">
              O valor retido de R$ 273,9 milhões permite reinvestimento em capacidade produtiva, 
              inovação tecnológica, práticas sustentáveis e expansão das operações, assegurando 
              a perenidade do negócio e a geração contínua de valor para todas as partes interessadas.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Main Economic Metrics - GRI 201-1 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Valor Econômico Gerado e Distribuído</h2>
              <p className="text-muted-foreground">GRI 201-1 | Valores em R$ milhões</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-green-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <ArrowUpRight className="w-7 h-7 text-green-500" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Valor Econômico Gerado</p>
              <p className="text-4xl font-bold text-green-500">
                R$ {(economicData.valorGerado / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
              </p>
              <p className="text-sm text-muted-foreground">milhões</p>
              <p className="text-xs text-green-500 mt-2">+7,6% vs 2023</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-blue-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-7 h-7 text-blue-500" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Valor Econômico Distribuído</p>
              <p className="text-4xl font-bold text-blue-500">
                R$ {(economicData.valorDistribuido / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
              </p>
              <p className="text-sm text-muted-foreground">milhões</p>
              <p className="text-xs text-blue-500 mt-2">83,4% do valor gerado</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">Valor Econômico Retido</p>
              <p className="text-4xl font-bold text-primary">
                R$ {(economicData.valorRetido / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1 })}
              </p>
              <p className="text-sm text-muted-foreground">milhões</p>
              <p className="text-xs text-primary mt-2">16,6% reinvestido</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Yearly Comparison Chart */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-semibold mb-6">Evolução do Valor Econômico (2022-2024)</h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(1)}B`} />
                  <Tooltip 
                    formatter={(value: number) => [`R$ ${(value / 1000).toLocaleString('pt-BR')} milhões`, '']}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Bar dataKey="gerado" name="Valor Gerado" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="distribuido" name="Valor Distribuído" fill="hsl(221, 83%, 53%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Distribution Breakdown */}
      <section className="py-12">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">Distribuição do Valor Econômico</h2>
          <p className="text-muted-foreground mb-8">
            O valor distribuído beneficia diversos grupos de stakeholders, gerando impacto 
            econômico positivo nas regiões onde o Grupo atua.
          </p>
        </AnimatedSection>

        <div className="space-y-4">
          {distributionBreakdown.map((item, index) => (
            <AnimatedSection key={item.category} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">{item.category}</h3>
                      <div className="text-right">
                        <span className="text-xl font-bold" style={{ color: item.color }}>
                          R$ {(item.value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 1 })} mi
                        </span>
                        <span className="text-sm text-muted-foreground ml-2">({item.percentage}%)</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-3 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Business Units Performance */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Desempenho por Unidade de Negócio</h2>
              <p className="text-muted-foreground">Contribuição econômica de cada empresa do Grupo</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessUnitsEconomic.map((unit, index) => (
            <AnimatedSection key={unit.unit} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/50 transition-colors">
                <h3 className="font-bold text-lg mb-2">{unit.unit}</h3>
                <p className="text-sm text-muted-foreground mb-4">{unit.description}</p>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Receita</span>
                    <span className="font-bold text-primary">R$ {(unit.revenue / 1000).toLocaleString('pt-BR')} mi</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Colaboradores</span>
                    <span className="font-semibold">{unit.employees.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Projetos ativos</span>
                    <span className="font-semibold">{unit.projects}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-primary font-medium">{unit.highlight}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Local Suppliers - GRI 204-1 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Fornecedores Locais</h2>
              <p className="text-muted-foreground">GRI 204-1 | Desenvolvimento da economia local</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            O Grupo Construcap prioriza a contratação de fornecedores locais como estratégia 
            para fortalecer as economias regionais, reduzir impactos logísticos e fomentar 
            o desenvolvimento das comunidades onde atua.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-4xl font-bold text-primary">{supplierData.totalFornecedores.toLocaleString('pt-BR')}</p>
              <p className="text-sm text-muted-foreground">Fornecedores ativos</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-4xl font-bold text-green-500">{supplierData.fornecedoresLocais.toLocaleString('pt-BR')}</p>
              <p className="text-sm text-muted-foreground">Fornecedores locais</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-4xl font-bold text-blue-500">{supplierData.percentualLocal}%</p>
              <p className="text-sm text-muted-foreground">% de fornecedores locais</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <p className="text-4xl font-bold text-purple-500">R$ {(supplierData.gastoLocal / 1000).toFixed(0)} mi</p>
              <p className="text-sm text-muted-foreground">Gasto com fornecedores locais</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-bold mb-4">Critérios para Definição de Fornecedor Local</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Sediado no mesmo estado da operação",
                "Contratação de mão de obra local",
                "Aquisição de insumos regionais",
                "Contribuição para economia local",
                "Capacidade de atendimento próximo",
                "Registro em órgãos locais"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Investments - CAPEX */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Investimentos (CAPEX)</h2>
              <p className="text-muted-foreground">Alocação de recursos para crescimento sustentável</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="space-y-4">
              {investments.map((item, index) => (
                <div key={item.category} className="bg-card rounded-xl border border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{item.category}</span>
                    <span className="font-bold text-primary">R$ {(item.value / 1000).toFixed(1)} mi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-12 text-right">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-bold mb-4">Total Investido em 2024</h3>
              <p className="text-5xl font-bold text-primary mb-2">R$ 187,8 mi</p>
              <p className="text-muted-foreground mb-6">+12% em relação a 2023</p>
              
              <h4 className="font-semibold mb-3">Destaques:</h4>
              <ul className="space-y-2">
                {[
                  "Modernização de frota de equipamentos",
                  "Digitalização de processos operacionais",
                  "Sistemas de gestão ambiental",
                  "Plataformas de segurança do trabalho",
                  "Programas de capacitação profissional"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CircleDot className="w-3 h-3 mt-1.5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tax Contribution */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Landmark className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Contribuição Tributária</h2>
              <p className="text-muted-foreground">Impostos e tributos recolhidos em 2024</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="font-bold mb-6">Total de Tributos: R$ 134,6 milhões</h3>
              <div className="space-y-4">
                {taxBreakdown.map((item, index) => (
                  <div key={item.sphere}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{item.sphere}</span>
                      <span className="text-sm">
                        <span className="font-bold">R$ {(item.value / 1000).toFixed(1)} mi</span>
                        <span className="text-muted-foreground ml-2">({item.percentage}%)</span>
                      </span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-bold mb-4">Impacto da Contribuição Tributária</h3>
              <p className="text-muted-foreground mb-4">
                Os tributos recolhidos pelo Grupo Construcap contribuem para o financiamento 
                de serviços públicos essenciais nas regiões onde atua.
              </p>
              <ul className="space-y-3">
                {[
                  "Infraestrutura pública e saneamento",
                  "Educação e saúde pública",
                  "Segurança e ordem pública",
                  "Programas sociais e assistência",
                  "Desenvolvimento regional"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Efficiency Indicators */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Indicadores de Eficiência</h2>
              <p className="text-muted-foreground">Métricas financeiras e operacionais</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {efficiencyIndicators.map((item, index) => (
            <AnimatedSection key={item.indicator} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">{item.indicator}</p>
                <p className="text-3xl font-bold mb-2">{item.value}</p>
                <div className={`inline-flex items-center gap-1 text-sm ${
                  item.trend === 'up' ? 'text-green-500' : 
                  item.trend === 'down' ? 'text-red-500' : 'text-muted-foreground'
                }`}>
                  {item.trend === 'up' && <ArrowUpRight className="w-4 h-4" />}
                  {item.trend === 'down' && <ArrowDownRight className="w-4 h-4" />}
                  <span>{item.change}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Presença Geográfica</h2>
              <p className="text-muted-foreground">Contribuição econômica por região</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {geographicPresence.map((item, index) => (
            <AnimatedSection key={item.region} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-5 text-center hover:border-primary/50 transition-colors">
                <p className="font-bold text-lg">{item.region}</p>
                <p className="text-xs text-muted-foreground mb-3">{item.states}</p>
                <p className="text-2xl font-bold text-primary">{item.contribution}%</p>
                <p className="text-xs text-muted-foreground">da receita</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Economic Resilience */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Resiliência Econômica</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              O Grupo Construcap mantém práticas de gestão que asseguram resiliência financeira 
              e capacidade de enfrentar cenários adversos, protegendo o valor de stakeholders.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Fatores de Resiliência</h3>
                <ul className="space-y-2">
                  {[
                    "Diversificação de receitas em 5 segmentos",
                    "Presença em todas as regiões do Brasil",
                    "Carteira de contratos de longo prazo",
                    "Gestão conservadora de caixa e liquidez",
                    "Baixo nível de alavancagem financeira"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Perspectivas 2025</h3>
                <ul className="space-y-2">
                  {[
                    "Crescimento projetado de 8-10%",
                    "Novos contratos em infraestrutura",
                    "Expansão de operações de concessão",
                    "Investimentos em tecnologia e inovação",
                    "Fortalecimento da agenda ESG"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <Target className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default EconomicPage;