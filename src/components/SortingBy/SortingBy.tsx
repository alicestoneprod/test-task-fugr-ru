import s from "./sortingBy.module.scss"
import { sortParams } from "./sortParams"

type SortingByProps = {
  sortParam: string
  onChangeSortParam: (e: string) => void
}

export const SortingBy: React.FC<SortingByProps> = ({
  sortParam,
  onChangeSortParam,
}) => {
  return (
    <div className={s.SortingByContainer}>
      <form>
        <label className={s.sortingByLabel} htmlFor='sortby'>
          Sorting by
        </label>
        <select
        className={s.selectSortBy}
          id='sortby'
          name='sortby'
          value={sortParam}
          onChange={(e) => onChangeSortParam(e.target.value)}>
          {sortParams.map((param) => (
            <option value={param} key={param}>
              {param}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
