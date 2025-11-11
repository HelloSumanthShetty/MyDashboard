import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import SideBar from "@/components/SideBar";
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSideBarOpen,setIsSideBarOpen] = useState(true);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
  isNonMobile={isNonMobile}
  drawerWidth="250px"
  isSidebarOpen={isSideBarOpen}
  setIsSidebarOpen={setIsSideBarOpen}
/>

      <Box>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
