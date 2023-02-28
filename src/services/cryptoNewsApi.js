import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://newsapi.org/v2/everything";

const createRequest = (url) => ({
	url,
});

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`?q=${newsCategory}&pageSize=${count}&apiKey=a094f869549b4b41a8fdb313ba2baaf9`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
