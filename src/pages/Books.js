import React, { useEffect } from "react"
import { Container, Row, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import BooksList from "../components/BooksList"
import DashboardLayout from "../components/layout/DashboardLayout"
import { getBooksAction } from "../redux/book/BookAction"

const Books = () => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.book)

  useEffect(() => {
    dispatch(getBooksAction())
  }, [dispatch])

  return (
    <DashboardLayout>
      <Container>
        <Row className="p-5">
          {isLoading && <Spinner animation="border" />}
          <BooksList />
        </Row>
      </Container>
    </DashboardLayout>
  )
}

export default Books
