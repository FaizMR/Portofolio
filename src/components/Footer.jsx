import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center p-2 container border-t border-solid">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear} Faiz Muhammad Rijal Fikri. All right
        reserved
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
