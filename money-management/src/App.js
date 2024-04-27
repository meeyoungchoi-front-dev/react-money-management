import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ConsumptionForm from './components/Money/ConsumtionForm/ConsumtionForm';
import ConsumptionList from './components/Money/ConsumptionList/ConsumptionList';

function App() {







  return (
    <div className="App">
      <section>
        <ConsumptionForm/>
      </section>
      <section>
        <ConsumptionList />
      </section>  
    </div>
  );
}

export default App;
