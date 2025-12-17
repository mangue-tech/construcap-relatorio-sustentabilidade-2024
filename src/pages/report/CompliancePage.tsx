import ReportNavbar from "@/components/report/ReportNavbar";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Shield, FileText, Phone, Search, Users, AlertTriangle, CheckCircle, BookOpen, Lock } from "lucide-react";

const codeOfConductTopics = [
  "Regras de integridade pessoal e profissional",
  "Prevenção a corrupção, fraude e favorecimento indevido",
  "Conduta em obras, contratos e relacionamento comercial",
  "Interação com agentes públicos",
  "Responsabilidade no uso e tratamento de dados",
  "Respeito aos direitos humanos e diversidade",
  "Proibição de assédio e discriminação",
  "Salvaguardas para conflitos de interesse"
];

const compliancePolicies = [
  { title: "Política Anticorrupção", icon: Shield },
  { title: "Política de Brindes, Presentes e Hospitalidades", icon: FileText },
  { title: "Política de Interação com o Setor Público", icon: Users },
  { title: "Procedimentos de conferência e aprovação de contratos", icon: CheckCircle },
  { title: "Regras de integridade em compras e suprimentos", icon: Search },
  { title: "Normas de conduta em obras e ambientes críticos", icon: AlertTriangle },
];

const dueDiligenceItems = [
  "Verificação reputacional e análise de integridade",
  "Checagem fiscal, trabalhista e jurídica",
  "Conformidade socioambiental",
  "Histórico de penalidades, sanções ou litígios relevantes",
  "Aderência ao Código de Conduta",
  "Exigência de comprovações documentais"
];

const trainingTopics = [
  "Princípios do Código de Conduta",
  "Diretrizes anticorrupção",
  "Relacionamento ético com clientes e agentes públicos",
  "Integridade em contratações e suprimentos",
  "Condutas proibidas e situações de risco",
  "Privacidade e proteção de dados pessoais",
  "Direitos humanos, igualdade e prevenção ao assédio"
];

const CompliancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReportNavbar />
      
      {/* Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-amber-950/20 to-background">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Capítulo 4</span>
              <span>•</span>
              <span>GRI 2-15, 2-16, 2-23, 2-24</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Integridade e Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A integridade é base do posicionamento institucional da Construcap. O sistema 
              de compliance garante que todas as atividades sejam conduzidas com disciplina, 
              legalidade e transparência.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-8">
              <p className="text-muted-foreground leading-relaxed">
                A Construcap adota um sistema de integridade estruturado para prevenir, detectar 
                e responder a desvios éticos, ilícitos e inconformidades operacionais. O programa 
                combina <strong className="text-foreground">políticas corporativas</strong>, 
                <strong className="text-foreground"> controles internos</strong>, 
                <strong className="text-foreground"> canal de denúncias independente</strong>, 
                processos de due diligence, monitoramento contínuo e treinamentos regulares.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Código de Conduta</h2>
                  <p className="text-sm text-muted-foreground">GRI 2-23</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                O Código de Conduta estabelece diretrizes claras para comportamentos aceitáveis 
                e não aceitáveis dentro da organização. É vinculante para colaboradores, gestores, 
                consultores, fornecedores e demais terceiros.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold mb-4">Conteúdo abrangido:</h3>
                <ul className="space-y-3">
                  {codeOfConductTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Compliance System */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Sistema de Compliance e Controles Internos</h2>
            <p className="text-muted-foreground mb-8">
              A estrutura de compliance concentra-se em prevenção, monitoramento e resposta. (GRI 2-15)
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {compliancePolicies.map((policy, index) => (
              <AnimatedSection key={policy.title} delay={index * 100}>
                <div className="bg-card rounded-2xl border border-border p-6 hover:border-amber-500/50 transition-colors">
                  <policy.icon className="w-8 h-8 text-amber-500 mb-3" />
                  <h3 className="font-medium">{policy.title}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section className="py-16 bg-amber-950/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <Search className="w-8 h-8 text-amber-500" />
                <h2 className="text-2xl font-bold">Due Diligence de Terceiros</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                A Construcap aplica processos de due diligence antes da contratação e durante 
                o relacionamento com fornecedores, prestadores de serviços, consultores, 
                parceiros operacionais e subcontratados.
              </p>
              <p className="text-sm text-muted-foreground">
                Contratos considerados sensíveis contam com monitoramento adicional e cláusulas 
                específicas de integridade, assegurando que terceiros atuem segundo os mesmos 
                padrões aplicados internamente.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={200}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold mb-4">A avaliação inclui:</h3>
                <ul className="space-y-3">
                  {dueDiligenceItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-amber-600">{index + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Whistleblower Channel */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="bg-amber-500 p-6">
                <div className="flex items-center gap-4">
                  <Phone className="w-10 h-10 text-white" />
                  <div>
                    <h2 className="text-2xl font-bold text-white">Canal de Denúncias</h2>
                    <p className="text-amber-100">GRI 2-16</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  A companhia mantém um Canal de Denúncias independente, acessível a colaboradores, 
                  comunidades, fornecedores e demais públicos.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Lock, text: "Garante anonimato e confidencialidade" },
                    { icon: CheckCircle, text: "Funciona 24 horas por dia" },
                    { icon: Users, text: "Operado por empresa externa especializada" },
                    { icon: Phone, text: "Acesso por telefone, site e e-mail" },
                    { icon: FileText, text: "Protocolo formal de registro" },
                    { icon: Shield, text: "Proteção contra retaliação" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                      <item.icon className="w-5 h-5 text-amber-500" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Training */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-2xl font-bold mb-4">Capacitação e Cultura de Integridade</h2>
            <p className="text-muted-foreground mb-8">
              A disseminação da cultura de integridade é sustentada por programas permanentes 
              de treinamento e capacitação. (GRI 2-23)
            </p>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trainingTopics.map((topic, index) => (
              <AnimatedSection key={topic} delay={index * 50}>
                <div className="bg-card rounded-xl border border-border p-4 h-full">
                  <p className="text-sm">{topic}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompliancePage;