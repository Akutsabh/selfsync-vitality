
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import { 
  LayoutDashboard, 
  BookText, 
  Bell, 
  Moon, 
  Award
} from "lucide-react";

export function Header() {
  const navigate = useNavigate();
  
  return (
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
  );
}
