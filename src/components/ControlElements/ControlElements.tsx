import { useState } from "react"
import { CategoryFilter } from "../CategoryFilter/CategoryFilter"
import { SearchForm } from "../SearchForm/SearchForm"
import { SortingBy } from "../SortingBy/SortingBy"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../Spinner/Spinner"
import s from "./controlElements.module.scss"
import { fetchBooks } from "../../actions/books"
import { RootState } from "../../store"

export const ControlElements: React.FC = () => {
  const [searchText, setSearchText] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortParam, setSortParam] = useState("relevance")
  const fetching = useSelector((state: RootState) => state.loading)
  const dispatch = useDispatch()

  const onSearchHandler = async () => {
    if (searchText.length && !fetching) {
      dispatch(fetchBooks(searchText, selectedCategory, sortParam))
    }
  }

  return (
    <div className={s.controlElementsContainer}>
      <SearchForm
        searchText={searchText}
        onSetSearchText={setSearchText}
        onSearchHandler={onSearchHandler}
      />
      <div className={s.searchControlsContainer}>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onChangeCategory={setSelectedCategory}
        />
        <SortingBy sortParam={sortParam} onChangeSortParam={setSortParam} />
      </div>
      <div className={s.spinContainer}>{fetching && <Spinner />}</div>
    </div>
  )
}
