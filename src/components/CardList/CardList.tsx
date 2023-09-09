import { useNavigate } from "react-router-dom"
import { BookCard } from "./BookCard/BookCard"
import { BookI } from "../../store/booksReducer"
import s from "./cardList.module.scss"

interface BooksItemsI {
  items: BookI[]
}

export const CardList: React.FC<BooksItemsI> = ({ items }) => {
  const navigate = useNavigate()
  return (
    <div className={s.cardListContainer}>
      {items?.map((el, index) => {
        const author = el?.volumeInfo?.authors[0] || ""
        const title = el?.volumeInfo?.title
        const imageLink = el?.volumeInfo?.imageLinks?.thumbnail
        const category = el?.volumeInfo?.categories[0] || ""
        return (
          <div
            className={s.cardWrapper}
            key={index}
            onClick={() => navigate(`/book/${el?.id}`)}>
            <BookCard
              key={el?.id}
              author={author}
              title={title}
              imageLink={imageLink ? imageLink : ""}
              category={category ? category : ""}
            />
          </div>
        )
      })}
    </div>
  )
}
