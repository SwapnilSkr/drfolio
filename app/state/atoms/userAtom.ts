"use client";

import { atom } from "recoil";

const userInfoLocal = localStorage.getItem("userInfo");
const userInfo = userInfoLocal ? JSON.parse(userInfoLocal) : null;

export const userAuthState = atom({
  key: "userAuthKey",
  default: {
    email: userInfo?.email || "",
    role: userInfo?.role || "",
  },
});

export const userLoadingState = atom({
  key: "userLoadingKey",
  default: false,
});

export const userErrorState = atom({
  key: "userErrorKey",
  default: "",
});
