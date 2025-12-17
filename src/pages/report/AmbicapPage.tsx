import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2,
  Shield,
  Leaf,
  Users
} from "lucide-react";
import ambicapLogo from "@/assets/companies/ambicap.png";
import ambicapHero from "@/assets/operations/ambicap-environmental.jpg";

const AmbicapPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-8 overflow-hidden">
        <img src={ambicapHero} alt="Ambicap" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-600/50 flex items-center">
          <div className="px-6 lg:px-12 flex items-center gap-8">
            <img src={ambicapLogo} alt="Ambicap" className="w-24 h-24 md:w-32 md:h-32 object-contain bg-white rounded-xl p-4" />
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">Destaque das Operações</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ambicap
              </h1>
              <p className="text-white/90 text-lg max-w-2xl">
                Gestão integrada de ativos urbanos
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
            A Ambicap é a empresa do Grupo Construcap dedicada à gestão integrada de ativos urbanos, 
            como estacionamentos, áreas públicas, equipamentos de mobilidade e espaços de uso coletivo. 
            Sua atuação envolve serviços de operação, manutenção, zeladoria, atendimento ao público, 
            controle de acessos e implementação de soluções que visam ampliar a segurança, a organização 
            do espaço urbano e a experiência dos usuários.
          </p>
        </section>

        {/* Sistema Integrado de Gestão */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Sistema Integrado de Gestão
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                As operações da Ambicap são estruturadas sob as diretrizes do Sistema Integrado de Gestão 
                do Grupo, certificadas pelas normas ISO 9001, ISO 14001 e ISO 45001. Isso significa que a 
                gestão de atividades como iluminação, sinalização, limpeza, manutenção de pavimentos, 
                mobiliário urbano e equipamentos de cobrança é realizada com base em procedimentos 
                padronizados, controles de qualidade, requisitos de saúde e segurança ocupacional e 
                critérios ambientais, buscando a redução de impactos e o uso eficiente de recursos.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">ISO 9001</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">ISO 14001</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">ISO 45001</span>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gestão Ambiental */}
        <section>
          <Card className="bg-gradient-to-br from-green-500/5 to-transparent border-green-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" />
                Gestão Ambiental
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No período de referência, a Ambicap avançou na consolidação de sua gestão ambiental, 
                com destaque para a elaboração de seu primeiro inventário de emissões de gases de efeito 
                estufa, alinhado ao Protocolo GHG, que constitui a base para o planejamento sistemático 
                de ações de eficiência energética, gestão de resíduos, mobilidade de equipes e eventual 
                descarbonização de suas operações. A partir dessa linha de base, a empresa passa a contar 
                com indicadores comparáveis para monitorar a evolução de emissões, priorizar iniciativas 
                de mitigação e estabelecer metas internas de desempenho climático.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Impacto Social */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                Impacto Social e Urbano
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sob a perspectiva social, a Ambicap contribui diretamente para a organização do espaço 
                urbano, a segurança de usuários e a vitalidade econômica de áreas onde opera. Ao estruturar 
                e manter áreas de estacionamento e circulação de forma ordenada, a empresa favorece o acesso 
                a serviços essenciais, comércios locais e equipamentos públicos, impactando positivamente 
                rotinas de milhares de pessoas. A padronização de procedimentos de atendimento, o treinamento 
                de equipes em temas de segurança, atendimento ao público e uso responsável do espaço coletivo 
                reforçam o compromisso com a qualidade da experiência urbana.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </ReportLayout>
  );
};

export default AmbicapPage;