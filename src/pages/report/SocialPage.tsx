import ReportLayout from "@/components/report/ReportLayout";
import WorkforceChart from "@/components/report/charts/WorkforceChart";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import socialHero from "@/assets/report/social-hero.jpg";

const SocialPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={socialHero} 
            alt="Equipe de trabalhadores em obra" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 9</span>
                <span>•</span>
                <span>GRI 401, 403, 404, 405</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Social</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O capital humano é fundamental para o Grupo Construcap. Investimos continuamente 
                no desenvolvimento, segurança e bem-estar de nossos colaboradores.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <div className="space-y-12 max-w-6xl">
        <section>
          <h2 className="text-2xl font-bold mb-6">Perfil da Força de Trabalho</h2>
          <WorkforceChart />
        </section>
      </div>
    </ReportLayout>
  );
};

export default SocialPage;
