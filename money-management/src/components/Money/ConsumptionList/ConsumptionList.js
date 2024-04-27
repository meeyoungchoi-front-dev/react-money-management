import React from 'react';
import ConsumptionItem from '../ConsumptionItem/ConsumptionItem';
import ConsumptionDateFilter from './ConsumptionDateFilter';
import ConsumptionCategoryFilter from './ConsumptionCategoryFilter';
import ConsumptionSortFilter from './ConsumptionSortFilter';

const MoneyList = (props) => {
    return (
        <div className="ConsumptionList">
            <div className="FilterList">
                <fieldset>
                    <ConsumptionCategoryFilter/>
                    <ConsumptionSortFilter/>
                    <ConsumptionDateFilter/>  
                </fieldset>
            </div>
            {props.items.map(item => (
                 <ConsumptionItem
                    name={item.name}
                    price={item.price}
                    category={item.category}
                    date={item.date}
                    memo={item.memo}
                    buyAgainYesOrNo={item.buyAgainYesOrNo}
                 /> 
            ))}
        </div>
    );
};

export default MoneyList;