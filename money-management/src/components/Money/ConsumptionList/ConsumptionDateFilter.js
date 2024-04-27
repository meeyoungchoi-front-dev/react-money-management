import React, {useState} from 'react';

const ConsumptionDateFilter = (props) => {
   let newArray = [];
   let filterConsumptionList = props.items;
   const [dateSate, setDateState] = useState({
    consumptionStartDate: "",
    consumptionEndDate: "",
   });   

   const startDateInputHandler = (event) => {
        setDateState((prevState) => ({
            ...prevState,
            consumptionStartDate: event.target.value,
        }));
   };

   const endDateInputHandler = (event) => {
        setDateState((prevState) => ({
            ...prevState,
            consumptionEndDate: event.target.value,    
        }));
   };

   console.log("dateState:", dateSate);

    // //date가 시작일과 끝일의 범위안에 있는지 확인한다
    console.log("date:", filterConsumptionList.date); 
    console.log("dateState:", dateSate);
    console.log("filterConsumptionList:", filterConsumptionList);
    for (let i = 0; i < filterConsumptionList.length; i++) {
        if (new Date(filterConsumptionList[i].date) > new Date(dateSate.consumptionStartDate) && new Date(filterConsumptionList[i].date) < new Date(dateSate.consumptionEndDate)) {
            newArray[i] = filterConsumptionList[i];
        }
    }
    
    for (let i = 0; i < newArray.length; i++) {
        dateSate[i] = newArray[i];
    }
    console.log("dateState:",dateSate);
    props.onChangeFilter(dateSate);

    return (
        <div>
             <div className="new-money-account-control">
                <label for="start">시작 기간</label>
                <input type="date" id="start" name="consumptionStartDate" value={dateSate.consumptionStartDate} min="2022-01-01" max="2024-04-27" onChange={startDateInputHandler} />
                <label for="end">끝 기간</label>
                <input type="date" id="end" name="consumptionEndDate" value={dateSate.consumptionEndDate} min="2022-01-01" max="2024-04-27" onChange={endDateInputHandler}/>
            </div>
        </div>
    );
};

export default ConsumptionDateFilter;