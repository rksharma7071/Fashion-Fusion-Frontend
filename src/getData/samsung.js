import axios from "axios";

export async function getSamsungCategory() {
  try {
    const response = await axios.get("http://localhost:3000/categories");
    const appleCategory = response.data.find(category => category.name === "Samsung");
    if (!appleCategory) throw new Error("Samsung category not found");
    return appleCategory;
  } catch (error) {
    throw new Error("Failed to load Samsung category: " + error.message);
  }
}

export default getSamsungCategory;