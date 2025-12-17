import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf,
  Award,
  Zap,
  Droplets,
  Building2,
  Star
} from "lucide-react";
import minasArenaLogo from "@/assets/companies/minas-arena.png";
import minasArenaHero from "@/assets/operations/minas-arena-stadium.jpg";

const MinasArenaPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={minasArenaHero} alt="Minas Arena Stadium" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-600/50 flex items-center">
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
              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-center max-w-xs mx-auto">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="font-bold text-amber-700 dark:text-amber-400">1º do Mundo</p>
                <p className="text-xs text-muted-foreground">Estádio LEED Platinum</p>
              </div>
            </CardContent>
          </Card>
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
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-500" />
                    Energia
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Usina solar fotovoltaica na cobertura</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Iluminação LED de alta eficiência</span>
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
                  <h4 className="font-semibold flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    Água
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Sistema de captação de água de chuva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Estação de tratamento de esgoto própria</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Reuso da água tratada</span>
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
                <p className="text-sm text-muted-foreground">
                  O estádio implementa práticas avançadas de gestão de resíduos, incluindo reciclagem 
                  em eventos, compostagem de resíduos orgânicos e destinação responsável de materiais.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default MinasArenaPage;
