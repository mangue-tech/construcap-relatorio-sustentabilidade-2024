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
  Scale,
  HandHeart,
  RefreshCw,
  FileText,
  Stethoscope,
  AlertTriangle,
  Phone,
} from "lucide-react";
import socialHero from "@/assets/report/social-hero.jpg";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SocialPage = () => {
  return (
    <ReportLayout>
      {/* Hero with Image */}
      <section className="relative -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 mb-12">
        <div className="relative h-[720px] overflow-hidden">
          <img
            src={socialHero}
            alt="Equipe de trabalhadores em obra"
            className="w-full h-full object-cover object-[position:center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <AnimatedSection>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>Capítulo 9</span>
                <span>•</span>
                <span>GRI 401, 402, 403, 404, 405, 406, 410, 414, 413</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Desempenho Social</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                O capital humano é pilar estruturante da atuação do Grupo Construcap em um setor intensivo em obra e com
                elevada exposição a riscos ocupacionais.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold mb-4">Compromisso com Pessoas</h2>
            <p className="text-muted-foreground mb-4">
              O desempenho social do Grupo Construcap é um dos pilares mais estruturantes da sua atuação. Em um setor
              intensivo em obra, operado em ambientes complexos e com elevada exposição a riscos ocupacionais, o
              compromisso com pessoas – segurança, desenvolvimento, diversidade, bem-estar e relações de trabalho –
              deixa de ser um componente de apoio e passa a integrar a própria lógica de continuidade e competitividade
              empresarial.
            </p>
            <p className="text-muted-foreground">
              Este capítulo consolida o panorama mais amplo do capital humano, apresentando não apenas dados, mas o
              raciocínio institucional por trás das práticas, reforçando como políticas, sistemas, treinamentos e
              processos moldam diariamente a atuação do Grupo.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.1 Estrutura e Perfil da Força de Trabalho */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.1 Estrutura e Perfil da Força de Trabalho</h2>
              <p className="text-muted-foreground">GRI 2-7; 405-1</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              Ao final do período, <strong>4.345 colaboradores</strong> compunham o quadro da Construcap, todos atuando
              no Brasil, majoritariamente na região Sudeste. Trata-se de uma força de trabalho que combina escala
              operacional, essencial a grandes obras e contratos de infraestrutura, com uma estrutura administrativa e
              técnica altamente especializada, indispensável para garantir conformidade legal, engenharia de precisão,
              planejamento e governança.
            </p>
            <p className="text-muted-foreground">
              A composição de gênero (4.019 homens e 326 mulheres) reflete a realidade do setor de construção pesada,
              mas também evidencia onde estão as oportunidades de avanço: promover a presença feminina especialmente em
              áreas técnicas e de liderança.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabela 9.1 - Colaboradores por gênero */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4">Tabela 9.1 – Colaboradores por gênero (GRI 2-7)</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Gênero</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Homens</TableCell>
                  <TableCell className="text-right font-medium">4.019</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mulheres</TableCell>
                  <TableCell className="text-right font-medium">326</TableCell>
                </TableRow>
                <TableRow className="bg-muted/50">
                  <TableCell className="font-semibold">Total</TableCell>
                  <TableCell className="text-right font-bold">4.345</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AnimatedSection>

        {/* Tabela 9.2 - Colaboradores por faixa etária */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4">Tabela 9.2 – Colaboradores por faixa etária</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A distribuição por faixa etária demonstra balanceamento importante entre vitalidade e experiência. A
              presença expressiva de colaboradores abaixo de 30 anos traduz a capacidade do Grupo de atrair novos
              talentos. O contingente entre 30 e 50 anos corresponde ao núcleo técnico e de liderança de campo. A
              presença de colaboradores acima de 50 anos garante a transferência de conhecimento e continuidade de
              práticas consolidadas.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Faixa etária</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Até 30 anos</TableCell>
                  <TableCell className="text-right font-medium">991</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>31 a 50 anos</TableCell>
                  <TableCell className="text-right font-medium">2.403</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Acima de 50 anos</TableCell>
                  <TableCell className="text-right font-medium">951</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.2 Estrutura Hierárquica */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <HardHat className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.2 Estrutura Hierárquica e Distribuição de Funções</h2>
              <p className="text-muted-foreground">GRI 2-7</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              A distribuição funcional reforça o caráter operacional da empresa: <strong>3.864 colaboradores</strong>{" "}
              desempenham funções diretamente ligadas à execução de obras, operação de equipamentos, manutenção e
              frentes de campo. Esse volume exige uma estrutura padronizada de formação, treinamentos obrigatórios,
              integração contínua e monitoramento frequente das condições de trabalho.
            </p>
            <p className="text-muted-foreground">
              Por outro lado, os 312 profissionais administrativos e as equipes de gerência, supervisão e coordenação
              formam o eixo de governança operacional – essencial para manter disciplina de processos, cumprimento de
              normas, gestão de contratos e aderência ao Sistema Integrado de Gestão.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabela 9.3 - Colaboradores por categoria funcional */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-semibold mb-4">Tabela 9.3 – Colaboradores por categoria funcional</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Diretoria</TableCell>
                  <TableCell className="text-right font-medium">8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Superintendência</TableCell>
                  <TableCell className="text-right font-medium">9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gerência</TableCell>
                  <TableCell className="text-right font-medium">76</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coordenação</TableCell>
                  <TableCell className="text-right font-medium">35</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Supervisão</TableCell>
                  <TableCell className="text-right font-medium">41</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Administrativo</TableCell>
                  <TableCell className="text-right font-medium">312</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Operacional</TableCell>
                  <TableCell className="text-right font-medium">3.864</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-sm text-muted-foreground mt-4">
              Essa estrutura comprova o desafio social da construção pesada: garantir consistência organizacional em
              ambientes pulverizados, com equipes frequentemente distribuídas em diversos municípios.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.3 Diversidade e Inclusão */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.3 Diversidade e Inclusão</h2>
              <p className="text-muted-foreground">GRI 405-1; 406-1</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-6">
              A Construcap evolui na consolidação de práticas de diversidade e inclusão, especialmente considerando o
              contexto de um setor que historicamente apresenta baixa representatividade feminina e de PCDs. O registro
              de <strong>7 colaboradores com deficiência</strong> (5 homens e 2 mulheres) aponta para um ponto de
              atenção e aprimoramento contínuo, especialmente no que diz respeito a programas de acessibilidade em obras
              e estaleiros.
            </p>
          </div>
        </AnimatedSection>

        {/* Tabela 9.4 - PCDs */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4">Tabela 9.4 – Colaboradores com deficiência</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Total</TableHead>
                  <TableHead className="text-right">Homens</TableHead>
                  <TableHead className="text-right">Mulheres</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">7</TableCell>
                  <TableCell className="text-right">5</TableCell>
                  <TableCell className="text-right">2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AnimatedSection>

        {/* Tabela 9.5 - Diversidade na liderança */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-semibold mb-4">Tabela 9.5 – Diversidade na liderança (GRI 405-1)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              A distribuição por gênero nas posições de liderança demonstra avanços graduais. Embora ainda minoritária
              em campo, a presença feminina é relevante em áreas administrativas e coordenação técnica, sinalizando
              tendência de ascensão.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Homens</TableHead>
                  <TableHead className="text-right">Mulheres</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Diretoria</TableCell>
                  <TableCell className="text-right">5</TableCell>
                  <TableCell className="text-right">3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Superintendência</TableCell>
                  <TableCell className="text-right">6</TableCell>
                  <TableCell className="text-right">3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gerência</TableCell>
                  <TableCell className="text-right">69</TableCell>
                  <TableCell className="text-right">7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Coordenação</TableCell>
                  <TableCell className="text-right">28</TableCell>
                  <TableCell className="text-right">7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Supervisão</TableCell>
                  <TableCell className="text-right">40</TableCell>
                  <TableCell className="text-right">1</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Administrativo</TableCell>
                  <TableCell className="text-right">197</TableCell>
                  <TableCell className="text-right">115</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.4 Rotatividade */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <RefreshCw className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.4 Rotatividade, Retenção e Engajamento</h2>
              <p className="text-muted-foreground">GRI 401-1</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              A rotatividade de <strong>12%</strong> reflete, acima de tudo, características estruturais do setor: obras
              com fases definidas, contratos com início e fim e alta mobilização de mão de obra.
            </p>
            <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg mt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-700 dark:text-green-400">100% de retenção pós-licença</p>
                  <p className="text-sm text-muted-foreground">
                    Retorno e permanência de colaboradores que usufruíram licença maternidade/paternidade, indicando
                    ambiente acolhedor e práticas alinhadas ao bem-estar e estabilidade laboral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Tabela 9.6 - Desligamentos por gênero */}
          <AnimatedSection>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-4 text-sm">Tabela 9.6 – Desligamentos por gênero</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Gênero</TableHead>
                    <TableHead className="text-right">Número</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Homens</TableCell>
                    <TableCell className="text-right">526</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mulheres</TableCell>
                    <TableCell className="text-right">58</TableCell>
                  </TableRow>
                  <TableRow className="bg-muted/50">
                    <TableCell className="font-semibold">Total</TableCell>
                    <TableCell className="text-right font-bold">584</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AnimatedSection>

          {/* Tabela 9.7 - Desligamentos por faixa etária */}
          <AnimatedSection delay={100}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-4 text-sm">Tabela 9.7 – Desligamentos por faixa etária</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Faixa</TableHead>
                    <TableHead className="text-right">Número</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Até 30 anos</TableCell>
                    <TableCell className="text-right">240</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>31 a 50 anos</TableCell>
                    <TableCell className="text-right">285</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Acima de 50 anos</TableCell>
                    <TableCell className="text-right">59</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AnimatedSection>

          {/* Tabela 9.8 - Desligamentos por categoria funcional */}
          <AnimatedSection delay={200}>
            <div className="bg-card rounded-2xl border border-border p-6 h-full">
              <h3 className="font-semibold mb-4 text-sm">Tabela 9.8 – Desligamentos por categoria</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-right">Número</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Operacional</TableCell>
                    <TableCell className="text-right">522</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Administrativo</TableCell>
                    <TableCell className="text-right">40</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Gestão</TableCell>
                    <TableCell className="text-right">22</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 9.5 Benefícios */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.5 Benefícios, Condições de Trabalho e Relações Sindicais</h2>
              <p className="text-muted-foreground">GRI 401-2; 402-1; 401-3</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-4">
              Todos os colaboradores de tempo integral recebem benefícios essenciais, o que reforça a relação de longo
              prazo estabelecida pela Construcap com seu capital humano.
            </p>
            <p className="text-muted-foreground">
              A gestão de mudanças organizacionais, especialmente em obras, segue fluxo claro: comunicação prévia
              formal, alinhamento com lideranças e observância de normas coletivas. Isso é crítico em empreendimentos de
              grande porte, onde mudanças de fase, transição de turnos, início ou encerramento de frentes de trabalho
              podem impactar centenas de profissionais.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.6 Desenvolvimento e Capacitação */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.6 Desenvolvimento e Capacitação</h2>
              <p className="text-muted-foreground">GRI 404-1; 404-2; 404-3</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <p className="text-muted-foreground mb-4">
              Em um setor onde o risco é inerente, <strong>capacitação não é diferencial – é necessidade vital</strong>.
            </p>
            <p className="text-muted-foreground mb-6">
              O procedimento <strong>CCT – Capacitação, Conscientização e Treinamento</strong> organiza toda a lógica
              formativa da empresa. Sob ele, são ofertados:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Treinamentos obrigatórios (todas as NRs aplicáveis)",
                "Formações técnicas para operação de equipamentos",
                "Treinamentos de integração",
                "Reciclagens periódicas",
                "Emergências e resposta a incidentes",
                "Campanhas temáticas (segurança, qualidade, integridade)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              A ausência de um processo formal de avaliação anual para 100% dos colaboradores é reconhecida, mas
              mitigada por práticas constantes de feedback, supervisão direta em obra e orientação operacional,
              características que sustentam a cultura técnica do setor.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.7 Saúde e Segurança */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.7 Saúde e Segurança como Valor Inegociável</h2>
              <p className="text-muted-foreground">GRI 403-1 a 403-10</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            Nenhuma dimensão social é tão crítica à sustentabilidade da Construcap quanto Saúde Ocupacional e Segurança
            do Trabalho. A empresa opera um <strong>Sistema Integrado de Gestão certificado pela ISO 45001:2018</strong>{" "}
            (obtida em 2023, válida até 16/07/2026), integrado às certificações{" "}
            <strong>NBR ISO 9001:2015</strong>{" "}
            (Qualidade) e <strong>NBR ISO 14001:2015</strong> (Meio Ambiente), sustentado por ferramentas, protocolos e
            mecanismos que permitem controle sistemático em ambientes de risco.
          </p>
        </AnimatedSection>

        {/* 9.7.1 Conformidade */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              9.7.1 Conformidade e estrutura normativa
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <p className="font-medium text-blue-700 dark:text-blue-400 mb-1">Sistema ECCOSAFETY</p>
                <p className="text-sm text-muted-foreground">
                  Centraliza requisitos legais, NR por NR, de todas as esferas (municipal, estadual e federal)
                </p>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                <p className="font-medium text-green-700 dark:text-green-400 mb-1">Atualizações Semestrais</p>
                <p className="text-sm text-muted-foreground">Garantem aderência permanente às normas vigentes</p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg md:col-span-2">
                <p className="font-medium text-amber-700 dark:text-amber-400 mb-1">PGR em 100% das obras</p>
                <p className="text-sm text-muted-foreground">
                  Programas de Gerenciamento de Riscos implementados em todas as operações
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* 9.7.2 Cultura preventiva */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-primary" />
              9.7.2 Cultura preventiva e participação ativa
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A cultura de prevenção é materializada em práticas que traduzem um princípio basilar:
              <strong> todos são responsáveis pela segurança</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Diálogos diários de segurança (DDS)",
                "Investigação participativa de incidentes",
                "Inspeções sistemáticas de campo",
                "Campanhas de registro de desvios",
                "Comitês formais como CIPA",
                "Canal Alô Construcap para denúncias e desvios",
                "Avaliações comportamentais regulares",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 9.7.3 Capacitação e formação */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6 mb-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              9.7.3 Capacitação e formação obrigatória
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              O procedimento CCT define periodicidade e conteúdo de capacitação:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "NRs aplicáveis por função (altura, eletricidade, confinamento, máquinas)",
                "Treinamentos específicos para riscos críticos",
                "Protocolos operacionais padronizados (OSMAs)",
                "Capacitação obrigatória de contratadas",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* 9.7.4 Saúde ocupacional */}
        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-primary" />
              9.7.4 Saúde ocupacional
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Sob o <strong>PCMSO (NR-07)</strong>, a empresa realiza:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Exames clínicos obrigatórios",
                "Monitoramento epidemiológico",
                "Rastreamento de riscos crônicos",
                "Registro sigiloso de informações médicas",
                "Atendimento técnico especializado",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 9.8 Relacionamento com Comunidades */}
      <section className="py-12">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">9.8 Relacionamento com Comunidades e Responsabilidade Social</h2>
              <p className="text-muted-foreground">GRI 413-1; 413-2</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-muted-foreground mb-6">
              A Construcap adota práticas sistemáticas de relacionamento com comunidades em obras e operações:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                "Canais formais de comunicação",
                "Interface com lideranças locais",
                "Mitigação de impactos previstos em obra",
                "Procedimentos estruturados para registro e tratamento de demandas",
                "Participação em iniciativas sociais das unidades do Grupo",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              A atuação social das controladas e coligadas reforça o papel do Grupo no território, especialmente em
              mobilização cultural (Mineirão), zeladoria urbana (Ambicap), educação ambiental (Urbia) e serviços de
              saúde (Inova).
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Conclusão */}
      <section className="py-12 -mx-6 lg:-mx-8 px-6 lg:px-8 bg-secondary/30">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <HandHeart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Compromisso com as Pessoas</h2>
            <p className="text-muted-foreground">
              O desempenho social da Construcap demonstra um equilíbrio entre escala operacional, rigor técnico,
              governança e respeito às pessoas. Os dados quantitativos reforçam um quadro robusto, enquanto as práticas
              qualitativas – especialmente em segurança, integridade e desenvolvimento – revelam a profundidade com que
              o Grupo incorpora responsabilidade social como eixo estratégico de sua atuação.
            </p>
          </div>
        </AnimatedSection>
      </section>
    </ReportLayout>
  );
};

export default SocialPage;
