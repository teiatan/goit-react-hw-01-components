import React from 'react';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friends';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics
        stats={data}
      />

      <FriendList 
        friends={friends}
      />


    </>
  );
};