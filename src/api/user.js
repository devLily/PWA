import instance from "../lib/axios";

export const userApis = {
  login: (user) => instance.get("/login", user),
  // 회원가입 요청
};
