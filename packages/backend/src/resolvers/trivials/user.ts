import { UserResolvers } from "../../gqlTypes";

export const User: UserResolvers = {
  events: (parent, _, context) => {
    console.log("user trivials reached.");
    return context.prisma.event.findMany({ where: { addedById: parent.id } });
  },
};
