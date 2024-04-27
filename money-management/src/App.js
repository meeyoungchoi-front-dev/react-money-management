import logo from './logo.svg';
import './App.css';
import ConsumptionForm from './components/Money/ConsumtionForm/ConsumtionForm';
import MoneyList from './components/Money/MoneyList/MoneyList';

function App() {
  return (
    <div className="App">
      <section>
        <ConsumptionForm/>
      </section>
      <section>
        <MoneyList/>
      </section>  
    </div>
  );
}

export default App;
