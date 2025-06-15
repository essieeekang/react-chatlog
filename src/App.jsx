import './App.css';
import ChatEntry from './components/ChatEntry';
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
        <div><ChatEntry sender={DATA[0].sender} body={DATA[0].body} timeStamp={DATA[0].timeStamp}/></div>
      </main>
    </div>
  );
};

export default App;
