import { MutationResolvers } from "../../gqlTypes";

export const createEvent: MutationResolvers["createEvent"] = async (
  {},
  { input: { amount, addedById, memo } },
  context
) => {
  const balance = await context.prisma.balance.findFirst({
    where: { member: { some: { id: addedById } } },
  });
  if (!balance) throw new Error("balance record not found");

  const newAmount = balance.amount + amount;
  await context.prisma.balance.update({
    data: { amount: newAmount },
    where: { id: balance.id },
  });

  return context.prisma.event.create({
    data: { addedBy: { connect: { id: addedById } }, amount, memo },
  });
};
