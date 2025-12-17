import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trophy, 
  Users, 
  Leaf,
  Award,
  Zap,
  Droplets,
  Building2,
  Target,
  Star
} from "lucide-react";
import minasArenaLogo from "@/assets/companies/minas-arena.png";

const MinasArenaPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden bg-gradient-to-r from-amber-600 to-amber-800">
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={minasArenaLogo} alt="Minas Arena" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Minas Arena
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Gestão do Mineirão - primeiro estádio LEED Platinum do mundo
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Sobre a Operação */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-primary" />
            Sobre a Minas Arena
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Minas Arena é responsável pela gestão do Estádio Governador Magalhães Pinto (Mineirão), 
            em Belo Horizonte. O estádio é reconhecido mundialmente como o primeiro a receber a 
            certificação LEED Platinum, o mais alto nível de sustentabilidade em edificações, 
            sendo referência global em gestão ambiental de grandes arenas esportivas.
          </p>
        </section>

        {/* Certificação LEED Platinum */}
        <section>
          <Card className="bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-6 h-6 text-amber-500" />
                Certificação LEED Platinum
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                O Mineirão foi o primeiro estádio do mundo a receber a certificação LEED Platinum, 
                concedida pelo U.S. Green Building Council. Esta conquista reconhece as práticas 
                exemplares de sustentabilidade implementadas na operação do estádio.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-amber-700 dark:text-amber-400">1º do Mundo</p>
                  <p className="text-xs text-muted-foreground">Estádio LEED Platinum</p>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-bold text-green-700 dark:text-green-400">88 pontos</p>
                  <p className="text-xs text-muted-foreground">Pontuação LEED</p>
                </div>
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                  <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">100%</p>
                  <p className="text-xs text-muted-foreground">Energia Renovável</p>
                </div>
                <div className="text-center p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                  <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                  <p className="font-bold text-cyan-700 dark:text-cyan-400">70%</p>
                  <p className="text-xs text-muted-foreground">Redução Consumo Água</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* KPIs Principais */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Indicadores de Desempenho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold text-primary">200+</p>
                <p className="text-sm text-muted-foreground mt-1">Eventos/Ano</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-600">3M+</p>
                <p className="text-sm text-muted-foreground mt-1">Visitantes/Ano</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">6MW</p>
                <p className="text-sm text-muted-foreground mt-1">Usina Solar</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-amber-600">62.000</p>
                <p className="text-sm text-muted-foreground mt-1">Capacidade</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Iniciativas Sustentáveis */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Iniciativas Sustentáveis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Energia</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Usina solar fotovoltaica de 6MW na cobertura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Iluminação 100% LED de alta eficiência</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Sistema de automação predial inteligente</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Geração excedente injetada na rede</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Água</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Sistema de captação de água de chuva (5.000m³)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Estação de tratamento de esgoto própria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Reuso de 100% da água tratada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Irrigação inteligente do gramado</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Resíduos e Materiais</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-600">95%</p>
                    <p className="text-sm text-muted-foreground">Reciclagem de resíduos em eventos</p>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-amber-600">Zero</p>
                    <p className="text-sm text-muted-foreground">Resíduos para aterro sanitário</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-blue-600">100%</p>
                    <p className="text-sm text-muted-foreground">Compostagem de orgânicos</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default MinasArenaPage;
