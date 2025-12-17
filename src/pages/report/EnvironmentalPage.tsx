import ReportLayout from "@/components/report/ReportLayout";
import EmissionsChart from "@/components/report/charts/EmissionsChart";
import EnergyWaterChart from "@/components/report/charts/EnergyWaterChart";

const EnvironmentalPage = () => {
  return (
    <ReportLayout title="Desempenho Ambiental">
      <div className="space-y-12 max-w-6xl">
        <div>
          <p className="text-muted-foreground mb-8">
            O Grupo Construcap mantém compromisso com a gestão ambiental responsável, 
            monitorando e reduzindo seus impactos através de práticas alinhadas aos 
            padrões internacionais e ao GHG Protocol.
          </p>
        </div>

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
