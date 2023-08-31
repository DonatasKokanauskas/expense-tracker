import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "el1",
      title: "New TV",
      amount: 699.99,
      date: new Date(2023, 2, 28),
    },
    {
      id: "el2",
      title: "Car Insurance",
      amount: 494.67,
      date: new Date(2023, 3, 15),
    },
    {
      id: "el3",
      title: "New Desk",
      amount: 250,
      date: new Date(2023, 4, 5),
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevValue) => [expense, ...prevValue]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
