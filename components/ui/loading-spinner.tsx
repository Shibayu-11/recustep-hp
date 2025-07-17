import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-[200px] w-full">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
    </div>
  );
}