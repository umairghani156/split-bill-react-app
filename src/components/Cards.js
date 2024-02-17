import { useState } from "react";
import { AddFriend } from "./AddFriend";
import { SplitBill } from "./SplitBalance";
import "./cards.css";
export const Cards = ({
  cardsData,
  setCardsData,
  addFriend,
  setAddFriend,
  name,
  setName,
  totalBill,
  setTotalBill,
  myExpense,
  setMyExpense,
  userExpense,
  setUserExpense,
  payingBill,
  setPayingBill,
}) => {
  const [selectSingleUser, setSelectSingleUser] = useState(false);
  console.log("setname", setName);
  return (
    <div className="cardsParent">
      <div style={{ width: "50%" }}>
        <div className="card1">
          {cardsData.map((singlecard, index) => (
            <UserCard
              singlecard={singlecard}
              ind={index}
              cardsData={cardsData}
              setCardsData={setCardsData}
              setName={setName}
              selectSingleUser={selectSingleUser}
              setSelectSingleUser={setSelectSingleUser}
              totalBill={totalBill}
              setTotalBill={setTotalBill}
              myExpense={myExpense}
              setMyExpense={setMyExpense}
              userExpense={userExpense}
              setUserExpense={setUserExpense}
              payingBill={payingBill}
              setPayingBill={setPayingBill}
            />
          ))}
        </div>
        {addFriend && (
          <AddFriend
            setAddFriend={setAddFriend}
            cardsData={cardsData}
            setCardsData={setCardsData}
            name={name}
            setName={setName}
          />
        )}

        <div
          style={{ display: "flex", width: "90%", justifyContent: "flex-end" }}
        >
          <button
            onClick={() => setAddFriend(true)}
            style={{
              padding: "7px 15px",
              margin: "10px 0",
              backgroundColor: "#fd9e40",
              border: "none",
              borderRadius: "5px",
              fontWeight: "600",
              cursor:"pointer"
            }}
          >
            {addFriend ? "Close" : "Add Friend"}
          </button>
        </div>
      </div>
      <div className="card2">
        { selectSingleUser &&
        <SplitBill
          name={name}
          setName={setName}
          cardsData={cardsData}
          setCardsData={setCardsData}
          selectSingleUser={selectSingleUser}
          setSelectSingleUser={setSelectSingleUser}
          totalBill={totalBill}
          setTotalBill={setTotalBill}
          myExpense={myExpense}
          setMyExpense={setMyExpense}
          userExpense={userExpense}
          setUserExpense={setUserExpense}
          payingBill={payingBill}
          setPayingBill={setPayingBill}
        />
}
      </div>
    </div>
  );
};

const UserCard = ({
  singlecard,
  ind,
  cardsData,
  name,
  setCardsData,
  setName,
  selectSingleUser,
  setSelectSingleUser,
  myExpense,
userExpense
}) => {
  console.log("cardsData", cardsData);
  console.log("ind", ind);
  const selectUser = (index) => {
    const convertCardData = [...cardsData];
    const check = convertCardData.find((val, index1) => index1 === index);
    console.log("check", check);
    convertCardData[ind].isActive = true;
    setCardsData(convertCardData)
    localStorage.setItem("card", JSON.stringify({ ...check, index: ind }));
    console.log("set", check.userName);
    setName(check.userName);
    setSelectSingleUser(true)
    
  };
  return (
    <div
      className="singleUser"
      style={{
        backgroundColor: selectSingleUser ? "#fcf2e0" : "#fff",
        padding: "2px 5px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            marginRight: "30px",
          }}
          src={singlecard.userImg}
          alt="userImage"
        />
        <div>
          <p
            style={{
              fontSize: "17px",
              fontWeight: "600",
              marginBottom: "2px",
              marginTop: "2px",
            }}
          >
            {singlecard.userName}
          </p>
          <p
            style={{
              fontWeight: "500",
              fontFamily: "sans-serif",
              marginBottom: "2px",
              color: myExpense < userExpense ? "red" : "black" || userExpense < myExpense ? "green" : "black",
            }}
          >
            {singlecard.desc}
          </p>
        </div>
      </div>
      <button
        onClick={() => selectUser(ind)}
        style={{
          padding: "8px 12px",
          fontWeight: "700",
          backgroundColor: "#fd9f3e",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
        }}
      >
       select
      </button>
    </div>
  );
};
