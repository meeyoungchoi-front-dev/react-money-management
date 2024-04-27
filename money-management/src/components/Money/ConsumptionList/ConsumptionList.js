import React, {useState} from 'react';
import ConsumptionItem from '../ConsumptionItem/ConsumptionItem';
import ConsumptionDateFilter from './ConsumptionDateFilter';
import ConsumptionCategoryFilter from './ConsumptionCategoryFilter';
import ConsumptionSortFilter from './ConsumptionSortFilter';

const ConsumptionList = (props) => {
    const [filteredCategory, setFilterdCategory] = useState("식음료");

    const categoryFilterChangeHandler = (filteredCategory) => {
           setFilterdCategory(filteredCategory);
    };

    // 필터 유형과 같은것만 먼저 보여준다
    const filtereConsumptionList = props.items.filter((consumptionList) => {
        return consumptionList.category === filteredCategory;
    });

    let consumptionListContent = <p>값이 없습니다</p>

    if (filtereConsumptionList.length > 0) {
        console.log("filtering후:", filtereConsumptionList);
        consumptionListContent = filtereConsumptionList.map((item) => (
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
                    <ConsumptionSortFilter/>
                    <ConsumptionDateFilter/>  
                </fieldset>
            </div>
            {filtereConsumptionList.length > 0 ?
                filtereConsumptionList.map(item => (
                    <ConsumptionItem
                        name={item.name}
                        price={item.price}
                        category={item.category}
                        date={item.date}
                        memo={item.memo}
                        buyAgainYesOrNo={item.buyAgainYesOrNo}
                    /> 
            )): <p>값이 없습니다.</p> }
        </div>
    );
};

export default ConsumptionList;