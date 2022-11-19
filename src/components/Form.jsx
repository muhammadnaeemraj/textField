import { useRef, useState } from "react";


const Form=()=>{
  const inputRef = useRef(null);
  function handleRef() {
    inputRef.current.style.color = 'red';
  }
  const [form, setForm] = useState({
    firstName: 'Muhammad',
    lastName: 'Naeem',
    Gmail: 'devsimplifypk@gmail.com'
  })

  return(
    <>
      <div className="form">
        <label>
          First Name:         
          <input type="text" ref={inputRef} onChange={(e)=>{
          setForm({
            ...form, firstName: e.target.value
          })
        }} value={form.firstName} />
        </label>
        <br />
        <label>
          Last Name: 
          <input type="text" onChange={(e)=>{
          setForm({
            ...form, lastName: e.target.value
          })
        }} value={form.lastName} />
        </label>
        <br />
        <label>
          Gmail: 
          <input type="text" onChange={(e)=>{
          setForm({
            ...form, Gmail: e.target.value
          })
        }} value={form.Gmail} />
        </label>
        <p>Confirm your identity please!</p>
        <h3>Your Name is {form.firstName} {form.lastName}.</h3>
        <h3>Your Gmail account is {form.Gmail}.</h3>
        <p>If not please reset your identity!</p>
        <button onClick={()=>{
          setForm({
            firstName: 'Muhammad',
            lastName: 'Naeem',
            Gmail: 'devsimplifypk@gmail.com'
          })
        }}>Reset</button>
        <button onClick={handleRef}>Focus</button>
      </div>
    </>
  );
}

export default Form;