import s from "./bookCard.module.scss"

export interface BookCardI {
  author: string
  category: string
  title: string
  imageLink: string
}

export const BookCard: React.FC<BookCardI> = ({
  title,
  category,
  author,
  imageLink,
}) => {
  return (
    <div className={s.bookCardContainer}>
      <div className={s.bookImgContainer}>
        <img
          src={`${imageLink}`}
          alt={`${title} picture`}
          className={s.bookImg}
        />
      </div>
      <div className={s.infoContainer}>
        <p className={s.categories}>{category}</p>
        <p className={s.title}>
          {title.length > 80 ? `${title.slice(0, 80)}...` : title}
        </p>
        <p className={s.authors}>{author}</p>
      </div>
    </div>
  )
}
