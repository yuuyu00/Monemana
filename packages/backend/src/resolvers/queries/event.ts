import { QueryResolvers } from "../../gqlTypes";

export const events: QueryResolvers["events"] = (
  {},
  { addedById },
  context
) => {
  return addedById
    ? context.prisma.event.findMany({ where: { addedById: addedById } })
    : context.prisma.event.findMany();
};

export const event: QueryResolvers["event"] = async ({}, { id }, context) => {
  const event = await context.prisma.event.findUnique({ where: { id } });
  if (!event) throw new Error("event not found");

  return event;
};
