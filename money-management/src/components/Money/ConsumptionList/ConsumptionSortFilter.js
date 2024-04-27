import React from 'react';

const ConsumptionSortFilter = () => {
    return (
        <div>
            <div className="new-money-account-control">
                <label for="sortfilter">정렬기준</label>
                <select name="sortfilter" id="sortfilter">
                    <option value="식료품">가격 높은 순</option>
                    <option value="도서">가격 낮은 순</option>
                    <option value="옷">최신 순</option>
                    <option value="병원">오래된 순</option>
                </select>
            </div>
        </div>
    );
};

export default ConsumptionSortFilter;