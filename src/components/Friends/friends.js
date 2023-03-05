import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './friends.module.css';

export function FriendList({friends}) {
    return (
        <ul className={css.friends}>
            {friends.map(({
                id, avatar, name, isOnline
            }) => {
                return (
                    <li className={css.friends__item} key = {id}>
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
            <span className={clsx(css.friends__status, {[css["is-online"]]:isOnline,})}></span>
            <img className={css.friends__avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.friends__name}>{name}</p>
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