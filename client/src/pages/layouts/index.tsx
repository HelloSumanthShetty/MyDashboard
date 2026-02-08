import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import SideBar from "@/components/SideBar";
const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  console.log("Layout rendered");
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
      user={{ name: "John Doe", occupation: "Developer" }}
  isNonMobile={isNonMobile}
  drawerWidth="250px"
  isSidebarOpen={isSidebarOpen}
  setIsSidebarOpen={setIsSidebarOpen}
/>
      <Box>
        <Navbar 
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
