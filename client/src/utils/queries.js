import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query Query {
    users {
      _id
      email
      password
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;
