
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { HealthQuiz } from "@/components/landing/HealthQuiz";
import { WellnessMemoryGame } from "@/components/games/WellnessMemoryGame";
import { BrainCircuitIcon, GamepadIcon } from "lucide-react";

export function GamesContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuitIcon className="h-5 w-5 text-purple-500" />
            Health Quiz
          </CardTitle>
          <CardDescription>Test your knowledge about health and wellness</CardDescription>
        </CardHeader>
        <CardContent>
          <HealthQuiz />
        </CardContent>
      </Card>
      
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GamepadIcon className="h-5 w-5 text-amber-500" />
            Wellness Memory Game
          </CardTitle>
          <CardDescription>Improve your memory while learning about wellness</CardDescription>
        </CardHeader>
        <CardContent>
          <WellnessMemoryGame />
        </CardContent>
      </Card>
    </div>
  );
}
