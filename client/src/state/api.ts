import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_REACT_APP_BASE_URL}),
    reducerPath : "adminApi",
    tagTypes : ["User","Products","Customers","Transactions"],
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
         params:{page: page + 1, pageSize, search : search ? search : "", sort: sort?.length ? JSON.stringify(sort[0]) : null }
      }),
      providesTags:["Transactions"]
     })
    })
});


export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery, useGetTransactionQuery} = api