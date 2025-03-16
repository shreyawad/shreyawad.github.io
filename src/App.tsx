import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Hypermobility from "./pages/Hypermobility";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import FeelingTheWobble from "./pages/blog/FeelingTheWobble";
import SleepAndHealing from "./pages/blog/SleepAndHealing";
import DietAndRecovery from "./pages/blog/DietAndRecovery";
import StressAndRecovery from "./pages/blog/StressAndRecovery";
import HydrationAndRecovery from "./pages/blog/HydrationAndRecovery";
import { Analytics } from "@/components/Analytics";
import { CookieConsent } from "@/components/CookieConsent";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import HowIWork from "./pages/HowIWork";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Analytics />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hypermobility" element={<Hypermobility />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/feeling-the-wobble" element={<FeelingTheWobble />} />
          <Route path="/blog/sleep-and-healing" element={<SleepAndHealing />} />
          <Route path="/blog/diet-and-recovery" element={<DietAndRecovery />} />
          <Route path="/blog/stress-and-recovery" element={<StressAndRecovery />} />
          <Route path="/blog/hydration-and-recovery" element={<HydrationAndRecovery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/how-i-work" element={<HowIWork />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
