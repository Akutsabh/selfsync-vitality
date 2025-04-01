
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Layout } from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, 
  BookText, 
  Bell, 
  Moon, 
  Award,
  RefreshCw
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/Logo";

const Index = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  // If user is authenticated, redirect to dashboard
  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/40">
      {/* Header with navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#dashboard" 
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                >
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#journal" 
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                >
                  <BookText className="mr-2 h-4 w-4" />
                  Journal
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#reminders" 
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                >
                  <Bell className="mr-2 h-4 w-4" />
                  Reminders
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#relax" 
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                >
                  <Moon className="mr-2 h-4 w-4" />
                  Relax
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#achievements" 
                  className={navigationMenuTriggerStyle()}
                  onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Achievements
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button onClick={() => navigate("/login")} variant="default">Sign In</Button>
          </div>
        </div>
      </header>
      
      {/* Main content area */}
      <main className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-8">
            {/* Mood Tracking Section */}
            <section>
              <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Moods grid */}
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">😊</div>
                  <div className="text-sm font-medium">Happy</div>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">😌</div>
                  <div className="text-sm font-medium">Calm</div>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">😨</div>
                  <div className="text-sm font-medium">Anxious</div>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">😔</div>
                  <div className="text-sm font-medium">Sad</div>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="text-sm font-medium">Energetic</div>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/20 transition-colors border-none bg-black/30 text-white">
                  <div className="text-4xl mb-2">😴</div>
                  <div className="text-sm font-medium">Tired</div>
                </Card>
              </div>
            </section>
            
            {/* Daily Habits Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Daily Habits</h2>
                <Button variant="ghost" size="sm">
                  <span>Add</span>
                  <span className="ml-1">+</span>
                </Button>
              </div>
              <div className="text-sm text-muted-foreground mb-4">0% completed today</div>
              <Card className="bg-black/30 border-none">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-2 border-primary" />
                        <span className="text-white">Drink water</span>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-2 border-primary" />
                        <span className="text-white">Meditate</span>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-5 w-5 rounded-full border-2 border-primary" />
                        <span className="text-white">Exercise</span>
                      </div>
                      <Button variant="ghost" size="icon" className="text-white">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          
          {/* Right column */}
          <div>
            <Card className="bg-black/30 border-none text-white h-80">
              <CardHeader className="text-center">
                <CardTitle className="text-xl">Daily Affirmation</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center h-48">
                <blockquote className="text-xl italic text-center">
                  "I welcome peace into my mind and body."
                </blockquote>
                <Button variant="outline" size="sm" className="mt-6 border-white text-white hover:text-black hover:bg-white">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  New Affirmation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Track your moods, build healthy habits, and improve your well-being with SelfSync.
          </p>
          <Button size="lg" className="rounded-full" onClick={() => navigate("/register")}>
            Get Started
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Index;
