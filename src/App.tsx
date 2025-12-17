import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ReportCover from "./pages/report/ReportCover";
import CEOLetterPage from "./pages/report/CEOLetterPage";
import AboutPage from "./pages/report/AboutPage";
import GovernancePage from "./pages/report/GovernancePage";
import CompliancePage from "./pages/report/CompliancePage";
import RiskManagementPage from "./pages/report/RiskManagementPage";
import MaterialityPage from "./pages/report/MaterialityPage";
import CommunityPage from "./pages/report/CommunityPage";
import EconomicPage from "./pages/report/EconomicPage";
import EnvironmentalPage from "./pages/report/EnvironmentalPage";
import SocialPage from "./pages/report/SocialPage";
import GRIIndexPage from "./pages/report/GRIIndexPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReportCover />} />
          <Route path="/relatorio/carta-ceo" element={<CEOLetterPage />} />
          <Route path="/relatorio/quem-somos" element={<AboutPage />} />
          <Route path="/relatorio/governanca" element={<GovernancePage />} />
          <Route path="/relatorio/compliance" element={<CompliancePage />} />
          <Route path="/relatorio/gestao-riscos" element={<RiskManagementPage />} />
          <Route path="/relatorio/materialidade" element={<MaterialityPage />} />
          <Route path="/relatorio/comunidades" element={<CommunityPage />} />
          <Route path="/relatorio/desempenho-economico" element={<EconomicPage />} />
          <Route path="/relatorio/desempenho-ambiental" element={<EnvironmentalPage />} />
          <Route path="/relatorio/desempenho-social" element={<SocialPage />} />
          <Route path="/relatorio/gri-index" element={<GRIIndexPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
