import { get, post, put, remove } from "./api_base";

const getAllCategories = async () => {
  try {
    const resp = await get("/categories");
    const data = resp.data.categories;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getCategory = async (categoryId) => {
  try {
    const resp = await get(`/categories/${categoryId}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export { getAllCategories, getCategory };
