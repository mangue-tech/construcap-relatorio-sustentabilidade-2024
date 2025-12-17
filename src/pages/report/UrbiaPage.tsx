import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TreePine, 
  Users, 
  MapPin, 
  Award,
  Leaf,
  Heart,
  Building2,
  Target
} from "lucide-react";
import urbiaLogo from "@/assets/companies/urbia.png";
import urbiaHero from "@/assets/operations/urbia-park.jpg";

const UrbiaPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={urbiaHero} alt="Urbia Parks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={urbiaLogo} alt="Urbia" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Urbia
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Gestão de parques urbanos e áreas verdes com foco em sustentabilidade e bem-estar social
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
            Sobre a Urbia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Urbia é responsável pela gestão de parques urbanos em diversas cidades brasileiras, 
            promovendo a conservação ambiental, lazer e qualidade de vida para milhões de pessoas. 
            A empresa opera sob concessão e desenvolve programas de educação ambiental, 
            preservação da biodiversidade e inclusão social.
          </p>
        </section>

        {/* KPIs Principais */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Indicadores de Desempenho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6 text-center">
                <TreePine className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">18</p>
                <p className="text-sm text-muted-foreground mt-1">Parques Gerenciados</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-600">25M+</p>
                <p className="text-sm text-muted-foreground mt-1">Visitantes/Ano</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-amber-600">5.000+</p>
                <p className="text-sm text-muted-foreground mt-1">Hectares de Área Verde</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-purple-600">12</p>
                <p className="text-sm text-muted-foreground mt-1">Certificações Ambientais</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Destaques Ambientais */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Destaques Ambientais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Preservação da Biodiversidade</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Monitoramento de 500+ espécies de fauna</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Programa de reintrodução de espécies nativas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Corredores ecológicos urbanos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Plantio de 50.000+ mudas nativas/ano</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Gestão de Recursos</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>100% de energia renovável nos parques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Sistema de captação de água de chuva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Compostagem de resíduos orgânicos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>85% de reciclagem de resíduos sólidos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Destaques Sociais */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Impacto Social
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">150.000+</p>
                  <p className="text-sm text-muted-foreground">Pessoas atendidas em programas de educação ambiental</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">2.500+</p>
                  <p className="text-sm text-muted-foreground">Empregos diretos gerados</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">R$ 15M</p>
                  <p className="text-sm text-muted-foreground">Investimento social em comunidades do entorno</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Programas Sociais</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Educação Ambiental nas Escolas",
                    "Atividades para Terceira Idade",
                    "Esportes e Lazer Gratuitos",
                    "Acessibilidade Universal",
                    "Eventos Culturais Comunitários",
                    "Capacitação de Jovens"
                  ].map((programa, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <span className="w-2 h-2 bg-green-500 rounded-full" />
                      <span className="text-sm">{programa}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default UrbiaPage;
