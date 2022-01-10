import './ExpenseForm.css'
import {useState} from "react";
import expenseDate from "../Expenses/ExpenseDate";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  //})
  const titleChangeHandler = ( e ) => {
    setEnteredTitle(e.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: e.target.title,
    //})
    //setUserInput(prevState => {
    //  return {...prevState, enteredTitle: e.target.title}
    //})
  }
  const amountChangeHandler = ( e ) => {
    setEnteredAmount(e.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmount: e.target.title,
    //})
    //setUserInput(prevState => {
    //  return {...prevState, enteredAmount: e.target.title}
    //})
  }
  const dateChangeHandler = ( e ) => {
    setEnteredDate(e.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredDate: e.target.title,
    //})
    //setUserInput(prevState => {
    //  return {...prevState, enteredDate: e.target.title}
    //})
  }
  const submitHandler = ( e ) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }
  return (
    <form onSubmit={submitHandler}>
      <div className={"new-expense__controls"}>
        <div className={"new-expense__control"}>
          <label htmlFor="">Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className={"new-expense__control"}>
          <label htmlFor="">Amount</label>
          <input type="number" value={enteredAmount} min={'0.01'} step={"0.01"} onChange={amountChangeHandler}/>
        </div>
        <div className={"new-expense__control"}>
          <label htmlFor="">Date</label>
          <input type="date" value={enteredDate} min={"2019-01-01"} max={"2022-12-31"} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className={'new-expense__actions'}>
        <button type={"submit"}>Add expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm