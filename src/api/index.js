import axios from "axios";

const instance = axios.create({
  baseURL: "http://15.164.79.194:1637",
});

instance.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem("token");
    // config.headers.common["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 인스턴스가 생성 된 후 기본값 변경
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const useApi = (url) => {
  const get = async () => {
    return await instance.get(url);
  };
  const create = async (value) => {
    return await instance.post(url, value);
  };
  const update = async (id, value) => {
    return await instance.put(`${url}/${id}`, value);
  };
  const remove = async (id) => {
    return instance.delete(`${url}/${id}`);
  };

  return { get, create, update, remove };
};

export { instance as restApi };
