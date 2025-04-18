
import { Link } from "react-router-dom";
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Sparkles, BookOpen, Heart, MoonIcon } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
      <Link to="/mood-tracker" className="group">
        <Card className="border-none shadow-sm h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Mood Tracker
            </CardTitle>
            <CardDescription>Track and analyze your emotional well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Log your mood to receive personalized insights.</p>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/journal" className="group">
        <Card className="border-none shadow-sm h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-emerald-500" />
              Journal & Gratitude
            </CardTitle>
            <CardDescription>Record your thoughts and practice gratitude</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Enhance your well-being through journaling.</p>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/bmi-calculator" className="group">
        <Card className="border-none shadow-sm h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              BMI Calculator
            </CardTitle>
            <CardDescription>Check your Body Mass Index and health</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Calculate your BMI and get recommendations.</p>
          </CardContent>
        </Card>
      </Link>
      
      <Link to="/relaxation" className="group">
        <Card className="border-none shadow-sm h-full transition-all group-hover:shadow-md group-hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MoonIcon className="h-5 w-5 text-blue-500" />
              Relaxation
            </CardTitle>
            <CardDescription>Find peace with guided meditation</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Explore meditation and breathing exercises.</p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
