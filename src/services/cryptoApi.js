import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "7a3a390a93msh4a5890e90d5ca4cp160a95jsn554bc7cc834b",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const cryptoParams = {
	referenceCurrencyUuid: "yhjMzLPhuIDl",
	timePeriod: "24h",
	"tiers[0]": "1",
	orderBy: "marketCap",
	orderDirection: "desc",
	limit: "50",
	offset: "0",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({
	url,
	headers: cryptoApiHeaders,
	params: cryptoParams,
});

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: () => createRequest("/coins"),
		}),
	}),
});

export const { useGetCryptosQuery } = cryptoApi;

// const options = {
//   method: 'GET',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
// };
