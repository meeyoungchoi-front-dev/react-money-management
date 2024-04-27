import React from 'react';

const ConsumptionForm = () => {
    const [objectState, setObjectState] = useState({
        name: "",
        price: "",
        category: "",
        date: new Date(),
        memo: "",
        buyAgainYesOrNo: "",
    });

    const inputTextHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            name: event.target.value,
        }));
    };

    const inputPriceHandler = (event) => {
        setObjectState((prevState) => ({
            ...prevState,
            price: event.target.value,
        }));
    };

    const selectCategoryHandler = (event) => {
        setObjectState(() => ({
            ...prevState,
            category: event.target.value,
        }));
    };

    const inputConsumtionHandler = (event) => {
        setObjectState(() => ({
            ...prevState,
            date: event.target.value,
        }));
    };

    const inputMemoHandler = (event) => {
        setObjectState(() => ({
            ...prevState,
            memo: event.target.value,
        }));
    };

    const buyAgainYesOrNoHandler = (event) => {
        setObjectState(() => ({
            ...prevState,
            buyAgainYesOrNo: event.target.value,
        }));
    };

    const buttonSubmitHandler = (event) => {
        event.preventDefault();

        getConsumtionFormData();
    }

    return (
        <div className="new-money-account">
            <form onSubmt={buttonSubmitHandler}>
                <fieldset>
                    <div className="new-money-account-controls">
                        <div className="new-money-account-control">
                            <label for="name">이름</label>
                            <input type="text" 
                                   onChange={inputTextHandler}
                                   value={objectState.name}/>
                        </div>
                        <div className="new-money-account-control">
                            <label for="price">가격</label>
                            <input type="text" 
                                   onChange={inputPriceHandler}
                                   value={objectState.price} 
                                />
                        </div>
                        <div className="new-money-account-control">
                            <label for="category">유형</label>
                            <select name="category" id="category" onChange={selectCategoryHandler}>
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
                            <input type="date" id="start" name="consumption-date" value="2018-07-22" min="2022-01-01" max="2024-04-27" onChange={inputConsumtionHandler} />
                        </div>
                        <div className="new-money-account-control">
                            <label for="memo-check">메모</label>
                            <input type="checkbox" id="memo-check" onChange={inputMemoHandler} />
                        </div>
                        <div className="new-money-account-control">
                            
                            <legend>재구매 의사</legend>
                            <label for="buy-again-radio">한다</label>
                            <input type="radio"  onChange={buyAgainYesOrNoHandler}/>
                            <label for="buy-not-again-radio">안한다</label>
                            <input type="radio" onChange={buyAgainYesOrNoHandler}/>
                        </div>
                        
                        <button type="submit">저장</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ConsumptionForm;