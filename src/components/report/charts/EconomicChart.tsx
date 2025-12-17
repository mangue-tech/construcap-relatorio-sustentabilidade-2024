import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const economicData = [
  { 
    name: "Valor Gerado", 
    value: 1649855, 
    color: "hsl(var(--green-500))",
    gri: "GRI 201-1"
  },
  { 
    name: "Valor Distribuído", 
    value: 1376002, 
    color: "hsl(var(--blue-500))",
    gri: "GRI 201-1"
  },
  { 
    name: "Valor Retido", 
    value: 273853, 
    color: "hsl(var(--primary))",
    gri: "GRI 201-1"
  },
];

const distributionData = [
  { category: "Colaboradores", description: "Salários, benefícios e encargos" },
  { category: "Fornecedores", description: "Pagamentos a fornecedores e prestadores de serviços" },
  { category: "Governo", description: "Tributos, impostos e contribuições" },
  { category: "Investidores", description: "Dividendos e remuneração de capital" },
  { category: "Comunidades", description: "Investimentos sociais voluntários" },
];

const EconomicChart = () => {
  return (
    <div className="space-y-8">
      {/* Main Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        {economicData.map((item) => (
          <div 
            key={item.name} 
            className="p-6 rounded-2xl bg-card border border-border text-center"
          >
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{item.gri}</p>
            <p className="text-sm text-muted-foreground mb-2">{item.name}</p>
            <p className="text-3xl lg:text-4xl font-bold" style={{ color: item.color }}>
              R$ {(item.value / 1000).toLocaleString('pt-BR', { minimumFractionDigits: 0 })}
            </p>
            <p className="text-sm text-muted-foreground">milhões</p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h4 className="font-semibold mb-6">Desempenho Econômico 2024 (R$ mil)</h4>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={economicData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}M`} />
              <Tooltip 
                formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')} mil`, 'Valor']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {economicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Distribution Table */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h4 className="font-semibold mb-4">Distribuição de Valor Econômico</h4>
        <p className="text-sm text-muted-foreground mb-6">
          Os recursos distribuídos contemplam as seguintes categorias, demonstrando o impacto econômico 
          significativo nas regiões onde o Grupo Construcap atua.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {distributionData.map((item) => (
            <div key={item.category} className="p-4 rounded-xl bg-secondary/50 border border-border">
              <p className="font-semibold mb-1">{item.category}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EconomicChart;
