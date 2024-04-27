import React from 'react';

const ConsumptionDateFilter = () => {
    return (
        <div>
             <div className="new-money-account-control">
                <label for="start">시작 기간</label>
                <input type="date" id="start" name="consumption-date" value="2018-07-22" min="2022-01-01" max="2024-04-27" />
                <label for="start">끝 기간</label>
                <input type="date" id="start" name="consumption-date" value="2018-07-22" min="2022-01-01" max="2024-04-27" />
            </div>
        </div>
    );
};

export default ConsumptionDateFilter;