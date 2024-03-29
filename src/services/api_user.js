import { get, post, put, remove } from "./api_base";

const getMyProfile = async () => {
  try {
    const resp = await get("/users/me");
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
    const resp = await post("/users/log-in", loginData);
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
