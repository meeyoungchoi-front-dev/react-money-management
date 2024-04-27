import React from 'react';
import ConsumptionItem from '../ConsumptionItem/ConsumptionItem';

const MoneyList = (props) => {
    return (
        <div className="ConsumptionList">
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