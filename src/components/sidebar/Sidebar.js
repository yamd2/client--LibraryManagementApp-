import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
const Sidebar = () => {
  const { userInfo } = useSelector((state) => state.user)
  return (
    <div className="sidebar bg-info">
      <div className="top">
        <img
          src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          alt="profile-img"
        />
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/books" className="link">
              <i className="fa-solid fa-book"></i>
              <span>All Books</span>
            </Link>
          </li>

          <li>
            <Link to="/mybooks" className="link">
              <i className="fa-solid fa-book-open-reader"></i>
              <span>My Books</span>
            </Link>
          </li>

          {userInfo?.role === "teacher" && (
            <>
              <li>
                <Link to="/books/add" className="link">
                  <i className="fa-solid fa-book"></i> <span>Add Book</span>
                </Link>
              </li>
              <li>
                <Link to="/transactions" className="link">
                  <i className="fa-solid fa-left-right"></i>
                  <span>Transactions</span>
                </Link>
              </li>
            </>
          )}

          <p className="title">USER</p>
          <li>
            <Link to="/profile" className="link">
              <i className="fa-solid fa-user"></i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
