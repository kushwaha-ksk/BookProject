import React, { useState } from "react";
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {title,authorName,imageURL,category,bookDescription,bookPdfURL} = useLoaderData();
    const bookCategories = [
      "Book Category",
      "Fiction",
      "Non-Fiction",
      "Mysteries",
      "Programming",
      "Science",
      "Fantasy",
      "Romance",
      "History",
      "Horror",
      "Biography",
      "Autobiography",
      "Self-help",
      "Memoir",
      "Business",
      "Children",
      "Travel",
      "Research",
      "Religion",
      "Arts and Design",
    ];
  
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  
    const handleChangeSelectedValue = (event) => {
      setSelectedBookCategory(event.target.value);
    };
  
    //  Handle form submission
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
  
      const title = form.title.value;
      const authorName = form.authorName.value;
      const imageURL = form.imageURL.value;
      const category = form.category.value;
      const bookDescription = form.bookDescription.value;
      const bookPdfURL = form.bookPdfURL.value;
  
      const updateBookObj = {
        title,
        authorName,
        imageURL,
        category,
        bookDescription,
        bookPdfURL,
      };
  
      // console.log(bookObj);
      // update a book
      fetch(`http://localhost:5000/book/${id}`,{
        method:"PATCH",
        headers:{
          "content-Type" : "application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data =>{
        alert("book updated sucessfully!!");
      })
    };
  return (
    <div className="px-4 my-12">
          <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>
    
          <form
            onSubmit={handleUpdate}
            className="flex lg:w-[1180px] flex-col flex-wrap gap-4 mt-4"
          >
            {/* 1st row */}
            <div className="flex gap-8">
              <div className="lg:w-1/2">
                <Label htmlFor="title" value="Book Title" />
                <TextInput
                  id="title"
                  name="title"
                  placeholder="Book name"
                  required
                  type="text"
                  defaultValue={title}
                />
              </div>
    
              <div className="lg:w-1/2">
                <Label htmlFor="authorName" value="Author Name" />
                <TextInput
                  id="authorName"
                  name="authorName"
                  placeholder="Author name"
                  required
                  type="text"
                  defaultValue={authorName}
                />
              </div>
            </div>
    
            {/* 2nd row */}
            <div className="flex gap-8">
              <div className="lg:w-1/2">
                <Label htmlFor="imageURL" value="Image URL" />
                <TextInput
                  id="imageURL"
                  name="imageURL"
                  placeholder="Image URL"
                  required
                  type="text"
                  defaultValue={imageURL}
                />
              </div>
    
              <div className="lg:w-1/2">
                <div className="mb-2 block">
                  <Label htmlFor="inputState" value="Book Category" />
                </div>
                <Select
                  id="inputState"
                  name="category"
                  className="w-full rounded"
                  value={selectedBookCategory}
                  onChange={handleChangeSelectedValue}
                >
                  {
                    bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                  }
                </Select>
              </div>
            </div>
    
            {/* Book Description */}
            <div>
              <Label htmlFor="bookDescription" value="Book Description" />
              <Textarea
                id="bookDescription"
                name="bookDescription"
                placeholder="Write your book description"
                required
                className="w-full"
                rows={6}
                defaultValue={bookDescription}
              />
            </div>
    
            {/* Book PDF Link */}
            <div>
              <Label htmlFor="bookPdfURL" value="Book PDF URL" />
              <TextInput
                id="bookPdfURL"
                name="bookPdfURL"
                type="text"
                placeholder="Book PDF URL"
                required
                defaultValue={bookPdfURL}
              />
            </div>
    
            <Button type="submit" className="mt-5">
              Update Book
            </Button>
          </form>
        </div>
  )
}

export default EditBooks