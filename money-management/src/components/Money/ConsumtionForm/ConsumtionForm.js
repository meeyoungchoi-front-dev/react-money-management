import React from 'react';

const ConsumptionForm = () => {
    return (
        <div className="new-money-account">
            <form>
                <fieldset>
                    <div className="new-money-account-controls">
                        <div className="new-money-account-control">
                            <label for="name">이름</label>
                            <input type="text" id="name" name="name"/>
                        </div>
                        <div className="new-money-account-control">
                            <label for="price">가격</label>
                            <input type="text" id="price" name="price"/>
                        </div>
                        <div className="new-money-account-control">
                            <label for="category">유형</label>
                            <select name="category" id="category">
                                <option value="식음료">식음료</option>
                                <option value="도서">도서</option>
                                <option value="옷">옷</option>
                                <option value="병원">병원</option>
                                <option value="운동">운동</option>
                                <option value="여행">여행</option>
                                <option value="여가">여가</option>
                            </select>
                        </div>
                        <div className="new-money-account-control">
                            <label for="start">구입 날짜</label>
                            <input type="date" id="start" name="consumption-date" value="2018-07-22" min="2022-01-01" max="2024-04-27" />
                        </div>
                        <div className="new-money-account-control">
                            <label for="memo-check">메모</label>
                            <input type="checkbox" id="memo-check" name="memo" value=""/>
                        </div>
                        <div className="new-money-account-control">
                            
                            <legend>재구매 의사</legend>
                            <label for="buy-again-radio">한다</label>
                            <input type="radio" id="buy-again-radio" name="consumption-radio" value="buy-again-radio"/>
                            <label for="buy-not-again-radio">안한다</label>
                            <input type="radio" id="buy-not-again-radio" name="consumption-radio" value="buy-not-again-radio"/>
                        </div>
                        
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ConsumptionForm;