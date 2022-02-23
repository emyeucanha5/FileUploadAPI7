require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const route = require("./routes/productRoutes");
const fileUpload = require('express-fileupload');
// database
const connectDB = require('./db/connect');

// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const cloudinary = require('cloudinary').v2



// middleware
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret
});
app.use(express.json());
app.use(express.static('public'));
app.use(fileUpload({
  useTempFiles: true,
}));
app.use('/api/v1/products', route);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
