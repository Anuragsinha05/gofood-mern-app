const mongoose = require('mongoose');
const mongoURI = 'mongodb://gofood:anurag@ac-fbvwnxh-shard-00-00.0sax7bq.mongodb.net:27017,ac-fbvwnxh-shard-00-01.0sax7bq.mongodb.net:27017,ac-fbvwnxh-shard-00-02.0sax7bq.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-10vm5e-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        const foodCollection = mongoose.connection.db.collection("food_items");
        const categoryCollection = mongoose.connection.db.collection("Categories");

        const foodData = await foodCollection.find({}).toArray();
        const foodCategory = await categoryCollection.find({}).toArray();

        global.foodData = foodData;
        global.foodCategory = foodCategory;

    } catch (err) {
        console.error("---" + err);
        throw err;
    }
};

module.exports = connectToMongo;
