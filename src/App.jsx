import './App.css';
import ChatLog from './components/ChatLog';
import DATA from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <div><ChatLog chatData={DATA}/></div>
      </main>
    </div>
  );
};

export default App;
