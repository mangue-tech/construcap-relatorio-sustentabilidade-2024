import { Leaf, Zap, Droplets, Recycle, Factory, Sun } from "lucide-react";

const metrics = [
  {
    icon: Factory,
    value: "29.442",
    unit: "tCO₂e",
    label: "Emissões Totais GEE",
    description: "Primeiro inventário consolidado de emissões",
    color: "primary",
  },
  {
    icon: Zap,
    value: "32,7",
    unit: "milhões kWh",
    label: "Consumo de Eletricidade",
    description: "Com iniciativas de eficiência energética",
    color: "blue",
  },
  {
    icon: Droplets,
    value: "119,3",
    unit: "megalitros",
    label: "Gestão Hídrica",
    description: "Consumo monitorado nas unidades hospitalares",
    color: "blue",
  },
  {
    icon: Recycle,
    value: "4.051",
    unit: "toneladas",
    label: "Resíduos Gerenciados",
    description: "Com destinação adequada e reciclagem",
    color: "green",
  },
  {
    icon: Sun,
    value: "1.317",
    unit: "MWh",
    label: "Energia Solar Gerada",
    description: "Usina fotovoltaica Minas Arena",
    color: "primary",
  },
  {
    icon: Droplets,
    value: "51%",
    unit: "",
    label: "Redução Água Potável",
    description: "Captação de água de chuva Mineirão",
    color: "blue",
  },
];

const emissionsBreakdown = [
  { scope: "Escopo 1", value: "15.116 tCO₂e", percentage: 51, description: "Emissões diretas" },
  { scope: "Escopo 2", value: "1.618 tCO₂e", percentage: 6, description: "Energia elétrica adquirida" },
  { scope: "Escopo 3", value: "12.708 tCO₂e", percentage: 43, description: "Cadeia de valor" },
];

const EnvironmentalSection = () => {
  return (
    <section id="ambiental" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 mb-4">
            <Leaf className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-green-500">Desempenho Ambiental</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Gestão Ambiental <span className="text-gradient">Responsável</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Em 2024, concluímos nosso primeiro inventário corporativo de emissões de GEE, 
            cobrindo Escopos 1, 2 e 3 para todo o Grupo, reforçando nossa maturidade na agenda ambiental e climática.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-green-500/30 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                metric.color === 'green' ? 'bg-green-100' :
                metric.color === 'blue' ? 'bg-blue-100' : 'bg-accent'
              }`}>
                <metric.icon className={`w-6 h-6 ${
                  metric.color === 'green' ? 'text-green-500' :
                  metric.color === 'blue' ? 'text-blue-500' : 'text-primary'
                }`} />
              </div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-3xl font-bold ${
                  metric.color === 'green' ? 'text-green-500' :
                  metric.color === 'blue' ? 'text-blue-500' : 'text-primary'
                }`}>
                  {metric.value}
                </span>
                <span className="text-sm text-muted-foreground">{metric.unit}</span>
              </div>
              <h3 className="font-semibold mb-1">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Emissions breakdown */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Factory className="w-5 h-5 text-primary" />
            </div>
            Inventário de Emissões GEE 2024
          </h3>
          
          <div className="space-y-6">
            {emissionsBreakdown.map((item) => (
              <div key={item.scope}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold">{item.scope}</span>
                    <span className="text-sm text-muted-foreground ml-2">— {item.description}</span>
                  </div>
                  <span className="font-bold text-primary">{item.value}</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-orange rounded-full transition-all duration-1000"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-accent/50 border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Total de emissões:</strong> 33.550,818 tCO₂e + 3.864,367 tCO₂ de emissões biogênicas. 
              Inventário elaborado conforme Programa Brasileiro GHG Protocol e ABNT NBR ISO 14064-1.
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-lg font-bold mb-4 text-center">Certificações Construcap</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { cert: "NBR ISO 9001:2015", label: "Qualidade", detail: "Desde 2014 • Válida até 17/07/2026" },
              { cert: "NBR ISO 14001:2015", label: "Gestão Ambiental", detail: "Desde 2014 • Válida até 16/07/2026" },
              { cert: "ISO 45001:2018", label: "Saúde e Segurança", detail: "Desde 2023 • Válida até 16/07/2026" },
              { cert: "SIAC 2021 – Nível A", label: "Conformidade", detail: "Edificações, infraestrutura viária e saneamento • Válida até 17/07/2026" },
              { cert: "Certificado de Recurso Florestal", label: "Regularidade Ambiental", detail: "Ano-base 2024" },
            ].map((item) => (
              <div key={item.cert} className="text-center p-5 rounded-xl bg-green-100/50 border border-green-500/20">
                <p className="font-bold text-base text-green-500">{item.cert}</p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalSection;
