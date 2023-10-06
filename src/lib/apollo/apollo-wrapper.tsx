"use client";

import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_TREEVIAH_GRAPHQL_ENDPOINT,
  });

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      let response = await (
        await fetch("http://localhost:3000/api/auth/session")
      ).json();

      let token = response?.token?.accessToken;

      console.log("Token dhjshjs", token);

      return {
        headers: {
          ...headers,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
