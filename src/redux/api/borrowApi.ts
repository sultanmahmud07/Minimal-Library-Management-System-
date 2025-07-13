import type { IBorrowData, IBorrowSummary } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  tagTypes: ['Borrow'],
  endpoints: (builder) => ({
    borrowBook: builder.mutation<void, IBorrowData>({
      query: (body) => ({
        url: '/borrow',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Borrow'],
    }),
    getBorrowSummary: builder.query<IBorrowSummary[], void>({
      query: () => '/borrow-summary',
      providesTags: ['Borrow'],
    }),
  }),
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
