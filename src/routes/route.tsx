import App from "@/App";
import About from "@/pages/About/About";
import Books from "@/pages/Books/Books";
import CreateBook from "@/pages/Books/CreateBook";
import EditBook from "@/pages/Books/EditBook";
import ViewBook from "@/pages/Books/ViewBook";
import BorrowSummary from "@/pages/Borrow/BorrowSummary";
import ViewBorrow from "@/pages/Borrow/ViewBorrow";
import Home from "@/pages/Home/Home";
import {
  createBrowserRouter,
} from "react-router";


const router = createBrowserRouter([
  {
    path: "/",
//     element: <div>Hello World</div>,
    Component: App,
    children: [
      {
            path: "/",
            Component : Home
      },
      {
            path: "/books",
            Component : Books
      },
      {
            path: "/create-book",
            Component : CreateBook
      },
      {
            path: "/books/:id",
            Component : ViewBook
      },
      {
            path: "/edit-book/:id",
            Component : EditBook
      },
      {
            path: "/borrow/:bookId",
            Component : ViewBorrow
      },
      {
            path: "/borrow-summary",
            Component : BorrowSummary
      },
      {
            path: "/about",
            Component : About
      },
    ]
  },
]);

export default router;