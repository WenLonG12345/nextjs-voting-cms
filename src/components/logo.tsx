import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return <img src="/logo.svg" alt="logo" className={className} />;
};
