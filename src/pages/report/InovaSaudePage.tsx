import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HeartPulse, 
  Users, 
  Building2,
  Award,
  Stethoscope,
  BedDouble,
  Activity,
  Target,
  Shield
} from "lucide-react";
import inovaSaudeLogo from "@/assets/companies/inova-saude.png";
import inovaSaudeHero from "@/assets/operations/inova-saude-hospital.jpg";

const InovaSaudePage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={inovaSaudeHero} alt="Inova Saúde Hospital" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={inovaSaudeLogo} alt="Inova Saúde" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Inova Saúde
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Gestão de infraestrutura hospitalar com excelência operacional e humanização
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
            Sobre a Inova Saúde
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A Inova Saúde atua na gestão de infraestrutura e facilities de unidades hospitalares, 
            garantindo ambientes seguros, eficientes e humanizados para pacientes e profissionais 
            de saúde. A empresa é referência em gestão hospitalar integrada, com foco em 
            qualidade, segurança e sustentabilidade.
          </p>
        </section>

        {/* KPIs Principais */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Indicadores de Desempenho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-600">8</p>
                <p className="text-sm text-muted-foreground mt-1">Unidades Hospitalares</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6 text-center">
                <BedDouble className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-600">2.500+</p>
                <p className="text-sm text-muted-foreground mt-1">Leitos Gerenciados</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-red-500/10 to-red-500/5 border-red-500/20">
              <CardContent className="p-6 text-center">
                <HeartPulse className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-red-600">1.2M+</p>
                <p className="text-sm text-muted-foreground mt-1">Atendimentos/Ano</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <p className="text-3xl font-bold text-amber-600">4.800+</p>
                <p className="text-sm text-muted-foreground mt-1">Colaboradores</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Qualidade e Certificações */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Qualidade e Certificações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                  <Shield className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-amber-700 dark:text-amber-400">ONA Nível 3</p>
                  <p className="text-xs text-muted-foreground">Acreditação Hospitalar</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">ISO 9001</p>
                  <p className="text-xs text-muted-foreground">Gestão da Qualidade</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-bold text-green-700 dark:text-green-400">ISO 14001</p>
                  <p className="text-xs text-muted-foreground">Gestão Ambiental</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Serviços */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                Serviços de Gestão Hospitalar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Infraestrutura</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Manutenção predial preventiva e corretiva</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Gestão de equipamentos médico-hospitalares</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Sistemas críticos (gases medicinais, ar condicionado)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
                      <span>Gestão energética e eficiência</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold">Facilities</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Higienização hospitalar especializada</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Gestão de resíduos de serviços de saúde</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Controle de pragas e vetores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0" />
                      <span>Segurança patrimonial integrada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Indicadores de Qualidade */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-600" />
                Indicadores de Qualidade
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">99.8%</p>
                  <p className="text-sm text-muted-foreground">Disponibilidade de equipamentos</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfação dos clientes</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">Zero</p>
                  <p className="text-sm text-muted-foreground">Infecções por falha de infraestrutura</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Conformidade regulatória</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default InovaSaudePage;
