import React from 'react';

import Layout from "./Layout/Layout";
import Profile from './Profile/Profile';
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import userData from '../user.json';
import statsData from '../statistical-data.json';
import friendsData from '../friends.json';
import transactionsData from '../transactions.json';


const App = () => {
    return (
    <Layout>
        <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
        />
        <Statistics title="Upload stats" stats={statsData}/>
        <FriendList friends={friendsData}/>
        <TransactionHistory items={transactionsData}/>
    </Layout>
    );
};

export default App;