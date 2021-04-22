import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../placeholder.png'
import styles from './FriendList.module.css';
import FriendListItem from "../FriendListItem/FriendListItem";
import Statistics from "../Statistics/Statistics";

const FriendList = ({friends})=>(
    <ul className={styles.friendList}>
        {friends.map((friend)=>
            <FriendListItem
                avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id}
            />
        )}
    </ul>
);

Statistics.defaultProps = {
    avatar: {placeholder},
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })).isRequired,
};
export default FriendList;