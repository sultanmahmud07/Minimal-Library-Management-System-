import { Link } from 'react-router'
import './button.css'
import { FaArrowRightLong } from 'react-icons/fa6'

const AddBook = () => {

  return (
    <Link to={"/create-book"}>
      <button
        className={`transition-transform duration-500 hover:scale-105 flex items-center gap-2 p-2 text-sm md:p-3 px-5 md:px-8 rounded-full font-bold shadow bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white`}
      >
        Add Book <FaArrowRightLong />
      </button>

    </Link>
  )
}

export default AddBook
