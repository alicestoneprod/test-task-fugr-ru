import { ControlElements } from "../components/ControlElements/ControlElements"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { RootState } from "../store"
import s from "./index.module.scss"
import { CardList } from "../components/CardList/CardList"
import { useDispatch } from "react-redux"
import { fetchAppendBooks } from "../actions/books"
import { Spinner } from "../components/Spinner/Spinner"

export const Index: React.FC = () => {
  const dispatch = useDispatch()
  const books = useSelector((state: RootState) => state.books)
  const fetchQuery = useSelector((state: RootState) => state.query)
  const fetching = useSelector((state: RootState) => state.loading)
  const appendBooksHandler = () => {
    if (books) {
      const index = books.items.length
      //@ts-ignore
      dispatch(fetchAppendBooks(fetchQuery, index))
    }
  }

  return (
    <>
      <ControlElements />

      <div className={s.booksContainer}>
        {books.items.length > 0 && (
          <div className={s.totalBooks}>Found {books.totalItems} results</div>
        )}{
          //@ts-ignore
        <CardList items={books.items} key={"cardlist"} />}
        <div className={s.spinContainer}>
          {fetching && books.items.length && <Spinner />}
        </div>
        {books.totalItems >= 1 && (
          <p onClick={() => appendBooksHandler()} className={s.loadMoreText}>
            Load more...
          </p>
        )}
      </div>
    </>
  )
}
