import { Resolvers } from "../gqlTypes";
import { user, users, balance, balances, event, events } from "./queries";
import { createEvent } from "./mutations";
import { User, Event, Balance } from "./trivials";

const Query: Resolvers["Query"] = {
  user,
  users,
  balance,
  balances,
  event,
  events,
};
const Mutation: Resolvers["Mutation"] = {
  createEvent,
};

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Event,
  Balance,
};
