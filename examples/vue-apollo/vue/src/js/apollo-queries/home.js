import gql from 'graphql-tag';

export const hello = gql`query
{
  hello
}`;

export const tokenAuth = gql`mutation ($username: String!, $password: String!)
{
  tokenAuth(username: $username, password: $password) {
    token
    refreshToken
  }
}`;
