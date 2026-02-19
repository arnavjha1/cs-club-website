import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
            <Code2 className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <span className="font-bold text-sm">
            CS<span className="text-gradient">Club</span>
          </span>
        </div>
        <p className="text-xs text-muted-foreground font-mono text-center">
          © {new Date().getFullYear()} Computer Science Club · All rights reserved
        </p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#events" className="hover:text-primary transition-colors">Events</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
