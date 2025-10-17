import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const funnelSteps = [
  { step: "Landing", visitors: 15420, dropoff: 0, conversion: 100 },
  { step: "Content", visitors: 10494, dropoff: 32, conversion: 68 },
  { step: "Search", visitors: 5783, dropoff: 45, conversion: 37.5 },
  { step: "Availability", visitors: 3932, dropoff: 32, conversion: 25.5 },
  { step: "Rate Selection", visitors: 2667, dropoff: 32, conversion: 17.3 },
  { step: "Checkout", visitors: 1173, dropoff: 56, conversion: 7.6 },
  { step: "Booked", visitors: 493, dropoff: 58, conversion: 3.2 },
];

const Funnel = () => {
  return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Funnel & Conversion</h1>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">7 Days</Button>
            <Button variant="outline" size="sm">14 Days</Button>
            <Button variant="default" size="sm">30 Days</Button>
          </div>
        </div>

        {/* Cross-Domain Stitch Rate */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-bold text-muted-foreground mb-2">Cross-Domain Stitch Rate</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold text-success">94.2%</p>
                <Badge variant="success">Excellent</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Website → Booking Engine</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-bold text-muted-foreground mb-2">Attribution Window</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">30 days</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Last-touch attribution</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-bold text-muted-foreground mb-2">Avg Time to Book</p>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-bold">2.4 days</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">From first visit</p>
            </CardContent>
          </Card>
        </div>

        {/* Funnel Visualization */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold">Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {funnelSteps.map((step, index) => {
                const widthPercent = (step.visitors / funnelSteps[0].visitors) * 100;
                
                return (
                  <div key={step.step} className="relative">
                    <div className="flex items-center space-x-4">
                      {/* Funnel Bar */}
                      <div className="flex-1">
                        <div 
                          className="bg-accent border-2 border-primary relative overflow-hidden"
                          style={{ width: `${widthPercent}%`, minWidth: '150px' }}
                        >
                          <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                                {index + 1}
                              </div>
                              <div>
                                <p className="font-bold text-sm">{step.step}</p>
                                <p className="text-xs text-muted-foreground">
                                  {step.visitors.toLocaleString()} visitors
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold text-primary">{step.conversion}%</p>
                              {step.dropoff > 0 && (
                                <p className="text-xs text-destructive font-bold">
                                  -{step.dropoff}% drop
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow between steps */}
                    {index < funnelSteps.length - 1 && (
                      <div className="flex items-center justify-center my-2">
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <Card className="bg-warning-light border-warning">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Optimization Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <span className="font-bold mt-0.5">⚠</span>
                <span><strong>Checkout drop-off</strong> is higher than industry average (58% vs 45%). Consider simplifying the form.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Search to Availability</strong> transition is strong (68% pass-through), indicating good search relevance.</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Content engagement</strong> improves conversion by 42% when users view 3+ pages.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
  );
};

export default Funnel;
