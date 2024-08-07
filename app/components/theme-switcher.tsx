import { IconMoon, IconSun } from '@irsyadadl/paranoid'
import { Theme, useTheme } from "remix-themes"
import { Button } from '@/components/ui/button'

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()
  console.log(theme)
  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
  };

  return (
    <Button
      appearance="outline"
      size="square-petite"
      aria-label='Switch theme'
      onPress={switchTheme}
    >
      <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <IconMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
