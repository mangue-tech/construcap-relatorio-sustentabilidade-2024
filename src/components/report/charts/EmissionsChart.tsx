import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from "recharts";

const emissionsData = [
  { name: "Escopo 1", value: 15116.357, description: "Emissões diretas" },
  { name: "Escopo 2", value: 1617.679, description: "Energia elétrica" },
  { name: "Escopo 3", value: 12708.196, description: "Cadeia de valor" },
];

const totalEmissions = 29442.232;

const COLORS = ["hsl(var(--primary))", "hsl(var(--blue-500))", "hsl(var(--green-500))"];

const EmissionsChart = () => {
  return (
    <div className="space-y-8">
      {/* Total Highlight */}
      <div className="text-center p-6 bg-accent rounded-2xl">
        <p className="text-sm text-muted-foreground mb-2">Emissões Totais de GEE (GRI 305-1, 305-2, 305-3)</p>
        <p className="text-4xl lg:text-5xl font-bold text-primary">{totalEmissions.toLocaleString('pt-BR')}</p>
        <p className="text-sm text-muted-foreground mt-1">tCO₂e</p>
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-4">Distribuição por Escopo</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emissionsData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`} />
                <YAxis type="category" dataKey="name" width={80} />
                <Tooltip 
                  formatter={(value: number) => [`${value.toLocaleString('pt-BR')} tCO₂e`, 'Emissões']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {emissionsData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-4">Participação Percentual</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emissionsData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  labelLine={false}
                >
                  {emissionsData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [`${value.toLocaleString('pt-BR')} tCO₂e`, 'Emissões']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Scope Details */}
      <div className="grid md:grid-cols-3 gap-4">
        {emissionsData.map((scope, index) => (
          <div key={scope.name} className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span className="font-semibold">{scope.name}</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: COLORS[index] }}>
              {scope.value.toLocaleString('pt-BR')}
            </p>
            <p className="text-xs text-muted-foreground">tCO₂e • {scope.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {((scope.value / totalEmissions) * 100).toFixed(1)}% do total
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmissionsChart;
