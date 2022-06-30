import React, { useState } from 'react'

export const Cards = (props) => {
  const [message, setMessage] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if( !message ){
      alert("Message can not be blank!");
    } else {
      props.addCard(message);
      setMessage("");
    }
    
  }
  return (
    <div>
        <h3>Daily Cards</h3>
        <p>Confirmation on delete is intentionally not given as its just a card</p>
        <div className="flex-parent">
          {props.cards.map((item)  => (
              <div className="flex-child" key={item.id}>
                 <div className='card'>
                    <button className='btn-delete' onClick={()=> {props.onDelete(item)}}>X</button>
                    <p className='card-message'> {item.message}</p>
                  </div>
              </div>
          ))}
          <div className="flex-child">
              <form onSubmit={submit}>
                  <div className='card'>
                    <p>Add New Card</p>
                    <textarea className="area-add" type="text" placeholder='Enter the message' value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    <button className='btn-add'>Add Card</button>
                  </div>
              </form>
          </div>
        </div>
    </div>
  )
}
