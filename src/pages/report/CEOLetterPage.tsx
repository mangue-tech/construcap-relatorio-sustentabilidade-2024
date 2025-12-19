import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { Quote } from "lucide-react";
import ceoPhoto from "@/assets/ceo-photo.png";

const CEOLetterPage = () => {
  return <ReportLayout>
      {/* Hero Section */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[300px] overflow-hidden bg-gradient-to-br from-primary/20 via-primary/10 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 1</span>
                <span>•</span>
                <span>Mensagem da Liderança</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Carta do CEO</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Roberto Capobianco – Presidente da Construcap CCPS Engenharia e Comércio S.A.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
            <Quote className="w-12 h-12 text-primary/30 mb-6" />
            
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed mb-6 first-letter:text-4xl first-letter:font-bold first-letter:text-primary first-letter:mr-1 first-letter:float-left">
                É com responsabilidade, transparência e convicção no papel transformador da infraestrutura 
                que apresentamos o Relatório de Sustentabilidade do Grupo Construcap referente ao ano de 2024. 
                Este documento consolida nossa visão estratégica, nossa forma de atuar e os resultados 
                alcançados em um período marcado por desafios relevantes, mas também por realizações 
                significativas em nossos negócios de construção, concessões, gestão de parques, saúde e serviços.
              </p>
              
              <p className="leading-relaxed mb-6">
                Ao longo de oito décadas, construímos uma trajetória baseada em excelência operacional, 
                disciplina técnica e permanente compromisso com o desenvolvimento econômico e social do Brasil. 
                Em 2024, reafirmamos esses pilares ao intensificar nossos investimentos em segurança do trabalho, 
                integridade corporativa, governança robusta e práticas de gestão orientadas à eficiência e à inovação. 
                <strong className="text-primary"> Segurança, em especial, permanece como valor inegociável</strong>: 
                todas as nossas decisões operacionais são orientadas pela preservação da vida, pela prevenção de 
                riscos e pela qualificação contínua das equipes que atuam nos nossos canteiros e operações.
              </p>
              
              <p className="leading-relaxed mb-6">
                Nossa atuação em sustentabilidade avança com solidez. Ampliamos processos estruturados de gestão 
                ambiental, concluímos o inventário corporativo de emissões de gases de efeito estufa e fortalecemos 
                práticas de controle de resíduos, consumo de água e eficiência energética. Demos continuidade ao 
                aprimoramento de nosso sistema de integridade, reforçando políticas, processos e mecanismos de 
                prevenção e combate a irregularidades, sempre alinhados às melhores práticas de mercado.
              </p>
              
              <p className="leading-relaxed mb-6">
                Em 2024, também consolidamos entregas importantes para as comunidades e territórios onde estamos 
                presentes. No setor de concessões e parques, por meio da <strong>Urbia</strong>, fortalecemos a 
                gestão sustentável dos espaços naturais e turísticos sob nossa responsabilidade, ampliando a oferta 
                de infraestrutura, serviços, acessibilidade e experiências de qualidade para milhões de visitantes. 
                Em saúde, com as unidades da <strong>Inova</strong>, seguimos operando estruturas hospitalares 
                complexas com foco em eficiência, desempenho assistencial e impacto social positivo. Na 
                <strong> Minas Arena</strong>, reforçamos o compromisso com a gestão responsável de um dos principais 
                equipamentos esportivos do país, que recebe eventos de grande exposição pública e relevância econômica.
              </p>
              
              <p className="leading-relaxed mb-6">
                Reconhecemos que nossa atuação só é possível graças ao empenho de um time altamente comprometido, 
                que reúne milhares de profissionais em diferentes regiões do Brasil.
              </p>
              
              <p className="leading-relaxed mb-6">
                Nosso foco permanece em promover ambientes seguros, inclusivos, éticos e orientados ao desenvolvimento 
                humano, reforçando programas de capacitação, diversidade, bem-estar e valorização de talentos.
              </p>
              
              <p className="leading-relaxed mb-6">
                <strong>Infraestrutura é motor de desenvolvimento nacional</strong>, e acreditamos no papel da Construcap 
                como agente de geração de valor compartilhado. Continuaremos investindo em governança, inovação, 
                eficiência e sustentabilidade, alinhados às expectativas de nossos clientes, parceiros, colaboradores 
                e da sociedade.
              </p>
              
              <p className="leading-relaxed mb-6">
                Agradeço a todos que contribuíram para nossos resultados em 2024 e reafirmo nossa determinação em 
                avançar de forma consistente, responsável e transparente. Este relatório reflete quem somos: 
                <strong className="text-primary"> uma companhia comprometida com o presente e preparada para construir o futuro</strong>.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border flex items-center gap-6">
              <img 
                src={ceoPhoto} 
                alt="Roberto Capobianco - CEO" 
                className="w-32 h-40 object-cover object-top rounded-lg"
              />
              <div>
                <p className="font-bold text-xl">Roberto Capobianco</p>
                <p className="text-muted-foreground">Presidente</p>
                <p className="text-muted-foreground">Construcap CCPS Engenharia e Comércio S.A.</p>
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
    </ReportLayout>;
};
export default CEOLetterPage;