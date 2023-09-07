import { useState } from "react"
import s from "./SortingBy.module.scss"
import { sortParams } from "./sortParams"
export const SortingBy: React.FC = () => {
  const [sortParam, setSortParam] = useState("relevance")

  return (
    <div className={s.SortingByContainer}>
      <form>
        <label htmlFor='category'>Categoryes:</label>
        <select
          id='category'
          name='category'
          value={sortParam}
          onChange={(e) => setSortParam(e.target.value)}>
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
