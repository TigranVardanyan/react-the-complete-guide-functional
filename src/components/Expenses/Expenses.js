import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

const Expenses = ( props ) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    console.log('Expenses.js');
    setFilteredYear(selectedYear)
  }
  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter onChangeFiter={filterChangeHandler} selected={filteredYear}/>
        {props.items.map(expense =>
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>

  )
}

export default Expenses