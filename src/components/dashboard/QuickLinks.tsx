
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { MessageSquare, GamepadIcon, Sparkles, Award } from "lucide-react";

export function QuickLinks() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Link to="/chat">
        <Card className="relative border-none p-4 h-20 flex items-center bg-primary/10 group hover:bg-primary/20 transition-colors">
          <div className="flex items-center gap-3">
            <MessageSquare className="h-6 w-6 text-primary" />
            <span className="font-medium">AI Chat</span>
          </div>
        </Card>
      </Link>
      
      <Link to="/dashboard?tab=games">
        <Card className="relative border-none p-4 h-20 flex items-center bg-amber-500/10 group hover:bg-amber-500/20 transition-colors">
          <div className="flex items-center gap-3">
            <GamepadIcon className="h-6 w-6 text-amber-500" />
            <span className="font-medium">Games</span>
          </div>
        </Card>
      </Link>
      
      <Link to="/mood-tracker">
        <Card className="relative border-none p-4 h-20 flex items-center bg-yellow-500/10 group hover:bg-yellow-500/20 transition-colors">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <span className="font-medium">Mood Log</span>
          </div>
        </Card>
      </Link>
      
      <Link to="/dashboard?tab=rewards">
        <Card className="relative border-none p-4 h-20 flex items-center bg-purple-500/10 group hover:bg-purple-500/20 transition-colors">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-purple-500" />
            <span className="font-medium">Rewards</span>
          </div>
        </Card>
      </Link>
    </div>
  );
}
