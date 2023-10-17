import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import { hashSync, compare } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const userData = await req.json();

  const httpLink = new HttpLink({
    uri: process.env.TREEVIAH_GRAPHQL_ENDPOINT,
  });

  const authMiddleware = setContext(async (operation, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
      },
    };
  });

  const client = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
  });

  //   userData.password = hashSync(userData.password, 10);

  //   delete userData.password;

  const { data } = await client.mutate({
    mutation: gql`
      mutation RegisterUser($input: UserRegisterInput!) {
        register(registerInput: $input) {
          fullname
          email
          username
          password
        }
      }
    `,
    variables: {
      input: userData,
    },
  });

  return NextResponse.json({
    status: 200,
    data: data,
  });
}
