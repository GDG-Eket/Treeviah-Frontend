"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ApolloProviderWrapper } from "@/lib/apollo/apollo-wrapper";

export async function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProviderWrapper>
      <SessionProvider>{children}</SessionProvider>
    </ApolloProviderWrapper>
  );
}
