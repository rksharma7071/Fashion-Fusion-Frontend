import axios from "axios";

export default async function getProduct({ params }) {
  const { slug } = params;

  try {
    const response = await axios.get("http://localhost:3000/categories");
    const categories = response.data;

    for (const category of categories) {
      const product = category.mobiles.find(mobile => mobile.slug === slug);
      if (product) {
        return {
          category: {
            id: category.id,
            name: category.name,
            slug: category.slug,
          },
          product,
        };
      }
    }

    throw new Response("Product not found", {
      status: 404,
      statusText: "Not Found",
    });

  } catch (error) {
    throw new Response(`Failed to retrieve product: ${error.message}`, {
      status: 500,
    });
  }
}
