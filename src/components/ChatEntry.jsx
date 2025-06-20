import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({id, sender, body, timeStamp, liked, onLikeEntry}) => {
  const emoji = liked ? '❤️' : '🤍';
  const entrySender = sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={`chat-entry ${entrySender}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p>{body}</p>
        <p className="entry-time"><TimeStamp time={timeStamp}/></p>
        <button className="like" onClick={() => onLikeEntry(id)}>{emoji}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  // Fill with correct proptypes
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeEntry: PropTypes.func.isRequired,
};

export default ChatEntry;
