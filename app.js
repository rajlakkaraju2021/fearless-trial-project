const express = require('express');
const fs = require('fs');

// create an express app
const app = express();

// enable the app to parse json payloads
app.use(express.json());

// define the port to run the app on
const port = 3000;

// create an array to hold the items
let items = [];

// create a route to handle requests to the /items endpoint
app.route('/items')
  // handle requests to retrieve the current items
  .get((req, res) => 
    {
      // load the items from the database
      fs.readFile('database/items.json', (err, data) => {
        if (err) {
          res.json([])
        } else {
          items = JSON.parse(data);
          res.json(items)
        }
      });
    }
  )
  // handle requests to set the list of items
  .post((req, res) => {
    fs.readFile('database/items.json', (err, data) => {
        if(err){
          items = []
        }
        else{
          items = JSON.parse(data)
        }
        items.push(req.body)
        fs.writeFile('database/items.json', JSON.stringify(items), (err) => {
          if (err) {
            console.log('Error saving items to database');
          }
        });
        res.json(items)
      })
  })
  // handle requests to delete all of the items
  .delete((req, res) => {
    items = [];
    fs.writeFile('database/items.json', JSON.stringify(items), (err) => {
      if (err) {
        console.log('Error saving items to database');
      }
    });
    res.send('All items have been deleted');
  });

// start the app
app.listen(port, () => console.log(`App listening on port ${port}!`));
