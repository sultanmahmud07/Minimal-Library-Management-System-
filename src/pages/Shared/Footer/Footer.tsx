
import logo from "../../../assets/logo.png";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router";
import { useGetBooksQuery } from "@/redux/api/booksApi";

const Footer = () => {
  const { data: books } = useGetBooksQuery();

// console.log(books.data)
  return (
    <section className="bg-white border-t mt-10 text-sm pt-10">
      <div className="main_container flex flex-col md:flex-row py-10 gap-5 md:gap-14">
        <div className="w-full md:w-1/3">
          <img
            src={logo}
            alt="logo"
            className="w-28"
          />
          <p className="pt-2">Empowering Readers, One Book at a Time.</p>
           <p className="py-2">Discover, borrow, and manage books with ease through our simple and intuitive library system.</p>
          <div className="flex items-center gap-3 py-5">
            <a href="https://www.facebook.com/joltorongo.awt" className="flex items-center justify-center transition text-primary text-xl">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/jol.torongo.coxbazar" className="flex items-center justify-center transition text-primary text-xl">
              <IoLogoInstagram />
            </a>
            <a href="https://www.linkedin.com/company/joltorongo" className="flex items-center justify-center transition text-primary text-xl">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@JoltorongoAWT"
              className="flex items-center justify-center transition text-primary text-xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-xs py-1 uppercase">Menu</h6>
            <ul className="flex flex-col gap-3 text-[#6F7775] text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/boos">Books</Link></li>
              <li><Link to="/create-book">New Book</Link></li>
              <li><Link to="/borrow-summary">Borrow Summary</Link></li>
              <li><Link to="/about">About us</Link></li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-xs py-1 uppercase">Recent Books</h6>
            <ul className="flex flex-col gap-3 text-[#6F7775] text-sm">
              {
                books?.data?.slice(0, 5)?.map((item, i) => {
                  return(
                      <li key={i}><Link to="/">{item?.title}</Link></li>
                  )
                })
              }
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h6 className="font-semibold text-xs py-1 uppercase">Contacts Info</h6>
            <div className="flex gap-3">
              <div className="icon w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="text-lg">
                  <FaPhoneAlt />
                </span>
              </div>
              <div className="info">
                <p className="text-[#1D1D1D] font-semibold">Call us</p>
                <span className="text-[#6F7775]">+8801327357894</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="icon w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                <span className="text-lg">
                  <MdEmail />
                </span>
              </div>
              <div className="info">
                <p className="text-[#1D1D1D] font-semibold">Mail Us</p>
                <span className="text-[#6F7775]">hello@library.com</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="icon w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shrink-0">
                <span className="text-lg">
                  <IoLocationSharp />
                </span>
              </div>
              <div className="info flex-1">
                <p className="text-[#1D1D1D] font-semibold">Visit Us</p>
                <span className="text-[#6F7775] text-sm">
                  Banani, Dhaka Bangladesh.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="bg-primary text-sm py-3 md:py-4 text-center text-white">
        © {new Date().getFullYear()} Library Management System. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
