import React from 'react';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { Section } from './Section/section';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friends';
import { TransactionHistory } from './Transactions/transactions';

export const App = () => {
  return (
    <>

      <Section name="profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section name="statistics" title = "Upload stats">
        <Statistics
          stats={data}
        />
      </Section>

      <Section name="friends">
        <FriendList 
          friends={friends}
        />
      </Section>

      <Section name="transactions">
        <TransactionHistory
          items={transactions}
        />
      </Section>
      

      

      

      

    </>
  );
};