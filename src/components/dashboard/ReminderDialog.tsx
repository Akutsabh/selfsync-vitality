import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ReminderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  reminder?: {
    id: string;
    title: string;
    time: string;
    icon: React.ReactNode;
    completed: boolean;
  };
  onSave: (reminder: { title: string; time: string }) => void;
}

export function ReminderDialog({ open, onOpenChange, reminder, onSave }: ReminderDialogProps) {
  const [title, setTitle] = useState(reminder?.title || "");
  const [hours, setHours] = useState(reminder ? parseInt(reminder.time.split(":")[0]) : 9);
  const [minutes, setMinutes] = useState(reminder ? parseInt(reminder.time.split(":")[1]) : 0);

  useEffect(() => {
    if (reminder) {
      setTitle(reminder.title);
      
      const timeParts = reminder.time.split(":");
      if (timeParts.length === 2) {
        setHours(parseInt(timeParts[0]));
        setMinutes(parseInt(timeParts[1]));
      }
    } else {
      setTitle("");
      setHours(9);
      setMinutes(0);
    }
  }, [reminder, open]);

  const handleSave = () => {
    onSave({
      title,
      time: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    });
    onOpenChange(false);
    toast.success("Reminder set successfully", {
      description: `${title} scheduled for ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{reminder ? "Edit Reminder" : "New Reminder"}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Reminder Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter reminder title"
            />
          </div>
          <div className="space-y-2">
            <Label>Time - Hours ({hours}:00)</Label>
            <Slider
              value={[hours]}
              min={0}
              max={23}
              step={1}
              onValueChange={(value) => setHours(value[0])}
            />
          </div>
          <div className="space-y-2">
            <Label>Minutes ({minutes})</Label>
            <Slider
              value={[minutes]}
              min={0}
              max={59}
              step={5}
              onValueChange={(value) => setMinutes(value[0])}
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!title}>
            Save Reminder
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
