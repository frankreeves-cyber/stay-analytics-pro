import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KPICard from "@/components/KPICard";
import { AlertTriangle, Calendar, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const summaryMetrics = [
  { title: "Predicted Cancels (30d)", value: "23", change: -12 },
  { title: "Total Risk Value", value: "£9,400", change: -8 },
  { title: "Avg Risk Score", value: "42%", change: -5 },
];

interface Booking {
  id: string;
  checkIn: string;
  nights: number;
  basket: number;
  risk: "high" | "medium" | "low";
  riskScore: number;
  signals: string[];
  persona: string;
  roomType: string;
}

const bookings: Booking[] = [
  {
    id: "BK-94821",
    checkIn: "Dec 18",
    nights: 3,
    basket: 840,
    risk: "high",
    riskScore: 78,
    signals: ["Multiple price checks", "Abandoned 2x", "Short lead time"],
    persona: "🇺🇸 US Families",
    roomType: "Family Suite",
  },
  {
    id: "BK-94783",
    checkIn: "Dec 20",
    nights: 2,
    basket: 520,
    risk: "high",
    riskScore: 72,
    signals: ["Similar searches elsewhere", "Price sensitive"],
    persona: "🇬🇧 UK Couples",
    roomType: "Deluxe Room",
  },
  {
    id: "BK-94756",
    checkIn: "Dec 22",
    nights: 4,
    basket: 1120,
    risk: "medium",
    riskScore: 58,
    signals: ["First-time booker", "Long stay"],
    persona: "🇪🇺 EU Business",
    roomType: "Executive Suite",
  },
  {
    id: "BK-94699",
    checkIn: "Dec 19",
    nights: 1,
    basket: 280,
    risk: "medium",
    riskScore: 52,
    signals: ["Mobile booking", "No extras added"],
    persona: "🏴󐁧󐁢󐁥󐁮󐁧󐁿 Domestic Leisure",
    roomType: "Standard Room",
  },
  {
    id: "BK-94652",
    checkIn: "Dec 25",
    nights: 5,
    basket: 1450,
    risk: "low",
    riskScore: 28,
    signals: ["Early booker", "Added extras", "Repeat guest"],
    persona: "🌏 Asian Tourists",
    roomType: "Premium Suite",
  },
];

const Cancellations = () => {
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      case "low":
        return "success";
      default:
        return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Predicted Cancellations</h1>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {summaryMetrics.map((metric) => (
          <KPICard key={metric.title} {...metric} />
        ))}
      </div>

      {/* At-Risk Bookings Table */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold">At-Risk Bookings (Next 30 Days)</CardTitle>
            <Badge variant="outline" className="text-xs">
              Sorted by risk score
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Booking</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Check-in</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Nights</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Basket</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Risk</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Key Signals</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="border-b border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => setSelectedBooking(booking)}
                  >
                    <td className="py-3 px-4">
                      <div className="font-mono text-sm font-medium">{booking.id}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{booking.checkIn}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-right font-medium">{booking.nights}</td>
                    <td className="py-3 px-4 text-sm text-right font-semibold">
                      £{booking.basket.toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Badge variant={getRiskColor(booking.risk) as any} className="capitalize">
                          {booking.risk}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{booking.riskScore}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className="w-4 h-4 text-warning flex-shrink-0" />
                        <span className="text-xs text-muted-foreground truncate max-w-[200px]">
                          {booking.signals[0]}
                        </span>
                      </div>
                    </td>
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

      {/* Insights */}
      <Card className="shadow-sm bg-accent/50">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Cancellation Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-success font-bold mt-0.5">✓</span>
              <span>Overall cancellation risk <strong>down 12%</strong> this week thanks to improved confirmation emails</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-warning font-bold mt-0.5">⚠</span>
              <span><strong>Short lead-time bookings</strong> ({"<"}7 days) show 2.3x higher cancellation risk</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span><strong>Guests who add extras</strong> (parking, breakfast) have 45% lower cancellation rates</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Booking Details Drawer */}
      <Sheet open={!!selectedBooking} onOpenChange={(open) => !open && setSelectedBooking(null)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Booking Details: {selectedBooking?.id}</SheetTitle>
            <SheetDescription>Cancellation risk analysis and timeline</SheetDescription>
          </SheetHeader>

          {selectedBooking && (
            <div className="mt-6 space-y-6">
              {/* Risk Overview */}
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Risk Score</span>
                  <Badge variant={getRiskColor(selectedBooking.risk) as any} className="capitalize">
                    {selectedBooking.risk}
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-destructive mb-2">
                  {selectedBooking.riskScore}%
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-destructive rounded-full"
                    style={{ width: `${selectedBooking.riskScore}%` }}
                  />
                </div>
              </div>

              {/* Booking Info */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Booking Information</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Check-in</p>
                    <p className="font-semibold">{selectedBooking.checkIn}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Nights</p>
                    <p className="font-semibold">{selectedBooking.nights}</p>
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground">Room Type</p>
                    <p className="font-semibold text-sm">{selectedBooking.roomType}</p>
                  </div>
                  <div className="p-3 bg-success/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">Value</p>
                    <p className="font-semibold text-success">£{selectedBooking.basket}</p>
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-xs text-muted-foreground mb-1">Persona</p>
                  <p className="font-semibold">{selectedBooking.persona}</p>
                </div>
              </div>

              {/* Risk Signals */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Risk Signals</h4>
                <div className="space-y-2">
                  {selectedBooking.signals.map((signal, index) => (
                    <div key={index} className="flex items-start space-x-2 p-2 bg-warning/10 rounded">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Activity Timeline</h4>
                <div className="space-y-3 text-xs">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1" />
                    <div>
                      <p className="font-medium">Booking created</p>
                      <p className="text-muted-foreground">3 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-1" />
                    <div>
                      <p className="font-medium">Price check detected</p>
                      <p className="text-muted-foreground">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-warning rounded-full mt-1" />
                    <div>
                      <p className="font-medium">Similar property viewed</p>
                      <p className="text-muted-foreground">1 day ago</p>
                    </div>
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

export default Cancellations;
