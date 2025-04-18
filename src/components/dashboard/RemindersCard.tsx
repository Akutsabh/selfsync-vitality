
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle, Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

interface Reminder {
  id: string;
  title: string;
  time: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface RemindersCardProps {
  reminders: Reminder[];
}

export function RemindersCard({ reminders }: RemindersCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Today's Reminders
        </CardTitle>
        <CardDescription>
          Your self-care checklist for today
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reminders.slice(0, 4).map((reminder) => (
            <div
              key={reminder.id}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div className={`rounded-full p-1.5 ${reminder.completed ? "bg-primary/10 text-primary" : "bg-muted"}`}>
                {reminder.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${reminder.completed ? "line-through opacity-70" : ""}`}>
                  {reminder.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {reminder.time}
                </p>
              </div>
              <input
                type="checkbox"
                checked={reminder.completed}
                className="h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary"
                readOnly
              />
            </div>
          ))}
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link to="?tab=reminders">View all reminders</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
