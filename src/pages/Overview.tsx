import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import KPICard from "@/components/KPICard";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, Globe, Laptop, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const kpiData = [
  { title: "Unified Conversion", value: "3.2%", change: 12 },
  { title: "Return Visit Rate", value: "24%", change: -3 },
  { title: "Avg Visits / Booker", value: "2.4", change: 8 },
  { title: "High-Intent Visitors", value: "1,247", change: 15 },
  { title: "Pipeline Revenue (30d)", value: "£47.2k", change: 18 },
  { title: "Predicted Cancels", value: "23", change: -5 },
];

const visitorData = [
  { date: "Dec 1", visitors: 320, intent: 145 },
  { date: "Dec 3", visitors: 385, intent: 178 },
  { date: "Dec 5", visitors: 412, intent: 195 },
  { date: "Dec 7", visitors: 398, intent: 188 },
  { date: "Dec 9", visitors: 445, intent: 215 },
  { date: "Dec 11", visitors: 467, intent: 232 },
  { date: "Dec 13", visitors: 502, intent: 258 },
];

const bookingData = [
  { date: "Dec 1", bookings: 12, conversion: 3.1 },
  { date: "Dec 3", bookings: 15, conversion: 3.3 },
  { date: "Dec 5", bookings: 14, conversion: 2.9 },
  { date: "Dec 7", bookings: 16, conversion: 3.4 },
  { date: "Dec 9", bookings: 18, conversion: 3.5 },
  { date: "Dec 11", bookings: 21, conversion: 3.7 },
  { date: "Dec 13", bookings: 19, conversion: 3.2 },
];

const personas = [
  { name: "UK Couples", flag: "🇬🇧", device: "desktop", share: 28, conversion: 4.2, cancellation: 8 },
  { name: "US Families", flag: "🇺🇸", device: "mobile", share: 24, conversion: 3.8, cancellation: 12 },
  { name: "EU Business", flag: "🇪🇺", device: "desktop", share: 18, conversion: 5.1, cancellation: 5 },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {kpiData.map((kpi) => (
          <KPICard key={kpi.title} {...kpi} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Visitors & Intent Chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Visitors & Intent</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fill: "hsl(var(--muted-foreground))" }} fontSize={12} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="visitors" 
                  fill="hsl(var(--chart-1))" 
                  fillOpacity={0.3}
                  stroke="hsl(var(--chart-1))" 
                  strokeWidth={2}
                  name="Visitors"
                />
                <Line 
                  type="monotone" 
                  dataKey="intent" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  name="High Intent"
                  dot={{ fill: "hsl(var(--chart-2))" }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bookings & Conversion Chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Bookings & Conversion</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <ComposedChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="date" tick={{ fill: "hsl(var(--muted-foreground))" }} fontSize={12} />
                <YAxis yAxisId="left" tick={{ fill: "hsl(var(--muted-foreground))" }} fontSize={12} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: "hsl(var(--muted-foreground))" }} fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Bar 
                  yAxisId="left"
                  dataKey="bookings" 
                  fill="hsl(var(--chart-1))" 
                  radius={[8, 8, 0, 0]}
                  name="Bookings"
                />
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="conversion" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  name="Conversion %"
                  dot={{ fill: "hsl(var(--chart-2))" }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Insights Panel */}
      <Card className="shadow-sm bg-accent/50">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>High-intent visitors up 15% week-over-week, driven by UK Couples segment</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Conversion rate improved to 3.2%, with strongest performance on desktop</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Pipeline revenue for next 30 days tracking 18% above target</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Persona Snapshot */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">Top Guest Personas</CardTitle>
            <Link to="/personas" className="text-sm text-primary hover:underline flex items-center space-x-1">
              <span>View Full Personas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personas.map((persona) => (
              <div key={persona.name} className="p-4 border border-border rounded-lg bg-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{persona.flag}</span>
                    <div>
                      <p className="font-semibold text-sm">{persona.name}</p>
                      <p className="text-xs text-muted-foreground">{persona.share}% of pipeline</p>
                    </div>
                  </div>
                  {persona.device === "desktop" ? (
                    <Laptop className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion</span>
                    <span className="font-medium text-success">{persona.conversion}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cancellation</span>
                    <span className="font-medium text-warning">{persona.cancellation}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview;
