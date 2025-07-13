import BooksTable from "./BooksTable"

const Books = () => {
  return (
    <div className="main_container">
      <h3 className="py-3 text-xl md:text-3xl font-semibold capitalize">View all books</h3>
      <BooksTable />

    </div>
  )
}

export default Books