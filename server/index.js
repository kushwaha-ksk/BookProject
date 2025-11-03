const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require ('cors')
   
 
 app.use(cors())
 app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mogodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://used-book-mart:XV57BEqAotkbo3xP@cluster0.cnygavf.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of documents
    const booksCollectiion = client.db("BookInventory").collection("books");

    // insert a abook to the database:post method 
    app.post("/upload-book",async(req,res)=>{
        const data = req.body;
        const result = await booksCollectiion.insertOne(data)
        res.send(result);
    })

    // get all books from the database

    app.get("/all-books",async(req,res)=>{
       const books = await booksCollectiion.find();
       const result = await books.toArray();
       res.send(result);
    })

    // update a book data : patch or update method

    app.patch ("/book/:id",async(req, res)=>{
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = {_id: new ObjectId}
      const updateDoc = {
        $set:{
          ...updateBookData
        },
      }
      const options = {upsert : true};
      // update
      const result = await booksCollectiion.updateOne(filter,updateDoc,options);
      res.send(result);
    })

    // Delete a book data

     app.delete ("/book/:id",async(req,res)=>{
      const id =req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await booksCollectiion.deleteOne(filter);
     })

    // find by categories 

     app.get("/all-books",async (req, res)=>{
        let query = {};
        if(req.query?.category){
            query={category: req.query.category}
        }
        const result = await booksCollectiion.find(query).toArray();
        res.send(result)
     })

    //  to get singel book data

    app.get("/book/:id",async (req, res)=>{
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)}
      const result = await booksCollectiion.findOne(filter);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})