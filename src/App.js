
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Page/HomePage/Home/Home';
import Header from './Page/Shared/Header/Header';
// import Item from './Page/HomePage/Item/Item';
import Inventory from './Page/Inventory/Inventory';
import Login from './Page/LoginPage/Login/Login';
import Register from './Page/LoginPage/Register/Register';
import RequireAuth from './Page/LoginPage/RequireAuth/RequireAuth';
import SingleItemInventory from './Page/SingleItemInventory/SingleItemInventory';
import AddItem from './Page/AddItem/AddItem';
import ManageItems from './Page/ManageItems/ManageItems';
import Blog from './Page/Blog/Blog';
import Footer from './Page/Shared/Footer/Footer';
import NotFound from './Page/NotFound/NotFound';
import MyItem from './Page/MyItem/MyItem';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <SingleItemInventory></SingleItemInventory>
          </RequireAuth>}>
        </Route>
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>}>
        </Route>
        <Route path='/manage' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}>
        </Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register
        ></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes >
      <Footer></Footer>
    </div >
  );
}

export default App;
