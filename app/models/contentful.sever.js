// import { getPlaiceholder } from "plaiceholder";

// const SPACE = process.env.CONTENTFUL_SPACE_ID;
// const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/dd0pzd2qljb2/environments/master`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer uvc8PPAMV2pE12JTfHG-a85uDcRsmNqtH1NDInWjAHI`,
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(fetchUrl, options);
}

async function getProducts() {
  const query = `
    {
        productPageCollection {
            items {
                name
                product
                productImage {
                  description
                  url
                }
                fullDetails {
                  json
                }
                link
            }
        }
    }`;
  const response = await apiCall(query);
  const json = await response.json();
  const formattedData = await json.data.productPageCollection.items.map(
    async (project) => {
      const { name, product, productImage, fullDetails, link } = project;
      return {
        name,
        product,
        description: fullDetails,
        image: productImage.url,
        link,
      };
    }
  );
  return Promise.all(formattedData);
}

export const client = {
  getProducts,
};
