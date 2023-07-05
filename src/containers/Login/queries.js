import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
query($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      name,
      userId,
      email
    }
  }`;
