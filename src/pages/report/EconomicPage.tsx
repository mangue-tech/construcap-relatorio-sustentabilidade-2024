import ReportLayout from "@/components/report/ReportLayout";
import EconomicChart from "@/components/report/charts/EconomicChart";

const EconomicPage = () => {
  return (
    <ReportLayout title="Desempenho Econômico">
      <div className="space-y-12 max-w-6xl">
        <p className="text-muted-foreground">
          O desempenho econômico do Grupo Construcap em 2024 evidencia a solidez do modelo 
          de negócios e a capacidade de enfrentar um ambiente operacional complexo.
        </p>
        <EconomicChart />
      </div>
    </ReportLayout>
  );
};

export default EconomicPage;
