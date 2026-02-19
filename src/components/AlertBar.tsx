import { useState } from "react";
import { X, Bell } from "lucide-react";

const AlertBar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-50 bg-primary text-primary-foreground py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1 justify-center">
          <Bell className="w-4 h-4 shrink-0 animate-pulse" />
          <p className="text-sm font-medium text-center">
            <span className="font-bold">🔥 Next Event:</span>{" "}
            Intro to Python Workshop — <span className="font-semibold">Saturday, March 1st @ 2:00 PM</span>{" "}
            · Room CS-204
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="shrink-0 p-1 rounded hover:bg-primary-foreground/20 transition-colors"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AlertBar;
