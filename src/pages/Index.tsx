
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/40 px-4">
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Welcome to SelfSync</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your all-in-one companion for wellness, self-care, and personal growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full" onClick={() => navigate("/register")}>
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="rounded-full" onClick={() => navigate("/login")}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
