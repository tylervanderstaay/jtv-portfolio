import logo from './logo.svg';

import Portfolio from './components/Portfolio';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className = "Appheader">
      <h2>John Tyler VanderStaay</h2>
      <h4>Full Stack Developer</h4>
      </header>
      <main>
      <Portfolio />
      </main>
    </div>
  );
}

export default App;
