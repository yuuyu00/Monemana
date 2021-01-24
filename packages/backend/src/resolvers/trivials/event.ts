import { EventResolvers } from "../../gqlTypes";

export const Event: EventResolvers = {
  addedBy: async (parent, _, context) => {
    const addedBy = await context.prisma.user.findUnique({
      where: { id: parent.addedById },
    });
    if (addedBy === null) throw new Error("addedBy is null");

    return addedBy;
  },
};
