import { get, post, put, remove, patch, getJSON, postJSON } from "./API_Base";

const getMyProfile = async () => {
  try {
    const resp = await getJSON("/users/me");
    const data = resp.data.user;
    return data;
  } catch (error) {
    console.log(error);
  }
};
const createProfile = () => {};
const editPassword = () => {};
const editNickname = () => {};
const editEmail = () => {};

const handleLogin = async (loginData) => {
  try {
    const resp = await postJSON("/users/log-in", JSON.stringify(loginData));
    console.log(resp);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export {
  getMyProfile,
  createProfile,
  editPassword,
  editNickname,
  editEmail,
  handleLogin,
};
