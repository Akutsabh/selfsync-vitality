
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Award, Dumbbell } from "lucide-react";
import { Certificate } from "@/components/dashboard/Certificate";

interface Badge {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface RewardsContentProps {
  badges: Badge[];
}

export function RewardsContent({ badges }: RewardsContentProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <CardTitle>Your Achievements</CardTitle>
        <CardDescription>Badges and rewards you've earned on your wellness journey</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center rounded-lg border bg-card p-4 text-center"
            >
              <div className="mb-3 rounded-full border-4 border-muted bg-background p-2">
                {badge.icon}
              </div>
              <h3 className="text-base font-semibold">{badge.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Your Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Total Wellness Points</span>
                    <span className="text-sm font-medium">1,250 / 5,000</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Next Reward</span>
                    <span className="text-sm font-medium">75 points to go</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div className="pt-4">
                  <h4 className="font-medium mb-2">Upcoming Achievements</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm">Consistency Champion</p>
                        <p className="text-xs text-muted-foreground">Log in for 14 consecutive days</p>
                      </div>
                      <div className="ml-auto text-xs">3 days to go</div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Dumbbell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-sm">Fitness Fanatic</p>
                        <p className="text-xs text-muted-foreground">Complete 20 workouts</p>
                      </div>
                      <div className="ml-auto text-xs">8 more needed</div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Certificate streakDays={5} requiredDays={7} wellnessPoints={1250} />
      </CardContent>
    </Card>
  );
}
