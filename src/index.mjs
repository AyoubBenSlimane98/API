import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/indexRoutes.mjs';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routers
app.use(routes);

// Main page
app.get('/', (req, res) => {
  res.status(201).send('Successful Server is Working With Node.js ...');
});

// Connect to the database
const main = async () => {
  await mongoose.connect(process.env.MONGOODB_URI);
};
main()
  .then(() => {
    console.log('Connected to the database successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Failed to connect to the database: ${error.message}`);
  });
