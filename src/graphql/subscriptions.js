/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTimer = /* GraphQL */ `
  subscription OnCreateTimer($username: String!) {
    onCreateTimer(username: $username) {
      id
      name
      duration
      description
      username
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTimer = /* GraphQL */ `
  subscription OnUpdateTimer($username: String!) {
    onUpdateTimer(username: $username) {
      id
      name
      duration
      description
      username
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTimer = /* GraphQL */ `
  subscription OnDeleteTimer($username: String!) {
    onDeleteTimer(username: $username) {
      id
      name
      duration
      description
      username
      createdAt
      updatedAt
    }
  }
`;
