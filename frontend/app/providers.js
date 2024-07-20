"use client";

import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";
import React from "react";

export function Providers({ children }) {
  return (
    <SessionProvider session={getSession()}>
      {children}
    </SessionProvider>
  );
}