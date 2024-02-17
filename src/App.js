import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { Cards } from './components/Cards';
import { SplitBill } from './components/SplitBalance';
function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [name , setName]  = useState("");
  const [totalBill, setTotalBill] = useState(0)
  const [myExpense, setMyExpense] = useState(0)
  const [userExpense, setUserExpense] = useState(0)
  const [payingBill, setPayingBill] = useState(0);
  const [cardsData, setCardsData] = useState([
    {
      userImg: "https://tse3.mm.bing.net/th?id=OIP.uTthCkWr5Xb9l9TuXgnxJAHaE8&pid=Api&P=0&h=220",
      userName: "Umair",
      desc: "Clear right now",
      price: 20,
      isActive: false
    },
   
  ])
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
    <div className='IsCardsParent'>
      <Cards cardsData= {cardsData} setCardsData={setCardsData} addFriend={addFriend} setAddFriend={setAddFriend} name={name} setName={setName}
      totalBill={totalBill}
      setTotalBill={setTotalBill}
      myExpense={myExpense}
      setMyExpense={setMyExpense}
      userExpense={userExpense}
      setUserExpense={setUserExpense}
      payingBill={payingBill}
      setPayingBill={setPayingBill}/>
      
    </div>
    </div>
  );
}

export default App;
