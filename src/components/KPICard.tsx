import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  format?: "number" | "percent" | "currency";
}

const KPICard = ({ title, value, change, changeLabel = "vs prev period", format = "number" }: KPICardProps) => {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <Card className="shadow-sm">
      <CardContent className="pt-6">
        <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
        <div className="flex items-end justify-between">
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {change !== undefined && (
            <div className={cn(
              "flex items-center space-x-1 text-sm font-medium",
              isPositive && "text-success",
              isNegative && "text-destructive"
            )}>
              {isPositive && <TrendingUp className="w-4 h-4" />}
              {isNegative && <TrendingDown className="w-4 h-4" />}
              <span>{Math.abs(change)}%</span>
            </div>
          )}
        </div>
        {change !== undefined && (
          <p className="text-xs text-muted-foreground mt-1">{changeLabel}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default KPICard;
