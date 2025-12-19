import { Quote } from "lucide-react";

const CEOSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground">
            {/* Decorative quote */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/30" />

            <div className="relative z-10">
              <p className="text-lg lg:text-xl leading-relaxed mb-8">
                "É com responsabilidade, transparência e convicção no papel transformador da infraestrutura que
                apresentamos o Relatório de Sustentabilidade do Grupo Construcap referente ao ano de 2024. Este
                documento consolida nossa visão estratégica, nossa forma de atuar e os resultados alcançados em um
                período marcado por desafios relevantes, mas também por realizações significativas."
              </p>

              <p className="text-primary-foreground/80 mb-8">
                Ao longo de oito décadas, construímos uma trajetória baseada em excelência operacional, disciplina
                técnica e permanente compromisso com o desenvolvimento econômico e social do Brasil. Em 2024,
                reafirmamos esses pilares ao intensificar nossos investimentos em segurança do trabalho, integridade
                corporativa, governança robusta e práticas de gestão orientadas à eficiência e à inovação.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">RC</span>
                </div>
                <div>
                  <p className="font-bold text-lg">Roberto Capobianco</p>
                  <p className="text-primary-foreground/70">Presidente</p>
                  <p className="text-sm text-primary-foreground/60">Grupo Construcap</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
