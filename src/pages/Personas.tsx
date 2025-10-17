import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, Smartphone, Monitor, TrendingUp, TrendingDown } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const personas = [
  {
    name: "UK Couples",
    flag: "🇬🇧",
    share: 28,
    devices: { mobile: 32, tablet: 18, desktop: 50 },
    avgVisits: 2.8,
    conversion: 4.2,
    cancellation: 8,
    avgBasket: 420,
    stayWindow: "2-4 weeks",
    trend: "up",
  },
  {
    name: "US Families",
    flag: "🇺🇸",
    share: 24,
    devices: { mobile: 58, tablet: 22, desktop: 20 },
    avgVisits: 3.2,
    conversion: 3.8,
    cancellation: 12,
    avgBasket: 580,
    stayWindow: "3-6 weeks",
    trend: "up",
  },
  {
    name: "EU Business",
    flag: "🇪🇺",
    share: 18,
    devices: { mobile: 25, tablet: 15, desktop: 60 },
    avgVisits: 1.9,
    conversion: 5.1,
    cancellation: 5,
    avgBasket: 340,
    stayWindow: "1-2 weeks",
    trend: "neutral",
  },
  {
    name: "Domestic Leisure",
    flag: "🏴󐁧󐁢󐁥󐁮󐁧󐁿",
    share: 16,
    devices: { mobile: 48, tablet: 28, desktop: 24 },
    avgVisits: 2.5,
    conversion: 3.5,
    cancellation: 10,
    avgBasket: 290,
    stayWindow: "1-3 weeks",
    trend: "up",
  },
  {
    name: "Asian Tourists",
    flag: "🌏",
    share: 14,
    devices: { mobile: 72, tablet: 18, desktop: 10 },
    avgVisits: 4.1,
    conversion: 2.9,
    cancellation: 15,
    avgBasket: 650,
    stayWindow: "4-8 weeks",
    trend: "down",
  },
];

const pipelineData = [
  { name: "Top 5 Personas", value: 80, color: "hsl(var(--chart-1))" },
  { name: "Others", value: 20, color: "hsl(var(--muted))" },
];

const Personas = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Guest Personas</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Representing ≈ 80% of current pipeline
          </p>
        </div>
      </div>

      {/* Stacked Bar - Pipeline Share */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Pipeline Share Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex h-12 rounded-lg overflow-hidden">
              {personas.map((persona, index) => (
                <div
                  key={persona.name}
                  className="flex items-center justify-center text-xs font-medium text-white transition-all hover:opacity-80"
                  style={{
                    width: `${persona.share}%`,
                    backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))`,
                  }}
                >
                  {persona.share}%
                </div>
              ))}
              <div
                className="flex items-center justify-center text-xs font-medium text-muted-foreground bg-muted"
                style={{ width: "20%" }}
              >
                Others 20%
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {personas.map((persona, index) => (
                <div key={persona.name} className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded"
                    style={{ backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))` }}
                  />
                  <span className="text-sm">
                    {persona.flag} {persona.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Persona Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((persona) => (
          <Card key={persona.name} className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl">{persona.flag}</span>
                  <div>
                    <CardTitle className="text-base">{persona.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">{persona.share}% of pipeline</p>
                  </div>
                </div>
                {persona.trend === "up" && <TrendingUp className="w-5 h-5 text-success" />}
                {persona.trend === "down" && <TrendingDown className="w-5 h-5 text-destructive" />}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Device Mix */}
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">Device Mix</p>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Smartphone className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium">{persona.devices.mobile}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Monitor className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium">{persona.devices.tablet}%</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Laptop className="w-4 h-4 text-muted-foreground" />
                    <span className="text-xs font-medium">{persona.devices.desktop}%</span>
                  </div>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 bg-muted rounded">
                  <p className="text-muted-foreground">Avg Visits</p>
                  <p className="font-semibold">{persona.avgVisits}</p>
                </div>
                <div className="p-2 bg-success/10 rounded">
                  <p className="text-muted-foreground">Conversion</p>
                  <p className="font-semibold text-success">{persona.conversion}%</p>
                </div>
                <div className="p-2 bg-warning/10 rounded">
                  <p className="text-muted-foreground">Cancellation</p>
                  <p className="font-semibold text-warning">{persona.cancellation}%</p>
                </div>
                <div className="p-2 bg-muted rounded">
                  <p className="text-muted-foreground">Avg Basket</p>
                  <p className="font-semibold">£{persona.avgBasket}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-border">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Stay Window</span>
                  <Badge variant="secondary">{persona.stayWindow}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Pipeline Concentration</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pipelineData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pipelineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Top 5 personas represent <strong className="text-foreground">80%</strong> of pipeline value
            </p>
          </CardContent>
        </Card>

        {/* Journey Length Comparison */}
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Avg Visits to Book by Persona</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {personas.map((persona, index) => {
                const maxVisits = Math.max(...personas.map((p) => p.avgVisits));
                const widthPercent = (persona.avgVisits / maxVisits) * 100;
                
                return (
                  <div key={persona.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center space-x-2">
                        <span>{persona.flag}</span>
                        <span className="font-medium">{persona.name}</span>
                      </span>
                      <span className="font-bold">{persona.avgVisits}</span>
                    </div>
                    <div className="h-6 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${widthPercent}%`,
                          backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights */}
      <Card className="shadow-sm bg-accent/50">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Persona Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>UK Couples</strong> show highest desktop conversion (4.2%) with lowest cancellation risk</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Asian Tourists</strong> have longest research cycle (4.1 visits avg) but highest basket value</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Mobile optimization</strong> could unlock 15% more conversions from US Families segment</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Personas;
