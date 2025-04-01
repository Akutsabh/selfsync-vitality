
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import Logo from "@/components/Logo";
import { Loader2 } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login, loading, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  
  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    navigate("/dashboard");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    
    if (!email) {
      setFormError("Email is required");
      return;
    }
    
    if (!password) {
      setFormError("Password is required");
      return;
    }
    
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Layout hideNav>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/50 via-background to-muted/50">
        <div className="animate-fade-in w-full max-w-md">
          <div className="mb-8 flex justify-center">
            <Logo size="lg" />
          </div>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
              <CardDescription className="text-center">
                Sign in to your SelfSync account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md">
                    {formError}
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="#" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </Button>
                
                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account?</span>{" "}
                  <Link to="/register" className="text-primary font-medium hover:underline">
                    Sign up
                  </Link>
                </div>
                
                <div className="text-center text-xs text-muted-foreground">
                  <p>Demo credentials:</p>
                  <p>Email: demo@example.com</p>
                  <p>Password: password</p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
