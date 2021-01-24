import { GraphQLResolveInfo } from "graphql";
import {
  User as UserModel,
  Event as EventModel,
  Balance as BalanceModel,
} from "@prisma/client/index.d";
import { Context } from "./src/context";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Balance = {
  __typename?: "Balance";
  amount: Scalars["Int"];
  id: Scalars["Int"];
  name: Scalars["String"];
  member: Array<User>;
};

export type Query = {
  __typename?: "Query";
  balance: Balance;
  balances: Array<Balance>;
  event: Event;
  events: Array<Event>;
  node?: Maybe<Node>;
  user: User;
  users: Array<User>;
};

export type QueryBalanceArgs = {
  id: Scalars["Int"];
};

export type QueryBalancesArgs = {
  userId: Scalars["Int"];
};

export type QueryEventArgs = {
  id: Scalars["Int"];
};

export type QueryEventsArgs = {
  addedById?: Maybe<Scalars["Int"]>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["Int"];
};

export type QueryUsersArgs = {
  take?: Maybe<Scalars["Int"]>;
};

export type Event = {
  __typename?: "Event";
  addedBy: User;
  amount: Scalars["Int"];
  id: Scalars["Int"];
  memo?: Maybe<Scalars["String"]>;
};

export type CreateEventInput = {
  addedById: Scalars["Int"];
  amount: Scalars["Int"];
  memo?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  createEvent: Event;
  noop?: Maybe<NoopPayload>;
};

export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

export type MutationNoopArgs = {
  input?: Maybe<NoopInput>;
};

export type Node = {
  id: Scalars["ID"];
};

export type NoopInput = {
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type NoopPayload = {
  __typename?: "NoopPayload";
  clientMutationId?: Maybe<Scalars["String"]>;
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  events: Array<Event>;
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
  | LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
  | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Balance: ResolverTypeWrapper<BalanceModel>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Event: ResolverTypeWrapper<EventModel>;
  CreateEventInput: CreateEventInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: never;
  NoopInput: NoopInput;
  NoopPayload: ResolverTypeWrapper<NoopPayload>;
  User: ResolverTypeWrapper<UserModel>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Balance: BalanceModel;
  Int: Scalars["Int"];
  String: Scalars["String"];
  Query: {};
  ID: Scalars["ID"];
  Event: EventModel;
  CreateEventInput: CreateEventInput;
  Mutation: {};
  Node: never;
  NoopInput: NoopInput;
  NoopPayload: NoopPayload;
  User: UserModel;
  Boolean: Scalars["Boolean"];
};

export type BalanceResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Balance"] = ResolversParentTypes["Balance"]
> = {
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  member?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  balance?: Resolver<
    ResolversTypes["Balance"],
    ParentType,
    ContextType,
    RequireFields<QueryBalanceArgs, "id">
  >;
  balances?: Resolver<
    Array<ResolversTypes["Balance"]>,
    ParentType,
    ContextType,
    RequireFields<QueryBalancesArgs, "userId">
  >;
  event?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<QueryEventArgs, "id">
  >;
  events?: Resolver<
    Array<ResolversTypes["Event"]>,
    ParentType,
    ContextType,
    RequireFields<QueryEventsArgs, never>
  >;
  node?: Resolver<
    Maybe<ResolversTypes["Node"]>,
    ParentType,
    ContextType,
    RequireFields<QueryNodeArgs, "id">
  >;
  user?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
  users?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, never>
  >;
};

export type EventResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Event"] = ResolversParentTypes["Event"]
> = {
  addedBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEventArgs, "input">
  >;
  noop?: Resolver<
    Maybe<ResolversTypes["NoopPayload"]>,
    ParentType,
    ContextType,
    RequireFields<MutationNoopArgs, never>
  >;
};

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["Node"] = ResolversParentTypes["Node"]
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
};

export type NoopPayloadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["NoopPayload"] = ResolversParentTypes["NoopPayload"]
> = {
  clientMutationId?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes["Event"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Balance?: BalanceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  NoopPayload?: NoopPayloadResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
