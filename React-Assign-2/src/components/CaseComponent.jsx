import { useEffect, useState } from "react";

const CaseComponent = () => {
    const [value, setValue] = useState("Garvit");
    useEffect(() => {
        if (value === null){
            console.log(value)
        }
        else{console.log(value.toUpperCase());}
    }, [value]);
  
    return (
      <div>
        <h2>Case Component</h2>
        <button onClick={() => setValue(null)}>Set Null</button>
      </div>
    );
  };

  export default CaseComponent