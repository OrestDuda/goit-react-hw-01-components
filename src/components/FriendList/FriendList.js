import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({friends})=>(
    <ul className={styles.friendList}>
        {friends.map((friend)=>
            <FriendListItem
                avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}
            />
        )}
    </ul>
);

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({

        })).isRequired,
};
export default FriendList;