export interface BooksStateI {
  loading: boolean
  books: {
    totalItems: number
    items: object[]
  }
  error: string
  query: string
  currentBook: {
    id: string
    volumeInfo: {
      title: string
      authors: string[]
      categories: string[]
      imageLinks: {
        smallThumbnail: string
        thumbnail: string
      }
      description: string
    }
  }
}

export interface VolumeInfoI {
  title: string
  authors: string[]
  categories: string[]
  imageLinks: {
    smallThumbnail: string
    thumbnail: string
  }
  description: string
}

export interface BookI {
  id: string
  volumeInfo: VolumeInfoI
}

export interface AddBooksActionI {
  type: string
  payload: object[]
}

type BooksActionTypes = AddBooksActionI

const defaultState: BooksStateI = {
  loading: false,
  books: {
    items: [],
    totalItems: 0,
  },
  error: "",
  query: "",
  currentBook: {
    id: "",
    volumeInfo: {
      title: "",
      authors: [],
      categories: [],
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
      },
      description: "",
    },
  },
}
const ADD_BOOKS_STARTED = "ADD_BOOKS_STARTED"
const ADD_BOOKS_SUCCESS = "ADD_BOOKS_SUCCESS"
const ADD_BOOKS_FAIL = "ADD_BOOKS_FAIL"

const APPEND_BOOKS_STARTED = "APPEND_BOOKS_STARTED"
const APPEND_BOOKS_SUCCESS = "APPEND_BOOKS_SUCCESS"
const APPEND_BOOKS_FAIL = "APPEND_BOOKS_FAIL"

const FETCH_BOOKS_STARTED = "FETCH_BOOKS_STARTED"
const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS"
const FETCH_BOOKS_FAIL = "FETCH_BOOKS_FAIL"

export const booksReducer = (
  state = defaultState,
  action: BooksActionTypes
) => {
  switch (action.type) {
    case ADD_BOOKS_STARTED:
      return { ...state, loading: true, query: action.payload }
    case ADD_BOOKS_SUCCESS:
      return {
        ...state,
        books: { ...state.books, ...action.payload },
        loading: false,
      }
    case ADD_BOOKS_FAIL: {
      return { ...state, loading: false, error: action.payload }
    }

    case APPEND_BOOKS_STARTED:
      return { ...state, loading: true }

    case APPEND_BOOKS_SUCCESS: {
      return {
        ...state,
        books: {
          ...state.books,
          items: [...state.books.items, ...action.payload],
        },
        loading: false,
      }
    }
    case APPEND_BOOKS_FAIL: {
      return { ...state, loading: false, error: action.payload }
    }
    case FETCH_BOOKS_STARTED: {
      return { ...state, loading: true }
    }
    case FETCH_BOOKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentBook: { ...action.payload },
      }
    }
    case FETCH_BOOKS_FAIL: {
      return { ...state, loading: false, error: action.payload }
    }
    default:
      return state
  }
}
///get more books (30)
export const addFetchedBooksStartedAction = (payload: string) => ({
  type: "ADD_BOOKS_STARTED",
  payload,
})

export const addFetchedBooksSuccessAction = (payload: object) => ({
  type: "ADD_BOOKS_SUCCESS",
  payload,
})

export const addFetchedBooksFailAction = (payload: object) => ({
  type: "ADD_BOOKS_FAIL",
  payload,
})
///append 30 books to book.state
export const appendFetchedBooksStartedAction = () => ({
  type: "APPEND_BOOKS_STARTED",
})
export const appendFetchedBooksSuccessAction = (payload: string) => ({
  type: "APPEND_BOOKS_SUCCESS",
  payload,
})
export const appendFetchedBooksFailAction = (payload: object) => ({
  type: "APPEND_BOOKS_FAIL",
  payload,
})
///Fetch 1 book
export const fetchCurrentBookStartedAction = () => ({
  type: "FETCH_BOOKS_STARTED",
})
export const fetchCurrentBookSuccessAction = (payload: object) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload,
})
export const fetchCurrentBookFailAction = (payload: object) => ({
  type: "FETCH_BOOKS_FAIL",
  payload,
})
