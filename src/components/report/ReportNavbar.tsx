import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import construcapLogo from "@/assets/construcap-logo.png";

interface ReportPage {
  path: string;
  label: string;
  subPages?: { path: string; label: string }[];
}

const reportPages: ReportPage[] = [
  { path: "/quem-somos", label: "Quem Somos" },
  { path: "/governanca", label: "Governança" },
  { path: "/desempenho-economico", label: "Econômico" },
  { path: "/desempenho-ambiental", label: "Ambiental" },
  { 
    path: "/desempenho-social", 
    label: "Social",
    subPages: [
      { path: "/comunidades", label: "Comunidades" }
    ]
  },
  { path: "/gri-index", label: "Índice GRI" },
];

const ReportNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={construcapLogo}
              alt="Construcap"
              className={`w-30 h-20 transition-all ${isScrolled ? "" : "shadow-lg rounded-xl"}`}
            />
            <div className={`transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              <p className="font-semibold text-sm">Relatório ESG</p>
              <p className="text-xs opacity-70">2024</p>
            </div>
          </Link>

          {/* Desktop Navigation - Report Pages */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                location.pathname === "/"
                  ? "bg-primary text-primary-foreground"
                  : isScrolled
                    ? "text-foreground hover:bg-secondary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              }`}
            >
              <Home className="w-4 h-4" />
              Capa
            </Link>
            {reportPages.map((page) => (
              <div key={page.path} className="relative group">
                <Link
                  to={page.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                    location.pathname === page.path || page.subPages?.some(sub => location.pathname === sub.path)
                      ? "bg-primary text-primary-foreground"
                      : isScrolled
                        ? "text-foreground hover:bg-secondary"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  }`}
                >
                  {page.label}
                  {page.subPages && <ChevronDown className="w-3 h-3 ml-1" />}
                </Link>
                {page.subPages && (
                  <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[160px]">
                    {page.subPages.map((subPage) => (
                      <Link
                        key={subPage.path}
                        to={subPage.path}
                        className={`block px-4 py-2 text-sm transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          location.pathname === subPage.path
                            ? "bg-primary text-primary-foreground"
                            : "text-foreground hover:bg-secondary"
                        }`}
                      >
                        {subPage.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-secondary"
                : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Progress Bar */}
        {isScrolled && (
          <div className="h-0.5 bg-secondary -mx-6">
            <div
              className="h-full bg-primary transition-all duration-150"
              style={{
                width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === "/" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"
              }`}
            >
              <Home className="w-4 h-4" />
              Capa
            </Link>
            {reportPages.map((page) => (
              <div key={page.path}>
                <Link
                  to={page.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === page.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {page.label}
                </Link>
                {page.subPages?.map((subPage) => (
                  <Link
                    key={subPage.path}
                    to={subPage.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 pl-8 rounded-lg text-sm transition-colors ${
                      location.pathname === subPage.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    └ {subPage.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default ReportNavbar;
