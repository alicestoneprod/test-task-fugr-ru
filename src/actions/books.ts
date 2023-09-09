import { Dispatch } from "redux"
import {
  addFetchedBooksSuccessAction,
  addFetchedBooksStartedAction,
  addFetchedBooksFailAction,
  appendFetchedBooksStartedAction,
  appendFetchedBooksFailAction,
  appendFetchedBooksSuccessAction,
  fetchCurrentBookStartedAction,
  fetchCurrentBookSuccessAction,
  fetchCurrentBookFailAction,
} from "../store/booksReducer"
import axios from "axios"

export const fetchBooks = (
  searchText: string,
  selectedCategory: string,
  sortParams: string
) => {
  const queryForFetchBooks = `https://www.googleapis.com/books/v1/volumes?q=${searchText.replace(
    " ",
    "+"
  )}${
    selectedCategory !== "all" ? `+subject:${selectedCategory}` : ""
  }&orderBy=${sortParams}&maxResults=30&key=${import.meta.env.VITE_key}`
  return (dispatch: Dispatch) => {
    dispatch(addFetchedBooksStartedAction(queryForFetchBooks))
    try {
      axios
        .get(queryForFetchBooks)
        .then((response) =>
          dispatch(addFetchedBooksSuccessAction(response.data))
        )
    } catch (error) {
      const err = new Error("Произошла ошибка!")
      dispatch(addFetchedBooksFailAction(err))
      console.error("Error:", error)
    }
  }
}

export const fetchAppendBooks = (fetchQuery: string, startIndex: number) => {
  return (dispatch: Dispatch) => {
    const queryForAppendBooks = fetchQuery + `&startIndex=${startIndex}`
    dispatch(appendFetchedBooksStartedAction())
    try {
      axios.get(queryForAppendBooks).then((response) => {
        if (response?.data?.items?.length) {
          dispatch(appendFetchedBooksSuccessAction(response.data.items))
        } else {
          dispatch(appendFetchedBooksSuccessAction([].toString()))
        }
      })
    } catch (error) {
      const err = new Error("Произошла ошибка!")
      dispatch(appendFetchedBooksFailAction(err))
      console.error("Error:", error)
    }
  }
}

export const fetchBookById = (bookId: string) => {
  return (dispatch: Dispatch) => {
    const queryForFetchBookById = `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${
      import.meta.env.VITE_key
    }`
    dispatch(fetchCurrentBookStartedAction())
    try {
      axios.get(queryForFetchBookById).then((response) => {
        if (response?.data) {
          dispatch(fetchCurrentBookSuccessAction(response.data))
        }
      })
    } catch (error) {
      const err = new Error("Произошла ошибка!")
      dispatch(fetchCurrentBookFailAction(err))
      console.error("Error:", error)
    }
  }
}
