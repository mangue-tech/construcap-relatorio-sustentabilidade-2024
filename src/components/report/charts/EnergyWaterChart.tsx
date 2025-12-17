import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Zap, Droplets, Recycle, Sun } from "lucide-react";

const energyMetrics = [
  {
    icon: Zap,
    label: "Consumo de Energia Elétrica",
    value: "32.777.724,33",
    unit: "kWh",
    gri: "GRI 302-1",
    color: "primary",
  },
  {
    icon: Sun,
    label: "Energia Solar (Minas Arena)",
    value: "1.317.600",
    unit: "kWh",
    gri: "GRI 302-1",
    color: "green",
  },
  {
    icon: Droplets,
    label: "Água Pluvial Captada (Minas Arena)",
    value: "15.337",
    unit: "megalitros",
    gri: "GRI 303-3",
    color: "blue",
  },
  {
    icon: Recycle,
    label: "Resíduos Gerados",
    value: "4.051,36",
    unit: "toneladas",
    gri: "GRI 306-3",
    color: "purple",
  },
];

const waterConsumption = [
  { source: "Inova Saúde", value: 119281, unit: "megalitros" },
];

const wasteByType = [
  { name: "Classe I", value: 15.2, description: "Perigosos" },
  { name: "Classe II-A", value: 68.5, description: "Não inertes" },
  { name: "Classe II-B", value: 16.3, description: "Inertes" },
];

const COLORS = ["hsl(var(--destructive))", "hsl(var(--primary))", "hsl(var(--green-500))"];

const EnergyWaterChart = () => {
  return (
    <div className="space-y-8">
      {/* Key Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {energyMetrics.map((metric) => (
          <div key={metric.label} className="p-6 rounded-2xl bg-card border border-border">
            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${
              metric.color === 'primary' ? 'bg-accent' :
              metric.color === 'green' ? 'bg-green-100' :
              metric.color === 'blue' ? 'bg-blue-100' : 'bg-purple-100'
            }`}>
              <metric.icon className={`w-6 h-6 ${
                metric.color === 'primary' ? 'text-primary' :
                metric.color === 'green' ? 'text-green-500' :
                metric.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
              }`} />
            </div>
            <p className="text-xs text-muted-foreground mb-1">{metric.gri}</p>
            <p className="text-sm font-medium mb-2">{metric.label}</p>
            <p className={`text-2xl font-bold ${
              metric.color === 'primary' ? 'text-primary' :
              metric.color === 'green' ? 'text-green-500' :
              metric.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
            }`}>
              {metric.value}
            </p>
            <p className="text-xs text-muted-foreground">{metric.unit}</p>
          </div>
        ))}
      </div>

      {/* Minas Arena Highlight */}
      <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8">
        <h4 className="text-xl font-bold mb-4">Destaque: Minas Arena</h4>
        <p className="text-sm opacity-90 mb-6">
          O Mineirão, administrado pela Minas Arena, é referência em sustentabilidade, sendo o primeiro 
          estádio da América do Sul a receber a certificação LEED Platinum.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-foreground/10 rounded-xl">
            <p className="text-3xl font-bold">51%</p>
            <p className="text-sm opacity-90">Redução no consumo de água</p>
          </div>
          <div className="p-4 bg-primary-foreground/10 rounded-xl">
            <p className="text-3xl font-bold">1,3 MW</p>
            <p className="text-sm opacity-90">Capacidade solar instalada</p>
          </div>
          <div className="p-4 bg-primary-foreground/10 rounded-xl">
            <p className="text-3xl font-bold">LEED</p>
            <p className="text-sm opacity-90">Certificação Platinum</p>
          </div>
        </div>
      </div>

      {/* Waste Distribution */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-2">Classificação de Resíduos (GRI 306-3)</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Distribuição por classificação conforme NBR 10.004
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteByType}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {wasteByType.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value}%`, 'Percentual']}
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
            {wasteByType.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                  <span>{item.name}</span>
                </div>
                <span className="text-muted-foreground">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-4">Certificações Ambientais</h4>
          <div className="space-y-4">
            {[
              { cert: "ISO 14001:2015", desc: "Sistema de Gestão Ambiental", status: "Vigente" },
              { cert: "ISO 45001:2018", desc: "Saúde e Segurança Ocupacional", status: "Vigente" },
              { cert: "ISO 9001:2015", desc: "Sistema de Gestão da Qualidade", status: "Vigente" },
              { cert: "LEED Platinum", desc: "Minas Arena - Mineirão", status: "Certificado" },
              { cert: "AQUA-HQE", desc: "Alta Qualidade Ambiental", status: "Projetos selecionados" },
            ].map((item) => (
              <div key={item.cert} className="flex items-start justify-between p-4 rounded-xl bg-secondary/50">
                <div>
                  <p className="font-semibold">{item.cert}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-500 font-medium">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyWaterChart;
