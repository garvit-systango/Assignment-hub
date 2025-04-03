import { useState } from "react";


const Form = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    // console.log(e)
    setInput(e.target.value); // changed the setInput value from input to "e.target.value" to get the instantanious cahnges 
  };

  return (
    <div>
      <h2>Form</h2>
      <input type="text" value={input} onChange={handleChange} />
      <p>Typed: {input}</p>
    </div>
  );
};

export default Form