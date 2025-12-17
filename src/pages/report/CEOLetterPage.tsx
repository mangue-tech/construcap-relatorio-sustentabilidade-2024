import ReportLayout from "@/components/report/ReportLayout";
import { Quote } from "lucide-react";

const CEOLetterPage = () => {
  return (
    <ReportLayout title="Carta do CEO">
      <div className="max-w-4xl">
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
          <Quote className="w-12 h-12 text-primary/30 mb-6" />
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed mb-6">
              Prezados stakeholders,
            </p>
            
            <p className="leading-relaxed mb-6">
              É com satisfação que apresentamos o Relatório de Sustentabilidade 2024 do Grupo 
              Construcap, documento que reflete nosso compromisso com a transparência e a gestão 
              responsável dos impactos econômicos, ambientais e sociais de nossas operações.
            </p>
            
            <p className="leading-relaxed mb-6">
              Ao longo de mais de 80 anos de história, construímos um legado baseado na excelência 
              técnica, na ética e no respeito às pessoas e ao meio ambiente. Em 2024, mesmo diante 
              de um cenário macroeconômico desafiador, mantivemos nossa trajetória de crescimento 
              sustentável e solidez financeira.
            </p>
            
            <p className="leading-relaxed mb-6">
              Nosso valor econômico gerado alcançou R$ 1,6 bilhão, demonstrando a resiliência do 
              nosso modelo de negócios diversificado, que abrange construção civil, gestão hospitalar, 
              administração de arenas esportivas e serviços de engenharia.
            </p>
            
            <p className="leading-relaxed mb-6">
              Na dimensão ambiental, avançamos na gestão de emissões de gases de efeito estufa, 
              com inventário completo segundo o GHG Protocol, e mantivemos certificações como 
              ISO 14001 e projetos com certificação LEED. O Mineirão, administrado pela Minas Arena, 
              segue como referência em sustentabilidade, com sua certificação LEED Platinum.
            </p>
            
            <p className="leading-relaxed mb-6">
              No âmbito social, nossos mais de 4.300 colaboradores são o principal ativo do Grupo. 
              Investimos em desenvolvimento profissional, saúde e segurança ocupacional, mantendo 
              certificação ISO 45001 e programas robustos de prevenção de acidentes.
            </p>
            
            <p className="leading-relaxed mb-6">
              A governança corporativa permanece como pilar fundamental, com estruturas de 
              compliance, gestão de riscos e canal de ética consolidados, garantindo integridade 
              em todas as nossas relações.
            </p>
            
            <p className="leading-relaxed mb-6">
              Agradecemos a confiança de nossos clientes, colaboradores, fornecedores, acionistas 
              e comunidades. Seguimos comprometidos em construir um futuro mais sustentável para 
              todos.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-bold text-lg">Roberto Capobianco</p>
            <p className="text-muted-foreground">Presidente Executivo</p>
            <p className="text-muted-foreground">Grupo Construcap</p>
          </div>
        </div>
      </div>
    </ReportLayout>
  );
};

export default CEOLetterPage;
