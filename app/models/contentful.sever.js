async function apiCall(query, context) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${context.CONTENTFUL_SPACE_ID}/environments/master`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${context.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  };
  return await fetch(fetchUrl, options);
}

async function getProducts(context) {
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
  const response = await apiCall(query, context);
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
