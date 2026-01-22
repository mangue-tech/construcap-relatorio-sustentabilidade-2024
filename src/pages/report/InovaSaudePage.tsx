import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Award, Shield, Users, Heart, Server, GraduationCap, MapPin } from "lucide-react";
import inovaSaudeLogo from "@/assets/companies/inova-saude.png";
import inovaSaudeHero from "@/assets/operations/inova-saude-hospital.jpg";
import hospitalSjc from "@/assets/operations/hospital-sjc.jpg";
import hospitalSorocaba from "@/assets/operations/hospital-sorocaba.jpg";
import hospitalMulher from "@/assets/operations/hospital-mulher.png";
import ccoImage from "@/assets/operations/cco.jpg";

const InovaSaudePage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[450px] -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={inovaSaudeHero} alt="Inova Saúde Hospital" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img
              src={inovaSaudeLogo}
              alt="Inova Saúde"
              className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4"
            />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Inova Saúde</h1>
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
            sociedades de propósito específico responsáveis pela gestão de hospitais públicos de alta complexidade no
            Estado de São Paulo, por meio de parcerias público-privadas. As operações contemplam o
            <strong> Hospital Estadual da Mulher (HEM)</strong> e o <strong>Hospital Regional de Sorocaba (HRS)</strong>
            , em Sorocaba, além do <strong>Hospital Estadual de São José dos Campos (HESJC)</strong> (GRI 203-1, 416-1).
          </p>
        </section>

        {/* Hospital SJC */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={hospitalSjc}
                  alt="Hospital Regional de São José dos Campos 'Dr. Rubens Savastano'"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <CardTitle className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Hospital Regional de São José dos Campos 'Dr. Rubens Savastano'
                </CardTitle>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Inaugurado em 2018, com investimento de R$ 239 milhões, o Hospital Regional de São José dos Campos
                    'Dr. Rubens Savastano' oferece 180 leitos, sendo 40 deles de UTI e 8 salas cirúrgicas, além de
                    serviço de apoio diagnóstico por imagem, endoscopia e terapia. A estrutura possui 33 mil metros
                    quadrados de área construída, alto nível de resolução e grande capacidade de atenção às urgências.
                  </p>
                  <p>
                    O hospital, por meio da Central de Regulação de Serviços de Saúde do Estado de São Paulo, atende a
                    população local, com mais de 727 mil habitantes, além dos 39 municípios da região, se tornando
                    referência para todo o Vale do Paraíba, com mais de dois milhões de habitantes (IBGE-2020).
                  </p>
                  <p>
                    A unidade foi responsável pela geração de cerca de 1.200 novos empregos na região e recebe pacientes
                    de média e alta complexidades em cirurgia trauma-ortopedia, neurocirurgia, cardiovascular, pediatria
                    e especialidades relacionadas a casos de urgência e emergência.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Hospital Sorocaba */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto md:order-2">
                <img
                  src={hospitalSorocaba}
                  alt="Hospital Regional de Sorocaba"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:order-1">
                <CardTitle className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Hospital Regional de Sorocaba 'Dr. Adib Domingos Jatene'
                </CardTitle>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    O Hospital Regional de Sorocaba 'Dr. Adib Domingos Jatene' foi o primeiro do estado de São Paulo a
                    ser entregue seguindo o modelo de Parceria Público-Privada (PPP) da Saúde. Ele é referência para a
                    população da cidade de Sorocaba, que tem cerca de 660 mil habitantes, além de atender os 48
                    municípios da região e 15 municípios das Regiões de Saúde de Mananciais e Rota dos Bandeirantes,
                    totalizando uma população de mais de 5 milhões de habitantes (IBGE – 2016), por meio da Central de
                    Regulação de Serviços de Saúde do Estado de São Paulo.
                  </p>
                  <p>
                    Inaugurado em 2018, o hospital oferece 260 leitos, dos quais 144 são de internação, 96 de UTI e 20
                    de cirurgia ambulatorial, distribuídos em 27 mil metros quadrados de área construída. Os recursos
                    utilizados para a execução das obras somam um total de R$ 255 milhões.
                  </p>
                  <p>
                    Conta ainda com ambulatório de especialidades médicas, que inclui cirurgia geral, cirurgia plástica,
                    ortopedia, urologia, anestesiologia e cardiologia clínica, além de centro de reabilitação e
                    fisioterapia, serviço de diagnósticos clínicos e por imagem e setor de urgência e emergência.
                  </p>
                  <p>
                    A unidade foi responsável pela geração de cerca de 1.350 novos empregos na região, funciona 24h e
                    suas unidades de emergência atendem crianças e adultos.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Hospital da Mulher */}
        <section>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img
                  src={hospitalMulher}
                  alt="Hospital Centro de Referência da Saúde da Mulher"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <CardTitle className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-pink-600" />
                  Hospital Centro de Referência da Saúde da Mulher
                </CardTitle>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    O Hospital Centro de Referência da Saúde da Mulher, mais conhecido como Hospital da Mulher, é o
                    terceiro do estado de São Paulo a ser entregue seguindo o modelo de Parceria Público-Privada (PPP)
                    da Saúde.
                  </p>
                  <p>
                    Inaugurado em 2022, oferece 162 leitos, dos quais 152 são de internação e 10 de UTI, além de 10
                    leitos dedicados à realização de cirurgia ambulatorial (hospital-dia), distribuídos em cerca de 44
                    mil metros quadrados de área construída.
                  </p>
                  <p>
                    O hospital conta com ambulatório de especialidades médicas, serviço de infusões e quimioterapia,
                    Centro de Alta Resolutividade (CARE), Centro de Reprodução Humana, Centro de Reabilitação e
                    Fisioterapia e serviço de diagnósticos clínicos e por imagem.
                  </p>
                  <p>
                    A unidade também mantém o projeto Bem-Me-Quer, parceria entre a Secretaria da Saúde e a Secretaria
                    de Segurança Pública, que contempla o atendimento humanizado para vítimas de violência sexual.
                  </p>
                </div>
              </div>
            </div>
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
                A Inova Saúde oferece infraestrutura hospitalar moderna e serviços não assistenciais essenciais à
                qualidade do atendimento SUS:
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
                  "Engenharia clínica",
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
          <Card className="bg-gradient-to-br from-blue-500/5 to-transparent border-blue-500/20 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-blue-600" />
                    Infraestrutura e Tecnologia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    A proposta de valor da Inova Saúde diferencia-se por integrar infraestrutura física de última
                    geração com gestão profissionalizada de serviços de apoio, garantindo disponibilidade operacional
                    elevada, menores tempos de indisponibilidade de equipamentos e maior conforto para pacientes,
                    familiares e equipes de saúde (GRI 416-1, 416-2).
                  </p>
                  <p className="text-muted-foreground text-sm">Os hospitais contam com:</p>
                  <div className="grid gap-2">
                    {[
                      "Sistemas automatizados de climatização",
                      "Redes estruturadas de dados",
                      "Centrais modernas de utilidades",
                      "Gestão de manutenção preventiva e corretiva",
                      "Equipamentos médico-hospitalares de última geração",
                      "Mobiliário técnico especializado",
                      "Prontuários eletrônicos",
                      "Monitoramento e suporte à operação hospitalar",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/20 rounded-lg"
                      >
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <span className="text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </div>
              <div className="h-64 md:h-auto">
                <img src={ccoImage} alt="Centro de Controle Operacional" className="w-full h-full object-cover" />
              </div>
            </div>
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
                No campo social e de recursos humanos, as unidades da Inova Saúde empregam centenas de profissionais e
                contratam fornecedores locais, contribuindo para o desenvolvimento econômico das regiões onde atuam. Em
                conjunto, as operações reúnem centenas de colaboradores diretos e terceirizados distribuídos entre
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
                  "Atendimento humanizado",
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
                relevantes em qualidade e segurança assistencial, bem como selos específicos em gestão ambiental e
                alimentação hospitalar, o que reforça a aderência a padrões rigorosos de conformidade, segurança
                sanitária e governança (GRI 416-1, 416-2).
              </p>
              <p className="text-muted-foreground mt-4">
                A combinação entre infraestrutura moderna, serviços de suporte altamente estruturados e compromisso com
                a qualidade dos ambientes hospitalares diferencia a Inova Saúde de parte significativa da rede SUS,
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
                A atuação da Inova Saúde gera impactos socioeconômicos relevantes nas cidades de Sorocaba e São José dos
                Campos, ao fortalecer a rede pública de saúde, ampliar a oferta de leitos e serviços de alta
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
