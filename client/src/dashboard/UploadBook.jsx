import React, { useState } from "react";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
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
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const bookObj = {
      title,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPdfURL,
    };

    console.log(bookObj);

    //  Send data to backend
    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Book uploaded successfully!!!");
        form.reset(); // optional: clears the form
        setSelectedBookCategory(bookCategories[0]);
      })
      .catch((err) => {
        console.error("Error uploading book:", err);
        alert("Failed to upload book.");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      <form
        onSubmit={handleBookSubmit}
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
            />
          </div>

          <div className="lg:w-1/2">
            <Label htmlFor="inputState" value="Book Category" />
            <Select
              id="inputState"
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
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
          />
        </div>

        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default UploadBook;
