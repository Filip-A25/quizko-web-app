import { data } from "autoprefixer";
import { get, post, put, remove, postJSON } from "./API_Base";

const createNewQuizRound = async (id, data) => {
    try {
        const response = await postJSON(`/quizzes/${id}/new-round`, JSON.stringify(data));
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const createNewQuestionForRound = async (id, data) => {
    try {
      const response = await post(`/quizzes/new-question/${id}`, data);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

const createNewAnswerForQuestion = async (id, data) => {
    try {
        const response = await postJSON(`/quizzes/new-answer/${id}`, data);
        console.log(response);
        return response;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const getAllQuestionsFromRound = async (id) => {
    try {
        const response = await get(`/quizzes/round-questions/${id}`);
        console.log(response);
        return response;
    } catch (err) {
        throw new Error(err);
    }
}

const getRoundById = async (id) => {
    try {
        const response = await get(`/quizzes/round/${id}`);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const getQuestionById = async (id) => {
    try {
        const response = await get(`/quizzes/single-question/${id}`);
        console.log(response.data);
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
}

export {createNewQuizRound, createNewQuestionForRound, createNewAnswerForQuestion, getAllQuestionsFromRound, getRoundById, getQuestionById};