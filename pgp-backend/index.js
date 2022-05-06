const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

// Import any middleware here
const middleware = require("./middleware/model-middleware");

// Import any route handlers here.
const artistRoutes = require('./routes/artists');
const merchRoutes = require('./routes/merch');

// Add a health route. Note the new argument: next
app.get('/health', (request, response, next) => {
  const responseBody = { status: 'up', port };
  response.json(responseBody);
  // next() is how we tell express to continue through the middleware chain
  next();
});

app.use(middleware.createModelsMiddleware);
app.use('/artists', artistRoutes);
app.use('/merch', merchRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

