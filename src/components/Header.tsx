import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Visão Geral", href: "#hero" },
  { label: "Ambiental", href: "#ambiental" },
  { label: "Social", href: "#social" },
  { label: "Governança", href: "#governanca" },
  { label: "Empresas", href: "#empresas" },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-primary font-bold text-lg leading-tight">Relatório GRI 2024</p>
              <p className="text-muted-foreground text-sm">Grupo Construcap</p>
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
