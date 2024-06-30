import React from 'react';
import EmojiItem from './EmojiItem';
import '../App.css';

const EmojiList = ({ emojis }) => {
  return (
    <div className="emoji-list">
    <div>
      {emojis.map((emoji, index) => (
        <EmojiItem key={index} emoji={emoji} />
      ))}
    </div>
    </div>
  );
};

export default EmojiList;
