import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersMidpoint = 'users';
const usersSignupEndpoint = `/${usersMidpoint}/signup`;
const usersLoginEndpoint = `/${usersMidpoint}/login`;
const usersLogoutEndpoint = `/${usersMidpoint}/logout`;
const usersCurrentEndpoint = `/${usersMidpoint}/current`;
const contactsEndpoint = 'contacts';

export const contactsApi = createApi({
  reducerPath: 'contactsReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ee6592f5521ecad5748055.mockapi.io',
  }),
  tagTypes: ['User', 'Contact'],
  endpoints: builder => ({
    signupUser: builder.mutation({
      query: credentials => ({
        url: usersSignupEndpoint,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    loginUser: builder.mutation({
      query: credentials => ({
        url: usersLoginEndpoint,
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['User'],
    }),
    logoutUser: builder.mutation({
      query: () => ({ url: usersLogoutEndpoint, method: 'POST' }),
      invalidatesTags: ['User'],
    }),
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
