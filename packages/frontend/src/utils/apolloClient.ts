import { ApolloClient, ApolloLink, createHttpLink } from "@apollo/client";
import { cache } from "../cache";
import { GRAPHQL_URL } from "../constants";

const httpLink = createHttpLink({
  uri: GRAPHQL_URL,
});

export const apolloClient = new ApolloClient({
  cache,
  link: ApolloLink.from([httpLink]),
});
