import './App.css';
import RegisterDriver from './Pages/Register/RegisterDriver';
import RegisterLearner from './Pages/Register/RegisterLearner';

function App() {
  return (
    <div className="App">
      <h1>Hero Rider</h1>
      <RegisterDriver></RegisterDriver>
      <RegisterLearner></RegisterLearner>
    </div>
  );
}

export default App;
