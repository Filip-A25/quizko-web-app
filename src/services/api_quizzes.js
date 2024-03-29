import { data } from "autoprefixer";
import { get, post, put, remove } from "./api_base";

const getAllQuizzes = async () => {
  try {
    const resp = await get("/quizzes/all");
    const data = resp.data.quizzes;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllQuizzes };
