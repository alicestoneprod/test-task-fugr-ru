import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Index } from "./pages"
import { Book } from "./pages/book/Book"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Index />}></Route>
        <Route path={"/book/:id"} element={<Book />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
