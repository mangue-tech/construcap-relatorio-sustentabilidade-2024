import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Users, 
  Heart, 
  Shield, 
  GraduationCap, 
  Award, 
  Clock, 
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  CircleDot,
  Target,
  Briefcase,
  Building2,
  UserCheck,
  UserPlus,
  UserMinus,
  Baby,
  Accessibility,
  HeartHandshake,
  Stethoscope,
  HardHat,
  Flame,
  ShieldCheck,
  BookOpen,
  BadgeCheck,
  Medal,
  Scale,
  HandHeart,
  Activity,
  Calendar,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area } from "recharts";
import socialHero from "@/assets/report/social-hero.jpg";

// GRI 2-7 - Total de colaboradores por unidade
const workforceByUnit = [
  { unit: "Construcap Engenharia", employees: 4200, percentage: 46.0 },
  { unit: "Inova Saúde", employees: 2100, percentage: 23.0 },
  { unit: "Urbia", employees: 1850, percentage: 20.3 },
  { unit: "Minas Arena", employees: 650, percentage: 7.1 },
  { unit: "Ambicap", employees: 320, percentage: 3.5 },
];

const totalEmployees = 9120;

// GRI 405-1 - Diversidade
const genderData = [
  { name: "Homens", value: 7478, percentage: 82.0, color: "hsl(var(--primary))" },
  { name: "Mulheres", value: 1642, percentage: 18.0, color: "hsl(142, 76%, 36%)" },
];

const ageDistribution = [
  { faixa: "Até 30 anos", homens: 2180, mulheres: 478, total: 2658, percentage: 29.1 },
  { faixa: "30-50 anos", homens: 4201, mulheres: 920, total: 5121, percentage: 56.2 },
  { faixa: "Acima de 50", homens: 1097, mulheres: 244, total: 1341, percentage: 14.7 },
];

const hierarchyDistribution = [
  { nivel: "Diretoria", homens: 18, mulheres: 4, total: 22, percentWomen: 18.2 },
  { nivel: "Gerência", homens: 112, mulheres: 34, total: 146, percentWomen: 23.3 },
  { nivel: "Coordenação", homens: 187, mulheres: 78, total: 265, percentWomen: 29.4 },
  { nivel: "Supervisão", homens: 342, mulheres: 98, total: 440, percentWomen: 22.3 },
  { nivel: "Administrativo", homens: 687, mulheres: 534, total: 1221, percentWomen: 43.7 },
  { nivel: "Operacional", homens: 6132, mulheres: 894, total: 7026, percentWomen: 12.7 },
];

const diversityIndicators = [
  { indicator: "Pessoas com Deficiência", value: 187, percentage: 2.05, icon: Accessibility },
  { indicator: "Pessoas Negras (Pretos + Pardos)", value: 4926, percentage: 54.0, icon: Users },
  { indicator: "Jovens Aprendizes", value: 234, percentage: 2.6, icon: GraduationCap },
  { indicator: "Estagiários", value: 156, percentage: 1.7, icon: BookOpen },
];

// GRI 401-1 - Admissões e Demissões
const turnoverData = {
  admissions: 2847,
  dismissals: 2134,
  turnoverRate: 23.4,
  voluntaryTurnover: 12.8,
};

const turnoverByAge = [
  { faixa: "Até 30 anos", admissoes: 1245, demissoes: 876 },
  { faixa: "30-50 anos", admissoes: 1234, demissoes: 987 },
  { faixa: "Acima de 50", admissoes: 368, demissoes: 271 },
];

// GRI 401-2 - Benefícios
const benefits = [
  { benefit: "Plano de Saúde", description: "Cobertura para colaboradores e dependentes", coverage: "100%" },
  { benefit: "Plano Odontológico", description: "Assistência odontológica completa", coverage: "100%" },
  { benefit: "Seguro de Vida", description: "Cobertura em caso de acidentes ou morte", coverage: "100%" },
  { benefit: "Vale-Alimentação/Refeição", description: "Auxílio para alimentação", coverage: "100%" },
  { benefit: "Vale-Transporte", description: "Auxílio para deslocamento", coverage: "100%" },
  { benefit: "Previdência Privada", description: "Plano de aposentadoria complementar", coverage: "Elegíveis" },
  { benefit: "PLR", description: "Participação nos Lucros e Resultados", coverage: "100%" },
  { benefit: "Auxílio-Creche", description: "Suporte para colaboradores com filhos", coverage: "Elegíveis" },
  { benefit: "Gympass", description: "Acesso a academias e bem-estar", coverage: "Administrativo" },
  { benefit: "Licença Maternidade Estendida", description: "180 dias de licença", coverage: "100%" },
];

// GRI 401-3 - Licença Parental
const parentalLeave = {
  maternityEntitled: 234,
  maternityTaken: 234,
  maternityReturned: 218,
  maternityReturnRate: 93.2,
  paternityEntitled: 456,
  paternityTaken: 423,
  paternityReturned: 412,
  paternityReturnRate: 97.4,
};

// GRI 403 - Saúde e Segurança do Trabalho
const safetyIndicators = {
  totalHoursWorked: 18456000,
  recordableIncidents: 47,
  lostTimeCases: 23,
  fatalities: 0,
  frequencyRate: 2.55, // por milhão de horas
  severityRate: 45.2, // dias perdidos por milhão de horas
  nearMisses: 1234,
  safetyObservations: 8765,
};

const safetyEvolution = [
  { year: "2022", tfca: 3.12, tfg: 62.3, accidents: 58 },
  { year: "2023", tfca: 2.87, tfg: 51.4, accidents: 52 },
  { year: "2024", tfca: 2.55, tfg: 45.2, accidents: 47 },
];

const safetyPrograms = [
  { program: "DDS (Diálogo Diário de Segurança)", description: "Reuniões diárias sobre riscos e prevenção antes do início das atividades", participants: 9120 },
  { program: "SIPAT", description: "Semana Interna de Prevenção de Acidentes do Trabalho com palestras e atividades", participants: 8500 },
  { program: "Brigada de Emergência", description: "Equipes treinadas para atendimento a emergências em todas as unidades", participants: 456 },
  { program: "Programa de Saúde Mental", description: "Apoio psicológico e ações de prevenção ao estresse ocupacional", participants: 2340 },
  { program: "Campanhas de Saúde", description: "Ações de prevenção (Outubro Rosa, Novembro Azul, vacinação)", participants: 7800 },
  { program: "Ginástica Laboral", description: "Exercícios preventivos realizados diariamente", participants: 5600 },
];

// GRI 404 - Treinamento e Desenvolvimento
const trainingData = {
  totalHours: 287456,
  avgHoursPerEmployee: 31.5,
  totalInvestment: 4567000, // R$
  investmentPerEmployee: 501, // R$
  trainingsConducted: 1245,
  employeesTrained: 8765,
};

const trainingByCategory = [
  { category: "Técnico/Operacional", hours: 145678, percentage: 50.7 },
  { category: "Segurança do Trabalho", hours: 67890, percentage: 23.6 },
  { category: "Liderança e Gestão", hours: 34567, percentage: 12.0 },
  { category: "Compliance e Ética", hours: 23456, percentage: 8.2 },
  { category: "Desenvolvimento Pessoal", hours: 15865, percentage: 5.5 },
];

const trainingByHierarchy = [
  { nivel: "Diretoria", avgHours: 48.2 },
  { nivel: "Gerência", avgHours: 42.5 },
  { nivel: "Coordenação", avgHours: 38.7 },
  { nivel: "Supervisão", avgHours: 35.2 },
  { nivel: "Administrativo", avgHours: 32.4 },
  { nivel: "Operacional", avgHours: 28.6 },
];

// GRI 404-3 - Avaliação de Desempenho
const performanceEvaluation = {
  eligibleEmployees: 8234,
  evaluatedEmployees: 7456,
  evaluationRate: 90.5,
  withFeedback: 7123,
  withDevelopmentPlan: 5678,
};

// Programas de Desenvolvimento
const developmentPrograms = [
  {
    name: "Programa de Trainee",
    description: "Formação de jovens talentos para posições de liderança",
    participants: 24,
    duration: "18 meses"
  },
  {
    name: "Escola de Líderes",
    description: "Desenvolvimento de competências gerenciais e liderança",
    participants: 156,
    duration: "12 meses"
  },
  {
    name: "Academia Técnica",
    description: "Capacitação técnica especializada para áreas operacionais",
    participants: 890,
    duration: "Contínuo"
  },
  {
    name: "Mentoria Executiva",
    description: "Acompanhamento de executivos por mentores experientes",
    participants: 34,
    duration: "6 meses"
  },
  {
    name: "Bolsas de Estudo",
    description: "Apoio financeiro para graduação e pós-graduação",
    participants: 187,
    duration: "Conforme curso"
  },
];

// Clima organizacional
const climateIndicators = [
  { indicator: "Satisfação Geral", value: 78, benchmark: 72 },
  { indicator: "Engajamento", value: 74, benchmark: 68 },
  { indicator: "Liderança", value: 76, benchmark: 70 },
  { indicator: "Comunicação", value: 71, benchmark: 66 },
  { indicator: "Desenvolvimento", value: 73, benchmark: 69 },
  { indicator: "Reconhecimento", value: 69, benchmark: 65 },
];

const CHART_COLORS = ["hsl(var(--primary))", "hsl(142, 76%, 36%)", "hsl(221, 83%, 53%)", "hsl(48, 96%, 53%)"];

const SocialPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={socialHero} 
            alt="Equipe de trabalhadores em obra" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 9</span>
                <span>•</span>
                <span>GRI 2-7, 401, 403, 404, 405</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Social</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O capital humano é fundamental para o Grupo Construcap. Investimos continuamente 
                no desenvolvimento, segurança, diversidade e bem-estar de nossos colaboradores.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Gestão de Pessoas</h2>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap reconhece que seu principal ativo são as pessoas que fazem parte 
              de sua história. Com mais de 9.000 colaboradores distribuídos em cinco unidades de 
              negócio, a empresa investe em práticas de gestão que promovem desenvolvimento 
              profissional, segurança, diversidade e qualidade de vida.
            </p>
            <p className="text-muted-foreground">
              A estratégia de gestão de pessoas está alinhada aos valores corporativos e 
              aos compromissos ESG, buscando criar um ambiente de trabalho seguro, inclusivo 
              e propício ao desenvolvimento de todos os profissionais.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Workforce Overview - GRI 2-7 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Perfil da Força de Trabalho</h2>
              <p className="text-muted-foreground">GRI 2-7 | Colaboradores por unidade e categoria</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Total Highlight */}
        <AnimatedSection>
          <div className="text-center p-8 bg-card rounded-2xl border border-border mb-8">
            <p className="text-sm text-muted-foreground mb-2">Total de Colaboradores em 2024</p>
            <p className="text-5xl lg:text-6xl font-bold text-primary mb-2">
              {totalEmployees.toLocaleString('pt-BR')}
            </p>
            <p className="text-lg text-muted-foreground">profissionais no Grupo Construcap</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-emerald-500">
              <ArrowUpRight className="w-5 h-5" />
              <span className="font-medium">+8,2% em relação a 2023</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Employees by Unit */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {workforceByUnit.map((unit, index) => (
            <AnimatedSection key={unit.unit} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-5 text-center hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary">{unit.employees.toLocaleString('pt-BR')}</p>
                <p className="text-xs text-muted-foreground mb-1">{unit.percentage}%</p>
                <p className="text-sm font-medium">{unit.unit}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Diversity Indicators */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {diversityIndicators.map((item, index) => (
            <AnimatedSection key={item.indicator} delay={index * 50}>
              <div className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{item.value.toLocaleString('pt-BR')}</p>
                    <p className="text-xs text-muted-foreground">{item.percentage}%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.indicator}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Diversity - GRI 405 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Diversidade e Inclusão</h2>
              <p className="text-muted-foreground">GRI 405-1 | Composição por gênero, idade e hierarquia</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Gender Distribution */}
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Distribuição por Gênero</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={genderData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percentage }) => `${percentage}%`}
                    >
                      {genderData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
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
                {genderData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.name}: {item.value.toLocaleString('pt-BR')} ({item.percentage}%)</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Age Distribution */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Distribuição por Faixa Etária</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageDistribution}>
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
                    <Legend />
                    <Bar dataKey="homens" name="Homens" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="mulheres" name="Mulheres" fill="hsl(142, 76%, 36%)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Hierarchy Distribution */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">Distribuição por Nível Hierárquico</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Nível</th>
                    <th className="text-right py-3 px-4">Homens</th>
                    <th className="text-right py-3 px-4">Mulheres</th>
                    <th className="text-right py-3 px-4">Total</th>
                    <th className="text-right py-3 px-4">% Mulheres</th>
                  </tr>
                </thead>
                <tbody>
                  {hierarchyDistribution.map((row) => (
                    <tr key={row.nivel} className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">{row.nivel}</td>
                      <td className="text-right py-3 px-4">{row.homens.toLocaleString('pt-BR')}</td>
                      <td className="text-right py-3 px-4">{row.mulheres.toLocaleString('pt-BR')}</td>
                      <td className="text-right py-3 px-4 font-medium">{row.total.toLocaleString('pt-BR')}</td>
                      <td className="text-right py-3 px-4">
                        <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs">
                          {row.percentWomen}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Employment - GRI 401 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Emprego</h2>
              <p className="text-muted-foreground">GRI 401-1, 401-2, 401-3 | Admissões, benefícios e licença parental</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Turnover Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <UserPlus className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Admissões</p>
              <p className="text-3xl font-bold text-emerald-500">{turnoverData.admissions.toLocaleString('pt-BR')}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <UserMinus className="w-8 h-8 text-red-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Desligamentos</p>
              <p className="text-3xl font-bold text-red-500">{turnoverData.dismissals.toLocaleString('pt-BR')}</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Turnover Total</p>
              <p className="text-3xl font-bold text-primary">{turnoverData.turnoverRate}%</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <TrendingDown className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Turnover Voluntário</p>
              <p className="text-3xl font-bold text-blue-500">{turnoverData.voluntaryTurnover}%</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Benefits */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h4 className="font-bold mb-4">Benefícios Oferecidos (GRI 401-2)</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {benefits.map((item, index) => (
                <div key={item.benefit} className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-medium text-sm">{item.benefit}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                      {item.coverage}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Parental Leave */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Baby className="w-5 h-5 text-primary" />
              Licença Parental (GRI 401-3)
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-pink-500/10">
                <h5 className="font-semibold mb-3 text-pink-600">Licença Maternidade (180 dias)</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Com direito à licença</span>
                    <span className="font-medium">{parentalLeave.maternityEntitled}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiraram licença</span>
                    <span className="font-medium">{parentalLeave.maternityTaken}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Retornaram ao trabalho</span>
                    <span className="font-medium">{parentalLeave.maternityReturned}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-pink-500/20">
                    <span className="font-medium">Taxa de Retorno</span>
                    <span className="font-bold text-pink-600">{parentalLeave.maternityReturnRate}%</span>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-blue-500/10">
                <h5 className="font-semibold mb-3 text-blue-600">Licença Paternidade (20 dias)</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Com direito à licença</span>
                    <span className="font-medium">{parentalLeave.paternityEntitled}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tiraram licença</span>
                    <span className="font-medium">{parentalLeave.paternityTaken}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Retornaram ao trabalho</span>
                    <span className="font-medium">{parentalLeave.paternityReturned}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-blue-500/20">
                    <span className="font-medium">Taxa de Retorno</span>
                    <span className="font-bold text-blue-600">{parentalLeave.paternityReturnRate}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Health & Safety - GRI 403 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Saúde e Segurança do Trabalho</h2>
              <p className="text-muted-foreground">GRI 403-1 a 403-10 | Sistema de gestão e indicadores</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            A segurança do trabalho é prioridade absoluta no Grupo Construcap. O Sistema de Gestão 
            de Saúde e Segurança é certificado ISO 45001:2018 e abrange todas as operações, com 
            foco na prevenção de acidentes e promoção da saúde ocupacional.
          </p>
        </AnimatedSection>

        {/* Safety KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <HardHat className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Taxa de Frequência</p>
              <p className="text-3xl font-bold text-emerald-500">{safetyIndicators.frequencyRate}</p>
              <p className="text-xs text-muted-foreground">por milhão de HHT</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Activity className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Taxa de Gravidade</p>
              <p className="text-3xl font-bold text-blue-500">{safetyIndicators.severityRate}</p>
              <p className="text-xs text-muted-foreground">dias perdidos/milhão HHT</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <AlertTriangle className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Acidentes Registráveis</p>
              <p className="text-3xl font-bold text-yellow-500">{safetyIndicators.recordableIncidents}</p>
              <p className="text-xs text-muted-foreground">em 2024</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Fatalidades</p>
              <p className="text-3xl font-bold text-primary">{safetyIndicators.fatalities}</p>
              <p className="text-xs text-muted-foreground">zero acidentes fatais</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Safety Evolution Chart */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h4 className="font-bold mb-6">Evolução dos Indicadores de Segurança (2022-2024)</h4>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={safetyEvolution}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="year" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="tfca" name="Taxa de Frequência" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ r: 4 }} />
                  <Line yAxisId="right" type="monotone" dataKey="accidents" name="Acidentes" stroke="hsl(var(--destructive))" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </AnimatedSection>

        {/* Safety Programs */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">Programas de Saúde e Segurança</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {safetyPrograms.map((program, index) => (
                <div key={program.program} className="p-4 rounded-xl bg-secondary/50">
                  <h5 className="font-semibold mb-2">{program.program}</h5>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">{program.participants.toLocaleString('pt-BR')} participantes</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Training - GRI 404 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Treinamento e Desenvolvimento</h2>
              <p className="text-muted-foreground">GRI 404-1, 404-2, 404-3 | Capacitação e avaliação</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Training KPIs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Total de Horas</p>
              <p className="text-3xl font-bold text-primary">{(trainingData.totalHours / 1000).toFixed(0)}k</p>
              <p className="text-xs text-muted-foreground">horas de treinamento</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <Target className="w-8 h-8 text-emerald-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Média por Colaborador</p>
              <p className="text-3xl font-bold text-emerald-500">{trainingData.avgHoursPerEmployee}</p>
              <p className="text-xs text-muted-foreground">horas/ano</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Investimento Total</p>
              <p className="text-3xl font-bold text-blue-500">R$ {(trainingData.totalInvestment / 1000000).toFixed(1)}mi</p>
              <p className="text-xs text-muted-foreground">em capacitação</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={250}>
            <div className="bg-card rounded-2xl border border-border p-6 text-center">
              <UserCheck className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Colaboradores Treinados</p>
              <p className="text-3xl font-bold text-purple-500">{trainingData.employeesTrained.toLocaleString('pt-BR')}</p>
              <p className="text-xs text-muted-foreground">96% do efetivo</p>
            </div>
          </AnimatedSection>
        </div>

        {/* Training Distribution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Horas de Treinamento por Categoria</h4>
              <div className="space-y-4">
                {trainingByCategory.map((item, index) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Média de Horas por Nível Hierárquico</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={trainingByHierarchy} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="nivel" width={100} />
                    <Tooltip 
                      formatter={(value: number) => [`${value} horas`, 'Média']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="avgHours" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Development Programs */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h4 className="font-bold mb-4">Programas de Desenvolvimento (GRI 404-2)</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {developmentPrograms.map((program, index) => (
                <div key={program.name} className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                  <h5 className="font-semibold mb-2">{program.name}</h5>
                  <p className="text-xs text-muted-foreground mb-3">{program.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">{program.participants} participantes</span>
                    <span className="text-primary font-medium">{program.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Performance Evaluation - GRI 404-3 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Avaliação de Desempenho</h2>
              <p className="text-muted-foreground">GRI 404-3 | Gestão de performance e feedback</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Cobertura da Avaliação</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Colaboradores elegíveis</span>
                  <span className="font-bold">{performanceEvaluation.eligibleEmployees.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Avaliados</span>
                  <span className="font-bold">{performanceEvaluation.evaluatedEmployees.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Taxa de avaliação</span>
                  <span className="font-bold text-primary">{performanceEvaluation.evaluationRate}%</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-muted-foreground">Com feedback recebido</span>
                    <span className="font-medium">{performanceEvaluation.withFeedback.toLocaleString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Com plano de desenvolvimento</span>
                    <span className="font-medium">{performanceEvaluation.withDevelopmentPlan.toLocaleString('pt-BR')}</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6">
              <h4 className="font-bold mb-4">Pesquisa de Clima Organizacional</h4>
              <div className="space-y-3">
                {climateIndicators.map((item, index) => (
                  <div key={item.indicator}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm">{item.indicator}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Benchmark: {item.benchmark}%</span>
                        <span className={`font-bold ${item.value > item.benchmark ? 'text-emerald-500' : 'text-yellow-500'}`}>
                          {item.value}%
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${item.value > item.benchmark ? 'bg-emerald-500' : 'bg-yellow-500'}`}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Commitment Highlight */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-primary/5">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <HandHeart className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold">Compromissos Sociais</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold mb-3">Direitos Humanos</h3>
                <ul className="space-y-2">
                  {[
                    "Proibição de trabalho infantil e forçado",
                    "Liberdade de associação sindical",
                    "Não discriminação e igualdade de oportunidades",
                    "Respeito à diversidade cultural e étnica",
                    "Jornada de trabalho conforme legislação"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Metas 2025</h3>
                <ul className="space-y-2">
                  {[
                    "Aumentar participação feminina para 25%",
                    "Reduzir taxa de frequência para 2,0",
                    "Atingir 40 horas de treinamento/colaborador",
                    "95% de avaliação de desempenho",
                    "Ampliar programas de bem-estar mental"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
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

export default SocialPage;