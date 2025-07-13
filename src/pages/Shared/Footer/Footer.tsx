
const Footer = () => {
  return (
   <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Library Management System. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer