import { get, post, put, remove, patch, getJSON, postJSON, patchJSON } from "./api_base";

const getMyProfile = async () => {
  try {
    const resp = await getJSON("/users/me");
    const data = resp.data.user;
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
    const resp = await patchJSON("/users/update-me", nickname);
    console.log(resp);
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

const handleRegister = async (registerData) => {
  try {
    const response = await postJSON("/users/register", registerData);
    console.log(response);
    return response;
  } catch (err) {
    throw new Error(err);
  }
}

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
  editPassword,
  editNickname,
  editEmail,
  handleRegister,
  handleLogin,
};
