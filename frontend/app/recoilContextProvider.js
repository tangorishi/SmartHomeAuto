"use client";

import { RecoilRoot, atom } from "recoil";
export const messageState = atom({
  key: "message",
  default: "",
});

export default function RecoilContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}