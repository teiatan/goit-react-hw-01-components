import React from 'react';
import user from '../data/user.json';
import data from '../data/data.json';
import { Profile } from './Profile/profile';
import { StatisticsList } from './Statistics/statistics';

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

      <StatisticsList 
        data={data}
      />


      
    </>
  );
};