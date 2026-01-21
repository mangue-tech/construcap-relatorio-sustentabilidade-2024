import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  User,
  Building2,
  Shield,
  Users,
  TrendingUp,
  Leaf,
  Heart,
  MessageSquare,
  FileText,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
  PanelLeft,
  Truck,
  Factory,
  TreePine,
  Stethoscope,
  Recycle,
  Target,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import construcapLogo from "@/assets/construcap-logo.png";
import mangueTechBadge2 from "@/assets/mangue-tech-badge-2.png";
import ScrollToTop from "./ScrollToTop";
import MangueBadge from "./MangueBadge";

const menuItems = [
  { path: "/", label: "Capa", icon: Home },
  { path: "/carta-presidente", label: "Carta do Presidente", icon: User },
  { path: "/quem-somos", label: "Quem Somos", icon: Building2 },
  {
    label: "Governança",
    icon: Shield,
    children: [
      { path: "/governanca", label: "Estratégia e Governança" },
      { path: "/compliance", label: "Integridade e Compliance" },
      { path: "/gestao-riscos", label: "Gestão de Riscos" },
    ],
  },
  { path: "/materialidade", label: "Materialidade e Grupos de Interesse", icon: Users },
  { path: "/desempenho-economico", label: "Desempenho Econômico", icon: TrendingUp },
  { path: "/desempenho-ambiental", label: "Desempenho Ambiental", icon: Leaf },
  {
    label: "Desempenho Social",
    icon: Heart,
    children: [
      { path: "/desempenho-social", label: "Desempenho Social" },
      { path: "/cadeia-fornecimento", label: "Cadeia de Fornecimento" },
      { path: "/comunidades", label: "Relacionamento com Comunidades" },
    ],
  },
  {
    label: "Destaques das Operações",
    icon: Factory,
    children: [
      { path: "/operacao-urbia", label: "Urbia" },
      { path: "/operacao-minas-arena", label: "Minas Arena" },
      { path: "/operacao-inova-saude", label: "Inova Saúde" },
      { path: "/operacao-ambicap", label: "Ambicap" },
    ],
  },
  { path: "/ods", label: "ODS", icon: Target },
  { path: "/gri-index", label: "Índice GRI", icon: FileText },
];

// Flatten menu items for progress calculation
const getAllPaths = () => {
  const paths: string[] = [];
  menuItems.forEach((item) => {
    if (item.path) paths.push(item.path);
    if (item.children) item.children.forEach((child) => paths.push(child.path));
  });
  return paths;
};

// Flatten all pages for search
type SearchPage = { path: string; label: string; parent?: string };
const allPages: SearchPage[] = menuItems.flatMap((item) => {
  if (item.children) {
    return item.children.map((child) => ({
      path: child.path,
      label: child.label,
      parent: item.label,
    }));
  }
  return item.path ? [{ path: item.path, label: item.label }] : [];
});

interface ReportLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const ReportLayout = ({ children, title }: ReportLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Governança",
    "Desempenho Social",
    "Destaques das Operações",
  ]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof allPages>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Search filter
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = allPages.filter((page) => page.label.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSelect = (path: string) => {
    navigate(path);
    setSearchQuery("");
    setSearchOpen(false);
    setSidebarOpen(false);
  };

  // Calculate page progress
  const allPaths = getAllPaths();
  const currentIndex = allPaths.indexOf(location.pathname);
  const pageProgress = currentIndex >= 0 ? ((currentIndex + 1) / allPaths.length) * 100 : 0;

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
  };

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (children: { path: string }[]) => children.some((child) => location.pathname === child.path);

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Progress Bars */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Page Progress */}
        <div className="h-1 bg-muted">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${pageProgress}%` }} />
        </div>
        {/* Scroll Progress */}
        <div className="h-0.5 bg-muted/50">
          <div className="h-full bg-primary/60 transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        onClick={() => setSidebarVisible(!sidebarVisible)}
        className={cn(
          "fixed z-50 p-2 rounded-lg bg-card border border-border shadow-lg transition-all duration-300 hover:bg-muted",
          sidebarVisible ? "left-[280px] top-20" : "left-4 top-20",
          "hidden lg:flex",
        )}
        title={sidebarVisible ? "Ocultar menu" : "Mostrar menu"}
      >
        {sidebarVisible ? (
          <PanelLeftClose className="w-5 h-5 text-muted-foreground" />
        ) : (
          <PanelLeft className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-1.5 left-0 right-0 h-16 bg-card border-b border-border z-40 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={construcapLogo} alt="Construcap" className="w-8 h-8" />
          <span className="font-bold text-sm">Relatório ESG 2024</span>
        </Link>
        <div className="flex items-center gap-2">
          {/* Mobile Search */}
          <div className="relative" ref={mobileSearchRef}>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            {searchOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-card border border-border rounded-lg shadow-lg z-50">
                <div className="p-3">
                  <input
                    type="text"
                    placeholder="Buscar no relatório..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full px-3 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="max-h-64 overflow-y-auto border-t border-border">
                    {searchResults.map((result) => (
                      <button
                        key={result.path}
                        onClick={() => handleSearchSelect(result.path)}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors border-b border-border last:border-b-0"
                      >
                        <span className="font-medium">{result.label}</span>
                        {result.parent && (
                          <span className="text-xs text-muted-foreground ml-2">em {result.parent}</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
                {searchQuery && searchResults.length === 0 && (
                  <div className="p-4 text-sm text-muted-foreground border-t border-border">
                    Nenhum resultado encontrado
                  </div>
                )}
              </div>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-1.5 left-0 h-[calc(100%-6px)] w-72 bg-card border-r border-border z-30 transition-all duration-300 overflow-y-auto",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          sidebarVisible ? "lg:translate-x-0" : "lg:-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <img src={construcapLogo} alt="Construcap" className="w-15 h-10" />
            <div>
              <p className="font-bold text-sm">Grupo Construcap</p>
              <p className="text-xs text-muted-foreground">Relatório de Sustentabilidade 2024</p>
            </div>
          </Link>
        </div>

        {/* Search Bar - Sidebar */}
        <div className="p-4 border-b border-border" ref={searchRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar no relatório..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              className="w-full pl-9 pr-3 py-2 text-sm bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
            />
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto z-50">
                {searchResults.map((result) => (
                  <button
                    key={result.path}
                    onClick={() => handleSearchSelect(result.path)}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-muted transition-colors border-b border-border last:border-b-0"
                  >
                    <span className="font-medium">{result.label}</span>
                    {result.parent && <span className="text-xs text-muted-foreground ml-2">em {result.parent}</span>}
                  </button>
                ))}
              </div>
            )}
            {searchOpen && searchQuery && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg p-4 text-sm text-muted-foreground z-50">
                Nenhum resultado encontrado
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Navegação</p>
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.label)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                        isParentActive(item.children)
                          ? "bg-accent text-accent-foreground font-medium"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {expandedItems.includes(item.label) ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>
                    {expandedItems.includes(item.label) && (
                      <ul className="ml-7 mt-1 space-y-1 border-l border-border pl-3">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <Link
                              to={child.path}
                              onClick={() => setSidebarOpen(false)}
                              className={cn(
                                "block px-3 py-2 rounded-lg text-sm transition-colors",
                                isActive(child.path)
                                  ? "bg-primary text-primary-foreground font-medium"
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                      isActive(item.path)
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Progress indicator */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span>Progresso</span>
            <span>{Math.round(pageProgress)}%</span>
          </div>
          <Progress value={pageProgress} className="h-2" />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>GRI Standards 2021</span>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-300 pt-20 lg:pt-4",
          sidebarVisible ? "lg:ml-72" : "lg:ml-0",
        )}
      >
        {title && (
          <div className="bg-card border-b border-border px-6 py-4 sticky top-1.5 z-10">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        )}
        <div className="p-6 lg:p-8">{children}</div>

        {/* Copyright Footer */}
        <footer className="px-6 lg:px-8 pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Copyright © 2025 - Grupo Construcap, todos os direitos reservados.
            </p>
            <a
              href="https://mangue.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={mangueTechBadge2} alt="Desenvolvido por Mangue Tech" className="h-10" />
            </a>
          </div>
        </footer>
      </main>

      {/* Floating Elements */}
      <ScrollToTop />
      <MangueBadge />
    </div>
  );
};

export default ReportLayout;
