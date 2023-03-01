import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
	"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI";

const headers = {
	"X-RapidAPI-Key": "7a3a390a93msh4a5890e90d5ca4cp160a95jsn554bc7cc834b",
	"X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
};
const createRequest = (url) => ({
	url,
	headers,
});

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`?q=${newsCategory}&pageNumber=1&pageSize=${count}&autoCorrect=true`
				),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
