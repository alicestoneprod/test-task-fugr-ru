import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { BookAbout } from "./BookAbout/BookAbout"
import { useDispatch } from "react-redux"
import { fetchBookById } from "../../actions/books"
import { SpinnerBig } from "../../components/Spinner/Spinner"
import s from "./book.module.scss"

export const Book: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [currentBookID] = useState(location.pathname.split("/book/")[1])
  const fetching = useSelector((state: RootState) => state.loading)
  const dispatch = useDispatch()
  useEffect(() => {
    if (fetching === false) {
      dispatch(fetchBookById(currentBookID))
    }
  }, [])

  return (
    <div className={s.bookTitleContainer}>
      <h1 className={s.title}>Book about</h1>
      {fetching && (
        <div className={s.spinnerContainer}>
          <SpinnerBig />
          <h1 className={s.loadingText}>Getting book info...</h1>
        </div>
      )}
      {!fetching && (
        <div>
          <div className={s.bookContainer}>
            <BookAbout />
          </div>
          <button className={s.btn} onClick={() => navigate("/")}>
            Back to search
          </button>
        </div>
      )}
    </div>
  )
}
