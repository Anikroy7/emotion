import apislice from "./apiSlice";

const homesApi = apislice.injectEndpoints({
  endpoints: (builder) => ({
    getMedias: builder.query({
      query: () => "/media?populate=*",
      providesTags:['media']
    }),
    createMedia: builder.mutation({
      query: (data) => ({
        url: "/media",
        body: data,
        method:'post'
      }),
      invalidatesTags:['media']
    }),
    updateMedia: builder.mutation({
      query: ({userId, _id}) => ({
        url: `/media/${_id}`,
        body: {userId},
        method:'put'
      }),
    })
  }),
});

export const { useGetMediasQuery,useUpdateMediaMutation, useCreateMediaMutation } = homesApi;
