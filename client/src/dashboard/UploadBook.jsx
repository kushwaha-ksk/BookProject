import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Book Category",
    "Fiction",
    "Non-Fiction",
    "Mistries",
    "Programming",
    "Science",
    "Fantasy",
    "Romance",
    "History",
    "Horror",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children",
    "Traval",
    "Research",
    "Religion",
    "Arts and Design"
  ]
  const [selectedBookCategory,setSelectedBookCategory] = useState(bookCategories[0]);
  const handleChangeSelectedValue = (event) =>{
      console.log(event.target.value)
  }

  // Handle submission
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const bookObj ={
      title,authorName,imageURL,category,bookDescription,bookPdfURL
    }
    console.log(bookObj)
  }

  // send data to db

  fetch("http://localhost:5000/upload-book",{
    method:'POST',
    headers:{
      "Content-type":"application/json",
    },
    body:JSON.stringify()
  }).then(res =>res.json()).then(data =>{
    // console.log(data)
    // alert("Book uploaded sucessfully!!!")
  })
  return (
    <div className='px-4 my-12'>
        <h2 className='mb=8 text-3xl font-bold'>Upload a book</h2>
    <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 mt-4">
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
             <Label
              htmlFor='title'
              value="Book Title"
             />
          </div>
          <TextInput
            id="title"
            name='title'
            placeholder='Book name'
            required
            type='text'
          />
        </div>
        {/* author name */}
       <div className='lg:w-1/2'>
          <div className='mb-2 block'>
             <Label
              htmlFor='authorName'
              value="Author name"
             />
          </div>
          <TextInput
            id="authorName"
            name='authorName'
            placeholder='Author name'
            required
            type='text'
          />
        </div>
      </div>
      {/* 2nd row */}
      <div className='flex gap-8'>
          <div className='lg:w-1/2'>
             <div className='mb-2 block'>
               <Label
                htmlFor='imageURL'
                value='Image Url'
               />
             </div>
             <TextInput
              id='imageURL'
              name='imageURL'
              placeholder='image url'
              required
              type='text'
             />
          </div>
          {/* category */}
          <div className='lg:w-1/2'>
             <div className='mb-2 block'>
               <Label
                htmlFor='inputState'
                value='Book Category'
               />
             </div>
             <Select id='inputState' name='category' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
                 {
                  bookCategories.map((option)=> <option key={option} value={option}>{option}</option>)
                 }
             </Select>
          </div>
      </div>
      {/* book Description */}
          <div>
             <div className='mb-2 block'>
               <Label
                htmlFor='bookDescription'
                value='Book Description'
               />
             </div>
             <Textarea
              id='bookDescription'
              name='bookDescription'
              placeholder='Write your book description'
              required
              className='w-full'
              rows={6}
             />
          </div>
          {/* book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfURL">Book Pdf URL</Label>
        </div>
        <TextInput id="bookPdfURL" name="bookPdfURL" type="text"  placeholder="Book Pdf URL" required />
      </div>
      <Button type="submit" className='mt-5'>
        Upload Book
      </Button>
    </form>
    </div>
  )
}

export default UploadBook