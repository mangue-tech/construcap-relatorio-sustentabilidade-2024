import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const genderData = [
  { name: "Homens", value: 4019, percentage: 92.5 },
  { name: "Mulheres", value: 326, percentage: 7.5 },
];

const ageData = [
  { faixa: "Até 30 anos", homens: 1180, mulheres: 78 },
  { faixa: "30-50 anos", homens: 2301, mulheres: 200 },
  { faixa: "Acima de 50", homens: 538, mulheres: 48 },
];

const hierarchyData = [
  { nivel: "Diretoria", total: 12 },
  { nivel: "Gerência", total: 89 },
  { nivel: "Coordenação", total: 156 },
  { nivel: "Administrativo", total: 487 },
  { nivel: "Operacional", total: 3601 },
];

const COLORS = ["hsl(var(--primary))", "hsl(var(--green-500))"];

const WorkforceChart = () => {
  const totalEmployees = 4345;

  return (
    <div className="space-y-8">
      {/* Total Highlight */}
      <div className="text-center p-6 bg-accent rounded-2xl">
        <p className="text-sm text-muted-foreground mb-2">Total de Colaboradores (GRI 2-7)</p>
        <p className="text-4xl lg:text-5xl font-bold text-primary">{totalEmployees.toLocaleString('pt-BR')}</p>
        <p className="text-sm text-muted-foreground mt-2">profissionais no Grupo Construcap</p>
      </div>

      {/* Gender Distribution */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-4">Distribuição por Gênero (GRI 405-1)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                >
                  {genderData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => [value.toLocaleString('pt-BR'), 'Colaboradores']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            {genderData.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-sm">{item.name}: {item.value.toLocaleString('pt-BR')}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Age Distribution */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <h4 className="font-semibold mb-4">Distribuição por Faixa Etária (GRI 405-1)</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="faixa" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="homens" name="Homens" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mulheres" name="Mulheres" fill="hsl(var(--green-500))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Hierarchy */}
      <div className="bg-card rounded-2xl border border-border p-6">
        <h4 className="font-semibold mb-4">Distribuição por Nível Hierárquico (GRI 2-7)</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hierarchyData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="nivel" width={100} />
              <Tooltip 
                formatter={(value: number) => [value.toLocaleString('pt-BR'), 'Colaboradores']}
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="total" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* PCD Info */}
      <div className="p-6 rounded-2xl bg-secondary/50 border border-border">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-primary">7</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Pessoas com Deficiência (GRI 405-1)</h4>
            <p className="text-sm text-muted-foreground">
              O Grupo Construcap emprega 7 colaboradores com deficiência, promovendo a inclusão 
              e diversidade em seu ambiente de trabalho, em conformidade com a legislação vigente 
              e compromissos com a equidade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkforceChart;
