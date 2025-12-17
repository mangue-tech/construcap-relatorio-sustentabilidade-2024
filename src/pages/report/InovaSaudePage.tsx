import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2,
  Award,
  Stethoscope,
  Shield,
  Users,
  Heart,
  Server,
  GraduationCap
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
                Gestão de hospitais públicos de alta complexidade no Estado de São Paulo
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
            A <strong>Inova Saúde São Paulo SPE S.A.</strong> e a <strong>Inova Saúde Sorocaba SPE S.A.</strong> são 
            sociedades de propósito específico responsáveis pela gestão de hospitais públicos de alta complexidade 
            no Estado de São Paulo, por meio de parcerias público-privadas. As operações contemplam o 
            <strong> Hospital Estadual da Mulher (HEM)</strong> e o <strong>Hospital Regional de Sorocaba (HRS)</strong>, 
            em Sorocaba, além do <strong>Hospital Estadual de São José dos Campos (HESJC)</strong> (GRI 203-1, 416-1).
          </p>
        </section>

        {/* Hospitais */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-600" />
                Unidades Hospitalares
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">HEM</p>
                  <p className="text-xs text-muted-foreground">Hospital Estadual da Mulher – Sorocaba</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">HRS</p>
                  <p className="text-xs text-muted-foreground">Hospital Regional de Sorocaba</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">HESJC</p>
                  <p className="text-xs text-muted-foreground">Hospital Estadual de São José dos Campos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Serviços Não Assistenciais */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Serviços Não Assistenciais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Inova Saúde oferece infraestrutura hospitalar moderna e serviços não assistenciais essenciais 
                à qualidade do atendimento SUS:
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Gestão de instalações",
                  "Manutenção predial",
                  "Apoio logístico",
                  "Hotelaria hospitalar",
                  "Nutrição",
                  "Limpeza especializada",
                  "Segurança patrimonial",
                  "Tecnologia da informação",
                  "Engenharia clínica"
                ].map((servico, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">{servico}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Proposta de Valor */}
        <section>
          <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-600" />
                Infraestrutura e Tecnologia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A proposta de valor da Inova Saúde diferencia-se por integrar infraestrutura física de última 
                geração com gestão profissionalizada de serviços de apoio, garantindo disponibilidade operacional 
                elevada, menores tempos de indisponibilidade de equipamentos e maior conforto para pacientes, 
                familiares e equipes de saúde (GRI 416-1, 416-2).
              </p>
              <p className="text-muted-foreground">
                Os hospitais contam com:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Sistemas automatizados de climatização",
                  "Redes estruturadas de dados",
                  "Centrais modernas de utilidades",
                  "Gestão de manutenção preventiva e corretiva",
                  "Equipamentos médico-hospitalares de última geração",
                  "Mobiliário técnico especializado",
                  "Prontuários eletrônicos",
                  "Monitoramento e suporte à operação hospitalar"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recursos Humanos */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Recursos Humanos e Desenvolvimento Local
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                No campo social e de recursos humanos, as unidades da Inova Saúde empregam centenas de profissionais 
                e contratam fornecedores locais, contribuindo para o desenvolvimento econômico das regiões onde atuam. 
                Em conjunto, as operações reúnem centenas de colaboradores diretos e terceirizados distribuídos entre 
                funções administrativas, de apoio e técnicas, com políticas de capacitação contínua e foco em saúde e 
                segurança ocupacional (GRI 401-1, 403-1, 404-1).
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Treinamento */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                Programas de Treinamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                A empresa mantém programas estruturados de treinamento em temas essenciais:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Segurança do paciente",
                  "Prevenção de infecções",
                  "Uso seguro de equipamentos",
                  "Gestão de resíduos de serviços de saúde",
                  "Atendimento humanizado"
                ].map((tema, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    <span className="text-sm">{tema}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certificações */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-600" />
                Certificações e Reconhecimento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Em termos de reconhecimento institucional, as unidades da Inova Saúde contam com certificações 
                relevantes em qualidade e segurança assistencial, bem como selos específicos em gestão ambiental 
                e alimentação hospitalar, o que reforça a aderência a padrões rigorosos de conformidade, segurança 
                sanitária e governança (GRI 416-1, 416-2).
              </p>
              <p className="text-muted-foreground mt-4">
                A combinação entre infraestrutura moderna, serviços de suporte altamente estruturados e compromisso 
                com a qualidade dos ambientes hospitalares diferencia a Inova Saúde de parte significativa da rede SUS, 
                contribuindo para ampliar a capacidade do sistema público de ofertar serviços de saúde em instalações 
                mais modernas, seguras e eficientes.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Impacto Socioeconômico */}
        <section>
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Impacto Socioeconômico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A atuação da Inova Saúde gera impactos socioeconômicos relevantes nas cidades de Sorocaba e São José 
                dos Campos, ao fortalecer a rede pública de saúde, ampliar a oferta de leitos e serviços de alta 
                complexidade e promover ambientes hospitalares mais adequados à recuperação de pacientes, ao trabalho 
                das equipes multidisciplinares e à experiência de familiares e acompanhantes (GRI 203-1, 203-2).
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default InovaSaudePage;