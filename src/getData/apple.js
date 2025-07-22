import axios from "axios";

export async function getAppleCategory() {
  try {
    const response = await axios.get("http://localhost:3000/categories");
    const appleCategory = response.data.find(category => category.name === "Apple");
    if (!appleCategory) throw new Error("Apple category not found");
    return appleCategory;
  } catch (error) {
    throw new Error("Failed to load Apple category: " + error.message);
  }
}

export default getAppleCategory;