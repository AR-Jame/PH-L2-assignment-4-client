import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ['books', 'borrow'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: (props) => `/api/books?limit=${props?.limit}`,
            providesTags: ['books'],
        }),
        getSingleBook: builder.query({
            query: (_id) => `/api/books/${_id}`
        }),
        addNewBook: builder.mutation({
            query: (body) => ({
                url: '/api/books',
                method: 'POST',
                body: body,
            }),
            invalidatesTags: ['books']
        }),
        updateBook: builder.mutation({
            query: ({ _id, updatedDoc }) => ({
                url: `/api/books/${_id}`,
                method: "PUT",
                body: updatedDoc
            }),
            invalidatesTags: ['books']
        }),
        deleteBook: builder.mutation({
            query: (_id) => ({
                url: `/api/books/${_id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['books']
        }),
        // BORROW api began
        newBorrow: builder.mutation({
            query: (data) => ({
                url: '/api/borrow',
                method: "POST",
                body: data
            }),
            invalidatesTags: ['borrow']
        }),
        borrowSum: builder.query({
            query: () => '/api/borrow',
            providesTags: ['borrow']
        })
    })
})


export const {
    useAddNewBookMutation,
    useGetBooksQuery,
    useDeleteBookMutation,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useNewBorrowMutation,
    useBorrowSumQuery
} = baseApi