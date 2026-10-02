//** importing express */
const express = require('express');
//** importing database connection */
const { connectToDatabase } = require('./db');

//** create express app */
const app = express();



//** middleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//** routes */


//**user routes */
app.get("/api/users", async (req, res) => {
  const db = await connectToDatabase();
  const users = db.collection("users");
   const result = users.find({}).toArray();

   res.json(await result);
});

app.post("/api/users", async (req, res) => {
   const db = await connectToDatabase();
  const users = db.collection("users");
  const user = {
    fullName: "John Doe",
    age: 45,
    hourlyRate: 100,
    isActive: true,
    joinDate: new Date(),
    skills: ["JavaScript", "Node.js", "MongoDB"],
    address:"123 Main St, Anytown, USA",
    sex: "Male",
    hobbies: ["Coding", "Traveling", "Cooking"]
    
    };
    const result = await users.insertOne(user);
    res.send(`User created with ID: ${result.insertedId}`);
});
//** pet routes */
app.get("/api/pets", async (req, res) => {
   const db = await connectToDatabase();
  const pets = db.collection("pets");
   const result = pets.find({}).toArray();
   
   res.json(await result);
});

app.post("/api/pets", (req, res) => {
  const db = await connectToDatabase();
  const pets = db.collection("pets");
  const pet = {
    name: "Roxie",
    Breed: "Golden Retriever",
    colour: "Golden",
    isVaccinated: true,
    weight: 30,
    height: 25,
    owner: "John Doe",
    sex: "Male",
    hasTag: true
    };
    const result = await pets.insertOne(pet);
    res.send(`Pet created with ID: ${result.insertedId}`);
});
//** 404 route */
app.use((req, res) => {
    res.status(404).send("Route not found");
});
//** start server */
async function startServer() {
    await connectToDatabase();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:3000`);
        
    });
}
startServer();