import { Users, Heart, GraduationCap, Shield, UserCheck, Accessibility } from "lucide-react";

const stats = [
  { icon: Users, value: "4.345", label: "Colaboradores", description: "Força de trabalho dedicada" },
  { icon: UserCheck, value: "4.019", label: "Homens", description: "92,5% do quadro" },
  { icon: Users, value: "326", label: "Mulheres", description: "7,5% do quadro" },
  { icon: Accessibility, value: "7", label: "PCDs", description: "Pessoas com deficiência" },
];

const ageDistribution = [
  { range: "Até 30 anos", count: 991, percentage: 23 },
  { range: "31 a 50 anos", count: 2210, percentage: 51 },
  { range: "Acima de 50 anos", count: 906, percentage: 21 },
];

const hierarchy = [
  { level: "Diretoria", count: 8 },
  { level: "Gerência", count: 76 },
  { level: "Coordenação", count: 35 },
  { level: "Supervisão", count: 41 },
  { level: "Administrativo", count: 312 },
  { level: "Operacional", count: 3873 },
];

const SocialSection = () => {
  return (
    <section id="social" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 mb-4">
            <Heart className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-500">Desempenho Social</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Nosso Maior Patrimônio: <span className="text-gradient">as Pessoas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            O compromisso com segurança, desenvolvimento, diversidade e bem-estar é pilar estruturante da nossa atuação. 
            Em um setor intensivo em obras, operado em ambientes complexos, investimos continuamente em nossas equipes.
          </p>
        </div>

        {/* Main stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-blue-500" />
              </div>
              <p className="text-3xl font-bold text-blue-500">{stat.value}</p>
              <p className="font-semibold">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Age distribution */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              Distribuição por Faixa Etária
            </h3>
            
            <div className="space-y-6">
              {ageDistribution.map((item) => (
                <div key={item.range}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{item.range}</span>
                    <span className="font-bold text-blue-500">{item.count.toLocaleString('pt-BR')} colaboradores</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              A composição etária demonstra equilíbrio entre vitalidade e experiência, 
              essencial para produtividade, segurança e transferência de conhecimento.
            </p>
          </div>

          {/* Hierarchy */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              Estrutura Hierárquica
            </h3>
            
            <div className="space-y-3">
              {hierarchy.map((item, index) => (
                <div
                  key={item.level}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <span className="font-medium">{item.level}</span>
                  <span className="font-bold text-primary">{item.count.toLocaleString('pt-BR')}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Estrutura que garante consistência organizacional em ambientes distribuídos, 
              com equipes em diversos municípios e estágios de obras.
            </p>
          </div>
        </div>

        {/* Safety highlight */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent border border-primary/20">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-bold mb-2">Segurança como Valor Inegociável</h3>
              <p className="text-muted-foreground">
                Todas as decisões operacionais são orientadas pela preservação da vida, 
                prevenção de riscos e qualificação contínua das equipes. A segurança é prioridade absoluta 
                em canteiros, hospitais, arenas e todas as operações do grupo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
