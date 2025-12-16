import { TrendingUp, TrendingDown, DollarSign, PiggyBank, Coins } from "lucide-react";

const economicData = [
  {
    icon: TrendingUp,
    label: "Valor Econômico Gerado",
    value: "R$ 1.649.855",
    unit: "mil",
    description: "Receita total do período",
    color: "green",
  },
  {
    icon: TrendingDown,
    label: "Valor Econômico Distribuído",
    value: "R$ 1.376.002",
    unit: "mil",
    description: "Salários, fornecedores, tributos",
    color: "blue",
  },
  {
    icon: PiggyBank,
    label: "Valor Econômico Retido",
    value: "R$ 273.853",
    unit: "mil",
    description: "Reinvestimento estratégico",
    color: "primary",
  },
];

const EconomicSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent mb-4">
            <DollarSign className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Desempenho Econômico 2024</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Solidez e <span className="text-gradient">Resiliência</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O desempenho econômico evidencia a solidez do modelo de negócios e a capacidade de enfrentar 
            um ambiente operacional complexo, mantendo eficiência, disciplina financeira e criação de valor sustentável.
          </p>
        </div>

        {/* Economic metrics */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {economicData.map((item) => (
            <div
              key={item.label}
              className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-all text-center"
            >
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                item.color === 'green' ? 'bg-green-100' :
                item.color === 'blue' ? 'bg-blue-100' : 'bg-accent'
              }`}>
                <item.icon className={`w-8 h-8 ${
                  item.color === 'green' ? 'text-green-500' :
                  item.color === 'blue' ? 'text-blue-500' : 'text-primary'
                }`} />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
              <p className={`text-3xl lg:text-4xl font-bold ${
                item.color === 'green' ? 'text-green-500' :
                item.color === 'blue' ? 'text-blue-500' : 'text-primary'
              }`}>
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground">{item.unit}</p>
              <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Distribution breakdown */}
        <div className="bg-card rounded-2xl border border-border p-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Coins className="w-5 h-5 text-primary" />
            </div>
            Distribuição de Valor
          </h3>
          
          <p className="text-muted-foreground mb-6">
            Os recursos distribuídos contemplam salários e benefícios, pagamentos a fornecedores, 
            tributos, encargos financeiros e investimentos sociais, demonstrando impacto econômico 
            significativo nas regiões onde a empresa atua.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Colaboradores", desc: "Salários e benefícios" },
              { label: "Fornecedores", desc: "Cadeia de suprimentos" },
              { label: "Governo", desc: "Tributos e impostos" },
              { label: "Investimentos", desc: "Sociais e ambientais" },
            ].map((item) => (
              <div key={item.label} className="p-4 rounded-xl bg-secondary/50 border border-border">
                <p className="font-semibold">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicSection;
