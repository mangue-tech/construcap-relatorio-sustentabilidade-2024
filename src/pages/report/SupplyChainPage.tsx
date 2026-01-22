import ReportLayout from "@/components/report/ReportLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Truck, 
  Users, 
  Shield, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  Building2,
  Target,
  Handshake,
  Scale,
  Phone,
  Leaf,
  HardHat,
  ClipboardCheck,
  Ban
} from "lucide-react";
import supplyChainHero from "@/assets/report/supply-chain-hero.jpg";

const supplyCategories = [
  {
    title: "Fornecedores de materiais e insumos críticos",
    items: [
      "Cimento, agregados, aço, pré-moldados, aditivos",
      "Materiais elétricos e hidráulicos",
      "Itens de acabamento conforme escopo contratual",
      "Insumos aplicados em obras civis, urbanas, industriais e hospitalares"
    ]
  },
  {
    title: "Serviços especializados de engenharia",
    items: [
      "Sondagem, topografia, projetos complementares",
      "Geotecnia, estruturas, fundações",
      "Sistemas prediais, comissionamento e startups"
    ]
  },
  {
    title: "Equipamentos e logística",
    items: [
      "Locação, operação e manutenção de máquinas pesadas",
      "Transporte de materiais, resíduos e suprimentos",
      "Operadores especializados para atividades críticas"
    ]
  },
  {
    title: "Serviços gerais e facilities",
    items: [
      "Alimentação, limpeza, apoio administrativo",
      "Segurança patrimonial, controle de acessos",
      "Alojamentos e transporte de equipes"
    ]
  }
];

const homologationSteps = [
  {
    icon: Scale,
    title: "1. Avaliação jurídica e trabalhista",
    items: [
      "Certidões negativas",
      "Regularidade fiscal e previdenciária",
      "Ausência de impedimentos legais",
      "Comprovação de vínculo formal das equipes"
    ]
  },
  {
    icon: Shield,
    title: "2. Conformidade em saúde e segurança",
    items: [
      "NRs aplicáveis",
      "Registros de treinamentos",
      "Comprovação de capacitação técnica",
      "Análise de riscos operacionais inerentes"
    ]
  },
  {
    icon: Handshake,
    title: "3. Aderência ao Código de Conduta e Integridade",
    items: [
      "Assinatura de termo de compromisso",
      "Concordância com diretrizes anticorrupção",
      "Proibição de práticas ilícitas e fraudes",
      "Normas de relacionamento com agentes públicos e privados"
    ],
    gri: "GRI 2-23; 2-24"
  },
  {
    icon: Leaf,
    title: "4. Requisitos ambientais (SIG / GRI 308)",
    items: [
      "Licenças ambientais necessárias",
      "Regularidade para transporte e destinação de resíduos",
      "Procedimentos de controle de emissões",
      "Aderência às normas aplicáveis em atividades de maior impacto"
    ]
  }
];

const dueDiligenceRisks = [
  {
    type: "Risco reputacional",
    description: "Identificação de histórico de irregularidades, sanções, litígios e violações trabalhistas"
  },
  {
    type: "Risco ambiental",
    description: "Relevante para fornecedores de transporte de resíduos, terraplenagem, combustíveis, insumos químicos"
  },
  {
    type: "Risco de integridade",
    description: "Avaliação de vulnerabilidades para corrupção, fraudes, conflito de interesses ou pagamentos indevidos"
  },
  {
    type: "Risco operacional",
    description: "Consideração da criticidade da atividade e possíveis impactos à saúde e segurança"
  }
];

const humanRightsRequirements = [
  "Inexistência de trabalho infantil",
  "Inexistência de trabalho análogo ao escravo",
  "Condições dignas de alojamento, transporte e alimentação",
  "Fornecimento de EPIs adequados",
  "Cumprimento integral da CLT",
  "Respeito à diversidade e não discriminação"
];

const SupplyChainPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img 
            src={supplyChainHero} 
            alt="Cadeia de Fornecimento" 
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 11</span>
                <span>•</span>
                <span>GRI 2-6; 2-23; 2-24; 2-25; 3-3; 308; 414</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Cadeia de Fornecimento</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Gestão estruturada de fornecedores com rigor técnico, disciplina de processos e 
                mecanismos preventivos para garantir segurança, integridade e conformidade.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-4">
              A cadeia de fornecimento da Construcap é um componente crítico da estratégia corporativa e da capacidade 
              de execução do Grupo. Em um setor que opera com alta complexidade logística, insumos de engenharia, 
              equipamentos de grande porte e serviços especializados de alto risco, a gestão estruturada de fornecedores 
              é indispensável para garantir segurança, integridade, qualidade construtiva e conformidade legal em todas 
              as etapas dos projetos.
            </p>
            <p className="text-muted-foreground">
              O sistema de suprimentos da Construcap incorpora rigor técnico, disciplina de processos e mecanismos 
              preventivos, assegurando que cada fornecedor esteja alinhado aos valores essenciais da companhia, ao 
              Sistema Integrado de Gestão (SIG) e às expectativas de desempenho socioambiental estabelecidas pelos 
              compromissos públicos do Grupo.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 11.1 Abrangência e Estrutura */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.1 Abrangência e Estrutura Operacional da Cadeia</h2>
              <p className="text-muted-foreground">GRI 2-6</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A Construcap funciona por meio de uma cadeia complexa e diversificada, composta por fornecedores de 
            materiais, equipamentos, logística e serviços técnicos. Sua estrutura demonstra amplitude e maturidade 
            operacional.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {supplyCategories.map((category, index) => (
            <AnimatedSection key={category.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <p className="text-sm text-muted-foreground mt-8 text-center max-w-2xl mx-auto">
            Essa estrutura reflete a capacidade da Construcap de coordenar múltiplos elos simultâneos, com complexidade 
            operacional que exige alto grau de organização, rastreabilidade e rigidez contratual.
          </p>
        </AnimatedSection>
      </section>

      {/* 11.2 Seleção e Homologação */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.2 Seleção e Homologação de Fornecedores</h2>
              <p className="text-muted-foreground">GRI 3-3; 2-23; 2-24; 414</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            O processo de homologação é um dos mais robustos do SIG. A entrada de um fornecedor na cadeia não depende 
            apenas de preço ou capacidade operacional; exige comprovação documental, análise de riscos, aderência às 
            normas legais e alinhamento explícito com a política de integridade do Grupo.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {homologationSteps.map((step, index) => (
            <AnimatedSection key={step.title} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{step.title}</h3>
                    {step.gri && <p className="text-xs text-muted-foreground">{step.gri}</p>}
                  </div>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection>
          <div className="mt-8 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <Ban className="w-5 h-5" />
              <p className="font-medium">
                Fornecedores que não atendem aos requisitos mínimos não são homologados, reforçando a responsabilidade 
                compartilhada e reduzindo riscos já no início da relação contratual.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 11.3 Due Diligence */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-amber-500" />
            <div>
              <h2 className="text-2xl font-bold">11.3 Due Diligence Socioambiental e de Integridade</h2>
              <p className="text-muted-foreground">GRI 2-25; 414-1; 308-1</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A Construcap realiza diligências estruturadas que vão além do simples checklist documental. Quando 
            identificado risco relevante, o fornecedor só é liberado após ações corretivas formais ou revisão 
            completa da documentação.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {dueDiligenceRisks.map((risk, index) => (
            <AnimatedSection key={risk.type} delay={index * 100}>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold mb-2 text-amber-600 dark:text-amber-400">{risk.type}</h3>
                <p className="text-sm text-muted-foreground">{risk.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 11.4 Gestão Operacional */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <HardHat className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.4 Gestão Operacional da Cadeia nas Obras</h2>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            A atuação da Construcap em obras urbanas, industriais, hospitalares e de infraestrutura exige supervisão 
            intensa sobre fornecedores. A gestão em campo é estruturada por obrigações claras.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatedSection>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">1. Mobilização responsável</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Fornecedores só iniciam atividades após apresentação de documentação trabalhista, integração de 
                segurança obrigatória e entrega de laudos, certificados e ARTs.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">2. Acompanhamento contínuo</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                A equipe de QSMA realiza verificações periódicas, inspeções de conformidade, fiscalização de EPIs 
                e observações de atos inseguros.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">3. Planos de ação corretivos</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Quando desvios são identificados, é aberto registro formal com descrição, análise de risco, prazo, 
                responsabilidade e verificação de eficácia.
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">4. Descredenciamento</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                O SIG prevê suspensão ou desligamento do fornecedor quando houver repetição de irregularidades ou 
                descumprimento de medidas corretivas.
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* 11.5 Gestão Ambiental */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <div>
              <h2 className="text-2xl font-bold">11.5 Gestão Ambiental e de Resíduos da Cadeia</h2>
              <p className="text-muted-foreground">GRI 308-1; 308-2; 414</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              Os contratos exigem que fornecedores adotem práticas ambientais compatíveis com os padrões da Construcap:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Controle de resíduos gerados por suas atividades",
                "Destinação adequada conforme legislação vigente",
                "Comprovantes de transporte (MTR ou equivalente)",
                "Cumprimento de normas de armazenamento e manuseio",
                "Medidas de redução de emissões, poeira e ruído",
                "Conformidade com exigências de licenciamento ambiental"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              A responsabilidade ambiental é compartilhada: o fornecedor responde pela sua operação e a Construcap 
              responde pela governança.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 11.6 Direitos Humanos */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.6 Direitos Humanos e Condições de Trabalho na Cadeia</h2>
              <p className="text-muted-foreground">GRI 410-1; 414</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              Todos os fornecedores devem comprovar:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {humanRightsRequirements.map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              Há destaque para a exigência de <strong>treinamento em direitos humanos para as equipes de segurança</strong>, 
              incluindo terceirizados. Essa premissa reforça o compromisso do Grupo com conduta adequada, especialmente em 
              interação com comunidades, usuários, colaboradores e visitantes de áreas administradas pelo Grupo (Urbia, 
              Minas Arena, Inova, Ambicap).
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 11.7 Integridade e Canal de Denúncias */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.7 Integridade e Canal de Denúncias</h2>
              <p className="text-muted-foreground">GRI 2-23; 2-24; 2-25</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              O programa de integridade da Construcap se estende a toda a cadeia. Fornecedores devem conhecer e aceitar 
              o Código de Conduta, seguir padrões de integridade corporativa e evitar qualquer tipo de favorecimento, 
              vantagem indevida ou prática irregular.
            </p>
            <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Alô Construcap</h3>
                  <p className="text-sm text-muted-foreground">Canal independente disponível para toda a cadeia</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Colaboradores, comunidades e fornecedores podem relatar:
              </p>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  "Infrações éticas",
                  "Riscos identificados",
                  "Condições inadequadas",
                  "Suspeitas de corrupção ou fraude",
                  "Situações de assédio ou discriminação"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                As denúncias são analisadas com confidencialidade, rastreabilidade e mecanismos formais de investigação.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 11.8 Integração com SIG */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <ClipboardCheck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">11.8 Integração com o Sistema Integrado de Gestão (SIG)</h2>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              O SIG é a espinha dorsal do controle da cadeia de fornecimento. Ele assegura:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                "Padronização de processos",
                "Auditoria interna e externa",
                "Melhoria contínua",
                "Registro e rastreabilidade",
                "Conformidade NBR ISO 9001:2015, NBR ISO 14001:2015, ISO 45001:2018 e SIAC 2021 – Nível A"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              A integração ao SIG garante que requisitos de segurança, meio ambiente, qualidade e integridade sejam 
              aplicados com a mesma rigidez a fornecedores e colaboradores próprios, reduzindo riscos e fortalecendo 
              a consistência operacional das obras.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Conclusão */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Referência em Gestão de Cadeia de Fornecimento</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A cadeia de fornecimento da Construcap é gerida com elevado grau de profissionalismo, formalização 
                  e disciplina corporativa. Em um contexto de alta complexidade operacional, o Grupo adota procedimentos 
                  que asseguram desempenho técnico, integridade, conformidade e responsabilidade socioambiental – 
                  requisitos fundamentais para a execução segura e eficiente de obras e operações.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  A robustez dos protocolos de homologação, a diligência socioambiental e a supervisão constante em 
                  campo reforçam a posição do Grupo como referência no setor de infraestrutura, garantindo que 
                  fornecedores ajam como extensão legítima dos valores, compromissos e práticas do Sistema Integrado 
                  de Gestão.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default SupplyChainPage;