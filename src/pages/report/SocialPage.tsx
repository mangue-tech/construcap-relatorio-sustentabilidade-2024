import ReportLayout from "@/components/report/ReportLayout";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { 
  Users, 
  Heart, 
  Shield, 
  GraduationCap, 
  Award, 
  CheckCircle2,
  Accessibility,
  HeartHandshake,
  HardHat,
  Flame,
  ShieldCheck,
  BookOpen,
  Scale,
  HandHeart
} from "lucide-react";
import socialHero from "@/assets/report/social-hero.jpg";

// GRI 401-2 - Benefícios
const benefits = [
  { benefit: "Plano de Saúde", description: "Cobertura para colaboradores e dependentes" },
  { benefit: "Plano Odontológico", description: "Assistência odontológica completa" },
  { benefit: "Seguro de Vida", description: "Cobertura em caso de acidentes ou morte" },
  { benefit: "Vale-Alimentação/Refeição", description: "Auxílio para alimentação" },
  { benefit: "Vale-Transporte", description: "Auxílio para deslocamento" },
  { benefit: "Previdência Privada", description: "Plano de aposentadoria complementar" },
  { benefit: "PLR", description: "Participação nos Lucros e Resultados" },
  { benefit: "Auxílio-Creche", description: "Suporte para colaboradores com filhos" },
  { benefit: "Gympass", description: "Acesso a academias e bem-estar" },
  { benefit: "Licença Maternidade Estendida", description: "180 dias de licença" },
];

const safetyPrograms = [
  { program: "DDS (Diálogo Diário de Segurança)", description: "Reuniões diárias sobre riscos e prevenção antes do início das atividades" },
  { program: "SIPAT", description: "Semana Interna de Prevenção de Acidentes do Trabalho com palestras e atividades" },
  { program: "Brigada de Emergência", description: "Equipes treinadas para atendimento a emergências em todas as unidades" },
  { program: "Programa de Saúde Mental", description: "Apoio psicológico e ações de prevenção ao estresse ocupacional" },
  { program: "Campanhas de Saúde", description: "Ações de prevenção (Outubro Rosa, Novembro Azul, vacinação)" },
  { program: "Ginástica Laboral", description: "Exercícios preventivos realizados diariamente" },
];

// Programas de Desenvolvimento
const developmentPrograms = [
  {
    name: "Programa de Trainee",
    description: "Formação de jovens talentos para posições de liderança",
    duration: "18 meses"
  },
  {
    name: "Escola de Líderes",
    description: "Desenvolvimento de competências gerenciais e liderança",
    duration: "12 meses"
  },
  {
    name: "Academia Técnica",
    description: "Capacitação técnica especializada para áreas operacionais",
    duration: "Contínuo"
  },
  {
    name: "Mentoria Executiva",
    description: "Acompanhamento de executivos por mentores experientes",
    duration: "6 meses"
  },
  {
    name: "Bolsas de Estudo",
    description: "Apoio financeiro para graduação e pós-graduação",
    duration: "Conforme curso"
  },
];

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
                <span>GRI 2-7, 401, 403, 404, 405</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Social</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O capital humano é fundamental para o Grupo Construcap. Investimos continuamente 
                no desenvolvimento, segurança, diversidade e bem-estar de nossos colaboradores.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Gestão de Pessoas</h2>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap reconhece que seu principal ativo são as pessoas que fazem parte 
              de sua história. A empresa investe em práticas de gestão que promovem desenvolvimento 
              profissional, segurança, diversidade e qualidade de vida.
            </p>
            <p className="text-muted-foreground">
              A estratégia de gestão de pessoas está alinhada aos valores corporativos e 
              aos compromissos ESG, buscando criar um ambiente de trabalho seguro, inclusivo 
              e propício ao desenvolvimento de todos os profissionais.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Workforce Overview - GRI 2-7 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Perfil da Força de Trabalho</h2>
              <p className="text-muted-foreground">GRI 2-7 | Colaboradores por unidade e categoria</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap conta com colaboradores distribuídos em cinco unidades de 
              negócio: Construcap Engenharia, Inova Saúde, Urbia, Minas Arena e Ambicap.
            </p>
            <p className="text-muted-foreground">
              A força de trabalho é composta por profissionais de diversas áreas, incluindo 
              engenheiros, técnicos, operadores, administrativos e gestores, todos comprometidos 
              com a excelência operacional e os valores da empresa.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Diversity - GRI 405 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Diversidade e Inclusão</h2>
              <p className="text-muted-foreground">GRI 405-1 | Composição por gênero, idade e hierarquia</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap está comprometido com a promoção da diversidade e inclusão 
              em todas as suas operações. A empresa trabalha para aumentar a representatividade 
              de grupos diversos em todos os níveis hierárquicos.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Accessibility className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Pessoas com Deficiência</p>
                  <p className="text-xs text-muted-foreground">Programa de inclusão e acessibilidade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Jovens Aprendizes</p>
                  <p className="text-xs text-muted-foreground">Programa de formação profissional</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Estagiários</p>
                  <p className="text-xs text-muted-foreground">Programa de estágio estruturado</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Diversidade Racial</p>
                  <p className="text-xs text-muted-foreground">Compromisso com equidade racial</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Benefits - GRI 401-2 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Benefícios aos Colaboradores</h2>
              <p className="text-muted-foreground">GRI 401-2 | Pacote de benefícios oferecidos</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            O Grupo oferece um pacote abrangente de benefícios que visa proporcionar 
            qualidade de vida, segurança e bem-estar aos colaboradores e suas famílias.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((item, index) => (
            <AnimatedSection key={item.benefit} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-4 hover:border-primary/30 transition-colors">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">{item.benefit}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Health & Safety - GRI 403 */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Saúde e Segurança do Trabalho</h2>
              <p className="text-muted-foreground">GRI 403 | Sistema de gestão de SST</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            A segurança é valor inegociável no Grupo Construcap. O Sistema de Gestão de 
            Saúde e Segurança do Trabalho integra políticas, procedimentos e programas que 
            visam prevenir acidentes, doenças ocupacionais e promover a saúde integral.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-8">
            <h4 className="font-bold mb-6 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Compromisso com Zero Acidentes
            </h4>
            <p className="text-muted-foreground mb-4">
              O Grupo Construcap mantém o compromisso com a meta de Zero Acidentes, 
              investindo continuamente em treinamentos, equipamentos de proteção, 
              procedimentos seguros e cultura de segurança em todas as operações.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-secondary/50 rounded-xl text-center">
                <HardHat className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Cultura de Segurança</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl text-center">
                <ShieldCheck className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Prevenção de Riscos</p>
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl text-center">
                <HeartHandshake className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Saúde Integral</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Safety Programs */}
        <AnimatedSection>
          <h3 className="text-xl font-bold mb-6">Programas de Segurança e Saúde</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-4">
          {safetyPrograms.map((item, index) => (
            <AnimatedSection key={item.program} delay={index * 50}>
              <div className="bg-card rounded-xl border border-border p-4 h-full">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{item.program}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Training - GRI 404 */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Treinamento e Desenvolvimento</h2>
              <p className="text-muted-foreground">GRI 404 | Capacitação e educação corporativa</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            O desenvolvimento contínuo dos colaboradores é prioridade estratégica. 
            O Grupo investe em programas de capacitação técnica, desenvolvimento de 
            lideranças e formação complementar para todas as áreas.
          </p>
        </AnimatedSection>

        {/* Development Programs */}
        <AnimatedSection>
          <h3 className="text-xl font-bold mb-6">Programas de Desenvolvimento</h3>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {developmentPrograms.map((program, index) => (
            <AnimatedSection key={program.name} delay={index * 75}>
              <div className="bg-card rounded-xl border border-border p-5 h-full hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">{program.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                <p className="text-xs text-primary font-medium">Duração: {program.duration}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Final Section */}
      <section className="py-12">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Compromisso com as Pessoas</h2>
            <p className="text-muted-foreground">
              O Grupo Construcap acredita que o sucesso sustentável depende do desenvolvimento 
              e bem-estar de seus colaboradores. Por isso, investe continuamente em práticas 
              de gestão de pessoas que promovem segurança, diversidade, capacitação e qualidade 
              de vida, construindo um ambiente de trabalho onde todos possam crescer e contribuir 
              para os resultados da empresa.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default SocialPage;
