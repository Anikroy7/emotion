import apislice from "./apiSlice";

const homesApi = apislice.injectEndpoints({
  endpoints: (builder) => ({
    getMedias: builder.query({
      query: () => "/media?populate=*",
    }),
  }),
});

export const {
useGetMediasQuery

} = homesApi;
