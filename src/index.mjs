import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/indexRoutes.mjs';
import 'dotenv/config';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//for localhost 
app.use(
  cors({
    origin: [
      'http://localhost:3001',
      'http://localhost:3000',
      `http://localhost:${PORT}`,
    ],
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
  })
);

//Routers
app.use(routes);

// Main page
app.get('/', (req, res) => {
  res.status(201).send('Successful Server is Working With Node.js ...');
});


// Connect to the database
const main = async () => {
  try {
    await mongoose.connect(process.env.MONGOODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); 
  }
};


mongoose.connection.on('error', (err) => {
  console.error(`Mongoose connection error: ${err.message}`);
});

main();