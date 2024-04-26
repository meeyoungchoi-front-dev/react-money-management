import logo from './logo.svg';
import './App.css';
import MoneyItem from './components/Money/MoneyItem/MoneyItem';
import MoneyList from './components/Money/MoneyList/MoneyList';

function App() {
  return (
    <div className="App">
      <section>
        <MoneyItem/>
      </section>
      <section>
        <MoneyList/>
      </section>  
    </div>
  );
}

export default App;
