import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf, 
  Droplets, 
  Building2,
  Award,
  Recycle,
  Factory,
  Truck,
  Target,
  TreePine
} from "lucide-react";
import ambicapLogo from "@/assets/companies/ambicap.png";

const AmbicapPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden bg-gradient-to-r from-teal-600 to-teal-800">
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={ambicapLogo} alt="Ambicap" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ambicap
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Soluções ambientais integradas com foco em economia circular e sustentabilidade
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
            Sobre a Ambicap
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Ambicap é a empresa do Grupo Construcap especializada em soluções ambientais, 
            oferecendo serviços de gestão de resíduos, tratamento de efluentes, remediação de 
            áreas contaminadas e consultoria ambiental. A empresa atua com tecnologias inovadoras 
            e processos que promovem a economia circular e a regeneração ambiental.
          </p>
        </section>

        {/* KPIs Principais */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Indicadores de Desempenho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border-teal-500/20">
              <CardContent className="p-6 text-center">
                <Recycle className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-teal-600">95%</p>
                <p className="text-sm text-muted-foreground mt-1">Taxa de Reciclagem</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-600">2M m³</p>
                <p className="text-sm text-muted-foreground mt-1">Efluentes Tratados/Ano</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6 text-center">
                <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Áreas Remediadas</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6 text-center">
                <Factory className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-amber-600">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Clientes Industriais</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Serviços */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Soluções Ambientais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Gestão de Resíduos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                      <span>Coleta e transporte especializado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                      <span>Centrais de triagem e valorização</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                      <span>Coprocessamento e destinação final</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0" />
                      <span>Logística reversa integrada</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Tratamento de Efluentes</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Estações de tratamento customizadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Sistemas de reuso de água</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Tratamento de efluentes industriais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Monitoramento e controle automatizado</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Remediação Ambiental</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Investigação e diagnóstico de áreas contaminadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Planos de intervenção e remediação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Biorremediação e fitorremediação</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Monitoramento ambiental contínuo</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Consultoria Ambiental</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Licenciamento ambiental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Estudos de impacto ambiental (EIA/RIMA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Auditorias e due diligence ambiental</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                      <span>Inventários de GEE e carbono</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Economia Circular */}
        <section>
          <Card className="bg-gradient-to-br from-teal-500/5 to-transparent border-teal-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-teal-600" />
                Economia Circular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                A Ambicap aplica os princípios da economia circular em todas as suas operações, 
                transformando resíduos em recursos e promovendo o fechamento de ciclos produtivos.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg text-center">
                  <Truck className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-teal-700 dark:text-teal-400">120.000 t</p>
                  <p className="text-xs text-muted-foreground">Resíduos valorizados/ano</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <Recycle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-green-700 dark:text-green-400">85%</p>
                  <p className="text-xs text-muted-foreground">Recuperação de materiais</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <Droplets className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-blue-700 dark:text-blue-400">1.5M m³</p>
                  <p className="text-xs text-muted-foreground">Água reutilizada/ano</p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="text-xl font-bold text-amber-700 dark:text-amber-400">15</p>
                  <p className="text-xs text-muted-foreground">Certificações ambientais</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default AmbicapPage;
