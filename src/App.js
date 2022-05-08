
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/HomePage/Home/Home';
import Header from './Page/Shared/Header/Header';
// import Item from './Page/HomePage/Item/Item';
import Inventory from './Page/Inventory/Inventory';
import Login from './Page/LoginPage/Login/Login';
import Register from './Page/LoginPage/Register/Register';
import RequireAuth from './Page/LoginPage/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>}>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register
        ></Register>}></Route>

      </Routes >
    </div >
  );
}

export default App;
