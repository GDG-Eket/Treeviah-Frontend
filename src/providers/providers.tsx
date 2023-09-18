"use client";
import React from "react";
import { getServerSession } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ApolloProviderWrapper } from "@/lib/apollo/apollo-wrapper";

export async function Providers({ children }: { children: React.ReactNode }) {
  // const Session = await getServerSession();
  return (
    <SessionProvider>
      {/* <ApolloProviderWrapper>{children}</ApolloProviderWrapper> */}
    </SessionProvider>
  );
}
