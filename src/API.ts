/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTimerInput = {
  id?: string | null,
  name: string,
  duration: number,
  description?: string | null,
  username?: string | null,
};

export type ModelTimerConditionInput = {
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTimerConditionInput | null > | null,
  or?: Array< ModelTimerConditionInput | null > | null,
  not?: ModelTimerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Timer = {
  __typename: "Timer",
  id?: string,
  name?: string,
  duration?: number,
  description?: string | null,
  username?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTimerInput = {
  id: string,
  name?: string | null,
  duration?: number | null,
  description?: string | null,
  username?: string | null,
};

export type DeleteTimerInput = {
  id?: string | null,
};

export type ModelTimerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  description?: ModelStringInput | null,
  username?: ModelStringInput | null,
  and?: Array< ModelTimerFilterInput | null > | null,
  or?: Array< ModelTimerFilterInput | null > | null,
  not?: ModelTimerFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTimerConnection = {
  __typename: "ModelTimerConnection",
  items?:  Array<Timer | null > | null,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateTimerMutationVariables = {
  input?: CreateTimerInput,
  condition?: ModelTimerConditionInput | null,
};

export type CreateTimerMutation = {
  createTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTimerMutationVariables = {
  input?: UpdateTimerInput,
  condition?: ModelTimerConditionInput | null,
};

export type UpdateTimerMutation = {
  updateTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTimerMutationVariables = {
  input?: DeleteTimerInput,
  condition?: ModelTimerConditionInput | null,
};

export type DeleteTimerMutation = {
  deleteTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTimerQueryVariables = {
  id?: string,
};

export type GetTimerQuery = {
  getTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTimersQueryVariables = {
  filter?: ModelTimerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTimersQuery = {
  listTimers?:  {
    __typename: "ModelTimerConnection",
    items?:  Array< {
      __typename: "Timer",
      id: string,
      name: string,
      duration: number,
      description?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type TimersByUsernameQueryVariables = {
  username?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelTimerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type TimersByUsernameQuery = {
  timersByUsername?:  {
    __typename: "ModelTimerConnection",
    items?:  Array< {
      __typename: "Timer",
      id: string,
      name: string,
      duration: number,
      description?: string | null,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTimerSubscriptionVariables = {
  username?: string,
};

export type OnCreateTimerSubscription = {
  onCreateTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTimerSubscriptionVariables = {
  username?: string,
};

export type OnUpdateTimerSubscription = {
  onUpdateTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTimerSubscriptionVariables = {
  username?: string,
};

export type OnDeleteTimerSubscription = {
  onDeleteTimer?:  {
    __typename: "Timer",
    id: string,
    name: string,
    duration: number,
    description?: string | null,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
