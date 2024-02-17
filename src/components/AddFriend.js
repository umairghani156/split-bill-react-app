import { useState } from "react";

export const AddFriend = ({setAddFriend, cardsData ,setCardsData }) => {
    const [addUserName, setUserName] = useState("");
    const [addImgURL, setImgURL] = useState("");
    const addFriendshandler = () => {
        const cardsDataAdding = [...cardsData];
        cardsDataAdding.push({
          userImg: addImgURL,
          userName: addUserName,
          desc: "",
          price: 20,
          isActive: false
        })
        setAddFriend(false)
        setCardsData(cardsDataAdding)

      }

    return(
        <div style={{padding:"15px", backgroundColor:"#fcf2e0",width:"85%", height:"100px", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
        <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>👫 Friend name</label>
        <input onChange={(e) => setUserName(e.target.value)}  style={{width:"120px", padding:"3px 4px"}} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"space-between"}}>
        <label>🖼️ Image URL</label>
        <input onChange={(e) => setImgURL(e.target.value)}  style={{width:"120px", padding:"3px 4px"}} type="text" />
      </div>
      <div style={{display:'flex', justifyContent:"flex-end"}}>
      <button onClick={() => addFriendshandler()} style={{backgroundColor:"#fd9e40", width:"132px", border:"none", padding:"4px 0", cursor:'pointer'}}>Add</button>
      </div>
      </div>
    )
}