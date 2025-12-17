import ReportLayout from "@/components/report/ReportLayout";
import GRITable from "@/components/report/GRITable";

const GRIIndexPage = () => {
  return (
    <ReportLayout title="Índice de Conteúdo GRI">
      <div className="space-y-8 max-w-6xl">
        <p className="text-muted-foreground">
          Este relatório foi elaborado em conformidade com os GRI Standards 2021. 
          Abaixo está o índice completo de indicadores reportados.
        </p>
        <GRITable />
      </div>
    </ReportLayout>
  );
};

export default GRIIndexPage;
