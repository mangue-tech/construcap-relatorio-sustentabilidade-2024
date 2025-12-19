import { Building2, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg">Construcap</p>
                <p className="text-xs text-primary-foreground/60">Relatório GRI 2024</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Uma das maiores construtoras do Brasil, com 80 anos transformando sonhos em realidade através de obras
              icônicas e compromisso com a sustentabilidade.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-4">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: "Visão Geral", href: "#hero" },
                { label: "Ambiental", href: "#ambiental" },
                { label: "Social", href: "#social" },
                { label: "Governança", href: "#governanca" },
                { label: "Empresas", href: "#empresas" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="font-bold mb-4">Empresas do Grupo</h3>
            <ul className="space-y-3">
              {["Construcap CCPS", "Inova Saúde", "Minas Arena", "Ambicap"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-primary-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Eldorado Business Tower, São Paulo/SP</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(11) 3017-8000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4 shrink-0" />
                <span>contato@construcap.com.br</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {[Linkedin, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">© 2025 Grupo Construcap Todos os direitos reservados.</p>
            <p className="text-sm text-primary-foreground/60">
              Relatório elaborado em conformidade com os GRI Standards 2021
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
