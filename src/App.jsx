import "./App.css";
import {Outlet } from "react-router-dom";
import Header from "./Components/Header";


function App() {
  return (
    <div className="flex items-center flex-col w-full">
      <Header/>
      <Outlet />
    </div>
  );
}

export default App;
