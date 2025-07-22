import axios from "axios";

export default async function getCollection({ params }) {
  const { slug } = params;

  try {
    const { data: categories } = await axios.get("http://localhost:3000/categories");

    const category = categories.find((cat) => cat.slug === slug);

    if (!category) {
      throw new Response(`Category not found for slug: ${slug}`, { status: 404 });
    }

    return category;
  } catch (error) {
    throw new Response(`Failed to retrieve category: ${error.message}`, {
      status: 500,
    });
  }
}
