import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home,
  User,
  Building2,
  Shield,
  AlertTriangle,
  Users,
  TrendingUp,
  Leaf,
  Heart,
  MessageSquare,
  FileText,
  ChevronDown,
  ChevronRight,
  PanelTopClose,
  PanelTop
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReportNavbar from "./ReportNavbar";

const menuItems = [
  { path: "/relatorio", label: "Capa", icon: Home },
  { path: "/relatorio/carta-ceo", label: "Carta do CEO", icon: User },
  { path: "/relatorio/quem-somos", label: "Quem Somos", icon: Building2 },
  { 
    label: "Governança", 
    icon: Shield,
    children: [
      { path: "/relatorio/governanca", label: "Estratégia e Governança" },
      { path: "/relatorio/compliance", label: "Integridade e Compliance" },
      { path: "/relatorio/gestao-riscos", label: "Gestão de Riscos" },
    ]
  },
  { path: "/relatorio/materialidade", label: "Materialidade e Stakeholders", icon: Users },
  { path: "/relatorio/desempenho-economico", label: "Desempenho Econômico", icon: TrendingUp },
  { path: "/relatorio/desempenho-ambiental", label: "Desempenho Ambiental", icon: Leaf },
  { path: "/relatorio/desempenho-social", label: "Desempenho Social", icon: Heart },
  { path: "/relatorio/comunidades", label: "Relacionamento com Comunidades", icon: MessageSquare },
  { path: "/relatorio/gri-index", label: "Índice GRI", icon: FileText },
];

interface ReportLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const ReportLayout = ({ children, title }: ReportLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [expandedItems, setExpandedItems] = useState<string[]>(["Governança"]);
  const location = useLocation();

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (children: { path: string }[]) => 
    children.some(child => location.pathname === child.path);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <div className={cn(
        "transition-transform duration-300",
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      )}>
        <ReportNavbar />
      </div>

      {/* Toggle Navbar Button */}
      <button
        onClick={() => setNavbarVisible(!navbarVisible)}
        className={cn(
          "fixed right-4 z-50 p-2 rounded-lg bg-card border border-border shadow-lg transition-all duration-300 hover:bg-muted",
          navbarVisible ? "top-20" : "top-4"
        )}
        title={navbarVisible ? "Ocultar navegação" : "Mostrar navegação"}
      >
        {navbarVisible ? (
          <PanelTopClose className="w-5 h-5 text-muted-foreground" />
        ) : (
          <PanelTop className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      {/* Mobile Header */}
      <header className={cn(
        "lg:hidden fixed left-0 right-0 h-16 bg-card border-b border-border z-40 flex items-center justify-between px-4 transition-all duration-300",
        navbarVisible ? "top-16" : "top-0"
      )}>
        <Link to="/relatorio" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-sm">Relatório ESG 2024</span>
        </Link>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-muted rounded-lg transition-colors"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 h-full w-72 bg-card border-r border-border z-30 transition-all duration-300 overflow-y-auto",
        "lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
        navbarVisible ? "top-16" : "top-0"
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">C</span>
            </div>
            <div>
              <p className="font-bold text-sm">Grupo Construcap</p>
              <p className="text-xs text-muted-foreground">Relatório de Sustentabilidade</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Navegação
          </p>
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
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
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
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
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

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border bg-card">
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
      <main className={cn(
        "lg:ml-72 min-h-screen transition-all duration-300",
        navbarVisible ? "pt-32 lg:pt-16" : "pt-16 lg:pt-0"
      )}>
        {title && (
          <div className="bg-card border-b border-border px-6 py-4 sticky top-0 lg:top-0 z-10">
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        )}
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default ReportLayout;
