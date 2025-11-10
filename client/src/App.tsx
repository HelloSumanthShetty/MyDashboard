import { CssBaseline,ThemeProvider } from "@mui/material"
import {createTheme} from "@mui/material"
import { useMemo } from "react"
import { useSelector } from "@/state/hook"
import { themeSettings } from "@/theme"
import {PaletteMode} from "@mui/material"

const App = () => {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()  =>createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>App</div>
    </ThemeProvider>
  )
}

export default App