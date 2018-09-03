import express from 'express';
import db from './db/db';
// Set up the express app
const app = express();
// get all meals
app.get('/api/v1/meals', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'meals retrieved successfully',
    meals: db
  })
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

