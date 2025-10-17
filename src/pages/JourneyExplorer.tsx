import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const paths = [
  { rank: 1, path: "Home → Rooms → Search → Book", visitors: 1247, intent: 68, conversion: 4.2 },
  { rank: 2, path: "Home → Offers → Search → Book", visitors: 982, intent: 72, conversion: 5.1 },
  { rank: 3, path: "Landing → Search → Book", visitors: 856, intent: 55, conversion: 3.8 },
  { rank: 4, path: "Home → About → Rooms → Search", visitors: 745, intent: 48, conversion: 2.9 },
  { rank: 5, path: "Search → Rooms → Compare → Book", visitors: 623, intent: 65, conversion: 4.5 },
];

const keyPages = [
  { page: "Rooms & Suites", visits: 3842, intentDelta: 12, impact: "positive" },
  { page: "Special Offers", visits: 2156, intentDelta: 18, impact: "positive" },
  { page: "Location & Amenities", visits: 1847, intentDelta: -5, impact: "negative" },
  { page: "Reviews", visits: 1623, intentDelta: 8, impact: "positive" },
  { page: "Dining", visits: 1245, intentDelta: 3, impact: "neutral" },
];

const JourneyExplorer = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Journey Explorer</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">1st Visit</Button>
          <Button variant="outline" size="sm">2nd Visit</Button>
          <Button variant="outline" size="sm">3+ Visits</Button>
          <Button variant="default" size="sm">All Visits</Button>
        </div>
      </div>

      {/* Sankey Diagram Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Visitor Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80 bg-muted flex items-center justify-center">
            <div className="text-center space-y-2">
              <p className="text-lg font-bold">Sankey Flow Visualization</p>
              <p className="text-sm text-muted-foreground">Landing → Key Pages → Booking Engine → Checkout</p>
              <div className="flex items-center justify-center space-x-8 mt-6">
                <div className="text-center">
                  <div className="w-24 h-24 bg-chart-1/20 border-4 border-chart-1 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-chart-1">100%</span>
                  </div>
                  <p className="text-xs font-bold">Landing</p>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-chart-2/20 border-4 border-chart-2 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-chart-2">68%</span>
                  </div>
                  <p className="text-xs font-bold">Key Pages</p>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-chart-3/20 border-4 border-chart-3 flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-chart-3">32%</span>
                  </div>
                  <p className="text-xs font-bold">Search</p>
                </div>
                <div className="text-4xl text-muted-foreground">→</div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-success/20 border-4 border-success flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-success">3.2%</span>
                  </div>
                  <p className="text-xs font-bold">Booked</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Paths Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Top Conversion Paths</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 text-sm font-bold">Rank</th>
                  <th className="text-left py-3 px-4 text-sm font-bold">Path</th>
                  <th className="text-right py-3 px-4 text-sm font-bold">Visitors</th>
                  <th className="text-right py-3 px-4 text-sm font-bold">Avg Intent</th>
                  <th className="text-right py-3 px-4 text-sm font-bold">Conversion</th>
                </tr>
              </thead>
              <tbody>
                {paths.map((path) => (
                  <tr key={path.rank} className="border-b border-border hover:bg-muted transition-colors">
                    <td className="py-3 px-4 text-sm font-bold">#{path.rank}</td>
                    <td className="py-3 px-4 text-sm">{path.path}</td>
                    <td className="py-3 px-4 text-sm text-right font-bold">{path.visitors.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-right">
                      <Badge variant="secondary">{path.intent}%</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-bold text-success">
                      {path.conversion}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Key Page Impact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Key Page Impact on Intent</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {keyPages.map((page) => (
              <div key={page.page} className="flex items-center justify-between p-3 border-2 border-border hover:bg-muted transition-colors">
                <div className="flex-1">
                  <p className="font-bold text-sm">{page.page}</p>
                  <p className="text-xs text-muted-foreground">{page.visits.toLocaleString()} visits</p>
                </div>
                <div className="flex items-center space-x-2">
                  {page.intentDelta > 0 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : page.intentDelta < 0 ? (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  ) : (
                    <div className="w-4 h-4" />
                  )}
                  <span className={`text-sm font-bold ${
                    page.intentDelta > 0 ? "text-success" : 
                    page.intentDelta < 0 ? "text-destructive" : 
                    "text-muted-foreground"
                  }`}>
                    {page.intentDelta > 0 ? "+" : ""}{page.intentDelta}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JourneyExplorer;
