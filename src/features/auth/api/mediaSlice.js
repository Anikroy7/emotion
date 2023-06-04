import apislice from "./apiSlice";

const homesApi = apislice.injectEndpoints({
  endpoints: (builder) => ({
    getMedias: builder.query({
      query: () => "/media?populate=*",
    }),
    createMedia: builder.mutation({
      query: (data) => ({
        url: "/media",
        body: data,
        method:'post'
      }),
    }),
  }),
});

export const { useGetMediasQuery, useCreateMediaMutation } = homesApi;
