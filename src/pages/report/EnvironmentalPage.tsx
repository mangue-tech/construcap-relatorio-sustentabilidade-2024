import ReportLayout from "@/components/report/ReportLayout";
import EmissionsChart from "@/components/report/charts/EmissionsChart";
import EnergyWaterChart from "@/components/report/charts/EnergyWaterChart";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import environmentalHero from "@/assets/report/environmental-hero.jpg";

const EnvironmentalPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[400px] overflow-hidden">
          <img 
            src={environmentalHero} 
            alt="Parque natural brasileiro" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 8</span>
                <span>•</span>
                <span>GRI 302, 303, 305, 306</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Ambiental</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O Grupo Construcap mantém compromisso com a gestão ambiental responsável, 
                monitorando e reduzindo seus impactos através de práticas alinhadas aos 
                padrões internacionais e ao GHG Protocol.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="space-y-12 max-w-6xl">
        <section>
          <h2 className="text-2xl font-bold mb-6">Emissões de Gases de Efeito Estufa</h2>
          <EmissionsChart />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Energia, Água e Resíduos</h2>
          <EnergyWaterChart />
        </section>
      </div>
    </ReportLayout>
  );
};

export default EnvironmentalPage;
