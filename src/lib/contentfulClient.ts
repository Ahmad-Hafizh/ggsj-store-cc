import { createClient } from "contentful";
const contentfulClient = createClient({
  accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN || "",
  space: process.env.NEXT_PUBLIC_SPACE_ID || "",
});

export default contentfulClient;
