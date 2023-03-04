import "./FormStyle.css"

import React, { useState } from 'react'

const Form = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("submit button clicked.")
    }

  return (
    <div className="form">
        <form>
            <label>Your name</label>
            <input type="text" value={name} onChange={(text)=> setName(text)}/>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=> setEmail(e)}/>
            <label>Subject</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e)}/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message here." value={message} onChange={(e)=> setMessage(e)} />
            <button className="btn" onClick={(e)=> handleSubmit(e)}>Submit</button>
        </form>
    </div>
  )
}

export default Form