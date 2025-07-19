import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLink = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => (
    <a href={href} onClick={onClick}>
      <Button
        variant="ghost"
        className="text-base w-full justify-start text-foreground"
      >
        {label}
      </Button>
    </a>
  );

  return (
    <div className="sticky top-0 z-50 w-full bg-background border-b border-border transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#home">
          <span className="text-3xl font-bold text-foreground flex items-center gap-1 font-mono">
            <span className="text-muted-foreground font-semibold">{"("}</span>
            <ModeToggle />
            <span className="text-muted-foreground font-semibold">{")->"}</span>
            <span className="text-muted-foreground font-semibold">{""}</span>G
            <span className="text-muted-foreground font-semibold">{""}</span>
          </span>
        </a>

        <div className="hidden md:flex gap-4 text-foreground">
          <NavLink href="#home" label="Home" />
          <NavLink href="#about" label="About" />
          <NavLink href="#skills" label="Skills" />
          <NavLink href="#projects" label="Projects" />
          <NavLink href="#contact" label="Contact" />
        </div>

        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            className="text-foreground"
          >
            <Menu />
          </Button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-background border-l border-border z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(false)}
            className="text-foreground"
          >
            <X />
          </Button>
        </div>
        <div className="flex flex-col gap-2 px-6">
          <NavLink
            href="#home"
            label="Home"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            href="#about"
            label="About"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            href="#skills"
            label="Skills"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            href="#projects"
            label="Projects"
            onClick={() => setMobileMenuOpen(false)}
          />
          <NavLink
            href="#contact"
            label="Contact"
            onClick={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
