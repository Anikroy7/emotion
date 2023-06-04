import apislice from "./apiSlice";

const userApi = apislice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url:'/user',
        body:data,
        method:'post'
      }),
    }),

    getUserByEmail: builder.query({
        query:({email})=> `user/${email}`
    })
  }),
});


export const {useCreateUserMutation, useGetUserByEmailQuery}= userApi
