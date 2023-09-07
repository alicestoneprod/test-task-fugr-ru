import { useState } from "react"
import s from "./CategoryFilter.module.scss"
import { categories } from "./categories"

export const CategoryFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className={s.categoryFilterContainer}>
      <form>
        <label htmlFor='category'>Categories:</label>
        <select
          id='category'
          name='category'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
