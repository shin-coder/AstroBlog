import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

console.log('Service Domain:', import.meta.env.MICROCMS_SERVICE_DOMAIN);
console.log('API Key:', import.meta.env.MICROCMS_API_KEY);

const client = createClient ({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getBlogs = async (queries: MicroCMSQueries) => {
  return await client.get({ endpoint: "blogs", queries})
}

export const getBlogDetail = async (blogId :string ,queries?: MicroCMSQueries) => {
  return await client.getListDetail({ endpoint: "blogs", contentId: blogId, queries})
}