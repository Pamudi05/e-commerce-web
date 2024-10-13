import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />}/>
        <Route path="/homepage" element={<HomePage />}/>
        <Route path="/singUp" element={<SignupPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
