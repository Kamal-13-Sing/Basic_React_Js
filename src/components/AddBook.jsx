
import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";

const AddBook =()=>{

// Define initial form data
const initialFormData = {
    bookId: '',         // Initialize bookId field as an empty string
    title: '',          
    author: '',         
    price: '',          
    description: '',
    quantity: ''
};

// Use React's useState hook to create state for form data
const [formData, setFormData] = useState(initialFormData);

// Handle changes in input fields
const handleChange = (e) => {
    // Destructure the name and value from the event target (the input element)
    const { name, value } = e.target;

    // Update the formData state with the new value for the corresponding input field
    setFormData((prevData) => ({
        ...prevData,            // Spread operator to maintain previous state
        [name]: value          // Dynamically set the field's value based on input name
    }));
};

// Handle form submission
const handlesubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)

    // API endpoint to send data after form submit
    const apiUrl = 'http://localhost:8080/api/book/add-book';

    // Log the form data to check its structure before sending it to the server
    console.log('Form Data to be sent:', JSON.stringify(formData));

    try {
        // Send the form data to the backend using a POST request
        const response = await axios.post(apiUrl, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
        });

        // Alert user on successful form submission
        alert('Form submitted successfully');
        console.log(response.data); // Log the response from the backend for debugging

         // Clear the form fields by resetting formData to initial values
         setFormData(initialFormData);
    } catch (error) {
        // Handle errors during the form submission
        console.error('Error submitting the form:', error); // Log error details for debugging
        alert('Error submitting the form'); // Alert user of the error
    }
};

    



    return(
        <>
    
    <Navbar/>

        <div style={{ padding: '20px' }}>
      <h2>Add New Book</h2>
      <form onSubmit={handlesubmit}>

      <div>
          <label>Book Id:</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
           onChange={handleChange}
          />
        </div>
        <br />
      
        <div>
          <label>Book Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
           onChange={handleChange}
          />
        </div>
        <br />

        <div>
          <label>Book Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
           onChange={handleChange}
          />
        </div>
        <br />

      
        <div>
          <label>Book Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <br />

         <div>
          <label>Book Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
           onChange={handleChange}
          />
        </div>
        <br />
      
        <div>
          <label>Book Quentity:</label>
          <input
            type="number"
            name="quentity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>

        </>
    );
}

export default AddBook;