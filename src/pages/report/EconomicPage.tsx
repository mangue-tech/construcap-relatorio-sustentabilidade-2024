import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  DollarSign, 
  Users, 
  Landmark, 
  Heart, 
  Truck, 
  Briefcase
} from "lucide-react";
import constructionHero from "@/assets/report/construction-hero.jpg";

const distributionCategories = [
  { 
    category: "Custos Operacionais", 
    description: "Pagamentos a fornecedores, materiais e serviços",
    color: "hsl(var(--primary))",
    icon: Truck
  },
  { 
    category: "Colaboradores", 
    description: "Salários, benefícios, encargos sociais e PLR",
    color: "hsl(142, 76%, 36%)",
    icon: Users
  },
  { 
    category: "Tributos e Impostos", 
    description: "Impostos federais, estaduais e municipais",
    color: "hsl(221, 83%, 53%)",
    icon: Landmark
  },
  { 
    category: "Investidores", 
    description: "Dividendos e remuneração do capital",
    color: "hsl(262, 83%, 58%)",
    icon: Briefcase
  },
  { 
    category: "Comunidades", 
    description: "Investimentos sociais voluntários",
    color: "hsl(0, 84%, 60%)",
    icon: Heart
  },
];

const EconomicPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={constructionHero} 
            alt="Construção e infraestrutura" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 7</span>
                <span>•</span>
                <span>GRI 201-1, 204-1</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Econômico</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O desempenho econômico do Grupo Construcap evidencia a solidez do modelo 
                de negócios e a capacidade de criar valor compartilhado com stakeholders.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Geração e Distribuição de Valor (GRI 201-1)</h2>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap gera valor econômico através de suas operações de engenharia, 
              construção e gestão de ativos, demonstrando capacidade de enfrentar um ambiente 
              operacional desafiador. O valor gerado é distribuído entre os diversos stakeholders, 
              incluindo colaboradores, fornecedores, governo, investidores e comunidades.
            </p>
            <p className="text-muted-foreground">
              O valor retido permite reinvestimento em capacidade produtiva, inovação tecnológica, 
              práticas sustentáveis e expansão das operações, assegurando a perenidade do negócio 
              e a geração contínua de valor para todas as partes interessadas.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Distribution Categories */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <DollarSign className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Distribuição do Valor Econômico</h2>
              <p className="text-muted-foreground">GRI 201-1 | Categorias de distribuição</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-muted-foreground mb-8">
            O valor distribuído beneficia diversos grupos de stakeholders, gerando impacto 
            econômico positivo nas regiões onde o Grupo atua.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributionCategories.map((item, index) => (
            <AnimatedSection key={item.category} delay={index * 75}>
              <div className="bg-card rounded-2xl border border-border p-6 hover:border-primary/30 transition-colors h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${item.color}20` }}>
                    <item.icon className="w-7 h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-lg">{item.category}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Local Suppliers - GRI 204-1 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Fornecedores Locais</h2>
              <p className="text-muted-foreground">GRI 204-1 | Desenvolvimento da economia local</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8 max-w-4xl">
            O Grupo Construcap prioriza a contratação de fornecedores locais como estratégia 
            para fortalecer as economias regionais, reduzir impactos logísticos e fomentar 
            o desenvolvimento das comunidades onde atua.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-4">Política de Fornecedores Locais</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A política de compras do Grupo estabelece preferência por fornecedores locais 
                em todas as operações, considerando critérios de qualidade, prazo e competitividade.
              </p>
              <p>
                Os principais benefícios da priorização de fornecedores locais incluem:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fortalecimento das economias regionais</li>
                <li>Redução de emissões associadas ao transporte</li>
                <li>Maior agilidade no fornecimento</li>
                <li>Geração de empregos nas comunidades locais</li>
                <li>Desenvolvimento de capacidades técnicas regionais</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Economic Impact */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h3 className="text-xl font-bold mb-4">Impacto Econômico nas Regiões de Atuação</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As operações do Grupo Construcap geram impacto econômico significativo nas 
                regiões onde atua, através de:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Geração de empregos diretos e indiretos</li>
                <li>Pagamento de tributos em múltiplas esferas governamentais</li>
                <li>Contratação de fornecedores e prestadores de serviços locais</li>
                <li>Investimentos em infraestrutura que beneficiam as comunidades</li>
                <li>Programas de desenvolvimento social e ambiental</li>
              </ul>
              <p>
                O Grupo mantém presença ativa em diversas regiões do Brasil, com destaque 
                para o Sudeste, Nordeste, Centro-Oeste, Sul e Norte do país, contribuindo 
                para o desenvolvimento econômico em cada uma dessas regiões.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Economic Strategy */}
      <section className="py-12">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Estratégia de Valor Compartilhado</h2>
            <p className="text-muted-foreground">
              O modelo de negócios do Grupo Construcap está fundamentado na geração de valor 
              compartilhado, onde o sucesso econômico da empresa está intrinsecamente ligado 
              ao desenvolvimento das comunidades e à sustentabilidade ambiental. Esta abordagem 
              garante resultados financeiros sólidos enquanto contribui para o progresso social 
              e a preservação do meio ambiente.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default EconomicPage;
