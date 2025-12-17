import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Truck, 
  Users, 
  MapPin, 
  Shield, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  Building2,
  Target,
  Handshake
} from "lucide-react";
import supplyChainHero from "@/assets/report/social-hero.jpg";

const SupplyChainPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img 
          src={supplyChainHero} 
          alt="Cadeia de Fornecimento" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
          <div className="px-6 lg:px-12">
            <p className="text-primary-foreground/80 text-sm font-medium mb-2">GRI 204, 308, 414</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Cadeia de Fornecimento
            </h1>
            <p className="text-primary-foreground/90 text-lg max-w-2xl">
              Gestão responsável da cadeia de suprimentos com foco em práticas sustentáveis e desenvolvimento local
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {/* Introdução */}
        <section>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A gestão responsável da cadeia de fornecimento é um pilar fundamental da estratégia de sustentabilidade 
            do Grupo Construcap. Priorizamos o desenvolvimento de fornecedores locais, a avaliação de práticas 
            socioambientais e a garantia de conformidade com nossos padrões éticos e de qualidade.
          </p>
        </section>

        {/* KPIs Principais */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Indicadores da Cadeia de Fornecimento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary">2.847</p>
                <p className="text-sm text-muted-foreground mt-1">Fornecedores Ativos</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-green-600">78%</p>
                <p className="text-sm text-muted-foreground mt-1">Fornecedores Locais</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-blue-600">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Avaliados em Critérios ESG</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-amber-600">R$ 1,8 bi</p>
                <p className="text-sm text-muted-foreground mt-1">Volume de Compras</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Fornecedores Locais - GRI 204-1 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Proporção de Gastos com Fornecedores Locais (GRI 204-1)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Priorizamos a contratação de fornecedores locais para fortalecer as economias regionais 
                e reduzir impactos ambientais associados ao transporte de materiais e equipamentos.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Distribuição por Região</h4>
                  <div className="space-y-3">
                    {[
                      { regiao: "Sudeste", percentual: 62, valor: "R$ 1.116 mi" },
                      { regiao: "Nordeste", percentual: 18, valor: "R$ 324 mi" },
                      { regiao: "Sul", percentual: 12, valor: "R$ 216 mi" },
                      { regiao: "Centro-Oeste", percentual: 5, valor: "R$ 90 mi" },
                      { regiao: "Norte", percentual: 3, valor: "R$ 54 mi" },
                    ].map((item) => (
                      <div key={item.regiao} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.regiao}</span>
                          <span className="font-medium">{item.percentual}% ({item.valor})</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${item.percentual}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Critérios de Definição "Local"</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Fornecedores sediados no mesmo estado da obra</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Raio máximo de 200km do canteiro de obras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Preferência para MPEs locais em licitações</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>Programas de desenvolvimento de fornecedores regionais</span>
                    </li>
                  </ul>
                  
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm font-medium text-primary">Meta 2025</p>
                    <p className="text-2xl font-bold">80%</p>
                    <p className="text-xs text-muted-foreground">de gastos com fornecedores locais</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Avaliação Ambiental - GRI 308 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Avaliação Ambiental de Fornecedores (GRI 308)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 text-center">
                    <FileCheck className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">100%</p>
                    <p className="text-xs text-green-600 dark:text-green-500">Novos fornecedores avaliados com critérios ambientais (GRI 308-1)</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">23</p>
                    <p className="text-xs text-amber-600 dark:text-amber-500">Fornecedores com impactos ambientais identificados (GRI 308-2)</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4 text-center">
                    <Handshake className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">19</p>
                    <p className="text-xs text-blue-600 dark:text-blue-500">Planos de melhoria acordados e em andamento</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Critérios de Avaliação Ambiental</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { criterio: "Licenças ambientais válidas", peso: "Eliminatório" },
                    { criterio: "Gestão de resíduos sólidos", peso: "Alta relevância" },
                    { criterio: "Controle de emissões atmosféricas", peso: "Alta relevância" },
                    { criterio: "Gestão de efluentes", peso: "Média relevância" },
                    { criterio: "Certificações ambientais (ISO 14001)", peso: "Diferencial" },
                    { criterio: "Política de sustentabilidade", peso: "Diferencial" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">{item.criterio}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.peso === "Eliminatório" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                        item.peso === "Alta relevância" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        item.peso === "Média relevância" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" :
                        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      }`}>
                        {item.peso}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Avaliação Social - GRI 414 */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                Avaliação Social de Fornecedores (GRI 414)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                  <CardContent className="p-4 text-center">
                    <FileCheck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-blue-700 dark:text-blue-400">100%</p>
                    <p className="text-xs text-blue-600 dark:text-blue-500">Novos fornecedores avaliados com critérios sociais (GRI 414-1)</p>
                  </CardContent>
                </Card>
                <Card className="bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4 text-center">
                    <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">15</p>
                    <p className="text-xs text-amber-600 dark:text-amber-500">Fornecedores com impactos sociais identificados (GRI 414-2)</p>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                  <CardContent className="p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">0</p>
                    <p className="text-xs text-green-600 dark:text-green-500">Contratos encerrados por violações graves</p>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Critérios de Avaliação Social</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { criterio: "Regularidade trabalhista (FGTS, INSS)", peso: "Eliminatório" },
                    { criterio: "Ausência de trabalho infantil", peso: "Eliminatório" },
                    { criterio: "Ausência de trabalho análogo à escravidão", peso: "Eliminatório" },
                    { criterio: "Práticas de saúde e segurança", peso: "Alta relevância" },
                    { criterio: "Políticas de diversidade e inclusão", peso: "Diferencial" },
                    { criterio: "Programas de desenvolvimento profissional", peso: "Diferencial" },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm">{item.criterio}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.peso === "Eliminatório" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" :
                        item.peso === "Alta relevância" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" :
                        "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      }`}>
                        {item.peso}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Programa de Desenvolvimento */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                Programa de Desenvolvimento de Fornecedores
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                O Programa de Desenvolvimento de Fornecedores visa capacitar e fortalecer nossa cadeia 
                de suprimentos, promovendo melhores práticas em gestão, qualidade, meio ambiente e 
                responsabilidade social.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { titulo: "Fornecedores Capacitados", valor: "312", icon: Users },
                  { titulo: "Horas de Treinamento", valor: "4.680", icon: FileCheck },
                  { titulo: "Workshops Realizados", valor: "24", icon: Building2 },
                  { titulo: "Investimento", valor: "R$ 890 mil", icon: Truck },
                ].map((item, index) => (
                  <Card key={index} className="bg-muted/30">
                    <CardContent className="p-4 text-center">
                      <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-xl font-bold">{item.valor}</p>
                      <p className="text-xs text-muted-foreground">{item.titulo}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Temas dos Programas de Capacitação</h4>
                <div className="grid md:grid-cols-3 gap-3">
                  {[
                    "Gestão da Qualidade",
                    "Saúde e Segurança do Trabalho",
                    "Gestão Ambiental",
                    "Compliance e Ética",
                    "Gestão Financeira",
                    "Tecnologia e Inovação",
                  ].map((tema, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{tema}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Compromissos e Metas */}
        <section>
          <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Compromissos e Metas 2025
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { meta: "80% de gastos com fornecedores locais", progresso: 78 },
                  { meta: "100% dos fornecedores críticos auditados", progresso: 85 },
                  { meta: "Zero fornecedores com violações graves", progresso: 100 },
                  { meta: "500 fornecedores capacitados no programa", progresso: 62 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.meta}</span>
                      <span className="font-medium text-primary">{item.progresso}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${item.progresso}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default SupplyChainPage;
