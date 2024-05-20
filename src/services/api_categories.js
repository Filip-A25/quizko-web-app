import { get, post, put, remove, getJSON, postJSON } from "./api_base";

const getAllCategories = async () => {
  try {
    const response = await getJSON("/categories");
    return response.data.categories;
  } catch (err) {
    throw new Error(err);
  }
};

const getUserCategories = async () => {
  try {
    const response = await get("/categories/my-categories");
    return response.data.namedCategories;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const getCategory = async (categoryId) => {
  try {
    const resp = await getJSON(`/categories/${categoryId}`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

const createNewCategory = async (data) => {
  try {
    const response = await postJSON("/categories", data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { getAllCategories, getCategory, createNewCategory, getUserCategories };
