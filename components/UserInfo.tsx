import React, { FC } from 'react';

type UserInfoType = {
  username: string;
};

const UserInfo : FC<UserInfoType> = ({ username }) => (
  <p className="text-right">
    You are logged in as
    {' '}
    <b>{username}</b>
  </p>
);

export default UserInfo;
