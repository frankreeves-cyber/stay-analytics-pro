import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  GitBranch,
  Filter,
  TrendingUp,
  Users,
  AlertTriangle,
  Activity,
  LogOut,
  Menu,
  X,
  Calendar,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { logout } from "@/lib/auth";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { path: "/", icon: LayoutDashboard, label: "Overview" },
  { path: "/journey", icon: GitBranch, label: "Journey Explorer" },
  { path: "/funnel", icon: Filter, label: "Funnel & Conversion" },
  { path: "/pipeline", icon: TrendingUp, label: "Pipeline Revenue" },
  { path: "/personas", icon: Users, label: "Guest Personas" },
  { path: "/cancellations", icon: AlertTriangle, label: "Cancellations" },
  { path: "/integration", icon: Activity, label: "Integration Health" },
];

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border-2 border-border focus:outline-none focus:ring-3 focus:ring-ring font-bold"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Left Navigation */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-40 w-64 bg-sidebar border-r-4 border-sidebar-border transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b-2 border-sidebar-border">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-sidebar-primary flex items-center justify-center font-bold text-sidebar-primary-foreground">
                GJ
              </div>
              <span className="text-lg font-bold text-sidebar-foreground">GuestJourney</span>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 transition-colors font-bold border-l-4",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground border-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 border-transparent"
                  )}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-3 border-t-2 border-sidebar-border">
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/50 border-0 shadow-none font-bold"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b-2 border-border flex items-center justify-between px-6 sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm font-bold">
              <Calendar className="w-4 h-4" />
              <span>Last 30 days</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm">
              Compare
            </Button>
            <Button variant="ghost" size="icon">
              <HelpCircle className="w-5 h-5" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
