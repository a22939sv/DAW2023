import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Men from "./pages/Men";

const NotFound = () => {
  return "Ha llegado a una página que no existe";
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/men" Component={Men} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
