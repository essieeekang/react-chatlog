import './App.css';
import ChatLog from './components/ChatLog';
import DATA from './data/messages.json';
import { useState } from 'react';

const calculateLikedCount = (entries) => {
  let likedCount = 0;
  for (const entry of entries) {
    if (entry.liked) {
      likedCount++;
    }
  }
  return likedCount;
};

const App = () => {
  const [entries, setEntries] = useState(DATA);
  const likedCount = calculateLikedCount(entries);

  const likeEntry = (id) => {
    setEntries((entries) => {
      return entries.map((entry) => {
        if (entry.id === id) {
          return {...entry, liked: !entry.liked};
        } else {
          return entry;
        }
      });
    });
  };

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <section>
          <h2 className="widget" id="heartWidget">{likedCount} ❤️s</h2>
        </section>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatLog entries={entries} onLikeEntry={likeEntry}/>
      </main>
    </div>
  );
};

export default App;
