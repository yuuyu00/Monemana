import * as React from "react";
import { Event } from "@monemana/backend/gqlTypes";

type Props = {
  events: Event[];
};
export const Top = ({ events }: Props) => {
  return <div>{events.map((event) => JSON.stringify(event))}</div>;
};
