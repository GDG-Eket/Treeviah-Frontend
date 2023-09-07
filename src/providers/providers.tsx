"use client";

import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";

export async function Providers({ children }: { children: React.ReactNode }) {
  // const Session = await getServerSession();
  return <SessionProvider>{children}</SessionProvider>;
}
