// src/components/Navbar.tsx
import React, { useState } from 'react';

// Shadcn UI Components
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Icons (Shadcn UI often uses Lucide React)
import { Menu } from 'lucide-react';
import { Link } from 'react-router';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Helper function to close the sheet when a navigation link is clicked
  const closeSheet = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-2xl font-bold tracking-wider hover:text-gray-200 transition-colors duration-200">
          LibrarySphere
        </Link>

        {/* Desktop Navigation Links - Hidden on small screens, visible on medium and up */}
        <div className="hidden md:flex space-x-4">
          <Button
            asChild // Renders the Link component as the child of Button, inheriting its styles
            variant="ghost"
            className="text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <Link to="/">Home</Link>
          </Button>
          <Button
            asChild // Renders the Link component as the child of Button, inheriting its styles
            variant="ghost"
            className="text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <Link to="/books">All Books</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <Link to="/create-book">Add Book</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
          >
            <Link to="/borrow-summary">Borrow Summary</Link>
          </Button>
        </div>

        {/* Mobile Menu (Hamburger Icon & Sheet) - Visible on small screens, hidden on medium and up */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" /> {/* Hamburger menu icon */}
                <span className="sr-only">Toggle navigation menu</span> {/* For accessibility */}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[250px] sm:w-[300px]">
              {/* Mobile navigation links inside the sheet */}
              <nav className="flex flex-col gap-4 pt-8">
                <Link
                  to="/books"
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeSheet}
                >
                  All Books
                </Link>
                <Link
                  to="/create-book"
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeSheet}
                >
                  Add Book
                </Link>
                <Link
                  to="/borrow-summary"
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
                  onClick={closeSheet}
                >
                  Borrow Summary
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;