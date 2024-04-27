import React, {useState} from 'react';

const ConsumptionSortFilter = ( props) => {
    const [sortedCategory, setSortedCategory] = useState("");
    let filterConsumptionList = props.items;
    const sortFilterChangeHandler = (event) => {
        console.log("정렬 필터링:", event.target.value);
        let filteringValue = event.target.value;
        setSortedCategory(sortedCategory);

        console.log("filterConsumptionList:", filterConsumptionList);
        if (filteringValue === "가격 높은 순") {
            props.onChangeFilter(filterConsumptionList.sort((a, b) => b.price - a.price));     
        } else if (filteringValue === "최신 순") {
            props.onChangeFilter(filterConsumptionList.sort((a, b) => new Date(b.date) - new Date(a.date)));
        } else if (filteringValue === "가격 낮은 순"){
            props.onChangeFilter(filterConsumptionList.sort((a, b) => a.price - b.price));            
        } else if (filteringValue === "오래된 순") {
            props.onChangeFilter(filterConsumptionList.sort((a, b) => new Date(a.date) - new Date(b.date)));   
        }
    };

    return (
        <div>
            <div className="new-money-account-control">
                <label for="sortfilter">정렬기준</label>
                <select name="sortfilter" id="sortfilter" onChange={sortFilterChangeHandler}>
                    <option value="가격 높은 순">가격 높은 순</option>
                    <option value="가격 낮은 순">가격 낮은 순</option>
                    <option value="최신 순">최신 순</option>
                    <option value="오래된 순">오래된 순</option>
                </select>
            </div>
        </div>
    );
};

export default ConsumptionSortFilter;