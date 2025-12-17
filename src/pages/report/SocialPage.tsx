import ReportLayout from "@/components/report/ReportLayout";
import WorkforceChart from "@/components/report/charts/WorkforceChart";

const SocialPage = () => {
  return (
    <ReportLayout title="Desempenho Social">
      <div className="space-y-12 max-w-6xl">
        <p className="text-muted-foreground">
          O capital humano é fundamental para o Grupo Construcap. Investimos continuamente 
          no desenvolvimento, segurança e bem-estar de nossos colaboradores.
        </p>
        
        <section>
          <h2 className="text-2xl font-bold mb-6">Perfil da Força de Trabalho</h2>
          <WorkforceChart />
        </section>
      </div>
    </ReportLayout>
  );
};

export default SocialPage;
