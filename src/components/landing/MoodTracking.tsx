
import { Card } from "@/components/ui/card";

export function MoodTracking() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
      <div className="grid grid-cols-3 gap-4">
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
  );
}
