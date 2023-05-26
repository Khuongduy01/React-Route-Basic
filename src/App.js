import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Categories from "./components/Categories";
import About from "./components/About";
import Program from "./components/Program";
import Kid from "./components/Kid";
import Network from "./components/Network";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          {/* http://localhost:3000/ */}
          <Route path="/" element={<Home></Home>}></Route>
          {/* http://localhost:3000/categories */}
          <Route path="/categories" element={<Categories></Categories>}>
            {/* http://localhost:3000/categories/program */}
            <Route path="program" element={<Program></Program>}></Route>
            {/* http://localhost:3000/categories/kid */}
            <Route path="kid" element={<Kid></Kid>}></Route>
            {/* http://localhost:3000/categories/network */}
            <Route path="network" element={<Network></Network>}></Route>
          </Route>
          {/* http://localhost:3000/about */}
          <Route path="/about" element={<About></About>}></Route>
          {/*đường dẫn khác*/}
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
