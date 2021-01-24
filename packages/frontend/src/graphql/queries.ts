import { gql } from "@apollo/client";

export const EVENTS = gql`
  query events($addedById: Int) {
    events(addedById: $addedById) {
      id
      amount
      memo
    }
  }
`;
