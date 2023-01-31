import React from "react"
import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { borrowBookAction, deleteBookAction } from "../redux/book/BookAction"

const BookCard = ({ book, fetchBooks }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.user)

  const handleBorrow = async (bookId) => {
    if (bookId) {
      dispatch(borrowBookAction(bookId))
    }
  }

  const handleDelete = async (bookId) => {
    if (
      window.confirm(
        "Are you sure you want to delete this book from the system?"
      )
    ) {
      if (bookId) {
        dispatch(deleteBookAction(bookId))
      }
    }
  }
  return (
    <Card style={{ width: "18rem", border: "none" }}>
      <Card.Img
        src={book?.thumbnail}
        style={{ width: "50%", margin: "1rem auto" }}
      ></Card.Img>
      <Card.Body className="text-center">
        <Card.Title>{book.title}</Card.Title>
        <div className="d-flex gap-2 justify-content-center">
          <Button
            variant="info"
            onClick={() => {
              handleBorrow(book._id)
            }}
          >
            Borrow
          </Button>

          {userInfo?.role === "teacher" && (
            <Button
              variant="danger"
              onClick={() => {
                handleDelete(book._id)
              }}
            >
              Delete
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default BookCard
