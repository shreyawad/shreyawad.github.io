import { useState, useEffect } from "react";
import { Dialog } from "@/components/ui/dialog";

export const ExitPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) setShowPopup(true);
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Before You Go...</DialogTitle>
          <DialogDescription>
            Book your free consultation now and take the first step towards pain-free movement.
          </DialogDescription>
        </DialogHeader>
        <Button asChild>
          <a href="https://calendar.app.google/N9GAaTqSHfVA61qUA">
            Book Now
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
}; 