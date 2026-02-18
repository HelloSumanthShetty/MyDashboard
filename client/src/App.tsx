import { CssBaseline,ThemeProvider } from "@mui/material"
import {createTheme} from "@mui/material"
import { useMemo } from "react"
import { useSelector } from "@/state/hook"
import { themeSettings } from "@/theme"
import {PaletteMode} from "@mui/material"
import {Routes, Route} from "react-router-dom"
import Dashboard from "@/pages/Dashboard"
import Customers from "@/pages/Customers"
import Layout from "@/pages/layouts"
import Products from "./pages/products"
import Geography from "@/pages/Geography"
import Transaction from "@/pages/Transaction"
import { Navigate } from "react-router-dom"
import Overview from "./pages/overview"
const App = () => {

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(()  =>createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route  element={<Layout />} >
        <Route path="/" element={<Navigate to ="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/geography" element={< Geography/>} />
        <Route path="/overview" element={<Overview />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App