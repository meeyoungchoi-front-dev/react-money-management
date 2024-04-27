import React, {useState} from 'react';
import ConsumptionItem from '../ConsumptionItem/ConsumptionItem';
import ConsumptionDateFilter from './ConsumptionDateFilter';
import ConsumptionCategoryFilter from './ConsumptionCategoryFilter';
import ConsumptionSortFilter from './ConsumptionSortFilter';

const ConsumptionList = (props) => {
    const [filteredCategory, setFilterdCategory] = useState("");
    const [sortedCategory, setSortedCategory] = useState("");
    const [dateState, setDateSate] = useState("");
    const categoryFilterChangeHandler = (filteredCategory) => {
           setFilterdCategory(filteredCategory);
    };

    // 필터 유형과 같은것만 먼저 보여준다
    let filterConsumptionList = props.items.filter((consumptionList) => {
        return consumptionList.category === filteredCategory;
    });

    let consumptionListContent = <p>값이 없습니다</p>
    const consumptionSortFilterChangeHandler = (sortedCategory) => {
        setSortedCategory(sortedCategory);
        console.log("sortedCategory:", sortedCategory);        
    };

    const consumptionDateFilterChangeHandler = (dateState) => {
        setDateSate(dateState);
        console.log("dateSate:", dateState);
    };



   
    if (sortedCategory.length > 0) {
        console.log("filtering후:", sortedCategory);
        consumptionListContent = sortedCategory.map((item) => (
            <ConsumptionItem
                name={item.name}
                price={item.price}
                category={item.category}
                date={item.date}
                memo={item.memo}
                buyAgainYesOrNo={item.buyAgainYesOrNo}
            /> 
            
        ));
    } else if (filterConsumptionList.length > 0) {
        console.log("filtering후:", filterConsumptionList);
        consumptionListContent = filterConsumptionList.map((item) => (
            <ConsumptionItem
                name={item.name}
                price={item.price}
                category={item.category}
                date={item.date}
                memo={item.memo}
                buyAgainYesOrNo={item.buyAgainYesOrNo}
            /> 
        ))
    } else if (dateState.length > 0)  {
        console.log("date filtering후:", dateState);
        consumptionListContent = dateState.map((item) => (
            <ConsumptionItem
                name={item.name}
                price={item.price}
                category={item.category}
                date={item.date}
                memo={item.memo}
                buyAgainYesOrNo={item.buyAgainYesOrNo}
            /> 
        ))
    }

    return (
        <div className="ConsumptionList">
            <div className="FilterList">
                <fieldset>
                    <ConsumptionCategoryFilter 
                        selected={filteredCategory} 
                        onChangeFilter={categoryFilterChangeHandler}
                    />
                    <ConsumptionSortFilter
                         selected={sortedCategory}
                         onChangeFilter={consumptionSortFilterChangeHandler}
                         items = {filterConsumptionList}
                        />
                    <ConsumptionDateFilter selected={dateState} 
                                           onChangeFilter={consumptionDateFilterChangeHandler} 
                                           items = {filterConsumptionList}
                    />  
                </fieldset>
            </div>
            {sortedCategory.length > 0 ? 
                    sortedCategory.map((item) => (
                        <ConsumptionItem
                            name={item.name}
                            price={item.price}
                            category={item.category}
                            date={item.date}
                            memo={item.memo}
                            buyAgainYesOrNo={item.buyAgainYesOrNo}
                        /> 
                    )) :
        
            filterConsumptionList.length > 0 ?
                filterConsumptionList.map(item => (
                    <ConsumptionItem
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        date={item.date}
                        memo={item.memo}
                        buyAgainYesOrNo={item.buyAgainYesOrNo}
                    /> 
            )) : 
            dateState.length > 0 ?
                dateState.map(item => (
                    <ConsumptionItem
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        date={item.date}
                        memo={item.memo}
                        buyAgainYesOrNo={item.buyAgainYesOrNo}
                    /> 
            ))
                
                : <p>값이 없습니다</p>}
        </div>
    );
};

export default ConsumptionList;