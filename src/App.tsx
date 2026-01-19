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
import SupplyChainPage from "./pages/report/SupplyChainPage";
import UrbiaPage from "./pages/report/UrbiaPage";
import MinasArenaPage from "./pages/report/MinasArenaPage";
import InovaSaudePage from "./pages/report/InovaSaudePage";
import AmbicapPage from "./pages/report/AmbicapPage";
import GRIIndexPage from "./pages/report/GRIIndexPage";
import ODSPage from "./pages/report/ODSPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReportCover />} />
          <Route path="/carta-presidente" element={<CEOLetterPage />} />
          <Route path="/quem-somos" element={<AboutPage />} />
          <Route path="/governanca" element={<GovernancePage />} />
          <Route path="/compliance" element={<CompliancePage />} />
          <Route path="/gestao-riscos" element={<RiskManagementPage />} />
          <Route path="/materialidade" element={<MaterialityPage />} />
          <Route path="/comunidades" element={<CommunityPage />} />
          <Route path="/desempenho-economico" element={<EconomicPage />} />
          <Route path="/desempenho-ambiental" element={<EnvironmentalPage />} />
          <Route path="/desempenho-social" element={<SocialPage />} />
          <Route path="/cadeia-fornecimento" element={<SupplyChainPage />} />
          <Route path="/operacao-urbia" element={<UrbiaPage />} />
          <Route path="/operacao-minas-arena" element={<MinasArenaPage />} />
          <Route path="/operacao-inova-saude" element={<InovaSaudePage />} />
          <Route path="/operacao-ambicap" element={<AmbicapPage />} />
          <Route path="/gri-index" element={<GRIIndexPage />} />
          <Route path="/ods" element={<ODSPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
