import React, {useState} from 'react';

const ConsumptionSortFilter = ( props) => {
    const [sortedCategory, setSortedCategory] = useState("최신 순");
    let filterConsumptionList = props.items;
    const sortFilterChangeHandler = (event) => {
        console.log("정렬 필터링:", event.target.value);
        setSortedCategory(sortedCategory);

        console.log("filterConsumptionList:", filterConsumptionList);
        // 여기서 최신 순으로 정렬을 하고
        // 정렬기준과 같은것만 먼저 보여준다
    
        props.onChangeFilter(filterConsumptionList.sort((a, b) => new Date(b.date) - new Date(a.date)));
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