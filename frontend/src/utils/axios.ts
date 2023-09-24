import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const apiGet = (path:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.get(`${baseUrl}${path}`, config);
};

export const apiPost = (path:any, data:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.post(`${baseUrl}${path}`, data, config);
};

export const apiPut = (path:any, data:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.put(`${baseUrl}${path}`, data, config);
};

export const apiPatch = (path:any, data:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.patch(`${baseUrl}${path}`, data, config);
};

export const apiDelete = (path:any) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("signature")}`,
    },
  };

  return axios.delete(`${baseUrl}${path}`, config);
};