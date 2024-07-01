import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmojiList from './components/EmojiList';
import Footer from './components/Footer';
import { emojiList } from './emojiData';
import './App.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmojis, setFilteredEmojis] = useState(emojiList);

  const handleSearch = () => {
    const results = emojiList.filter(emoji =>
      emoji.message.includes(searchQuery)
    );
    setFilteredEmojis(results);
  };

  return (
    <div className="app">
      <Header />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <EmojiList emojis={filteredEmojis} />
      
      <Footer />
    </div>
  );
};

export default App;
