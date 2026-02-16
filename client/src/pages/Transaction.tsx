import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionQuery } from "@/state/api";
import Header from "@/components/Header";
import { GridSortModel, GridToolbarProps } from "@mui/x-data-grid";
 import DataGridCustomToolbar from "@/components/DataGridCustomToolbar";
 
declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    searchInput: string;
    setSearchInput: React.Dispatch<React.SetStateAction<string>>;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
  }
}

type Props = {}
const Transaction = (props: Props) => {
    const theme  = useTheme()
    const [page, setpage] = useState(0)
    const [pageSize, setpageSize] = useState(20)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState<GridSortModel>();
 const {data, isLoading} = useGetTransactionQuery({
    page,pageSize,sort,search
 })
 const [searchInput, setSearchInput] = useState("");
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 0.5,
    },
    {
      field: "userId",
      headerName: "User Id",
      flex: 0.5,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      flex: 0.5,
    },
    {
      field: "products",
      headerName: "# of products",
      flex: 0.4,
      sortable : false,
      renderCell:(params : any) =>  params.value?.length ?? 0
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 0.4,
      renderCell : (params : any) => `$${Number(params.value).toFixed(2)}`
    },
  ];
    return (
    <Box m = "1.0 rem 1.5 rem">
      <Header title="Transaction" subtitle="Entire list of transaction"/>
         <Box height={"80vh"} m="20px"  sx={{
         
        }} >
             <DataGrid
                loading={isLoading || !data}
                showToolbar
                getRowId={(row) => row._id}
                rows={data?.transactions || []}
                columns={columns}
               rowCount={data?.total ?? 0}
                pagination
                paginationModel={{ page, pageSize }}
               //  onPaginationModelChange={setPaginationModel}
                paginationMode="server"
                sortingMode="server"
                onPaginationModelChange={(newPage) => {setpage(newPage.page); setpageSize(newPage.pageSize)}}
               sortModel={sort}
                onSortModelChange={setSort}
                 slots={{
    toolbar: DataGridCustomToolbar,
  }}
                 slotProps={{
    toolbar: {
      searchInput,
      setSearchInput,
      setSearch,
    },
  }}
            />  
            </Box>
         </Box>
  )
  
}

export default Transaction