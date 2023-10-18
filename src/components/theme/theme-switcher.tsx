import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Icons from "@/components/icons"

export default function ThemeSwitcher() {

  const { theme, setTheme } = useTheme()

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
    >
      <Icons.light className="dark:hidden" />
      <Icons.dark className="hidden dark:block" />
    </Button>
  )
}