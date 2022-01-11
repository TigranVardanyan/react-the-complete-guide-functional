import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = ( props ) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear
  });



  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter onChangeFiter={filterChangeHandler} selected={filteredYear}/>
        {<ExpensesList items={filteredExpenses}/>}
      </Card>
    </div>

  )
}

export default Expenses