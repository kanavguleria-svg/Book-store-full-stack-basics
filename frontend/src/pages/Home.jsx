import React, { useEffect, useState } from "react";
import axios from "axios";
import SpinnerComp from "../components/SpinnerComp";
import { Link } from "react-router-dom";
// import { AiOutLineEdit } from "react-icons/ai";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/book/allBooks")
      .then((response) => {
        // console.log(response.data.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    
    <div className="p-4">
      <div id="flex justify-between item-center">
        <h1 id="text-3xl my-8">Books-list</h1>
        <Link to="/books/create">
          {/* <MdOutlineAddBox className="text-sky-800 text-4xl" /> */}
          Create
        </Link>
      </div>
      {loading ? (
        <SpinnerComp />
      ) : (
        <table className="w-full border-seperate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No.</th>
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md   max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md   max-md:hidden">
                PublishYear
              </th>
              <th className="border border-slate-600 rounded-md   max-md:hidden">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`}>
                        {/* <BsInfoCircle className = "text-2xl text-green-800"/> */}
                        Details
                    </Link>
                    <Link to={`/books/editBook/${book._id}`}>
                        {/* <AiOutLineEdit className = "text-2xl text-yellow-600"/> */}
                        Edit
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                        {/* <MdOutLineDelete className = "text-2xl text-red-600"/> */}
                        Delete
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
};

export default Home;
