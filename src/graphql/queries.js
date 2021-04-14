/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTimer = /* GraphQL */ `
  query GetTimer($id: ID!) {
    getTimer(id: $id) {
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
export const listTimers = /* GraphQL */ `
  query ListTimers(
    $filter: ModelTimerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTimers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        duration
        description
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const timersByUsername = /* GraphQL */ `
  query TimersByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelTimerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    timersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        duration
        description
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
