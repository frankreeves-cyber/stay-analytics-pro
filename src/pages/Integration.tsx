import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Activity, Clock } from "lucide-react";

const statusTiles = [
  {
    title: "Website SDK",
    status: "healthy",
    version: "v2.4.1",
    details: "All pageviews tracking correctly",
  },
  {
    title: "Booking SDK",
    status: "healthy",
    version: "v1.8.2",
    details: "Checkout events firing as expected",
  },
  {
    title: "Cross-Domain Stitch",
    status: "healthy",
    value: "94.2%",
    details: "Above 90% target threshold",
  },
  {
    title: "API Latency",
    status: "healthy",
    value: "124ms",
    details: "P95 latency within SLA",
  },
  {
    title: "Dropped Events",
    status: "warning",
    value: "0.3%",
    details: "Slightly elevated but acceptable",
  },
  {
    title: "Origin Allowlist",
    status: "healthy",
    value: "3 domains",
    details: "All configured domains valid",
  },
];

const recentEvents = [
  { type: "pageview", page: "/rooms/deluxe-suite", time: "2s ago", status: "success" },
  { type: "search", query: "Dec 24-27", time: "5s ago", status: "success" },
  { type: "pageview", page: "/special-offers", time: "8s ago", status: "success" },
  { type: "checkout_start", basket: "£420", time: "12s ago", status: "success" },
  { type: "pageview", page: "/", time: "15s ago", status: "success" },
  { type: "search", query: "Jan 5-8", time: "18s ago", status: "success" },
  { type: "intent_signal", intent: "high", time: "22s ago", status: "success" },
  { type: "pageview", page: "/location", time: "28s ago", status: "success" },
];

const checklist = [
  { item: "Website SDK installed", status: "complete" },
  { item: "Booking engine SDK installed", status: "complete" },
  { item: "Cross-domain tracking configured", status: "complete" },
  { item: "Event validation passing", status: "complete" },
  { item: "Custom events configured", status: "pending" },
  { item: "Data retention policy set", status: "complete" },
];

const Integration = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Integration Health</h1>

      {/* Status Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {statusTiles.map((tile) => (
          <Card key={tile.title} className="shadow-sm">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <p className="text-sm font-semibold">{tile.title}</p>
                {tile.status === "healthy" ? (
                  <CheckCircle2 className="w-5 h-5 text-success" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-warning" />
                )}
              </div>
              
              {tile.value && (
                <p className="text-2xl font-bold mb-1">
                  {tile.value}
                </p>
              )}
              
              {tile.version && (
                <Badge variant="secondary" className="mb-2">
                  {tile.version}
                </Badge>
              )}
              
              <p className="text-xs text-muted-foreground">{tile.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Live Event Feed */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Live Event Stream</span>
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Last 2 minutes
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentEvents.map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <div>
                    <p className="text-sm font-medium font-mono">{event.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {event.page || event.query || event.basket || event.intent}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{event.time}</span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Setup Checklist & Version Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Setup Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50">
                  <div className="flex items-center space-x-3">
                    {item.status === "complete" ? (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                    )}
                    <span className="text-sm">{item.item}</span>
                  </div>
                  <Badge
                    variant={item.status === "complete" ? "secondary" : "outline"}
                    className="capitalize text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">SDK Versions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Website SDK</span>
                  <Badge variant="secondary">v2.4.1</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Installed on: yourhotel.com
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span className="text-xs text-success font-medium">Up to date</span>
                </div>
              </div>

              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold">Booking SDK</span>
                  <Badge variant="secondary">v1.8.2</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  Installed on: booking.yourhotel.com
                </p>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  <span className="text-xs text-success font-medium">Up to date</span>
                </div>
              </div>

              <div className="p-4 bg-accent/50 rounded-lg border border-primary/20">
                <p className="text-xs font-medium mb-1">Latest Version Available</p>
                <p className="text-xs text-muted-foreground">
                  SDK v2.5.0 includes improved intent detection and reduced latency
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Info */}
      <Card className="shadow-sm bg-accent/50">
        <CardHeader>
          <CardTitle className="text-base font-semibold">System Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <span className="text-success font-bold mt-0.5">✓</span>
              <span>All systems operational. Event processing running at 99.97% uptime</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-success font-bold mt-0.5">✓</span>
              <span>Data pipeline healthy with {"<"}2min latency on all metrics</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-primary font-bold mt-0.5">•</span>
              <span>Next scheduled maintenance window: Dec 28, 2024 (02:00-04:00 UTC)</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Integration;
