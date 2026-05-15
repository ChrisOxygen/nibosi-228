import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin",
        className
      )}
    />
  );
}
