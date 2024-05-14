import axios from "axios";

const BASE_URL = "https://quizko-api.onrender.com/api/v1";

const get = async (url) => {
  const headers = {
    Accept: "multipart/form-data",
    "Content-type": "multipart/form-data",
    Authorization: getToken(),
  };
  return await axios.get(`${BASE_URL}${url}`, { headers: headers });
};

const getJSON = async (url) => {
  const headers = {
    accept: "application/json",
    "Content-type": "application/json",
    authorization: getToken(),
  };
  return await axios.get(`${BASE_URL}${url}`, { headers: headers });
};

const post = async (url, data) => {
  const headers = {
    Accept: "multipart/form-data",
    "Content-type": "multipart/form-data",
    Authorization: getToken(),
  };
  return await axios.post(`${BASE_URL}${url}`, data, { headers: headers });
};

const postJSON = async (url, data) => {
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: getToken(),
  };
  return await axios.post(`${BASE_URL}${url}`, data, { headers: headers });
}

const put = async (url, data) => {
  const headers = {
    Accept: "multipart/form-data",
    "Content-type": "multipart/form-data",
    Authorization: getToken(),
  };
  return await axios.put(`${BASE_URL}${url}`, data, { headers: headers });
};

const remove = async (url) => {
  const headers = {
    Accept: "multipart/form-data",
    "Content-type": "multipart/form-data",
    Authorization: getToken(),
  };
  return await axios.delete(`${BASE_URL}${url}`, { headers: headers });
};

const patch = async (url, data) => {
  const headers = {
    Accept: "multipart/form-data",
    "Content-type": "multipart/form-data",
    Authorization: getToken(),
  };
  return await axios.patch(`${BASE_URL}${url}`, data, { headers: headers });
};

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ` + token : "";
};

export { get, post, put, remove, getToken, patch, getJSON, postJSON };
