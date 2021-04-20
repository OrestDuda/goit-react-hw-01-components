import React from 'react';
import PropTypes from 'prop-types';
import placeholder from '../../placeholder.png';
import styles from "../FriendListItem/FriendListItem.module.css";

const FriendListItem = ({avatar, name, isOnline, id})=>{
return (
    <li className={styles.item} key={id}>
        <span className={styles.status} style={{backgroundColor: isOnline ? 'green' : 'red'}}/>
        <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>);

};
FriendListItem.defaultProps = {
    avatar: placeholder,
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.oneOf([true, false]),
}

export default FriendListItem;