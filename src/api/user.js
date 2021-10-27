import instance from "../lib/axios";

export const userApis = {
  login: () => instance.get(`/user/login?code=code`),
  // 소셜로그인하기
  checkLogin: () => instance.get("/user/logincheck"),
  // 로그인 체크
};

export const apis = {
  getAvatars: () => instance.get("/avatar"),
  // 아바타요청
  choiceAvatar: (avatarInfo) => instance.post("/avatars/select", avatarInfo),
  // 아바타선택
  // "avatarId" : Long,"avatarName" : "String"

  getPreset: () => instance.get("/preset"),
  // 프리셋 요청
  choicePreset: () => instance.get(`/preset/{preset_id}`),
  // 프리셋 선택
  choiceCategory: () => instance.get("/categories/{category_id}"),
  // 카테고리 선택

  getMain: () => instance.get("/"),
  // 메인페이지

  postHabit: () => instance.post("/habits"),
  // 습관 생성
  habitDetail: () => instance.get("/habits/{habit_id}"),
  // 습관 상세
  checkHabit: () => instance.patch("/habits/{habit_id}"),
  // 습관 체크
  deleteHabit: () => instance.delete("/habits/{habit_id}"),
  // 습관 삭제
};
