import React from 'react';

const ConsumptionCategoryFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        console.log(event.target.value);
        props.onChangeFilter(event.target.value);
    };

    return (
        <div>
            <div className="new-money-account-control">
                <label for="category">유형</label>
                <select name="category" id="category" onChange={dropDownChangeHandler}>
                    <option value="식료품">식료품</option>
                    <option value="도서">도서</option>
                    <option value="옷">옷</option>
                    <option value="병원">병원</option>
                    <option value="운동">운동</option>
                    <option value="여행">여행</option>
                    <option value="여가">여가</option>
                </select>
            </div>
        </div>
    );
};

export default ConsumptionCategoryFilter;