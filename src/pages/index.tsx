import { SearchForm } from "../components/SearchForm/SearchForm"
import { CategoryFilter } from "../components/CategoryFilter/CategoryFilter"
import { SortingBy } from "../components/SortingBy/SortingBy"
export const Index: React.FC = () => {
  return (
    <div>
      <SearchForm />
      <div className={"filters"}>
        <CategoryFilter />
        <SortingBy /> 
      </div>
    </div>
  )
}
