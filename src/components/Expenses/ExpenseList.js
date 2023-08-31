import ExpenseItem from "./ExpenseItem";
import "../../style/ExpenseList.css";

const ExpenseList = ({ filteredExpenses }) => {
  return (
    <ul className="expenses-list">
      {filteredExpenses.length === 0 ? (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      ) : (
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })
      )}
    </ul>
  );
};

export default ExpenseList;
