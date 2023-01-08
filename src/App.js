import React, { useState } from "react";

function App()
{
  const [contact,setContact] = useState({
    fName : "",
    lName : "",
    mailID : ""
  });

  function handleChange(event)
  {
    const {name, value} =event.target;

    setContact((prevValue) => {
      if(name==="fName")
      {
        return {
        fName : value,
        lName : prevValue.lName,
        mailID : prevValue.mailID
        }
      }
      else if(name==="lName")
      {
        return {
        fName : prevValue.fName,
        lName : value,
        mailID : prevValue.mailID
        }
      }
      else if(name==="email")
      {
        return {
        fName : prevValue.fName,
        lName : prevValue.lName,
        mailID : value
        }
      }
    });
    
  }
  return(

    
    <div className="container">
    <h1> Hello {contact.fName} {contact.lName}</h1>
    <p>{contact.mailID}</p>
      <form>
          <input name="fName" value={contact.fName} type="text" placeholder="Your First Name" onChange={handleChange} ></input>
          <input name="lName" value={contact.lName} type="text" placeholder="Your Last Name" onChange={handleChange}></input>
          <input name="email" value={contact.mailID} type="text" placeholder="Your Email Address" onChange={handleChange}></input>

      </form>
    </div>
  )
}

export default App;
