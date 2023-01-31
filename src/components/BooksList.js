import React from "react"
import { useSelector } from "react-redux"
import BookCard from "./BookCard"

const BooksList = () => {
  const { books } = useSelector((state) => state.book)
  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-3">
      {books?.map((book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  )
}

export default BooksList
