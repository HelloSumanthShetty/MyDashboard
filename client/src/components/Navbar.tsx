import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "@/components/FlexComponents";
import { useDispatch } from "react-redux";
// import { setMode } from "@/state/hook";
import profileImage from "assets/profile.jpeg";
import {AppBar, Toolbar, useTheme } from "@mui/material";

type Props = {}

const Navbar = (props: Props) => {
 const dispatch = useDispatch();
 const theme = useTheme();  
return (
    <AppBar sx={
        {
            position : "static",
            background : "none",
            boxShadow : "none"
        }
    }>
 <Toolbar sx={{justifyContent : "space-between"}}> 
 </Toolbar>
    </AppBar> 
    
  )
}

export default Navbar