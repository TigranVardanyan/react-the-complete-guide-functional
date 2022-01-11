import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = ( props ) => {
  const [formsCondition, setFormCondition] = useState(false)
  const saveExpenseDataHandler = ( enteredExpenseData ) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }
  const buttonHandler = () => {
    setFormCondition(!formsCondition);
  }
  return (
    <div className={"new-expense"}>
      {formsCondition === false && <button onClick={buttonHandler}>Add New Expense</button>}
      {formsCondition === true &&
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButtonClick={buttonHandler}/>}
    </div>
  )
}
export default NewExpense