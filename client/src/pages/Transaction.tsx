import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionQuery } from "@/state/api";
import Header from "@/components/Header";
// import DataGridCustomToolbar from "@/components/DataGridCustomToolbar";

type Props = {}
const Transaction = (props: Props) => {
    const theme  = useTheme()
    const [page, setpage] = useState(0)
    const [pageSize, setpageSize] = useState(20)
    const [search, setsearch] = useState("")
    const [sort, setsort] = useState({})
 const {data, isLoading} = useGetTransactionQuery({
    page,pageSize,sort,search
 })
 console.log(data)
    return (
    <div>Transaction</div>
  )
  
}

export default Transaction