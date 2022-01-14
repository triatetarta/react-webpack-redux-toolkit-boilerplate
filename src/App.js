import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./counter";

const App = () => {
  return (
    <>
      <Link to='/counter'>Counter</Link>
      <Routes>
        <Route path='/' element={"Hello"}></Route>
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </>
  );
};

export default App;
