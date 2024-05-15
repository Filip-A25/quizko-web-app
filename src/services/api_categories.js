import { get, post, put, remove, getJSON, postJSON } from "./API_Base";

const getAllCategories = async () => {
  try {
    const response = await getJSON("/categories");
    return response.data.categories;
  } catch (err) {
    throw new Error(err);
  }
}

const getCategory = async (categoryId) => {
  try {
    const resp = await getJSON(`/categories/${categoryId}`);
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

const createNewCategory = async (data) => {
  try {
    const response = await postJSON("/categories", data);
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}

export { getAllCategories, getCategory, createNewCategory };
