/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTimer = /* GraphQL */ `
  mutation CreateTimer(
    $input: CreateTimerInput!
    $condition: ModelTimerConditionInput
  ) {
    createTimer(input: $input, condition: $condition) {
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
export const updateTimer = /* GraphQL */ `
  mutation UpdateTimer(
    $input: UpdateTimerInput!
    $condition: ModelTimerConditionInput
  ) {
    updateTimer(input: $input, condition: $condition) {
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
export const deleteTimer = /* GraphQL */ `
  mutation DeleteTimer(
    $input: DeleteTimerInput!
    $condition: ModelTimerConditionInput
  ) {
    deleteTimer(input: $input, condition: $condition) {
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
