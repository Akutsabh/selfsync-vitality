
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Target } from "lucide-react";

interface WellnessScoreCardProps {
  wellnessScore: number;
}

export function WellnessScoreCard({ wellnessScore }: WellnessScoreCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          Wellness Score
        </CardTitle>
        <CardDescription>Your overall wellness metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-6">
          <div className="relative h-40 w-40">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="stroke-muted"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="8"
              />
              <circle
                className="stroke-primary"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * wellnessScore) / 100}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl font-bold">{wellnessScore}</div>
                <div className="text-sm text-muted-foreground">Great</div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-muted-foreground text-xs">Physical</div>
            <Progress className="h-2 mt-1" value={82} />
          </div>
          <div>
            <div className="text-muted-foreground text-xs">Mental</div>
            <Progress className="h-2 mt-1" value={75} />
          </div>
          <div>
            <div className="text-muted-foreground text-xs">Sleep</div>
            <Progress className="h-2 mt-1" value={68} />
          </div>
          <div>
            <div className="text-muted-foreground text-xs">Nutrition</div>
            <Progress className="h-2 mt-1" value={85} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
