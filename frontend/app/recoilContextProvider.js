"use client";

import { RecoilRoot, atom } from "recoil";
export const messageState = atom({
  key: "message",
  default: "asfds",
});

export default function RecoilContextProvider({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}