import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Overview from "./pages/Overview";
import JourneyExplorer from "./pages/JourneyExplorer";
import Funnel from "./pages/Funnel";
import Pipeline from "./pages/Pipeline";
import Personas from "./pages/Personas";
import Cancellations from "./pages/Cancellations";
import Integration from "./pages/Integration";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

// Simple auth check
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("guestjourney_auth") === "true";
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Layout>
                  <Overview />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/journey"
            element={
              <ProtectedRoute>
                <Layout>
                  <JourneyExplorer />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/funnel"
            element={
              <ProtectedRoute>
                <Layout>
                  <Funnel />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/pipeline"
            element={
              <ProtectedRoute>
                <Layout>
                  <Pipeline />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/personas"
            element={
              <ProtectedRoute>
                <Layout>
                  <Personas />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/cancellations"
            element={
              <ProtectedRoute>
                <Layout>
                  <Cancellations />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/integration"
            element={
              <ProtectedRoute>
                <Layout>
                  <Integration />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
