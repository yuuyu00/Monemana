import { BalanceResolvers } from "../../gqlTypes";

export const Balance: BalanceResolvers = {
  member: async (parent, _, context) => {
    const users = await context.prisma.user.findMany({
      where: { balanceId: parent.id },
    });

    return users;
  },
};
