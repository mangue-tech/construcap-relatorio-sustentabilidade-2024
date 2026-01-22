import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import {
  Leaf,
  Zap,
  Droplets,
  Recycle,
  Sun,
  TreePine,
  Factory,
  Target,
  CheckCircle2,
  Award,
  BarChart3,
  Cloud,
  Building2,
  Flame,
  AlertTriangle,
  Globe,
  Shield,
  FileText,
  Truck,
  Hospital,
  MapPin,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import environmentalHero from "@/assets/report/environmental-hero.jpg";

// GRI 305 - Emissões de GEE por Escopo (dados corretos do documento)
const emissionsData = {
  scope1: 15116.357,
  scope2: 1617.679,
  scope3: 16816.781,
  total: 33550.818,
  biogenic: 3864.367,
};

const emissionsByScope = [
  {
    name: "Escopo 1",
    value: 15116.357,
    percentage: 45.1,
    color: "hsl(var(--primary))",
    description: "Emissões diretas",
  },
  {
    name: "Escopo 2",
    value: 1617.679,
    percentage: 4.8,
    color: "hsl(221, 83%, 53%)",
    description: "Energia elétrica adquirida",
  },
  { name: "Escopo 3", value: 16816.781, percentage: 50.1, color: "hsl(142, 76%, 36%)", description: "Cadeia de valor" },
];

// Detalhamento Escopo 1 (dados corretos)
const scope1Details = [
  { source: "Combustão móvel", value: 12871.572, percentage: 85.2 },
  { source: "Combustão estacionária", value: 1507.707, percentage: 10.0 },
  { source: "Emissões fugitivas (HFCs e extintores)", value: 737.078, percentage: 4.8 },
];

// Detalhamento Escopo 3 (dados corretos)
const scope3Categories = [
  {
    category: "Categoria 1 – Bens e serviços adquiridos",
    value: 9231.82,
    percentage: 54.9,
    description: "concreto e aço como principais insumos",
  },
  {
    category: "Categoria 6 – Viagens a negócios",
    value: 5868.542,
    percentage: 34.9,
    description: "viagens aéreas e hospedagens corporativas",
  },
  {
    category: "Categoria 5 – Resíduos gerados na operação",
    value: 1716.419,
    percentage: 10.2,
    description: "4.051,36 t enviados para aterro, incineração e recicladores",
  },
];

// Emissões por unidade de negócio
const emissionsByUnit = [
  { unit: "Construcap Construção Civil", value: 23029.79, percentage: 68.6 },
  { unit: "Urbia/Ambicap e demais", value: 1078.41, percentage: 3.3 },
  { unit: "Inova Saúde", value: 9203.174, percentage: 27.4 },
  { unit: "Minas Arena", value: 239.444, percentage: 0.7 },
];

// GRI 302 - Energia
const energyData = {
  totalConsumption: 32777724.33, // kWh
  totalEmissionsScope2: 1795.075, // tCO₂e
};

// Hospitais da Inova Saúde - energia
const hospitalEnergy = [
  { hospital: "Hospital da Mulher (HM)", consumption: 10165190, emissions: 553.621 },
  { hospital: "Hospital Regional de Sorocaba (HSOR)", consumption: null, emissions: 314.248 },
  { hospital: "Hospital Regional de São José dos Campos (HSJC)", consumption: null, emissions: 256.579 },
];

// Minas Arena - energia
const minasArenaEnergy = {
  solarGeneration: 1317600, // kWh
  totalConsumption: 5564830, // kWh
  solarPercentage: 23.7,
};

// GRI 303 - Água
// Inova Saúde - água
const inovaWater = {
  total: 119.281, // megalitros
  units: [
    { hospital: "Hospital da Mulher (HM)", consumption: 59.198 },
    { hospital: "Hospital Regional de Sorocaba (HSOR)", consumption: 34.04 },
    { hospital: "Hospital Regional de São José dos Campos (HSJC)", consumption: 26.043 },
  ],
};

// Minas Arena - água
const minasArenaWater = {
  rainwaterReused: 15337, // m³
  potableWater: 10557, // m³
  reductionPercentage: 51,
};

// GRI 301 - Materiais
const materialsData = {
  concrete: { volume: 24458.63, unit: "m³", emissions: 7337.589 },
  steel: { weight: 1397956.75, unit: "kg", emissions: 1894.231 },
  totalEmissions: 9231.82,
};

// GRI 306 - Resíduos
const wasteData = {
  totalGenerated: 4051.36, // toneladas
  totalEmissions: 1716.419, // tCO₂e
  biogenicEmissions: 1397.926, // tCO₂
  breakdown: [
    { destination: "Aterro sanitário", weight: 2103.946, emissions: 1129.414 },
    { destination: "Incineração", weight: 1830.268, emissions: 326.14, biogenic: 1386.442 },
    { destination: "Reciclagem", weight: 117.146, emissions: 260.865 },
  ],
};

// Certificações Construcap
const certificationsConstrucap = [
  {
    name: "NBR ISO 9001:2015",
    description: "Sistema de Gestão da Qualidade",
    scope: "Construcap - primeira certificação em 2014",
    validity: "Válida até 17/07/2026",
  },
  {
    name: "NBR ISO 14001:2015",
    description: "Sistema de Gestão Ambiental",
    scope: "Construcap - certificada desde 2014",
    validity: "Válida até 16/07/2026",
  },
  {
    name: "ISO 45001:2018",
    description: "Saúde e Segurança Ocupacional",
    scope: "Construcap - obtida em 2023",
    validity: "Válida até 16/07/2026",
  },
  {
    name: "SIAC 2021 – Nível A",
    description: "Sistema de Avaliação da Conformidade de Empresas de Serviços e Obras da Construção Civil",
    scope: "Edificações, infraestrutura viária e saneamento",
    validity: "Válida até 17/07/2026",
  },
  {
    name: "Certificado de Regularidade de Consumidor de Recurso Florestal",
    description: "Regularidade ambiental para uso de recursos florestais",
    scope: "Construcap",
    validity: "Ano-base 2024",
  },
];

// Certificações Minas Arena
const certificationsMinas = [
  {
    name: "LEED Platinum",
    description: "Primeiro estádio do mundo a obter esta certificação (2014)",
    scope: "Minas Arena - Mineirão",
    validity: "Certificado desde 2014",
  },
  {
    name: "Pacto Global",
    description: "Rede Brasil da ONU",
    scope: "Minas Arena",
    validity: "Membro desde 2016",
  },
  {
    name: "Selo BH Sustentável",
    description: "Categoria Ouro - Prefeitura de Belo Horizonte",
    scope: "Minas Arena",
    validity: "Vigente",
  },
  {
    name: "SISBRACE Cinco Bolas",
    description: "Classificação máxima no Sistema Brasileiro de Classificação de Estádios",
    scope: "Minas Arena",
    validity: "Vigente",
  },
];

// Certificações Urbia
const certificationsUrbia = [
  {
    name: "Pacto Global da ONU",
    description: "Compromisso com o desenvolvimento sustentável",
    scope: "Urbia Parques",
    validity: "Adesão em 17/11/2022",
  },
];

// Certificações Inova Saúde
const certificationsInova = [
  {
    name: "ISO 9001:2015",
    description: "Sistema de Gestão da Qualidade",
    scope: "Inova Saúde - Unidades Hospitalares",
    validity: "Válida até 2026",
  },
  {
    name: "ISO 14001:2015",
    description: "Sistema de Gestão Ambiental",
    scope: "Inova Saúde - Unidades Hospitalares",
    validity: "Válida até 2026",
  },
  {
    name: "ISO 45001:2018",
    description: "Sistema de Saúde e Segurança Ocupacional",
    scope: "Inova Saúde - Unidades Hospitalares",
    validity: "Válida até 2026",
  },
];

// Todas as certificações combinadas
const certifications = [...certificationsConstrucap, ...certificationsUrbia, ...certificationsInova, ...certificationsMinas];

const CHART_COLORS = ["hsl(var(--primary))", "hsl(221, 83%, 53%)", "hsl(142, 76%, 36%)", "hsl(48, 96%, 53%)"];

const EnvironmentalPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={environmentalHero}
            alt="Parque natural brasileiro"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 8</span>
                <span>•</span>
                <span>GRI 301, 302, 303, 304, 305, 306</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Ambiental</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A gestão ambiental do Grupo Construcap é estruturada para garantir que suas operações em engenharia
                pesada, gestão hospitalar, concessões de parques naturais e urbanos e administração de arenas esportivas
                ocorram de forma responsável.
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
              A gestão ambiental do Grupo Construcap é estruturada para garantir que suas operações em engenharia
              pesada, gestão hospitalar, concessões de parques naturais e urbanos e administração de arenas esportivas
              ocorram de forma responsável, com foco em prevenção de impactos, uso eficiente de recursos, conformidade
              regulatória e mitigação de emissões de gases de efeito estufa (GEE).
            </p>
            <p className="text-muted-foreground">
              Em 2024, um marco relevante foi a conclusão do primeiro inventário corporativo de emissões de GEE,
              cobrindo Escopos 1, 2 e 3 para todo o Grupo, além da consolidação de dados ambientais de unidades-chave
              como Inova Saúde e Minas Arena, que reforçam a maturidade da agenda ambiental e climática da Construcap.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.1 Gestão de Recursos e Insumos - GRI 301 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Factory className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">8.1 Gestão de Recursos e Insumos</h2>
              <p className="text-muted-foreground">GRI 301 | Materiais e insumos utilizados</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              A Construcap utiliza insumos intensivos em carbono e recursos naturais, em especial concreto, aço,
              materiais de construção e insumos hospitalares. No recorte de 2024, apenas na Construcap Construção Civil
              foram consumidos volumes significativos de materiais com impacto relevante na pegada de carbono.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-bold mb-2">Concreto</h4>
                <p className="text-3xl font-bold text-primary mb-1">24.458,63 m³</p>
                <p className="text-sm text-muted-foreground mb-2">Volume consumido</p>
                <p className="text-lg font-semibold text-emerald-500">7.337,589 tCO₂e</p>
                <p className="text-xs text-muted-foreground">Emissões associadas</p>
              </div>

              <div className="p-6 rounded-xl bg-secondary/50 border border-border">
                <h4 className="font-bold mb-2">Aço</h4>
                <p className="text-3xl font-bold text-primary mb-1">1.397.956,75 kg</p>
                <p className="text-sm text-muted-foreground mb-2">Peso consumido</p>
                <p className="text-lg font-semibold text-emerald-500">1.894,231 tCO₂e</p>
                <p className="text-xs text-muted-foreground">Emissões associadas</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-sm">
                <strong className="text-foreground">Total Escopo 3 - Categoria 1:</strong>{" "}
                {materialsData.totalEmissions.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂e em bens e
                serviços adquiridos. Esses números evidenciam que parte importante da pegada de carbono do Grupo está
                "incorporada" nos materiais utilizados, o que reforça a necessidade de diálogo com fornecedores,
                especificação de materiais de menor intensidade de carbono, otimização de projetos e maior uso de
                soluções de engenharia de baixo carbono.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.2 Consumo de Energia - GRI 302 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-bold">8.2 Consumo de Energia e Eficiência Energética</h2>
              <p className="text-muted-foreground">GRI 302 | Consumo e eficiência energética</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              O consumo energético do Grupo reflete o perfil das diferentes operações. Em 2024, o consumo total de
              eletricidade das empresas da Construcap foi de{" "}
              <strong className="text-foreground">32.777.724,33 kWh</strong>, resultando em{" "}
              <strong className="text-foreground">1.795,075 tCO₂e</strong> de emissões associadas ao Escopo 2,
              considerando o fator de emissão oficial do SIN/MCTI.
            </p>
          </div>
        </AnimatedSection>

        {/* Hospitais da Inova Saúde */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Hospital className="w-6 h-6 text-blue-500" />
              <h3 className="font-bold text-lg">Hospitais da Inova Saúde</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              As unidades hospitalares, operando 24 horas por dia, concentram grande parte da demanda energética:
            </p>
            <div className="space-y-4">
              {hospitalEnergy.map((hospital, index) => (
                <div key={hospital.hospital} className="p-4 rounded-xl bg-secondary/50">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="font-medium">{hospital.hospital}</span>
                    <div className="flex items-center gap-4">
                      {hospital.consumption && (
                        <span className="text-sm text-muted-foreground">
                          {hospital.consumption.toLocaleString("pt-BR")} kWh
                        </span>
                      )}
                      <span className="text-yellow-500 font-bold">
                        {hospital.emissions.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂e
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-sm text-muted-foreground">
                Além do inventário de GEE, o GRI da Inova reforça que esses hospitais foram projetados com foco em
                eficiência energética, incluindo <strong className="text-foreground">100% de luminárias LED</strong>,
                sensores de presença, sistemas de aquecimento de água solar e a gás e controle automatizado de
                iluminação via BMS (Building Management System) nas áreas comuns.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Minas Arena */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Sun className="w-6 h-6 text-orange-500" />
              <h3 className="font-bold text-lg">Minas Arena</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Na Minas Arena, o desempenho energético é igualmente relevante. Em 2024, o estádio operou uma usina
              fotovoltaica com resultados expressivos:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-orange-500/10 text-center">
                <p className="text-3xl font-bold text-orange-500">1.317.600</p>
                <p className="text-sm text-muted-foreground">kWh gerados pela usina solar</p>
              </div>
              <div className="p-4 rounded-xl bg-yellow-500/10 text-center">
                <p className="text-3xl font-bold text-yellow-500">5.564.830</p>
                <p className="text-sm text-muted-foreground">kWh de consumo total</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 text-center">
                <p className="text-3xl font-bold text-emerald-500">23,7%</p>
                <p className="text-sm text-muted-foreground">do consumo suprido por solar</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              A modernização do sistema de iluminação esportiva para tecnologia LED contribuiu para maior eficiência
              energética e melhoria da qualidade luminosa, reforçando a posição do Mineirão como referência em gestão
              energética de grandes equipamentos urbanos.
            </p>
          </div>
        </AnimatedSection>

        {/* Outras unidades */}
        <AnimatedSection>
          <div className="bg-secondary/30 rounded-2xl p-6">
            <p className="text-sm text-muted-foreground">
              Canteiros de obras, parques urbanos e naturais e unidades administrativas também adotam ações de
              racionalização de consumo, como planejamento de uso de geradores, otimização de horas-máquina,
              substituição gradual de equipamentos menos eficientes e uso de LED em áreas comuns, ainda que os dados
              detalhados de cada canteiro não estejam consolidados neste ciclo.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.3 Gestão Hídrica - GRI 303 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-blue-950/10">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-2xl font-bold">8.3 Gestão Hídrica</h2>
              <p className="text-muted-foreground">GRI 303 | Captação e gestão de recursos hídricos</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Inova Saúde - Água */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Hospital className="w-6 h-6 text-blue-500" />
              <h3 className="font-bold text-lg">Inova Saúde</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Em 2024, a Inova Saúde monitorou o consumo de água em suas unidades, totalizando{" "}
              <strong className="text-foreground">
                {inovaWater.total.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} megalitros (ML)
              </strong>
              . As fontes são predominantemente de abastecimento público, com o HSJC incorporando também água de
              captação de chuva.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              {inovaWater.units.map((unit) => (
                <div key={unit.hospital} className="p-4 rounded-xl bg-blue-500/10 text-center">
                  <p className="text-2xl font-bold text-blue-500">
                    {unit.consumption.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                  </p>
                  <p className="text-xs text-muted-foreground">megalitros</p>
                  <p className="text-sm font-medium mt-1">{unit.hospital}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-secondary/50">
              <p className="text-sm text-muted-foreground">
                O tratamento de efluentes é realizado para cumprimento integral do Artigo 19-A do Regulamento da Lei
                Estadual nº 997/76 (Decreto nº 8.468/76), garantindo que parâmetros de poluentes se mantenham dentro dos
                limites legais antes do descarte, com base em análises periódicas e registros de hidrômetros e de
                qualidade de efluentes.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Minas Arena - Água */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-6 h-6 text-cyan-500" />
              <h3 className="font-bold text-lg">Minas Arena</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              A Minas Arena apresenta um caso emblemático de gestão hídrica integrada. Em 2024:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <div className="p-4 rounded-xl bg-cyan-500/10 text-center">
                <p className="text-3xl font-bold text-cyan-500">15.337</p>
                <p className="text-xs text-muted-foreground">m³ de água de chuva</p>
                <p className="text-sm font-medium mt-1">captados e reutilizados</p>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10 text-center">
                <p className="text-3xl font-bold text-blue-500">10.557</p>
                <p className="text-xs text-muted-foreground">m³ de água potável</p>
                <p className="text-sm font-medium mt-1">consumo da rede pública</p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 text-center">
                <p className="text-3xl font-bold text-emerald-500">51%</p>
                <p className="text-xs text-muted-foreground">de redução</p>
                <p className="text-sm font-medium mt-1">no consumo de água potável</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A água de reúso é utilizada em sanitários e irrigação do gramado. Essa estratégia diminui a pressão sobre
              a rede pública, reduz custos operacionais e fortalece a resiliência hídrica do estádio frente a cenários
              de escassez.
            </p>
          </div>
        </AnimatedSection>

        {/* Obras e Parques */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-lg">Obras e Parques</h3>
            </div>
            <p className="text-muted-foreground">
              Nos canteiros de obras, são adotadas práticas como caixas de sedimentação, reuso de água em serviços
              auxiliares e controle de efluentes para evitar carreamento de sedimentos e contaminantes. Em parques
              naturais e urbanos, o foco recai sobre a proteção de nascentes, drenagem ecológica e conservação de corpos
              hídricos.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.4 Biodiversidade - GRI 304 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <TreePine className="w-8 h-8 text-emerald-500" />
            <div>
              <h2 className="text-2xl font-bold">8.4 Biodiversidade e Áreas Naturais</h2>
              <p className="text-muted-foreground">GRI 304 | Conservação e manejo de áreas naturais</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              Por meio da Urbia e da Ambicap, o Grupo atua na gestão de parques naturais e urbanos, em âmbito municipal,
              estadual e federal, abrangendo áreas de lazer, esporte, turismo e unidades de conservação de elevada
              relevância ambiental, com papel estratégico na proteção da biodiversidade, no manejo responsável dos
              recursos naturais, na organização da visitação e na proteção dos ecossistemas. Entre os territórios nos
              quais o Grupo desenvolve atividades de gestão e operação destacam-se o Parque Nacional do Iguaçu (PR), o
              complexo de Cânions Verdes (RS/SC), o Parque Estadual da Cantareira (SP) e o Parque Estadual Alberto
              Löfgren – Horto Florestal (SP), além de parques urbanos de grande relevância ambiental, como o Parque
              Ibirapuera (SP) e outros parques municipais na cidade de São Paulo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <TreePine className="w-5 h-5 text-emerald-500" />
                  Ações em Parques e Áreas de Conservação
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Manejo de trilhas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Controle de erosão
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Recuperação de áreas degradadas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Monitoramento de fauna e flora
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Educação ambiental para visitantes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Combate a incêndios
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    Controle de espécies exóticas invasoras
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Mitigação em Obras de Infraestrutura
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Resgate de fauna
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Limitação de supressão vegetal
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Monitoramento de ruído, poeira e vibrações
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Atendimento rigoroso às condicionantes de licenciamento
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Em alinhamento com planos de manejo e diretrizes dos órgãos ambientais, as equipes ambientais implementam
              todas essas ações visando a conservação da biodiversidade e a minimização de impactos.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.5 Emissões de GEE - GRI 305 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Cloud className="w-8 h-8 text-emerald-500" />
            <div>
              <h2 className="text-2xl font-bold">8.5 Emissões de Gases de Efeito Estufa (GEE)</h2>
              <p className="text-muted-foreground">GRI 305-1, 305-2, 305-3 | GHG Protocol</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              Em 2024, o Grupo Construcap publicou seu primeiro inventário consolidado de emissões, elaborado pela
              Mangue Tech, com base no Programa Brasileiro GHG Protocol, no GHG Protocol Corporate Standard e na ABNT
              NBR ISO 14064-1, adotando o critério de controle operacional e incluindo empresas com participação
              societária relevante.
            </p>
          </div>
        </AnimatedSection>

        {/* Total Emissions Highlight */}
        <AnimatedSection>
          <div className="text-center p-8 bg-card rounded-2xl border border-border mb-8">
            <p className="text-sm text-muted-foreground mb-2">Emissões Totais de GEE em 2024</p>
            <p className="text-5xl lg:text-6xl font-bold text-emerald-500 mb-2">
              {emissionsData.total.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
            </p>
            <p className="text-lg text-muted-foreground">toneladas de CO₂ equivalente (tCO₂e)</p>
            <p className="text-sm text-muted-foreground mt-4">
              + {emissionsData.biogenic.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂ de emissões
              biogênicas
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
                  {scope.value.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                </p>
                <p className="text-sm text-muted-foreground mb-1">tCO₂e</p>
                <p className="text-xs text-muted-foreground">{scope.description}</p>
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
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Escopo 1 – Emissões Diretas</h4>
              <p className="text-sm text-muted-foreground mb-4">
                As emissões diretas totalizaram 15.116,357 tCO₂e, distribuídas em:
              </p>
              <div className="space-y-3">
                {scope1Details.map((item) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }} />
                      </div>
                      <span className="text-sm font-medium w-28 text-right">
                        {item.value.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} t
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                A predominância da combustão móvel reflete o uso intensivo de diesel e outros combustíveis em frota
                operacional e equipamentos de obras e operações distribuídas territorialmente.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Escopo 3 – Cadeia de Valor</h4>
              <p className="text-sm text-muted-foreground mb-4">
                As emissões de Escopo 3 somaram 16.816,781 tCO₂e, distribuídas em:
              </p>
              <div className="space-y-4">
                {scope3Categories.map((item) => (
                  <div key={item.category} className="p-3 rounded-lg bg-secondary/50">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm font-bold text-emerald-500">
                        {item.value.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} t
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* 8.6 Distribuição por Unidade de Negócio */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">8.6 Distribuição das Emissões por Unidade de Negócio</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Considerando o limite de controle operacional e participações relevantes:
            </p>
            <div className="space-y-4">
              {emissionsByUnit.map((item) => (
                <div key={item.unit}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{item.unit}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                      <span className="text-sm font-bold text-primary">
                        {item.value.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂e
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Esse perfil confirma as obras de engenharia pesada e a operação hospitalar como os principais vetores de
              emissões e, ao mesmo tempo, os principais focos de ações de descarbonização.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.7 Gestão de Resíduos - GRI 306 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Recycle className="w-8 h-8 text-purple-500" />
            <div>
              <h2 className="text-2xl font-bold">8.7 Gestão de Resíduos e Efluentes</h2>
              <p className="text-muted-foreground">GRI 306 | Geração e destinação</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              Em 2024, a geração de resíduos do Grupo totalizou{" "}
              <strong className="text-foreground">
                {wasteData.totalGenerated.toLocaleString("pt-BR", { minimumFractionDigits: 2 })} toneladas
              </strong>
              , com emissões associadas de{" "}
              <strong className="text-foreground">
                {wasteData.totalEmissions.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂e
              </strong>{" "}
              e
              <strong className="text-foreground">
                {" "}
                {wasteData.biogenicEmissions.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂
              </strong>{" "}
              biogênicas.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {wasteData.breakdown.map((item) => (
                <div key={item.destination} className="p-4 rounded-xl bg-secondary/50 text-center">
                  <p className="font-medium mb-2">{item.destination}</p>
                  <p className="text-2xl font-bold text-purple-500">
                    {item.weight.toLocaleString("pt-BR", { minimumFractionDigits: 3 })}
                  </p>
                  <p className="text-xs text-muted-foreground">toneladas</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {item.emissions.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂e
                  </p>
                  {item.biogenic && (
                    <p className="text-xs text-muted-foreground">
                      + {item.biogenic.toLocaleString("pt-BR", { minimumFractionDigits: 3 })} tCO₂ biog.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Hospital className="w-4 h-4 text-blue-500" />
                  Hospitais
                </h5>
                <p className="text-sm text-muted-foreground">
                  Seguem planos de gerenciamento de resíduos de serviços de saúde (PGRSS), em conformidade com ANVISA e
                  CONAMA, com rastreabilidade via MTR e CDF.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Obras
                </h5>
                <p className="text-sm text-muted-foreground">
                  Aplicam segregação por classes, aumento de reciclagem de resíduos de construção e destinação adequada
                  de resíduos perigosos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <h5 className="font-semibold mb-2 flex items-center gap-2">
                  <TreePine className="w-4 h-4 text-emerald-500" />
                  Parques e Arenas
                </h5>
                <p className="text-sm text-muted-foreground">
                  Mantêm sistemas de coleta seletiva, campanhas de sensibilização e parcerias com recicladores.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.8 Certificações Ambientais */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">8.8 Certificações Ambientais e LEED</h2>
              <p className="text-muted-foreground">Reconhecimentos e padrões internacionais</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-8">
              O Grupo Construcap conta com reconhecimentos ambientais que reforçam sua capacidade de operar ativos
              complexos dentro de padrões internacionais de sustentabilidade.
            </p>

            {/* Construcap */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Construcap</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsConstrucap.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-sm">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      <strong>Escopo:</strong> {cert.scope}
                    </p>
                    <p className="text-xs text-primary font-medium">{cert.validity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Minas Arena */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-bold">Minas Arena</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certificationsMinas.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-amber-500" />
                      <h4 className="font-bold text-sm">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">{cert.validity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Urbia */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-bold">Urbia Parques</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsUrbia.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:border-green-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-5 h-5 text-green-600" />
                      <h4 className="font-bold text-sm">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">{cert.validity}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inova Saúde */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Hospital className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-bold">Inova Saúde</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificationsInova.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-blue-500" />
                      <h4 className="font-bold text-sm">{cert.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-muted-foreground mb-1">
                      <strong>Escopo:</strong> {cert.scope}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{cert.validity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* LEED Platinum Highlight */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8" />
              <h3 className="text-2xl font-bold">Destaque: LEED Platinum - Mineirão</h3>
            </div>
            <p className="text-primary-foreground/90 mb-6">
              O Estádio Governador Magalhães Pinto – Mineirão consolidou-se como referência internacional em construção
              e operação sustentável. Em 2014, tornou-se o <strong>primeiro estádio do mundo</strong> a obter a
              certificação LEED Platinum, emitida pelo U.S. Green Building Council, pela excelência em práticas de
              construção sustentável.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: "LEED Platinum", label: "Primeira certificação mundial para estádio" },
                { value: "Pacto Global", label: "Rede Brasil desde 2016" },
                { value: "BH Sustentável", label: "Selo Ouro" },
                { value: "SISBRACE", label: "Classificação Cinco Bolas" },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-primary-foreground/10 rounded-xl text-center">
                  <p className="text-xl font-bold">{item.value}</p>
                  <p className="text-sm text-primary-foreground/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 8.9 Conformidade e Monitoramento */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">8.9 Conformidade e Monitoramento Ambiental</h2>
              <p className="text-muted-foreground">Auditoria e melhoria contínua</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              A Construcap mantém conformidade com licenciamentos ambientais, condicionantes de órgãos ambientais,
              normas sanitárias e regulatórias, além de requisitos específicos de concessões em parques, arenas e
              hospitais.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: FileText, label: "Licenciamentos ambientais" },
                { icon: Shield, label: "Condicionantes regulatórias" },
                { icon: Target, label: "Auditorias internas e externas" },
                { icon: BarChart3, label: "Monitoramento de indicadores" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-secondary/50 text-center">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Auditorias internas e externas, sistemas de gestão certificados e monitoramento de indicadores asseguram
              correção tempestiva de desvios e melhoria contínua do desempenho ambiental.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Conclusion */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-emerald-500/10">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Essas certificações e reconhecimentos se somam ao inventário de GEE e à ampliação de indicadores
              ambientais como pilares da evolução da agenda ESG da Construcap.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default EnvironmentalPage;
