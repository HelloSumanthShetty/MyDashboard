import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL}),
    reducerPath : "adminApi",
    tagTypes : ["User","Products","Customers","Transactions","Geography","Sales","Admins"],
    endpoints : (build) => ({
     getUser : build.query({
        query : (id) => `api/general/user/${id}`,
        providesTags : ["User"]
     }),
     getProducts : build.query({
    query : () => `api/client/products`,
    providesTags : ["Products"]
     }) ,
     getCustomers : build.query({
        query : () => "api/client/customers",
        providesTags:["Customers"]
     }),
     getTransaction : build.query({ 
      query:({page, pageSize, search, sort}) => ({
         url:"api/client/transactions",
         method: "GET",
         params:{page: page + 1, pageSize, search : search ? search : "", sort: sort ? JSON.stringify(sort) : ""}
      }),
      providesTags:["Transactions"]
     }),
     getGeography : build.query({
      query : () =>"api/client/geography",
      providesTags : ["Geography"]
     }),
     getSales : build.query({
      query : () => 'api/sales',
      providesTags: ["Sales"]
     }),
       getAdmins: build.query({
      query: () => "api/management/admins",
      providesTags: ["Admins"],
    }),
    })
});


export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionQuery, useGetGeographyQuery,useGetSalesQuery, useGetAdminsQuery} = api