import React from 'react';
import user from '../data/user.json';
import { Profile } from './Profile/profile';

export const App = () => {
  return (
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
  );
};