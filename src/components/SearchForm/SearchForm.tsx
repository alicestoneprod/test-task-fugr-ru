import { useState } from "react"
import s from "./SearchForm.module.scss"
import search from "./search.svg"

export const SearchForm: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  return (
    <div className={s.searchFormContainer}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Search for books</h1>
      </div>
      <form className={s.inputWrapper}>
        <input
          type='text'
          className={s.searchBooksInput}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          placeholder='Search for books'
        />
        <img src={search} className={s.icon} />
      </form>
    </div>
  )
}
