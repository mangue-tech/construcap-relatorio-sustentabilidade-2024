import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";
import ceoPhoto from "@/assets/ceo-photo-new.png";

const CEOLetterPage = () => {
  return (
    <ReportLayout>
      {/* Hero Section */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[300px] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 1</span>
                <span>•</span>
                <span>Carta do Presidente</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Carta do CEO</h1>
              <p className="text-xl text-muted-foreground max-w-3xl"></p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* CEO Photo */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary/20 mx-auto lg:mx-0 max-w-xs lg:max-w-none">
                  <div className="aspect-[4/5] overflow-hidden bg-gradient-to-b from-muted/30 to-muted/10">
                    <img
                      src={ceoPhoto}
                      alt="Roberto Ribeiro Capobianco - Presidente"
                      className="w-full h-full object-cover object-[center_top]"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center lg:text-left">
                  <p className="font-bold text-xl">Roberto Ribeiro Capobianco</p>
                  <p className="text-muted-foreground">Presidente</p>
                  <p className="text-sm text-muted-foreground">Grupo Construcap</p>
                </div>
              </div>
            </div>

            {/* Letter Content */}
            <div className="flex-1 bg-card rounded-2xl border border-border p-8 lg:p-12">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />

              <div className="prose prose-lg max-w-none text-foreground">
                <p className="text-lg leading-relaxed mb-6 first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                  É com responsabilidade, transparência e convicção no papel transformador da infraestrutura que apresentamos o Relatório de Sustentabilidade do Grupo Construcap referente ao ano de 2024. Este documento consolida nossa visão estratégica, nossa forma de atuar e os resultados alcançados em um período marcado por desafios relevantes, mas também por realizações significativas em nossos negócios de construção, concessionárias nos segmentos de parques naturais e urbanos, saúde, arena esportiva, rodovias e demais serviços.
                </p>

                <p className="leading-relaxed mb-6">
                  Ao longo de oito décadas, construímos uma trajetória baseada em excelência operacional, disciplina técnica e permanente compromisso com o desenvolvimento econômico e social do Brasil. Em 2024, reafirmamos esses pilares ao intensificar nossos investimentos em segurança do trabalho, integridade corporativa, governança robusta e práticas de gestão orientadas à eficiência e à inovação. A segurança e integridade, em especial, permanecem como princípios inegociáveis. Todas as nossas decisões operacionais são orientadas pela preservação da vida, pela prevenção de riscos e pela qualificação contínua das equipes que atuam nos nossos canteiros e operações, bem como continuamos aprimorando nosso Programa de Integridade, reforçando políticas, processos e mecanismos de prevenção e combate a irregularidades, sempre alinhados à legislação vigente e às melhores práticas de mercado.
                </p>

                <p className="leading-relaxed mb-6">
                  Nossa atuação em sustentabilidade avança com solidez. Ampliamos processos estruturados de gestão ambiental, concluímos o inventário corporativo de emissões de gases de efeito estufa e fortalecemos práticas de controle de resíduos, consumo de água e eficiência energética. 
                </p>

                <p className="leading-relaxed mb-6">
                 Em 2024, também consolidamos entregas importantes para as comunidades e territórios onde estamos presentes. No segmento de concessões de parques, por meio da Urbia, fortalecemos a gestão sustentável dos espaços naturais, urbanos e turísticos sob nossa responsabilidade, ampliando a oferta de infraestrutura, serviços, acessibilidade e experiências de qualidade para milhões de visitantes. Em saúde, com as unidades da Inova, seguimos operando estruturas hospitalares complexas com foco em eficiência, melhorando o desempenho assistencial e gerando impacto social positivo. No Mineirão, reforçamos o compromisso com a gestão responsável de um dos principais equipamentos esportivos do país, que recebe eventos de grande exposição pública e relevância econômica.
                </p>

                <p className="leading-relaxed mb-6">
                  Reconhecemos que nossa atuação só é possível graças ao empenho de um time altamente comprometido, que reúne milhares de profissionais em diferentes regiões do Brasil. Nosso foco permanece em promover ambientes seguros, inclusivos, éticos e orientados ao desenvolvimento humano, reforçando programas de capacitação, diversidade, bem-estar e valorização de talentos.
                </p>

                <p className="leading-relaxed mb-6">
                  Infraestrutura é motor de desenvolvimento nacional, e acreditamos no papel do Grupo Construcap como agente de geração de valor compartilhado. Continuaremos investindo em governança, inovação, eficiência e sustentabilidade, alinhados às expectativas de nossos clientes, parceiros, colaboradores e sociedade.</strong>
                </p>

                <p className="leading-relaxed mb-6">
                  Agradeço a todos que contribuíram para nossos resultados em 2024 e reafirmo nossa determinação em avançar de forma consistente, responsável e transparente. Este relatório reflete quem somos:
                  <strong className="text-primary">
                    {" "}
                    uma companhia comprometida com o presente e preparada para construir o futuro.
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Key Highlights from CEO Letter */}
        <AnimatedSection delay={200}>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-3xl font-bold text-primary mb-1">8+</p>
              <p className="text-sm text-muted-foreground">Décadas de História</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-3xl font-bold text-primary mb-1">5</p>
              <p className="text-sm text-muted-foreground">Unidades de Negócio</p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <p className="text-3xl font-bold text-primary mb-1">2024</p>
              <p className="text-sm text-muted-foreground">Ano de Referência</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </ReportLayout>
  );
};
export default CEOLetterPage;
