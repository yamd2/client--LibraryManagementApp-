import "./App.css"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Books from "./pages/Books"
import AddBook from "./pages/AddBook"
import MyBooks from "./pages/MyBooks"
import Transactions from "./pages/Transactions"
import Profile from "./pages/Profile"
import { useSelector } from "react-redux"

function App() {
  const { isLoggedIn } = useSelector((state) => state.user)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={isLoggedIn ? <Books /> : <Login />} />
          <Route
            path="/books/add"
            element={isLoggedIn ? <AddBook /> : <Login />}
          />
          <Route
            path="/mybooks"
            element={isLoggedIn ? <MyBooks /> : <Login />}
          />
          <Route
            path="/transactions"
            element={isLoggedIn ? <Transactions /> : <Login />}
          />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
