import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Counter } from "./counter";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={"Hello"}></Route>
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
