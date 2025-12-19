import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Leaf,
  Award,
  Zap,
  Droplets,
  Building2,
  Star,
  Recycle,
  Heart,
  TrendingUp
} from "lucide-react";
import minasArenaLogo from "@/assets/companies/minas-arena.png";
import minasArenaHero from "@/assets/operations/minas-arena-stadium.jpg";

const MinasArenaPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[450px] -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
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
            A Minas Arena é responsável pela gestão do Estádio Governador Magalhães Pinto – o Mineirão –, 
            em Belo Horizonte (MG), por meio de uma parceria público-privada de longo prazo, atuando como 
            operadora de um dos principais equipamentos esportivos e de entretenimento do país. A concessão 
            envolve a administração, operação, manutenção e modernização da arena, assegurando padrões 
            elevados de segurança, conforto e experiência do público em jogos de futebol, grandes eventos 
            culturais e shows de porte nacional e internacional.
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
                O Mineirão consolidou-se como referência em gestão sustentável de arenas multiuso. O estádio 
                foi o primeiro do mundo a obter a certificação LEED na categoria Platinum, em 2014 (GRI 302-1, 
                302-3, 303-5), resultado de investimentos em eficiência energética, gestão hídrica, manejo de 
                resíduos e racionalização de insumos.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg text-center">
                  <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <p className="font-bold text-amber-700 dark:text-amber-400">1º do Mundo</p>
                  <p className="text-xs text-muted-foreground">Estádio LEED Platinum (2014)</p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                  <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-bold text-green-700 dark:text-green-400">Selo BH Sustentável – Ouro</p>
                  <p className="text-xs text-muted-foreground">Prefeitura de Belo Horizonte</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center md:col-span-2">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-bold text-blue-700 dark:text-blue-400">Cinco Bolas – SISBRACE</p>
                  <p className="text-xs text-muted-foreground">Sistema Brasileiro de Classificação de Estádios</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Energia Solar */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                Eficiência Energética
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A usina solar fotovoltaica instalada na cobertura e em áreas adjacentes do complexo esportivo 
                gerou <strong>1.317.600 kWh</strong> no período de referência, o que correspondeu a aproximadamente 
                <strong> 23,7%</strong> do consumo total de energia elétrica da operação, de <strong>5.564.830 kWh</strong>. 
                Essa contribuição reduz a dependência de fontes fósseis e reforça a estratégia de mitigação de 
                emissões de gases de efeito estufa associadas ao uso de eletricidade (GRI 302-1, 305-2).
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">1.317.600</p>
                  <p className="text-xs text-muted-foreground">kWh gerados pela usina solar</p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">23,7%</p>
                  <p className="text-xs text-muted-foreground">do consumo total de energia</p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">5.564.830</p>
                  <p className="text-xs text-muted-foreground">kWh consumo total</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gestão Hídrica */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-500" />
                Gestão Hídrica
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Na gestão hídrica, o Mineirão opera um sistema de reaproveitamento de água que permitiu utilizar 
                <strong> 15.337 m³ de água de reúso</strong>, reduzindo em cerca de <strong>51%</strong> o consumo 
                de água potável, que totalizou <strong>10.557 m³</strong> no período (GRI 303-3, 303-5). A combinação 
                de uso de água de reúso em bacias sanitárias, irrigação e limpeza, aliada à modernização de 
                instalações hidráulicas, reforça o compromisso com o uso eficiente de recursos naturais e a 
                resiliência hídrica da operação.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">15.337</p>
                  <p className="text-xs text-muted-foreground">m³ de água de reúso</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">51%</p>
                  <p className="text-xs text-muted-foreground">redução no consumo de água potável</p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">10.557</p>
                  <p className="text-xs text-muted-foreground">m³ de água potável consumida</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gestão de Resíduos */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="w-5 h-5 text-green-600" />
                Gestão de Resíduos e Economia Circular
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A arena também se destaca pela gestão de resíduos e pela promoção de práticas circulares e de 
                educação ambiental (GRI 306-2, 306-4). Programas estruturados de segregação na fonte, coleta 
                seletiva e parcerias com cooperativas de catadores resultam em maior taxa de desvio de resíduos 
                de aterros sanitários, especialmente em eventos de grande porte, quando há maior geração de 
                resíduos recicláveis.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Programas Sociais */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Programas Sociais e Inclusão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                No eixo social, a Minas Arena desenvolve e apoia uma série de projetos com foco em inclusão, 
                diversidade e relacionamento com comunidades do entorno (GRI 203-1, 413-1).
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                  <h4 className="font-semibold text-purple-700 dark:text-purple-400 mb-2">#MineirãoDeTodos</h4>
                  <p className="text-sm text-muted-foreground">
                    Voltado à democratização do acesso ao estádio e à promoção de atividades esportivas e culturais acessíveis.
                  </p>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">#Repense</h4>
                  <p className="text-sm text-muted-foreground">
                    Sensibiliza torcedores e visitantes sobre consumo consciente e descarte adequado de resíduos.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Camarote TEA</h4>
                  <p className="text-sm text-muted-foreground">
                    Adapta a experiência de jogo para pessoas com Transtorno do Espectro Autista e suas famílias.
                  </p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <h4 className="font-semibold text-red-700 dark:text-red-400 mb-2">Mineirão Antirracista</h4>
                  <p className="text-sm text-muted-foreground">
                    Promove campanhas de combate ao racismo em parceria com clubes, federações e organizações da sociedade civil.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg md:col-span-2">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Vizinhos do Mineirão</h4>
                  <p className="text-sm text-muted-foreground">
                    Fortalece o relacionamento com o entorno imediato da arena, com foco em diálogo, mitigação de impactos e oportunidades econômicas locais.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Impacto Econômico */}
        <section>
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                Impacto Econômico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Estudo econômico independente apontou que a operação do Mineirão pela Minas Arena gerou impactos 
                expressivos na economia de Belo Horizonte e da região metropolitana. A atividade da concessionária 
                contribuiu com <strong>R$ 963 milhões</strong> em geração de valor na economia local e a manutenção 
                de <strong>7.232 postos de trabalho</strong> diretos, indiretos e induzidos ao longo da cadeia 
                produtiva, considerando atividades de eventos, serviços, comércio e turismo (GRI 201-1, 203-1).
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">R$ 963 milhões</p>
                  <p className="text-sm text-muted-foreground">geração de valor na economia local</p>
                </div>
                <div className="p-6 bg-green-50 dark:bg-green-950/30 rounded-lg text-center">
                  <p className="text-3xl font-bold text-green-700 dark:text-green-400">7.232</p>
                  <p className="text-sm text-muted-foreground">postos de trabalho diretos, indiretos e induzidos</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">
                Essa combinação de impacto econômico, inovação em sustentabilidade e programas sociais posiciona 
                a Minas Arena como um dos principais casos de referência em concessões de arenas esportivas no Brasil.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default MinasArenaPage;