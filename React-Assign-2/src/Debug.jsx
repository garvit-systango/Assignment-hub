import { BrowserRouter , Routes, Route, useNavigate } from "react-router-dom";
import Counter from "./components/Counter";
import DataFetcher from "./components/DataFetcher";
import Form from "./components/Form";
import CaseComponent from "./components/CaseComponent";

const Debugging = () => {

  const navigate = useNavigate();

  const handleCounterClick = () => {
    navigate('Counter')
  }
  const handleDataFetcherClick = () => {
    navigate('DataFetcher')
  }
  const handleFormClick = () => {
    navigate('Form')
  }
  const handleCaseComponentClick = () => {
    navigate('CaseComponent')
  }
  return (
    <div>
      <h1>React Debugging</h1>
      <div>
        <button onClick={handleCounterClick}>Counter</button>
        <button onClick={handleDataFetcherClick}>DataFetcher</button>
        <button onClick={handleFormClick}>Form</button>
        <button onClick={handleCaseComponentClick}>CaseComponent</button>
      </div>
      <Routes>
      <Route path="Counter" element={<Counter />}/>
      <Route path="DataFetcher" element = {<DataFetcher/>}/>
      <Route path="Form" element = {<Form/>}/>
      <Route path="CaseComponent" element = {<CaseComponent/>}/>
      </Routes>
    </div>
  );
};

export default Debugging;
