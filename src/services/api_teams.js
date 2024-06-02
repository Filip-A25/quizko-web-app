import { get, post, put, remove, getJSON, postJSON } from "./api_base";

const createNewTeam = async (data) => {
    try {
        const response = await postJSON("/teams/new-team", data);
        console.log(response);
        return response.data;
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

const joinQuiz = async (id) => {
    try {
        const response = await postJSON(`/teams/join-quiz/${id}`);
        console.log(response.data);
        return response.data;
    } catch(err) {
        console.log(err);
        throw new Error(err);
    }
}

export {createNewTeam, joinQuiz};