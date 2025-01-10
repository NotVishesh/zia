import { defineQuery } from "next-sanity";
import { sanityFetch } from "./live";

const getTrendTypesQuery = defineQuery(`
    *[_type == "trendType"] | order(imageName asc)
`);

export const getTrendTypes = async () => {
    try {
        const trendTypes = await sanityFetch({ query: getTrendTypesQuery });
        return trendTypes;
    } catch (error) {
        console.error('Error fetching trend types:', error);
        throw new Error('Could not fetch trend types');
    }
};