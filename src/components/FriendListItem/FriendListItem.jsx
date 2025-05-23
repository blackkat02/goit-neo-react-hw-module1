import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.item}>
    <span className={clsx(styles.status, {
      [styles.online]: isOnline,
      [styles.offline]: !isOnline
    })}></span>
    <img 
      className={styles.avatar} 
      src={avatar} 
      alt={`${name}'s avatar`} 
      width="48" 
    />
    <div className={styles.info}>
      <p className={styles.name}>{name}</p>
      <p className={clsx(styles.statusText, {
        [styles.online]: isOnline,
        [styles.offline]: !isOnline
      })}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;