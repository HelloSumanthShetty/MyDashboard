import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import {useSelector} from "@/state/hook"
import Navbar from "@/components/Navbar";
import { useState } from "react";
import SideBar from "@/components/SideBar";
import { useGetUserQuery } from "@/state/api";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen,setIsSidebarOpen] = useState(true);
  const userId= useSelector((state ) => state.global.userId)
  const {data } = useGetUserQuery(userId)
  console.log(data)
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
      user={ data?.user || {}}
  isNonMobile={isNonMobile}
  drawerWidth="280px"
  isSidebarOpen={isSidebarOpen}
  setIsSidebarOpen={setIsSidebarOpen}
/>
      <Box flexGrow={1}>
        <Navbar 
        user = {data?.user || {}}
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
