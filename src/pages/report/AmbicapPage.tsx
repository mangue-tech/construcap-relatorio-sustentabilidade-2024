import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TreePine,
  Clock,
  AlertTriangle,
  MapPin,
  Users,
  Leaf
} from "lucide-react";
import ambicapLogo from "@/assets/companies/ambicap.png";
import ambicapHero from "@/assets/operations/ambicap-hero.png";

const parks = [
  { name: "Parque Estadual da Cantareira", area: "7.916,52 hectares" },
  { name: "Parque Ibirapuera", area: "158 hectares" },
  { name: "Parque Estadual Alberto Löfgren (Horto Florestal)", area: "73,9 hectares" },
  { name: "Parque Tenente Brigadeiro Roberto Faria Lima", area: "5 hectares" },
  { name: "Parque Jacintho Alberto", area: "4,1 hectares" },
  { name: "Parque Jardim Felicidade", area: "2,9 hectares" },
  { name: "Parque dos Eucaliptos", area: "1,5 hectares" },
  { name: "Parque do Lajeado", area: "1,4 hectares" },
];

const AmbicapPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[450px] -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={ambicapHero} alt="Ambicap" className="w-full h-full object-cover object-[center_60%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={ambicapLogo} alt="Ambicap" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ambicap
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Zeladoria, limpeza e manejo de áreas verdes em parques
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Sobre a Operação */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TreePine className="w-6 h-6 text-primary" />
            Sobre a Ambicap
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Ambicap é uma empresa do Grupo Construcap criada para executar atividades de <strong>zeladoria, 
              limpeza e manejo de áreas verdes</strong> em operações de parques, com origem na estruturação da 
              operação no Parque Ibirapuera. A constituição da empresa decorreu de uma necessidade de reorganização 
              do modelo operacional dessas frentes, visando assegurar continuidade do serviço, padronização de 
              processos e aderência a práticas corporativas de gestão.
            </p>
          </div>
        </section>

        {/* Contexto de Implementação */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Contexto de Implementação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A implementação ocorreu em um contexto de <strong>transição contratual</strong>, com prazo reduzido 
                para mobilização. Em aproximadamente <strong>20 a 30 dias</strong>, foram conduzidas atividades de 
                formalização e estruturação operacional, incluindo:
              </p>
              <div className="grid md:grid-cols-2 gap-3 mt-4">
                {[
                  "Contratação de equipe",
                  "Aquisição de equipamentos",
                  "Compra de materiais e uniformes",
                  "Organização de rotinas operacionais"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg mt-4">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-700 dark:text-blue-400">Início das Operações</p>
                    <p className="text-sm text-muted-foreground">
                      A operação anterior foi encerrada em <strong>21 de outubro de 2023</strong>, data a partir 
                      da qual a Ambicap passou a executar as atividades de campo no Parque Ibirapuera.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Resposta a Eventos Climáticos */}
        <section>
          <Card className="bg-gradient-to-br from-amber-500/5 to-transparent border-amber-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                Resposta a Eventos Climáticos Extremos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Nos meses subsequentes ao início da operação, a Ambicap atuou em cenários de <strong>resposta 
                emergencial</strong> associados a eventos climáticos extremos na cidade de São Paulo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">3 de novembro de 2023</p>
                  <p className="text-sm text-muted-foreground">
                    Um vendaval derrubou <strong>mais de 60 árvores</strong> no Parque Ibirapuera, demandando ações 
                    de remoção, recomposição e reorganização de áreas para restabelecimento das condições de 
                    funcionamento.
                  </p>
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
                  <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">8 de janeiro de 2024</p>
                  <p className="text-sm text-muted-foreground">
                    Novo evento climático derrubou <strong>aproximadamente 160 árvores</strong>, exigindo mobilização 
                    adicional para remoção e recomposição das áreas afetadas.
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                Em ambos os casos, houve necessidade de <strong>coordenação entre equipes internas</strong> da 
                Ambicap e demais estruturas do grupo e da operação do parque para restabelecer as condições 
                normais de funcionamento.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Parques Atendidos */}
        <section>
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Parques Atendidos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A operação se iniciou no Parque Ibirapuera e posteriormente expandiu para outros parques na 
                região de São Paulo, totalizando <strong>8 parques</strong> sob gestão da Ambicap:
              </p>
              
              <div className="grid gap-3 mt-4">
                {parks.map((park, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800/50"
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-green-600 shrink-0" />
                      <span className="font-medium">{park.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full">
                      {park.area}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="p-4 bg-green-100 dark:bg-green-950/40 rounded-lg mt-6">
                <p className="text-center">
                  <span className="text-3xl font-bold text-green-700 dark:text-green-400">8.163,32</span>
                  <span className="text-lg text-muted-foreground ml-2">hectares de área total atendida</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default AmbicapPage;
