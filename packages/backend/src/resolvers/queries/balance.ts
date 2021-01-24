import { QueryResolvers } from "../../gqlTypes";

export const balance: QueryResolvers["balance"] = async (
  {},
  { id },
  context
) => {
  const balance = await context.prisma.balance.findUnique({ where: { id } });
  if (!balance) throw new Error("balance not found");

  return balance;
};

export const balances: QueryResolvers["balances"] = async (
  {},
  { userId },
  context
) =>
  context.prisma.balance.findMany({
    where: { member: { some: { id: userId } } },
  });
