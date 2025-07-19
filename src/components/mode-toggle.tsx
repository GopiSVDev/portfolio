import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="text-gray-500 w-[15px] h-[15px]"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
