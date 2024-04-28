import { get, post, put, remove, patch } from "./api_base";

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
const editPassword = async (passwordData) => {
  try {
    console.log("Commencing password change");
    const resp = await patch("/users/change-password", { ...passwordData });
    console.log(resp.data);
    return resp.data.status;
  } catch (error) {
    console.log(error);
  }
};
const editNickname = async (nickname) => {
  try {
    const resp = await patch("/users/update-me", nickname);
    return resp.data.status;
  } catch (error) {
    console.log(error);
  }
};

const editEmail = async (email) => {
  try {
    const resp = await patch("/users/update-me", email);
    return resp.data.status;
  } catch (error) {
    console.log(error);
  }
};

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
