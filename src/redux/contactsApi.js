import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const contactsEndpoint = 'contacts';

export const contactsApi = createApi({
  reducerPath: 'contactsReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ee6592f5521ecad5748055.mockapi.io',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getAllContacts: builder.query({
      query: () => `/${contactsEndpoint}`,
      providesTags: (result, error, id) => [{ type: 'Contact', id }],
    }),
    postContact: builder.mutation({
      query: contacts => ({
        url: `/${contactsEndpoint}`,
        method: 'POST',
        body: contacts,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({ url: `/${contactsEndpoint}/${id}`, method: 'DELETE' }),
      invalidatesTags: ['Contact'],
    }),
  }),
  refetchOnFocus: true,
});

export const {
  useGetAllContactsQuery,
  usePostContactMutation,
  useDeleteContactMutation,
} = contactsApi;
