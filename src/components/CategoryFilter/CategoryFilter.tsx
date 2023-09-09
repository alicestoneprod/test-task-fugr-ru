import s from "./categoryFilter.module.scss"
import { categories } from "./categories"
import React from "react"
type CategoryFilterProps = {
  selectedCategory: string
  onChangeCategory: (e: string) => void
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onChangeCategory,
}: CategoryFilterProps) => {
  return (
    <div className={s.categoryFilterContainer}>
      <form>
        <label className={s.categoriesLabel} htmlFor='category'>
          Categories
        </label>
        <select
          className={s.selectByCategory}
          id='category'
          name='category'
          value={selectedCategory}
          onChange={(e) => onChangeCategory(e.target.value)}>
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
