
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind, CheckCircle } from "lucide-react";
import { BreathingExercise as BreathingExerciseType } from "./types";
import { CheckCircle as CheckCircleIcon } from "../ui/icons";

interface BreathingExerciseProps {
  exercises: BreathingExerciseType[];
  activeExercise: BreathingExerciseType | null;
  setActiveExercise: (exercise: BreathingExerciseType | null) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  breathingSeconds: number;
  setBreathingSeconds: (seconds: number) => void;
  timerRef: React.MutableRefObject<NodeJS.Timeout | null>;
}

export function BreathingExerciseComponent({
  exercises,
  activeExercise,
  setActiveExercise,
  currentStep,
  setCurrentStep,
  breathingSeconds,
  setBreathingSeconds,
  timerRef
}: BreathingExerciseProps) {
  const startBreathingExercise = (exercise: BreathingExerciseType) => {
    setActiveExercise(exercise);
    setCurrentStep(0);
    setBreathingSeconds(exercise.steps[0].seconds);
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      setBreathingSeconds((prev) => {
        if (prev <= 1) {
          // Move to next step or loop back to beginning
          setCurrentStep((currentStep) => {
            const nextStep = (currentStep + 1) % exercise.steps.length;
            return nextStep;
          });
          return exercise.steps[(currentStep + 1) % exercise.steps.length].seconds;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopBreathingExercise = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    
    setActiveExercise(null);
    setCurrentStep(0);
    setBreathingSeconds(0);
  };

  return (
    <div className="grid gap-8 md:grid-cols-3">
      <div className="md:col-span-1 space-y-6">
        <Card className="border-none shadow-sm">
          <CardHeader>
            <CardTitle>Breathing Exercises</CardTitle>
            <CardDescription>
              Choose an exercise to reduce stress and increase mindfulness
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {exercises.map((exercise) => (
                <Button
                  key={exercise.id}
                  variant={activeExercise?.id === exercise.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => startBreathingExercise(exercise)}
                >
                  <Wind className="mr-2 h-4 w-4" />
                  {exercise.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm bg-muted/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Benefits of Mindful Breathing</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                <span>Activates the parasympathetic nervous system</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                <span>Lowers heart rate and blood pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                <span>Reduces stress hormones like cortisol</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                <span>Improves focus and emotional regulation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                <span>Helps with anxiety and panic symptoms</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="md:col-span-2">
        {activeExercise ? (
          <Card className="border-none shadow-sm h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{activeExercise.name}</CardTitle>
                  <CardDescription>{activeExercise.description}</CardDescription>
                </div>
                <Button variant="outline" size="sm" onClick={stopBreathingExercise}>
                  Stop
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <div className="relative mb-8">
                <div
                  className={`w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center ${
                    breathingSeconds > 0 ? "animate-breathe" : ""
                  }`}
                >
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">
                      {breathingSeconds}
                    </div>
                    <div className="text-muted-foreground">seconds</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center max-w-md">
                <p className="text-xl font-medium mb-2">
                  {activeExercise.steps[currentStep].instruction}
                </p>
                <p className="text-muted-foreground">
                  Step {currentStep + 1} of {activeExercise.steps.length}
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-6 w-full max-w-md">
                {activeExercise.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[400px]">
            <div className="text-center max-w-md">
              <div className="rounded-full bg-muted p-6 mb-4 inline-block">
                <Wind className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">Select a Breathing Exercise</h3>
              <p className="text-muted-foreground mb-6">
                Choose one of the breathing techniques to get started with guided practice.
              </p>
              <Button onClick={() => exercises.length > 0 && startBreathingExercise(exercises[0])}>
                Start 4-7-8 Breathing
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
