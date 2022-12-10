const express = require('express');

// create an express app
const app = express();

// enable the app to parse json payloads
app.use(express.json());

// define the port to run the app on
const port = 3000;

// create an array to hold the items (Persist in-memory)
let items = [];

// create a route to handle requests to the /items endpoint
app.route('/items')
  // handle requests to retrieve the current items
  .get((req, res) => res.json(items))
  // handle requests to set the list of items
  .post((req, res) => {
    items = req.body;
    res.json(items);
  })
  // handle requests to delete all of the items
  .delete((req, res) => {
    items = [];
    res.send('All items have been deleted');
  });

// start the app
app.listen(port, () => console.log(`App listening on port ${port}!`));
