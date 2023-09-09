import s from "./searchForm.module.scss"
import search from "./research.png"
type SearchFormProps = {
  searchText: string
  onSetSearchText: (e: string) => void
  onSearchHandler: () => void
}
export const SearchForm: React.FC<SearchFormProps> = ({
  searchText,
  onSetSearchText,
  onSearchHandler,
}) => {
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
          onKeyDownCapture={(e) => {
            if (e.keyCode === 13) {
              e.preventDefault()
              onSearchHandler()
            }
            return
          }}
          onChange={(e) => {
            onSetSearchText(e.target.value)
          }}
          placeholder='Search for books'
        />
        <img
          src={search}
          onClick={() => onSearchHandler()}
          className={s.icon}
        />
      </form>
    </div>
  )
}
