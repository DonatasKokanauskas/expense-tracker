import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "../../style/Expenses.css";

const Expenses = ({ expenses, setExpenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const removeHandler = (id) => {
    setExpenses(() => {
      const filteredExpenses = expenses.filter((expense) => expense.id !== id);
      localStorage.setItem("expenses", JSON.stringify(filteredExpenses));
      return filteredExpenses;
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList
          filteredExpenses={filteredExpenses}
          removeHandler={removeHandler}
        />
      </Card>
    </div>
  );
};

export default Expenses;
