import { Routes, Route } from "react-router-dom";
import { Counter } from "./counter";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={"Hello"}></Route>
      <Route path='/counter' element={<Counter />} />
    </Routes>
  );
};

export default App;
