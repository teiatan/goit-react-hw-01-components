import PropTypes from 'prop-types';

export function FriendList({friends}) {
    return (
        <ul className="friend-list">
            {friends.map(({
                id, avatar, name, isOnline
            }) => {
                return (
                    <FriendListItem 
                        key = {id}
                        name = {name}
                        avatar = {avatar}
                        isOnline = {isOnline}
                    />
                );
            })}
        </ul>
    );
};

function FriendListItem({
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png", 
    name = "Anonymous", 
    isOnline = false}) {
    return (
        <li className="item">
            <span className='status {isOnline}'></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
};