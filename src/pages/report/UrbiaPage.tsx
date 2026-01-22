import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Building2, TreePine, Mountain, Waves, Users, Music, Telescope, ExternalLink } from "lucide-react";
import urbiaLogo from "@/assets/companies/urbia.png";
import urbiaHero from "@/assets/operations/urbia-principal.jpg";
import urbiaParques from "@/assets/operations/urbia-parques.jpg";
import urbiaClaras from "@/assets/operations/urbia-claras.jpg";
import urbiaCanions from "@/assets/operations/urbia-canions.webp";
import urbiaCataratas from "@/assets/operations/urbia-cataratas.png";

const UrbiaPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[450px] -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={urbiaHero} alt="Urbia Parks" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img
              src={urbiaLogo}
              alt="Urbia"
              className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4"
            />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Urbia</h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Gestão de parques urbanos e unidades de conservação de alto valor ecológico
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
            A Urbia reúne as operações de gestão de parques do Grupo Construcap, atuando em parques urbanos de grande
            relevância e em unidades de conservação naturais de alto valor ecológico. No conjunto de concessões, a Urbia
            é responsável pela administração de áreas que somam aproximadamente
            <strong> 123 mil hectares</strong>, abrangendo parques urbanos, áreas de mata atlântica e parques nacionais,
            com cerca de <strong>20 milhões de visitas anuais</strong>, consolidando-se como um dos maiores operadores
            privados de parques e atrativos naturais do país (GRI 304-1, 203-1).
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">~123 mil</p>
              <p className="text-sm text-muted-foreground">hectares administrados</p>
            </div>
            <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">~20 milhões</p>
              <p className="text-sm text-muted-foreground">visitas anuais</p>
            </div>
          </div>
        </section>

        {/* Urbia Parques */}
        <section>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={urbiaParques}
                  alt="Urbia Parques - Vista aérea do Parque Ibirapuera"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TreePine className="w-5 h-5 text-green-600" />
                    Urbia Parques – São Paulo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A atuação da Urbia Gestão de Parques tem como destaque a gestão de{" "}
                    <strong>seis parques urbanos em São Paulo</strong>, entre eles o <strong>Parque Ibirapuera</strong>,
                    um dos mais emblemáticos parques da América Latina. Somados, esses parques urbanos receberam{" "}
                    <strong>17,2 milhões de visitantes</strong> no período, constituindo um importante sistema de lazer,
                    esporte, cultura e bem-estar para a população da cidade (GRI 203-1, 304-3).
                  </p>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg text-center">
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">17,2 milhões</p>
                    <p className="text-sm text-muted-foreground">visitantes nos parques urbanos de São Paulo</p>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Educação Ambiental e Cultura */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Telescope className="w-5 h-5 text-purple-600" />
                Educação Ambiental e Cultura
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                No eixo de educação ambiental e cultura, as operações do Ibirapuera incluem a realização de
                <strong> 642 sessões de planetário</strong>, ações de divulgação científica, atividades culturais
                permanentes e programação voltada a escolas da rede pública, com foco em astronomia, ciência e meio
                ambiente (GRI 413-1, 404-2).
              </p>
              <p className="text-muted-foreground">
                Também são mantidas atividades de música e cultura em espaços públicos, com destaque para
                <strong> 38 apresentações da Escola de Música do Ibirapuera</strong>, que fortalece a inclusão social
                por meio da formação musical e da democratização do acesso à cultura.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg text-center">
                  <Telescope className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">642</p>
                  <p className="text-sm text-muted-foreground">sessões de planetário</p>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg text-center">
                  <Music className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-purple-700 dark:text-purple-400">38</p>
                  <p className="text-sm text-muted-foreground">apresentações da Escola de Música</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Urbia Águas Claras */}
        <section>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={urbiaClaras}
                  alt="Urbia Águas Claras - Vista da Mata Atlântica"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-green-600" />
                    Urbia Águas Claras – Mata Atlântica
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A atuação Urbia Águas Claras abrange o <strong>Parque Estadual da Cantareira</strong> e o
                    <strong> Parque Estadual Alberto Löfgren (Horto Florestal)</strong>, ambos em São Paulo, que
                    constituem um importante remanescente de Mata Atlântica e um dos principais mananciais de água da
                    região metropolitana. A gestão inclui manutenção de trilhas, controle de visitantes, conservação de
                    vegetação nativa, apoio a ações de fiscalização em parceria com órgãos ambientais e promoção de
                    atividades de interpretação ambiental (GRI 304-2, 304-3).
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Urbia Cânions Verdes */}
        <section>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={urbiaCanions}
                  alt="Urbia Cânions Verdes - Tirolesa"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mountain className="w-5 h-5 text-amber-600" />
                    Urbia Cânions Verdes – UNESCO Geoparque
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    A atuação da Urbia Cânions Verdes contempla a gestão dos{" "}
                    <strong>parques nacionais de Aparados da Serra e Serra Geral</strong>, em Santa Catarina e Rio
                    Grande do Sul, inseridos em área reconhecida como
                    <strong> Geoparque Mundial pela UNESCO</strong>. A operação combina conservação ambiental com
                    experiência turística qualificada, por meio de trilhas estruturadas, mirantes, serviços de apoio ao
                    visitante e atrativos de aventura (GRI 203-1, 304-3, 413-1).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">
                        Tirolesa do Cânion Fortaleza
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Considerada uma das maiores da América Latina, oferece experiência única de aventura.
                      </p>
                    </div>
                    <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Trilha do Rio do Boi</h4>
                      <p className="text-sm text-muted-foreground">
                        Figura entre os principais roteiros de ecoturismo do país.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Urbia Cataratas */}
        <section>
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/5">
                <img
                  src={urbiaCataratas}
                  alt="Urbia Cataratas - Cataratas do Iguaçu"
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="md:w-3/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Waves className="w-5 h-5 text-blue-600" />
                    Urbia Cataratas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A Urbia Cataratas compreende a atuação em áreas associadas ao{" "}
                    <strong>Parque Nacional do Iguaçu</strong>, ícone do turismo brasileiro. Nessas operações, a gestão
                    é orientada pela manutenção da integridade dos atrativos naturais, controle de fluxos de visitação,
                    ordenamento de uso público, apoio à fiscalização ambiental e oferta de serviços de transporte,
                    alimentação e atendimento ao visitante com elevados padrões de qualidade e segurança (GRI 304-2,
                    416-1).
                  </p>
                </CardContent>
              </div>
            </div>
          </Card>
        </section>

        {/* Modelo de Atuação */}
        <section>
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                Modelo de Atuação Integrado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Em todos os parques, a lógica de atuação combina <strong>conservação da biodiversidade</strong>,
                <strong> uso público responsável</strong>, <strong>geração de emprego e renda local</strong> e
                <strong> expansão da oferta de lazer e turismo de natureza</strong> para a população.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Saiba Mais */}
        <section>
          <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 text-white">
            <CardContent className="py-8 text-center">
              <h3 className="text-xl font-bold mb-4">
                Para saber mais, clique aqui e acesse o Relatório de Sustentabilidade 2024 da Urbia
              </h3>
              <a
                href="https://www.urbia.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                Acessar Relatório
              </a>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default UrbiaPage;
