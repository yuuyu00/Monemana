import { QueryResolvers } from "../../gqlTypes";

export const users: QueryResolvers["users"] = ({}, { take }, context) => {
  return context.prisma.user.findMany({
    take: take || 5,
  });
};

export const user: QueryResolvers["user"] = async ({}, { id }, context) => {
  const user = await context.prisma.user.findUnique({ where: { id } });
  if (!user) throw new Error("user not found");

  return user;
};
