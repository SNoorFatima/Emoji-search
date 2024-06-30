import React from 'react';
import '../App.css';

const EmojiItem = ({ emoji }) => {
  return (
    <div className="emoji-item">
      <span className="emoji-symbol">{emoji.symbol}</span>
      <span className="emoji-message">{emoji.message}</span>
    </div>
  );
};

export default EmojiItem;
