import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const navSections = [
  { id: "highlights", label: "Destaques" },
  { id: "environmental", label: "Ambiental" },
  { id: "certifications", label: "Certificações" },
  { id: "sections", label: "Capítulos" },
];

const reportPages = [
  { path: "/relatorio", label: "Capa" },
  { path: "/relatorio/carta-ceo", label: "Carta do CEO" },
  { path: "/relatorio/desempenho-economico", label: "Econômico" },
  { path: "/relatorio/desempenho-ambiental", label: "Ambiental" },
  { path: "/relatorio/desempenho-social", label: "Social" },
  { path: "/relatorio/gri-index", label: "Índice GRI" },
];

const ReportNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is currently in view
      const sections = navSections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const isOnCoverPage = location.pathname === "/relatorio";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/relatorio" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-all ${isScrolled ? '' : 'shadow-lg'}`}>
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <div className={`transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <p className="font-semibold text-sm">Relatório ESG</p>
              <p className="text-xs opacity-70">2024</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {isOnCoverPage && navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                {section.label}
              </button>
            ))}

            {/* Pages Dropdown */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                  isScrolled
                    ? "text-foreground hover:bg-secondary border border-border"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/20"
                }`}
              >
                Capítulos
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-card rounded-xl border border-border shadow-xl overflow-hidden animate-fade-in">
                  {reportPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className={`block px-4 py-3 text-sm hover:bg-secondary transition-colors ${
                        location.pathname === page.path ? 'bg-primary/10 text-primary font-medium' : 'text-foreground'
                      }`}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Progress Bar */}
        {isOnCoverPage && isScrolled && (
          <div className="h-0.5 bg-secondary -mx-6">
            <div 
              className="h-full bg-primary transition-all duration-150"
              style={{
                width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {isOnCoverPage && navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="border-t border-border pt-2 mt-2">
              <p className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider">Capítulos</p>
              {reportPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm transition-colors ${
                    location.pathname === page.path ? 'bg-primary/10 text-primary font-medium' : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {page.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ReportNavbar;
