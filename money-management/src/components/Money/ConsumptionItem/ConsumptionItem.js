
const ConsumptionItem = (props) => {
    return (
        <div className="consumption-item">
            <div className="consuption-item-description">
                <div>{props.name}</div>
                <div>{props.price}</div>
                <div>{props.category}</div>
                <div>{props.date}</div>
                <div>{props.memo}</div>
                <div>{props.buyAgainYesOrNo}</div>
            </div>
        </div>
    );
};

export default ConsumptionItem;