import { BookI } from "../../../store/booksReducer"
import { RootState } from "../../../store"
import { useSelector } from "react-redux"
import s from "./BookAbout.module.scss"
export const BookAbout: React.FC = () => {
  //@ts-ignore
  const currentBook: BookI = useSelector(
    (state: RootState) => state.currentBook
  )
  return (
    <>
      <div className={s.imageContainer}>
        <img
          className={s.bookImg}
          src={`${currentBook?.volumeInfo?.imageLinks?.thumbnail}`}
          alt={`${currentBook?.volumeInfo?.title} picture`}></img>
      </div>
      <div className={s.bookInfo}>
        <p className={s.bookCategories}>
          {currentBook?.volumeInfo?.categories?.map(
            (category) => category.toString() + " "
          ) || ""}
        </p>
        <p className={s.bookTitle}>{currentBook?.volumeInfo?.title}</p>
        <p className={s.bookAuthors}>
          {currentBook?.volumeInfo?.authors?.map(
            (author) => author.toString() + " "
          ) || "Author unknown"}
        </p>
        <p className={s.descriptionTitle}>Description:</p>
        <div className={s.bookDescriptionContainer}>
          {currentBook?.volumeInfo?.description || "Description is empty"}
        </div>
      </div>
    </>
  )
}
