
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  //  Fetch all books
  const fetchBooks = () => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //  Delete a book
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0 || data.success) {
          alert("Book deleted successfully!");
          //  Remove the deleted book from state without reloading
          setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
        } else {
          alert("Failed to delete the book. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error deleting book:", err);
        alert("An error occurred while deleting the book.");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      {/* Book Data Table */}
      <Table className="lg:w-[1180px]">
        <TableHead>
          <TableRow>
            <TableHeadCell>No</TableHeadCell>
            <TableHeadCell>Book Name</TableHeadCell>
            <TableHeadCell>Author Name</TableHeadCell>
            <TableHeadCell>Category</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>Edit / Manage</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody className="divide-y">
          {allBooks.length > 0 ? (
            allBooks.map((book, index) => (
              <TableRow
                key={book._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">
                  {book.title}
                </TableCell>
                <TableCell>{book.authorName}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell>${book.price || 15}</TableCell>
                <TableCell>
                  <Link
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                    to={`/admin/dashboard/edit-books/${book._id}`}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(book._id)}
                    className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-700 transition-all"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                No books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageBooks;


