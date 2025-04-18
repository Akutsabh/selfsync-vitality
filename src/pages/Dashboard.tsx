import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { ReminderDialog } from "@/components/dashboard/ReminderDialog";
import { WellnessScoreCard } from "@/components/dashboard/WellnessScoreCard";
import { RemindersCard } from "@/components/dashboard/RemindersCard";
import { StreaksCard } from "@/components/dashboard/StreaksCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { QuickLinks } from "@/components/dashboard/QuickLinks";
import { RewardsContent } from "@/components/dashboard/RewardsContent";
import { GamesContent } from "@/components/dashboard/GamesContent";
import { requestNotificationPermission, sendNotification } from "@/utils/notificationUtils";
import { Sparkles, DropletIcon, MoonIcon, HeartIcon, StretchHorizontalIcon, BrainCircuitIcon, BookOpen, Heart, Bell, Dumbbell, Pencil, Trash } from "lucide-react";

type Reminder = {
  id: string;
  title: string;
  time: string;
  icon: React.ReactNode;
  completed: boolean;
};

export default function Dashboard() {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [wellnessScore, setWellnessScore] = useState(0);
  
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    }
  }, [searchParams]);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams({ tab: value });
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWellnessScore(78);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const todayReminders = useMemo(() => [
    { id: "1", title: "Drink water", time: "Every 2 hours", icon: <DropletIcon />, completed: true },
    { id: "2", title: "Meditation", time: "9:00 AM", icon: <BrainCircuitIcon />, completed: true },
    { id: "3", title: "Stretch break", time: "11:30 AM", icon: <StretchHorizontalIcon />, completed: false },
    { id: "4", title: "Exercise", time: "5:30 PM", icon: <HeartIcon />, completed: false },
    { id: "5", title: "Sleep routine", time: "10:00 PM", icon: <MoonIcon />, completed: false },
  ], []);

  const [reminders, setReminders] = useState(todayReminders);
  const [editingReminder, setEditingReminder] = useState<Reminder | null>(null);
  const [isReminderDialogOpen, setIsReminderDialogOpen] = useState(false);
  
  const streaks = useMemo(() => [
    { activity: "Meditation", days: 12, icon: <BrainCircuitIcon className="h-5 w-5 text-purple-500" /> },
    { activity: "Hydration", days: 21, icon: <DropletIcon className="h-5 w-5 text-blue-500" /> },
    { activity: "Journaling", days: 7, icon: <BookOpen className="h-5 w-5 text-amber-500" /> },
    { activity: "Exercise", days: 5, icon: <Dumbbell className="h-5 w-5 text-green-500" /> },
  ], []);
  
  const badges = useMemo(() => [
    { id: 1, name: "Early Bird", description: "Completed morning routine 7 days in a row", icon: <Sparkles className="h-8 w-8 text-amber-500" /> },
    { id: 2, name: "Hydration Hero", description: "Met daily water intake goal for 2 weeks", icon: <DropletIcon className="h-8 w-8 text-blue-500" /> },
    { id: 3, name: "Meditation Master", description: "Completed 10 meditation sessions", icon: <BrainCircuitIcon className="h-8 w-8 text-purple-500" /> },
    { id: 4, name: "Gratitude Guru", description: "Added to gratitude journal 5 days in a row", icon: <Heart className="h-8 w-8 text-rose-500" /> },
  ], []);

  useEffect(() => {
    requestNotificationPermission();
  }, []);

  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      reminders.forEach((reminder) => {
        if (!reminder.completed) {
          const [hours, minutes] = reminder.time.split(":").map(Number);
          
          if (hours === currentHour && minutes === currentMinute) {
            sendNotification(reminder.title, {
              body: `Time for your reminder: ${reminder.title}`,
              icon: "/favicon.ico"
            });
            
            if (!document.hidden) {
              toast.info(`Time for ${reminder.title}`, {
                description: `It's ${reminder.time}`,
              });
            }
          }
        }
      });
    };

    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, [reminders]);

  const handleToggleReminder = (id: string) => {
    setReminders(prev => 
      prev.map(reminder => 
        reminder.id === id 
          ? { ...reminder, completed: !reminder.completed }
          : reminder
      )
    );
  };

  const handleEditReminder = (reminder: Reminder) => {
    setEditingReminder(reminder);
    setIsReminderDialogOpen(true);
  };

  const handleDeleteReminder = (id: string) => {
    setReminders(prev => prev.filter(reminder => reminder.id !== id));
  };

  const handleSaveReminder = (data: { title: string; time: string }) => {
    if (editingReminder) {
      setReminders(prev =>
        prev.map(reminder =>
          reminder.id === editingReminder.id
            ? { ...reminder, title: data.title, time: data.time }
            : reminder
        )
      );
    } else {
      const newReminder = {
        id: Date.now().toString(),
        title: data.title,
        time: data.time,
        icon: <Bell className="h-4 w-4" />,
        completed: false,
      };
      setReminders(prev => [...prev, newReminder]);
    }
    setEditingReminder(null);
  };

  const handleAddNewReminder = () => {
    setEditingReminder(null);
    setIsReminderDialogOpen(true);
  };

  const renderRemindersTab = () => (
    <TabsContent value="reminders" className="space-y-6">
      <Card className="border-none shadow-sm">
        <CardHeader>
          <CardTitle>Self-Care Reminders</CardTitle>
          <CardDescription>Manage your daily wellness activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                <div className={`rounded-full p-2 ${reminder.completed ? "bg-primary/10 text-primary" : "bg-muted"}`}>
                  {reminder.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`font-medium ${reminder.completed ? "line-through opacity-70" : ""}`}>
                    {reminder.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {reminder.time}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={reminder.completed}
                    onChange={() => handleToggleReminder(reminder.id)}
                    className="h-5 w-5 rounded-md border-gray-300 text-primary focus:ring-primary"
                  />
                  <Button variant="ghost" size="icon" onClick={() => handleEditReminder(reminder)}>
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => handleDeleteReminder(reminder.id)}>
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button className="w-full" onClick={handleAddNewReminder}>
              Add New Reminder
            </Button>
          </div>
        </CardContent>
      </Card>

      <ReminderDialog
        open={isReminderDialogOpen}
        onOpenChange={setIsReminderDialogOpen}
        reminder={editingReminder || undefined}
        onSave={handleSaveReminder}
      />
    </TabsContent>
  );

  return (
    <Layout>
      <div className="container py-6 md:py-8">
        <div className="flex flex-col gap-1 mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome, {user?.name?.split(" ")[0] || "Friend"}
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your wellness journey
          </p>
        </div>
        
        <Card className="border-none shadow-sm mb-6 p-4">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <blockquote className="text-sm md:text-base font-medium italic">
              "The greatest wealth is health."
            </blockquote>
            <cite className="text-xs md:text-sm font-medium not-italic text-muted-foreground">
              — Virgil
            </cite>
          </div>
        </Card>
        
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="mb-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="reminders">Reminders</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="games">Games</TabsTrigger>
          </TabsList>
          
          {activeTab === "dashboard" && (
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <WellnessScoreCard wellnessScore={wellnessScore} />
                <RemindersCard reminders={reminders} />
                <StreaksCard streaks={streaks} />
              </div>
              <QuickActions />
              <QuickLinks />
            </TabsContent>
          )}
          {activeTab === "reminders" && renderRemindersTab()}
          {activeTab === "rewards" && <TabsContent value="rewards" className="space-y-6"><RewardsContent badges={badges} /></TabsContent>}
          {activeTab === "games" && <TabsContent value="games" className="space-y-6"><GamesContent /></TabsContent>}
        </Tabs>
      </div>
    </Layout>
  );
}
