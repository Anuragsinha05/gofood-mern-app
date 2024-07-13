const express = require('express');
const connectToMongo = require('./db');
const app = express();
const port = 5000;

app.use(express.json()); // Middleware to parse JSON bodies

// Enable CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

connectToMongo().then(() => {
  console.log('MongoDB data loaded');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
