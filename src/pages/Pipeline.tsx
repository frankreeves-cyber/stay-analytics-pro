import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KPICard from "@/components/KPICard";
import { Calendar, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const summaryMetrics = [
  { title: "Total Expected Revenue", value: "£47,200", change: 18 },
  { title: "High-Intent Searchers", value: "1,247", change: 15 },
  { title: "Avg Basket Value", value: "£312", change: 5 },
  { title: "Top Stay Date", value: "Dec 24", change: undefined },
  { title: "Δ vs Previous 30d", value: "+£7.2k", change: undefined },
];

// Generate 30 days of pipeline data
const generatePipelineData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() + i);
    
    data.push({
      date: date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }),
      highIntent: Math.floor(Math.random() * 50) + 20,
      searches: Math.floor(Math.random() * 80) + 30,
      expectedBookings: Math.floor(Math.random() * 15) + 5,
      expectedRevenue: Math.floor(Math.random() * 3000) + 800,
      topRooms: ["Deluxe Suite", "Ocean View", "Standard"][Math.floor(Math.random() * 3)],
    });
  }
  return data;
};

const Pipeline = () => {
  const [selectedDate, setSelectedDate] = useState<typeof pipelineData[0] | null>(null);
  const pipelineData = generatePipelineData();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Pipeline Revenue (Next 30 Days)</h1>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {summaryMetrics.map((metric) => (
          <KPICard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Pipeline Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Daily Pipeline Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Stay Date</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">High-Intent</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Searches</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Exp. Bookings</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Exp. Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Top Rooms</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {pipelineData.map((row, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedDate(row)}
                  >
                    <td className="py-3 px-4 text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{row.date}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-right">
                      <Badge variant="secondary">{row.highIntent}</Badge>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-medium">{row.searches}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium">{row.expectedBookings}</td>
                    <td className="py-3 px-4 text-sm text-right font-bold text-success">
                      £{row.expectedRevenue.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{row.topRooms}</td>
                    <td className="py-3 px-4 text-sm">
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Heatmap Placeholder */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Revenue Heatmap (Next 30 Days)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 bg-gradient-to-r from-muted/30 via-primary/20 to-success/30 rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <Calendar className="w-12 h-12 text-muted-foreground mx-auto" />
              <p className="text-sm font-medium text-muted-foreground">Calendar heatmap visualization</p>
              <p className="text-xs text-muted-foreground">Darker shades = higher expected revenue</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights */}
      <Card className="shadow-sm bg-accent/50">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Pipeline Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Dec 24 pipeline</strong> shows £2,300 increase driven by UK Couples segment</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Weekend stays</strong> (Fri-Sun) represent 62% of next 30-day pipeline</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Deluxe Suites</strong> showing highest intent-to-search ratio at 38%</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Drawer for Date Details */}
      <Sheet open={!!selectedDate} onOpenChange={(open) => !open && setSelectedDate(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Pipeline Details: {selectedDate?.date}</SheetTitle>
            <SheetDescription>
              Breakdown of expected bookings and revenue drivers
            </SheetDescription>
          </SheetHeader>
          
          {selectedDate && (
            <div className="mt-6 space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">High-Intent</p>
                    <p className="text-xl font-bold">{selectedDate.highIntent}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Searches</p>
                    <p className="text-xl font-bold">{selectedDate.searches}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Exp. Bookings</p>
                    <p className="text-xl font-bold">{selectedDate.expectedBookings}</p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">Revenue</p>
                    <p className="text-xl font-bold text-success">£{selectedDate.expectedRevenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Room Mix</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">Deluxe Suite</span>
                    <span className="text-sm font-semibold">42%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">Ocean View</span>
                    <span className="text-sm font-semibold">35%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">Standard</span>
                    <span className="text-sm font-semibold">23%</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Persona Mix</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">🇬🇧 UK Couples</span>
                    <span className="text-sm font-semibold">38%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">🇺🇸 US Families</span>
                    <span className="text-sm font-semibold">28%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm">🇪🇺 EU Business</span>
                    <span className="text-sm font-semibold">22%</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Pipeline;
