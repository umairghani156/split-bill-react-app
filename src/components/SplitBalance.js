import { useState } from "react";

export const SplitBill = ({name, setName, cardsData , setCardsData, setSelectSingleUser,totalBill, setTotalBill, myExpense, setMyExpense, userExpense, setUserExpense, payingBill, setPayingBill}) => {
  
  const localStorageData = JSON.parse(localStorage.getItem("card"))

  const splitBillHandler = () => {
       
      if(myExpense < userExpense && payingBill === localStorageData.userName){
        console.log("You owe " + localStorageData.userName + myExpense+ " PK");
        const convertIntoDuplicate = [...cardsData];
        console.log("localStorageData",localStorageData);
        const data =  convertIntoDuplicate.find((val, index) => index === localStorageData.index);
        const oweToPay = ((Number(myExpense) + Number(userExpense))-Number(totalBill)/ 2)
        console.log("data", data.desc = `You owe ${data.userName} €${oweToPay - myExpense}`);
       console.log("final", data);
       setCardsData(convertIntoDuplicate)
       console.log("cardsDta",cardsData);
       setSelectSingleUser(false)
       
      }
      else if(myExpense > userExpense && payingBill === "You"){
        console.log( localStorageData.userName +" owes $"  + myExpense);
        const convertIntoDuplicate = [...cardsData];
        console.log("localStorageData",localStorageData);
        const data =  convertIntoDuplicate.find((val, index) => index === localStorageData.index);
        const oweToPay = ((Number(myExpense) + Number(userExpense))-Number(totalBill)/ 2)
        console.log("data", data.desc = `${data.userName} owes you €${oweToPay - userExpense}`);
       console.log("final", data);
        setCardsData(convertIntoDuplicate)
        console.log("cardsDta",cardsData);
      }else if(myExpense === userExpense){
        console.log( localStorageData.userName +" owes $"  + myExpense);
        const convertIntoDuplicate = [...cardsData];
        console.log("localStorageData",localStorageData);
        const data =  convertIntoDuplicate.find((val, index) => index === localStorageData.index);
        console.log("data", data.desc = `Balance equal`);
       console.log("final", data);
        setCardsData(convertIntoDuplicate)
        console.log("cardsDta",cardsData);
      }



  }
  
  return (
    <div className="splitBillPar2">
        <h3>SPLIT A BILL WITH {name === "" ? "" : name.toUpperCase()} </h3>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>💰 Bill value</label>
        <input onChange={(e) => setTotalBill(e.target.value)} style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>🧍‍♂️ Your expense</label>
        <input onChange={(e) => setMyExpense(e.target.value)}  style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>👫 {name}'s expense</label>
        <input onChange={(e) => setUserExpense(e.target.value)}  style={{width:"80px", padding:"4px"}} type="Number" />
      </div>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
        <p>🤑 Who is paying the bill?</p>
        <select onChange={(e) => setPayingBill(e.target.value)}  style={{width:"93px" , padding:"6px 4px"}}>
            <option>You</option>
            <option>{name}</option>
        </select>
      </div>
      <div style={{display:"flex", justifyContent:"flex-end"}}>
        <button onClick={() => splitBillHandler()} style={{padding:"5px 20px",borderRadius:"4px",border:"none", fontWeight:"600", backgroundColor:"#fd9e40", cursor:"pointer"}}>Split bill</button>
      </div>
    </div>
  );
};
