import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ConsumptionForm from './components/Money/ConsumtionForm/ConsumtionForm';
import ConsumptionList from './components/Money/ConsumptionList/ConsumptionList';

function App() {

// ConsumptionList 컴포넌트로 전달하기 위한 mock data를 만들어둔다
const [consumptionList, setConsumptionList] = useState([
    {
      id: "1",
      name: "써브웨이",
      price: "23000",
      category: "식음료",
      date: "2024-03-05",
      memo: "써브웨이 맛있었다",
      buyAgainYesOrNo: "buy-again-radio",
    },
    {
      id: "2",
      name: "버거킹",
      price: "34000",
      category: "식음료",
      date: "2024-03-05",
      memo: "통새우 와퍼 댕맛",
      buyAgainYesOrNo: "buy-again-radio",
    },
    {
      id: "3",
      name: "컴포즈",
      price: "1500",
      category: "식음료",
      date: "2024-03-10",
      memo: "아메리카노 양 넘 많음",
      buyAgainYesOrNo: "buy-not-again-radio",
    },
    {
      id: "4",
      name: "교보문고",
      price: "34000",
      category: "도서",
      date: "2024-04-10",
      memo: "자바스크립트 알고리즘 샀다",
      buyAgainYesOrNo: "buy-not-again-radio",
    },
    {
      id: "5",
      name: "영풍문고",
      price: "1500",
      category: "도서",
      date: "2024-04-21",
      memo: "React 책 샀다",
      buyAgainYesOrNo: "buy-again-radio",
    },
]);

  return (
    <div className="App">
      <section>
        <ConsumptionForm/>
      </section>
      <section>
        <ConsumptionList items={consumptionList} />
      </section>  
    </div>
  );
}

export default App;
