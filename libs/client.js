import { createClient } from "microcms-js-sdk";

export const client = createClient({
    serviceDomain: "meiji-info-blog",
    apiKey: process.env.API_KEY,
});

