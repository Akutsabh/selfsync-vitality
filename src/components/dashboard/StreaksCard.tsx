
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3 } from "lucide-react";

interface Streak {
  activity: string;
  days: number;
  icon: React.ReactNode;
}

interface StreaksCardProps {
  streaks: Streak[];
}

export function StreaksCard({ streaks }: StreaksCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Your Streaks
        </CardTitle>
        <CardDescription>
          Keep up the momentum with your habits
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {streaks.map((streak, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                {streak.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{streak.activity}</p>
                <Progress className="h-2 mt-1" value={(streak.days / 30) * 100} />
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold">{streak.days}</p>
                <p className="text-xs text-muted-foreground">days</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
