import * as React from "react";
import { useQuery } from "@apollo/client";
import { Query } from "@monemana/backend/gqlTypes";
import { EVENTS } from "../graphql/queries";
import { Top as Component } from "../pages";

export const Top = () => {
  const { data, loading } = useQuery<Query>(EVENTS);

  if (loading) return null;

  return <Component events={data.events} />;
};
