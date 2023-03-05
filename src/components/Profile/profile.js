import PropTypes from 'prop-types';
//import clsx from 'clsx';
import css from './profile.module.css';

export function Profile({ 
    username = 'Anonymous', 
    tag, 
    location, 
    avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
    stats}) {

    return (
    <>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ProfileStats stats={stats}/>
    </>
    );
  };

function ProfileStats({stats}) {
  return (
    <ul className={css.stats}>
        {Object.keys(stats).map((key) => {
          return (
              <li key={key} className={css.stats__item}>
                <span className={css.stats__label}>{key}</span>
                <span className={css.stats__quantity}>{stats[key]}</span>
              </li>
            );
          })}
    </ul>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

ProfileStats.propTypes = {
  stats: PropTypes.object,
};