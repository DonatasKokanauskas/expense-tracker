import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../style/ExpenseItem.css";

const ExpenseItem = ({ title, amount, date, removeHandler }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">€{amount}</div>
          <button onClick={removeHandler} className="expense-item__button">
            X
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
