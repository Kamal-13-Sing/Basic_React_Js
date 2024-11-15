
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ViewBook = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchBooks = async () => {

            try {

                const apiUrl = 'http://localhost:8080/api/book/get-all-book';
                const response = await axios.get(apiUrl);
                setBooks(response.data.object);

            } catch (error) {

                setError(error.message);

            } finally {

                setLoading(false);

            }
        };

        fetchBooks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <>
        <Navbar/>
        <div>
            <h1>Books</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Book ID</th>
                        <th>BookTitle</th>
                        <th>BookAuthor</th>
                        <th>Price in (Rs.)</th>
                        <th>Description</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.bookId}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.description}</td>
                            <td>{book.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </>
    );
};

export default ViewBook;