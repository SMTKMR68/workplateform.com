import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import NewModifiedNavbar from "./Components/NewModifiedNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Product from "./Components/Product";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import Contract from "./Components/Contract";
import WrorkForce from "./Components/WrorkForce";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewModifiedNavbar />}>
            <Route index element={<Home />} />
            {/* The Home component route does not have a path but has an index attribute. 
That specifies this route as the default route for the parent route, which is /*/}
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/contract" element={<Contract />} />
            <Route path="/workforce" element={<WrorkForce />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
