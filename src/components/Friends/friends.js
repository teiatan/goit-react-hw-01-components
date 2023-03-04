import PropTypes from 'prop-types';

export function FriendList({friends}) {
    return (
        <ul className="friend-list">
            {friends.map(({
                id, avatar, name, isOnline
            }) => {
                return (
                    <li className="item" key = {id}>
                        <FriendListItem 
                            name = {name}
                            avatar = {avatar}
                            isOnline = {isOnline}
                        />
                    </li>
                    
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
        <>
            <span className='status {isOnline}'></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
        ]),
    })),
};

FriendListItem.propTypes = {
    avatar: PropTypes.string, 
    name: PropTypes.string, 
    isOnline: PropTypes.bool,
};