import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntryComponents = props.entries.map((chat) => {
    return (
      <ChatEntry
        key={chat.id}
        sender={chat.sender}
        body={chat.body}
        timeStamp={chat.timeStamp}
      />
    );
  });
  return (
    <div className="chat-log">
      {chatEntryComponents}
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired
  })).isRequired,
};

export default ChatLog;
