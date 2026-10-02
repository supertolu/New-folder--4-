const { MongoClient } = require("mongodb")

const client = new MongoClient("mongodb+srv://supertoluib_db_user:f538QSjsGIeCBuqv@cluster0.5wteoyw.mongodb.net/?appName=Cluster0");

async function connectToDatabase() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("profile");
}
//** export the function to get the database connection */
module.exports = { connectToDatabase };